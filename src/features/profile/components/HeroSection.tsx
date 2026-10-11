'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Cpu,
  Globe2,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Terminal,
  User,
} from 'lucide-react';
import { LinkedinIcon } from '../../../components/icons/BrandIcons';
import { SiteProfile } from '../../../types/content.types';
import { Button } from '../../../components/ui/Button';

export interface HeroSectionProps {
  profile: SiteProfile;
}

type DossierTabType = 'overview' | 'domains' | 'connect';

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const [activeTab, setActiveTab] = useState<DossierTabType>('overview');

  const stats = profile.stats || {
    yearsExperience: 8,
    teamSizeManaged: 6,
    kaizenAwards: 5,
    productionAiSystems: 3,
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-border-light bg-canvas bg-tech-grid overflow-hidden">
      {/* Decorative hairline coordinate markers */}
      <div className="absolute top-3 left-6 hidden lg:block font-mono text-[9px] uppercase tracking-widest text-ink-faint select-none">
        [PORTFOLIO // ERTEKIN OZTURGUT · SOLUTIONS ARCHITECT]
      </div>
      <div className="absolute top-3 right-6 hidden lg:block font-mono text-[9px] uppercase tracking-widest text-ink-faint select-none">
        [VERIFIED PROFILE // TOYOTA TÜRKİYE · LEADERSHIP]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Narrative & Executive Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow & Personal Identity Badge */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-signal/15 border border-signal/40 text-ink rounded-[2px]">
                <span className="w-2 h-2 rounded-none bg-signal animate-pulse" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink">
                  KİŞİSEL PORTFOLYO // ÇÖZÜM MİMARI &amp; DİJİTAL LİDER
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
                <Building2 className="w-3.5 h-3.5 text-signal shrink-0" />
                <span>
                  {profile.currentRole || 'Next-Generation Digital Solutions Unit Supervisor'} · {profile.company || 'Toyota Türkiye'}
                </span>
              </div>
            </div>

            {/* Oversized Headline with Personal Greeting */}
            <div className="space-y-2">
              <span className="font-mono text-lg sm:text-xl text-ink font-semibold tracking-wide block">
                Merhaba, ben <span className="text-signal underline decoration-signal decoration-2 underline-offset-4">{profile.fullName || 'Ertekin Özturgut'}</span>.
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-ink leading-[1.04] uppercase">
                Kurumsal Sistemler, <br className="hidden sm:inline" />
                Çözüm Mimarlığı &amp; <br className="hidden sm:inline" />
                <span className="underline decoration-signal decoration-4 underline-offset-8">
                  Üretim Seviyesi AI.
                </span>
              </h1>
            </div>

            {/* Body Narrative (Directly populated from Strapi) */}
            <p className="text-base sm:text-lg text-ink-muted max-w-2xl font-normal leading-relaxed">
              {profile.shortBio ||
                'Toyota Türkiye bünyesinde yeni nesil dijital çözümleri, otonom yapay zekâ ajanlarını ve büyük ölçekli kurumsal platformları yöneten Çözüm Mimarı ve Teknoloji Lideri. 8+ yıllık kurumsal yazılım mühendisliği, bulut CRM mimarisi ve üretim seviyesi yapay zekâ tecrübesi.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#work">
                <Button
                  size="lg"
                  variant="primary"
                  rightIcon={<ArrowUpRight className="w-4 h-4 text-signal" />}
                >
                  Kurumsal Projeleri İncele
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Hakkımda &amp; Kariyer Yolu
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="ghost" className="font-mono text-xs uppercase text-ink-muted hover:text-ink">
                  İletişime Geç ↓
                </Button>
              </Link>
            </div>

            {/* Monospace Personal Metadata Blocks */}
            <div className="pt-8 border-t border-border-light grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-widest text-ink-faint mb-1">
                  LOKASYON
                </span>
                <span className="font-mono text-xs font-semibold text-ink flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-signal" />
                  {profile.location || 'İstanbul, Türkiye'}
                </span>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-widest text-ink-faint mb-1">
                  TEKNİK TECRÜBE
                </span>
                <span className="font-mono text-xs font-semibold text-ink">
                  {stats.yearsExperience}+ Yıl Kurumsal Mimari
                </span>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-widest text-ink-faint mb-1">
                  KAIZEN BAŞARILARI
                </span>
                <span className="font-mono text-xs font-semibold text-ink flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-signal" />
                  3× 1.lik · ALJ Global
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Ertekin Özturgut Executive Dossier & Verified Track Record */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-[#0C0D0E] text-white border border-white/15 rounded-[4px] shadow-2xl overflow-hidden relative corner-crosshairs">
              
              {/* Window Header Bar with macOS dots and personal dossier ID */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#121316]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="font-mono text-[11px] text-neutral-300 ml-2 tracking-wider">
                    ertekin-ozturgut // executive-dossier
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-signal font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
                  <span>DOĞRULANMIŞ PROFİL</span>
                </div>
              </div>

              {/* Personal Identity Header Card */}
              <div className="p-4 bg-gradient-to-r from-white/5 to-transparent border-b border-white/10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-[2px] bg-signal/20 border border-signal/40 flex items-center justify-center shrink-0">
                  <span className="font-mono text-lg font-bold text-signal tracking-widest">
                    EÖ
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-mono text-base font-bold text-white tracking-wide truncate">
                    {profile.fullName || 'Ertekin Özturgut'}
                  </h3>
                  <p className="font-mono text-xs text-signal truncate">
                    {profile.title || 'Çözüm Mimarı & Birim Yöneticisi'}
                  </p>
                  <p className="font-mono text-[11px] text-neutral-400 truncate">
                    {profile.company || 'Toyota Türkiye Pazarlama ve Satış A.Ş.'}
                  </p>
                </div>
              </div>

              {/* Dossier Tab Switcher */}
              <div className="flex items-center border-b border-white/10 bg-[#0E1012] font-mono text-[11px]">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-2 px-3 text-center transition-colors uppercase tracking-wider border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-signal text-signal font-bold bg-white/5'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  01 // Başarılar
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('domains')}
                  className={`flex-1 py-2 px-3 text-center transition-colors uppercase tracking-wider border-b-2 ${
                    activeTab === 'domains'
                      ? 'border-signal text-signal font-bold bg-white/5'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  02 // Uzmanlık
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('connect')}
                  className={`flex-1 py-2 px-3 text-center transition-colors uppercase tracking-wider border-b-2 ${
                    activeTab === 'connect'
                      ? 'border-signal text-signal font-bold bg-white/5'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  03 // İletişim
                </button>
              </div>

              {/* TAB 1: Verified Track Record & Impact Metrics */}
              {activeTab === 'overview' && (
                <div className="p-5 space-y-4 font-mono">
                  
                  {/* 4-Item Proof Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 bg-[#14161B] border border-white/10 rounded-[2px]">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                        DENEYİM
                      </span>
                      <span className="text-xl font-bold text-white block">
                        {stats.yearsExperience}+ Yıl
                      </span>
                      <span className="text-[10px] text-neutral-400">
                        Kurumsal Mühendislik
                      </span>
                    </div>

                    <div className="p-3 bg-[#14161B] border border-white/10 rounded-[2px]">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                        KAIZEN ÖDÜLLERİ
                      </span>
                      <span className="text-xl font-bold text-signal block">
                        3× 1.lik
                      </span>
                      <span className="text-[10px] text-neutral-400">
                        Toyota Kaizen Platformu
                      </span>
                    </div>

                    <div className="p-3 bg-[#14161B] border border-white/10 rounded-[2px]">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                        GLOBAL TEMSİL
                      </span>
                      <span className="text-xl font-bold text-white block">
                        ALJ Global
                      </span>
                      <span className="text-[10px] text-neutral-400">
                        Kaizen Maraton Temsilcisi
                      </span>
                    </div>

                    <div className="p-3 bg-[#14161B] border border-white/10 rounded-[2px]">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                        DOĞRULANMIŞ SİSTEM
                      </span>
                      <span className="text-xl font-bold text-emerald-400 block">
                        13 Sistem
                      </span>
                      <span className="text-[10px] text-neutral-400">
                        Canlı Kurumsal Mimari
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="p-3 bg-white/5 border border-white/10 rounded-[2px] text-xs space-y-2">
                    <div className="flex items-start gap-2 text-neutral-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-signal shrink-0 mt-0.5" />
                      <span>Toyota Türkiye&apos;nin ilk üretim yapay zekâ asistanı mimarisi ve canlıya alımı.</span>
                    </div>
                    <div className="flex items-start gap-2 text-neutral-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-signal shrink-0 mt-0.5" />
                      <span>Yüz binlerce kullanıcıya hizmet veren Dynamics 365 bulut ve CRM dönüşümleri.</span>
                    </div>
                    <div className="flex items-start gap-2 text-neutral-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-signal shrink-0 mt-0.5" />
                      <span>Model Context Protocol (MCP) ve sıfır halüsinasyon guardrail mimarisi.</span>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: Core Architecture & Leadership Focus */}
              {activeTab === 'domains' && (
                <div className="p-4 space-y-3 font-mono text-xs">
                  <div className="p-2.5 bg-[#14161B] border border-white/10 rounded-[2px]">
                    <div className="flex items-center justify-between text-signal font-bold mb-1">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        ÇÖZÜM MİMARLIĞI (SOLUTION ARCHITECTURE)
                      </span>
                      <span className="text-[10px] text-neutral-400">.NET / CLOUD</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                      Clean Architecture, Domain-Driven Design (DDD), merkezi API ağ geçitleri ve dağıtık kurumsal entegrasyonlar.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#14161B] border border-white/10 rounded-[2px]">
                    <div className="flex items-center justify-between text-signal font-bold mb-1">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        AGENTIC AI &amp; MODEL CONTEXT PROTOCOL
                      </span>
                      <span className="text-[10px] text-neutral-400">RAG / MCP</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                      Kurumsal ERP (SAP) ve CRM sistemleriyle güvenli konuşan otonom araçlar, çok adımlı akıl yürütme motorları.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#14161B] border border-white/10 rounded-[2px]">
                    <div className="flex items-center justify-between text-signal font-bold mb-1">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        KURUMSAL CRM &amp; SÜREÇ OTOMASYONU
                      </span>
                      <span className="text-[10px] text-neutral-400">DYNAMICS 365</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                      Dynamics 365 bulut geçişi, Dataverse modelleme, çok kanallı iletişim ve gelir koruma denetim otomasyonları.
                    </p>
                  </div>

                  <div className="p-2.5 bg-[#14161B] border border-white/10 rounded-[2px]">
                    <div className="flex items-center justify-between text-signal font-bold mb-1">
                      <span className="flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" />
                        KAIZEN SÜREKLİ İYİLEŞTİRME &amp; LİDERLİK
                      </span>
                      <span className="text-[10px] text-neutral-400">TOYOTA WAY</span>
                    </div>
                    <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                      Geçici reklam demoları yerine gerçek sahada ölçülebilir iş çıktısı üreten mühendislik kültürü.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: Direct Connect & Network Links */}
              {activeTab === 'connect' && (
                <div className="p-5 space-y-3 font-mono text-xs">
                  <p className="text-[11px] text-neutral-400 mb-2">
                    Danışmanlık, kurumsal seminerler veya teknik iş birlikleri için doğrudan kanallar:
                  </p>

                  <a
                    href={profile.linkedinUrl || 'https://www.linkedin.com/in/ertekinozturgut'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-[#14161B] border border-white/10 hover:border-signal/50 hover:bg-white/5 transition-colors rounded-[2px] text-neutral-200"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-signal" />
                      <span>LinkedIn // ertekinozturgut</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>

                  <a
                    href={profile.mediumUrl || 'https://medium.com/@ertekinozturgut'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-[#14161B] border border-white/10 hover:border-signal/50 hover:bg-white/5 transition-colors rounded-[2px] text-neutral-200"
                  >
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-signal" />
                      <span>Medium // @ertekinozturgut (Yayınlar)</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>

                  <a
                    href={`mailto:${profile.email || 'ertekinozturgut@gmail.com'}`}
                    className="flex items-center justify-between p-3 bg-[#14161B] border border-white/10 hover:border-signal/50 hover:bg-white/5 transition-colors rounded-[2px] text-neutral-200"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-signal" />
                      <span>E-posta // {profile.email || 'ertekinozturgut@gmail.com'}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>

                  <div className="pt-2">
                    <Link href="#contact" className="w-full block">
                      <Button variant="primary" className="w-full justify-center">
                        Doğrudan İletişim Formuna Git
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Console Footer */}
              <div className="px-4 py-2.5 border-t border-white/10 bg-[#0E1012] flex items-center justify-between font-mono text-[10px] text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                  STATÜ: AKTİF DANIŞMANLIK &amp; MİMARİ
                </span>
                <span className="text-signal font-semibold">
                  TOYOTA WAY · KAIZEN
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
