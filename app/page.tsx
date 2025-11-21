"use client";

import { useEffect, useState } from 'react';
import MessageCard, { type Message } from "@/components/MessageCard";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async (count = 3) => {
    setLoading(true);
    const res = await fetch(`/api/messages?count=${count}`, { cache: 'no-store' });
    const data = await res.json();
    setMessages(data.messages);
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages(3);
  }, []);

  return (
    <main>
      <div className="mb-4 flex gap-3">
        <button
          className="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50"
          onClick={() => fetchMessages(3)}
          disabled={loading}
        >
          {loading ? 'Generating?' : "Generate Today's Messages"}
        </button>
        <button
          className="px-4 py-2 rounded-md border hover:bg-slate-50 disabled:opacity-50"
          onClick={() => fetchMessages(1)}
          disabled={loading}
        >
          Single Message
        </button>
      </div>

      <div className="grid gap-4">
        {messages.map((m, idx) => (
          <MessageCard key={idx} message={{ category: m.category, text: m.text }} />
        ))}
      </div>
    </main>
  );
}
