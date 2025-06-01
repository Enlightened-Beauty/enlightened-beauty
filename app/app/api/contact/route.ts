
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Save contact submission
    const contactSubmission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject: subject || 'General Inquiry',
        message
      }
    });

    // Also add to email subscribers if not already exists (for follow-up)
    try {
      await prisma.emailSubscriber.upsert({
        where: { email },
        update: {
          name: name,
          isActive: true,
          updatedAt: new Date()
        },
        create: {
          email,
          name,
          source: 'contact_form',
          tags: ['contact_form'],
          isActive: true
        }
      });
    } catch (error) {
      console.error('Error updating email subscriber:', error);
    }

    return NextResponse.json({
      message: 'Contact form submitted successfully',
      submission: contactSubmission
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
