
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source, tags } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await prisma.emailSubscriber.findUnique({
      where: { email }
    });

    if (existingSubscriber) {
      // Update existing subscriber with new tags if provided
      const updatedSubscriber = await prisma.emailSubscriber.update({
        where: { email },
        data: {
          name: name || existingSubscriber.name,
          source: source || existingSubscriber.source,
          tags: tags ? Array.from(new Set([...existingSubscriber.tags, ...tags])) : existingSubscriber.tags,
          isActive: true,
          updatedAt: new Date()
        }
      });

      return NextResponse.json({
        message: 'Subscription updated successfully',
        subscriber: updatedSubscriber
      });
    }

    // Create new subscriber
    const newSubscriber = await prisma.emailSubscriber.create({
      data: {
        email,
        name: name || null,
        source: source || 'website',
        tags: tags || [],
        isActive: true
      }
    });

    return NextResponse.json({
      message: 'Subscription successful',
      subscriber: newSubscriber
    });

  } catch (error) {
    console.error('Email signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
