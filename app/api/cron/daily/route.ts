import { NextResponse } from 'next/server';
import { generateDailyMessages } from '@/lib/generator';

export const runtime = 'nodejs';

export async function GET() {
  const messages = generateDailyMessages(3);

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    for (const m of messages) {
      try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: `${m.text}` })
        });
      } catch (e) {
        // swallow to continue other messages
      }
    }
  }

  return NextResponse.json({ ok: true, messages, postedToTelegram: Boolean(token && chatId) });
}
