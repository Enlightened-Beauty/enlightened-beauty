
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, archetype, answers, scores } = body;

    if (!email || !archetype) {
      return NextResponse.json(
        { error: 'Email and archetype are required' },
        { status: 400 }
      );
    }

    // Save quiz result
    const quizResult = await prisma.quizResult.create({
      data: {
        email,
        name: name || null,
        archetype,
        answers: answers || {}
      }
    });

    // Also add to email subscribers if not already exists
    try {
      await prisma.emailSubscriber.upsert({
        where: { email },
        update: {
          name: name || undefined,
          tags: {
            push: ['quiz_taker', `archetype_${archetype}`]
          },
          isActive: true,
          updatedAt: new Date()
        },
        create: {
          email,
          name: name || null,
          source: 'soul_archetype_quiz',
          tags: ['quiz_taker', `archetype_${archetype}`],
          isActive: true
        }
      });
    } catch (error) {
      console.error('Error updating email subscriber:', error);
    }

    return NextResponse.json({
      message: 'Quiz results saved successfully',
      result: quizResult
    });

  } catch (error) {
    console.error('Quiz results error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
