import { NextRequest, NextResponse } from 'next/server';
import { generateDailyMessages } from '@/lib/generator';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const countParam = searchParams.get('count');
  const count = countParam ? Number(countParam) : 3;
  const messages = generateDailyMessages(isNaN(count) ? 3 : count);
  return NextResponse.json({ messages });
}
