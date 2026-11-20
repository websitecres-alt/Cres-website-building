import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  ArrowUpRight,
  AlertCircle,
} from 'lucide-react';
import { PageId } from '../types';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface CresAssistantProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const QUICK_PROMPTS = [
  'How does CRES differ from street brokers?',
  'Walk me through the 8-step lifecycle',
  'Explain the 8% owner & 3% renter fees',
  'How does Abay Insurance theft protection work?',
];

const QUICK_NAV_LINKS: { label: string; page: PageId; keywords: string[] }[] = [
  { label: 'How It Works', page: 'how-it-works', keywords: ['step', 'lifecycle', 'process'] },
  {
    label: 'ETB Calculator',
    page: 'business-model',
    keywords: ['8%', '3%', '11%', '92%', '103%', 'fee', 'etb', 'calculator'],
  },
  {
    label: 'Dual GPS & Security',
    page: 'security',
    keywords: ['gps', 'geofenc', 'immobiliz', 'monitoring', 'tamper'],
  },
  {
    label: 'Owner Services',
    page: 'owner-services',
    keywords: ['owner', 'libre', 'maintenance', 'payout'],
  },
  {
    label: 'Renter Services',
    page: 'renter-services',
    keywords: ['renter', 'driver', 'deposit', 'roadside'],
  },
  {
    label: 'Theft Insurance',
    page: 'insurance',
    keywords: ['abay', 'insurance', 'theft', 'policy'],
  },
  { label: 'Contact Office', page: 'contact', keywords: ['contact', 'office', 'bole', 'inquir'] },
];

export const CresAssistant: React.FC<CresAssistantProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const sendMessage = async (rawText: string) => {
    const trimmed = rawText.trim();
    if (!trimmed || isStreaming) return;

    setErrorMsg(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };
    const modelMsgId = `model-${Date.now() + 1}`;
    const nextHistory = [...messages, userMsg];

    setMessages([...nextHistory, { id: modelMsgId, role: 'model', text: '' }]);
    setInput('');
    setIsStreaming(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextHistory.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      if (!response.ok) {
        let errorText = 'Unable to reach CRES AI right now.';
        try {
          const payload = (await response.json()) as { error?: string };
          if (payload.error) errorText = payload.error;
        } catch {
          // Use fallback error message
        }
        throw new Error(errorText);
      }

      if (!response.body) {
        throw new Error('Streaming response body unavailable.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          const clean = line.trim();
          if (!clean.startsWith('data:')) continue;
          const jsonStr = clean.slice(5).trim();
          if (!jsonStr) continue;

          const parsed = JSON.parse(jsonStr) as {
            text?: string;
            done?: boolean;
            error?: string;
          };

          if (parsed.error) {
            throw new Error(parsed.error);
          }

          if (parsed.text) {
            accumulated += parsed.text;
            setMessages((prev) =>
              prev.map((m) => (m.id === modelMsgId ? { ...m, text: accumulated } : m))
            );
          }
        }
      }

      if (!accumulated.trim()) {
        setMessages((prev) => prev.filter((m) => m.id !== modelMsgId));
        setErrorMsg('No reply was returned. Please try asking again.');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setErrorMsg(message);
      setMessages((prev) => prev.filter((m) => !(m.id === modelMsgId && !m.text)));
    } finally {
      setIsStreaming(false);
    }
  };

  const getSuggestedPages = (text: string) => {
    const lower = text.toLowerCase();
    return QUICK_NAV_LINKS.filter(
      (link) =>
        link.page !== currentPage && link.keywords.some((keyword) => lower.includes(keyword))
    ).slice(0, 2);
  };

  const handleReset = () => {
    if (isStreaming) return;
    setMessages([]);
    setErrorMsg(null);
  };

  return (
    <>
      {/* Floating Launcher Button — Compact to respect 15% mobile sticky budget */}
      {!isOpen && (
        <motion.button
          type="button"
          onClick={() => setIsOpen(true)}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
          style={{ transform: 'translateZ(0)' }}
          aria-label="Open CRES AI"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 h-12 px-4 rounded-2xl bg-[#09142A] dark:bg-blue-700 text-white border border-cyan-500/40 dark:border-cyan-400/50 shadow-xl shadow-slate-900/30 hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors cursor-pointer"
        >
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
          <span className="text-xs font-display font-bold tracking-tight whitespace-nowrap">
            CRES AI
          </span>
        </motion.button>
      )}

      {/* Interactive Chat Panel (Mobile Bottom-Sheet / Desktop Floating Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="CRES AI Company and Operations Guide"
            className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-6 sm:right-6 z-50 sm:w-[410px] h-[78vh] max-h-[580px] flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-[#09142A] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3.5 bg-[#060F22] text-white border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600/80 to-cyan-500/80 border border-cyan-400/50 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-display text-sm font-bold text-white truncate">
                    CRES AI
                  </h2>
                  <p className="text-[11px] text-slate-300 truncate">
                    Company, 8-step lifecycle &amp; fee guide
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={handleReset}
                    disabled={isStreaming}
                    aria-label="Start new conversation"
                    title="Reset chat"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-40"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close CRES AI"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Message Feed */}
            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/70 dark:bg-[#060E1F]"
            >
              {messages.length === 0 ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0D1A33] border border-slate-200 dark:border-slate-800 space-y-2">
                    <p className="text-xs font-semibold text-blue-700 dark:text-cyan-400">
                      CRES AI · Addis Ababa Guide
                    </p>
                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      Ask anything about how CRES operates—including our 8-step rental lifecycle,
                      dual GPS protection, 8% owner &amp; 3% renter service fees, or active Abay
                      Insurance theft coverage.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 px-1">
                      Common Questions
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {QUICK_PROMPTS.map((prompt) => (
                        <button
                          key={prompt}
                          type="button"
                          onClick={() => void sendMessage(prompt)}
                          className="text-left px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white dark:bg-[#0D1A33] border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-cyan-500 text-xs font-medium text-slate-800 dark:text-slate-100 transition-colors flex items-center justify-between gap-2 cursor-pointer"
                        >
                          <span>{prompt}</span>
                          <ArrowUpRight
                            className="w-3.5 h-3.5 text-blue-700 dark:text-cyan-400 shrink-0"
                            aria-hidden="true"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                messages.map((msg) => {
                  const isUser = msg.role === 'user';
                  const suggestedLinks = !isUser && msg.text ? getSuggestedPages(msg.text) : [];
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                          isUser
                            ? 'bg-blue-700 text-white rounded-br-sm'
                            : 'bg-white dark:bg-[#0D1A33] text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-bl-sm'
                        }`}
                      >
                        {msg.text || (isStreaming ? 'Thinking...' : '')}
                      </div>

                      {suggestedLinks.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {suggestedLinks.map((link) => (
                            <button
                              key={link.page}
                              type="button"
                              onClick={() => {
                                onNavigate(link.page);
                                setIsOpen(false);
                              }}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-[#122242] hover:bg-blue-50 dark:hover:bg-blue-900/50 border border-slate-200 dark:border-slate-700 text-[11px] font-semibold text-blue-800 dark:text-cyan-300 transition-colors cursor-pointer"
                            >
                              <span>Open {link.label}</span>
                              <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })
              )}

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2.5 text-xs text-red-700 dark:text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </div>

            {/* Composer Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void sendMessage(input);
              }}
              className="p-3 bg-white dark:bg-[#09142A] border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about CRES lifecycle, GPS, or fees..."
                disabled={isStreaming}
                aria-label="Ask a question about CRES"
                className="flex-1 min-h-[44px] px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-[#101E38] border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-700 dark:focus:border-cyan-400 focus:outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isStreaming || !input.trim()}
                aria-label="Send message"
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white transition-colors disabled:opacity-40 disabled:pointer-events-none shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
