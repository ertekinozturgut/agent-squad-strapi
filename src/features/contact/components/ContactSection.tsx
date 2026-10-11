'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Calendar, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { LinkedinIcon, GithubIcon } from '../../../components/icons/BrandIcons';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('idle');
        setErrorMsg(data.error || 'An unexpected error occurred. Please try again.');
      }
    } catch {
      setStatus('idle');
      setErrorMsg('Network error. Please reach out directly via email.');
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="[STRATEGIC CONSULTING & CONTACT]"
          title="Connect for Enterprise AI & Systems Architecture"
          description="Reach out directly to discuss enterprise AI adoption, agentic workflows, CRM architecture, or strategic advisory."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Direct channels card */}
          <div className="space-y-4">
            <Card className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-titanium-400 block">
                Direct Channels
              </span>

              <div className="space-y-3">
                <a
                  href="mailto:ertekinozturgut@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface-border/40 border border-surface-border hover:bg-surface-hover hover:border-surface-highlight transition-all"
                >
                  <div className="w-8 h-8 rounded-md bg-brand-crimson/20 border border-brand-crimson/40 flex items-center justify-center text-brand-crimson shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-titanium-400 font-mono block">Email</span>
                    <span className="text-xs font-medium text-white">ertekinozturgut@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ertekinozturgut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface-border/40 border border-surface-border hover:bg-surface-hover hover:border-surface-highlight transition-all"
                >
                  <div className="w-8 h-8 rounded-md bg-blue-950/40 border border-blue-800/40 flex items-center justify-center text-blue-400 shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-titanium-400 font-mono block">LinkedIn</span>
                    <span className="text-xs font-medium text-white">linkedin.com/in/ertekinozturgut</span>
                  </div>
                </a>

                <a
                  href="https://github.com/ertekinozturgut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-surface-border/40 border border-surface-border hover:bg-surface-hover hover:border-surface-highlight transition-all"
                >
                  <div className="w-8 h-8 rounded-md bg-surface-border flex items-center justify-center text-titanium-200 shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-titanium-400 font-mono block">GitHub</span>
                    <span className="text-xs font-medium text-white">github.com/ertekinozturgut</span>
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-surface-border/60 flex items-center gap-2 text-xs text-titanium-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-brand-crimson" />
                <span>Istanbul, Türkiye • Hybrid / Global</span>
              </div>
            </Card>

            {/* Direct 30-min consultation card */}
            <Card hoverable className="p-5 border-brand-cobalt/40 bg-brand-cobalt-subtle/20 space-y-3">
              <div className="flex items-center gap-2.5 text-blue-300">
                <Calendar className="w-4 h-4 text-brand-cobalt" />
                <span className="font-mono text-xs uppercase font-bold tracking-wider">
                  Strategy &amp; Discovery Session
                </span>
              </div>
              <p className="text-xs text-titanium-300 leading-relaxed">
                Request an introductory conversation to evaluate agentic AI feasibility, Model Context Protocol architecture, or CRM modernization.
              </p>
              <a
                href="mailto:ertekinozturgut@gmail.com?subject=Enterprise%20AI%20Strategy%20Discovery%20Session"
                className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:underline pt-1"
              >
                <span>Schedule a Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </Card>
          </div>

          {/* Inquiry form card */}
          <div className="lg:col-span-2">
            <Card className="space-y-6">
              <div className="border-b border-surface-border/60 pb-3">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send a Direct Inquiry
                </h3>
                <p className="text-xs text-titanium-400 mt-1">
                  Share project scope, architectural challenges, or advisory needs.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-8 text-center space-y-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-titanium-300 max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been safely delivered and I will respond within 24 hours.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setStatus('idle')}
                    className="mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/60 text-xs text-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-titanium-300 block">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-border/50 border border-surface-border text-white placeholder-titanium-500 text-sm focus-visible:ring-2 focus-visible:ring-brand-cobalt outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-titanium-300 block">
                        Work / Direct Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-border/50 border border-surface-border text-white placeholder-titanium-500 text-sm focus-visible:ring-2 focus-visible:ring-brand-cobalt outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-titanium-300 block">
                      Your Message &amp; Project Scope *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly outline your enterprise objectives, timeline, or architecture requirements..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-border/50 border border-surface-border text-white placeholder-titanium-500 text-sm focus-visible:ring-2 focus-visible:ring-brand-cobalt outline-none transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="danger"
                    isLoading={status === 'submitting'}
                    rightIcon={<Send className="w-3.5 h-3.5" />}
                    className="w-full sm:w-auto"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
