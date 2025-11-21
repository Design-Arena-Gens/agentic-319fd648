"use client";

import { useState } from 'react';
import { buildShareLinks } from "@/lib/share";

export type Message = {
  category: string;
  text: string;
};

export default function MessageCard({ message }: { message: Message }) {
  const [copied, setCopied] = useState(false);
  const share = buildShareLinks(message.text);

  const copy = async () => {
    await navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl border p-4 bg-white shadow-sm">
      <div className="text-xs uppercase tracking-wide text-primary-700 font-semibold mb-2">{message.category}</div>
      <p className="text-lg leading-snug mb-4">{message.text}</p>
      <div className="flex gap-2">
        <button onClick={copy} className="text-sm px-3 py-1.5 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition">
          {copied ? 'Copied' : 'Copy'}
        </button>
        <a href={share.whatsapp} target="_blank" className="text-sm px-3 py-1.5 rounded-md border hover:bg-slate-50">WhatsApp</a>
        <a href={share.telegram} target="_blank" className="text-sm px-3 py-1.5 rounded-md border hover:bg-slate-50">Telegram</a>
        <a href={share.twitter} target="_blank" className="text-sm px-3 py-1.5 rounded-md border hover:bg-slate-50">Twitter</a>
      </div>
    </div>
  );
}
