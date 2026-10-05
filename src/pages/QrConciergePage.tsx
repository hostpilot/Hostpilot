import React, { useState } from 'react';
import { ArrowRight, QrCode, Sparkles, CheckCircle2, Shield, Languages, Zap, UserCheck, ExternalLink } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { JsonLd } from '../components/ui/JsonLd';
import { generateServiceSchema } from '../lib/schema';
import { PhoneMockup } from '../components/ui/DeviceMockup';
import { QrCodeSvg } from '../components/ui/QrCode';
import { StatsCounter } from '../components/ui/StatsCounter';

interface QrConciergePageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const QrConciergePage: React.FC<QrConciergePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <>
      <JsonLd
        schema={generateServiceSchema(
          'QR Digital Concierge',
          'Give guests Wi-Fi, check-in steps, house rules and local tips with one QR scan. An AI digital concierge for vacation rentals.',
          'qr-concierge'
        )}
      />

      <div className="bg-white text-left">
        {/* Breadcrumb Header */}
        <div className="bg-[#F5F8FC] py-4 border-b border-[#E1E8F2]">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Services', href: '/services' },
                { name: 'QR Digital Concierge' },
              ]}
              onNavigate={onNavigate}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#F5F8FC] via-white to-white py-14 sm:py-20 border-b border-[#E1E8F2]/60">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block rounded-full bg-[#EAF1FF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0B4FE3]">
                  Next-Gen Hospitality Intelligence
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B33] tracking-tight leading-[1.1]">
                  An AI Digital Concierge That Works While You Sleep.
                </h1>
                <p className="text-base sm:text-lg text-[#5B6B82] leading-relaxed max-w-xl">
                  Transform static, unread PDF guidebooks into an instant, interactive mobile concierge. Guests scan one QR code on the kitchen island and get Wi-Fi, appliance instructions, and curated dining in seconds.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => onNavigate('/demos')}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-6 py-3.5 text-xs font-bold text-white hover:bg-[#083CB3] transition-colors shadow-xs"
                  >
                    <span>Experience Live Demos</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#0B4FE3] px-6 py-3.5 text-xs font-bold text-[#0B4FE3] hover:bg-[#EAF1FF]/50 transition-colors"
                  >
                    <span>Request Access</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <PhoneMockup
                  title="The Pacific Dream"
                  location="Malibu, CA · Luxury Villa"
                  tagline="Instant Wi-Fi, gate codes and local beach access"
                  badge="Live Concierge"
                  variant="concierge-interactive"
                  activeStep={2}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 1. The Reality */}
        <section className="py-20 lg:py-28 bg-[#F5F8FC]">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
                THE PROBLEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] mt-1 tracking-tight">
                They message you for everything.
              </h2>
              <p className="mt-3 text-base text-[#5B6B82]">
                Wi-Fi. Door codes. Parking. Checkout time. The same questions, every single stay.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="rounded-2xl bg-white p-6 border border-[#E1E8F2] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0B4FE3]">01 / 04</div>
                  <h3 className="text-lg font-bold text-[#0B1B33] mt-2">"2:17 AM."</h3>
                  <p className="text-sm text-[#5B6B82] mt-2">
                    The Wi-Fi is down. Or they simply mistyped the uppercase letter in your 18-character password.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-white p-6 border border-[#E1E8F2] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0B4FE3]">02 / 04</div>
                  <h3 className="text-lg font-bold text-[#0B1B33] mt-2">"Check-out morning."</h3>
                  <p className="text-sm text-[#5B6B82] mt-2">
                    Where is the gate code again? Can we leave our bags for two hours? Can we get a late checkout?
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-white p-6 border border-[#E1E8F2] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0B4FE3]">03 / 04</div>
                  <h3 className="text-lg font-bold text-[#0B1B33] mt-2">"Every single stay."</h3>
                  <p className="text-sm text-[#5B6B82] mt-2">
                    The same questions. From every guest. Over and over, interrupted dinners and broken sleep.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl bg-[#0B4FE3] text-white p-6 shadow-md flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-200">04 / 04</div>
                  <h3 className="text-lg font-bold text-white mt-2">"You deserve better."</h3>
                  <p className="text-sm text-blue-100 mt-2">
                    Your guests do too. Frictionless, instant answers give them freedom and give you your evenings back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Discover the Unseen / The Invisible Concierge */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="rounded-[24px] border border-[#E1E8F2] bg-gradient-to-tr from-[#F5F8FC] via-white to-blue-50/30 p-8 sm:p-14 shadow-sm text-left">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
                DISCOVER THE UNSEEN
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] mt-1 tracking-tight">
                The Invisible Concierge
              </h2>
              <p className="mt-3 text-base text-[#5B6B82] max-w-2xl leading-relaxed">
                Hover over the touchpoints below to see how HostPilot anticipates guest friction points before they become phone calls.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div
                  onMouseEnter={() => setHoveredPillar(1)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    hoveredPillar === 1
                      ? 'border-[#0B4FE3] bg-[#EAF1FF]/40 shadow-sm'
                      : 'border-[#E1E8F2] bg-white'
                  }`}
                >
                  <div className="h-10 w-10 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center font-bold text-sm">
                    01
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B33] mt-4">Pre-Arrival Confidence</h3>
                  <p className="text-xs text-[#5B6B82] mt-2 leading-relaxed">
                    Automated directions with designated parking spots and gate codes sent 24h prior, preventing arrival confusion.
                  </p>
                </div>

                <div
                  onMouseEnter={() => setHoveredPillar(2)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    hoveredPillar === 2
                      ? 'border-[#0B4FE3] bg-[#EAF1FF]/40 shadow-sm'
                      : 'border-[#E1E8F2] bg-white'
                  }`}
                >
                  <div className="h-10 w-10 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center font-bold text-sm">
                    02
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B33] mt-4">On-Site Autonomy</h3>
                  <p className="text-xs text-[#5B6B82] mt-2 leading-relaxed">
                    A physical QR code on the kitchen island offers immediate 1-tap Wi-Fi connection and visual hot tub guides.
                  </p>
                </div>

                <div
                  onMouseEnter={() => setHoveredPillar(3)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    hoveredPillar === 3
                      ? 'border-[#0B4FE3] bg-[#EAF1FF]/40 shadow-sm'
                      : 'border-[#E1E8F2] bg-white'
                  }`}
                >
                  <div className="h-10 w-10 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center font-bold text-sm">
                    03
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B33] mt-4">Automated Upsells</h3>
                  <p className="text-xs text-[#5B6B82] mt-2 leading-relaxed">
                    Frictionless 1-tap requests for late checkout or additional nights generated at checkout morning without awkward texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What's Inside */}
        <section className="py-20 lg:py-28 bg-[#F5F8FC]">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
                WHAT'S INSIDE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] mt-1 tracking-tight">
                Tailored for Premium Stays
              </h2>
              <p className="mt-3 text-base text-[#5B6B82]">
                Four pillars of the HostPilot concierge system. Each one designed to eliminate a conversation you would otherwise have to have yourself.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="rounded-2xl bg-white p-8 border border-[#E1E8F2] shadow-xs space-y-3">
                <span className="text-xs font-bold text-[#0B4FE3]">01</span>
                <h3 className="text-xl font-bold text-[#0B1B33]">Arrival & Check-in</h3>
                <p className="text-sm text-[#5B6B82] leading-relaxed">
                  Gate codes, parking instructions, and lockbox combinations laid out step-by-step so arrival goes flawlessly. Every time, for every guest.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-white p-8 border border-[#E1E8F2] shadow-xs space-y-3">
                <span className="text-xs font-bold text-[#0B4FE3]">02</span>
                <h3 className="text-xl font-bold text-[#0B1B33]">The Home Guide</h3>
                <p className="text-sm text-[#5B6B82] leading-relaxed">
                  From Wi-Fi passwords to lighting controls, media room setups, and gym configurations. Every system of your home, explained clearly.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-white p-8 border border-[#E1E8F2] shadow-xs space-y-3">
                <span className="text-xs font-bold text-[#0B4FE3]">03</span>
                <h3 className="text-xl font-bold text-[#0B1B33]">House Rules</h3>
                <p className="text-sm text-[#5B6B82] leading-relaxed">
                  Clear, upfront expectations about check-out times, pets, smoking, and noise limits, accessible in one place, not buried in an attached PDF.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl bg-white p-8 border border-[#E1E8F2] shadow-xs space-y-3">
                <span className="text-xs font-bold text-[#0B4FE3]">04</span>
                <h3 className="text-xl font-bold text-[#0B1B33]">Curated Local Picks</h3>
                <p className="text-sm text-[#5B6B82] leading-relaxed">
                  Personalized recommendations for local dining, sights, nightlife, and hidden gems. The ones a local would actually whisper to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Architecture (Interactive Steps + Dynamic Phone Screen) */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
                THE ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] mt-1 tracking-tight">
                Intelligence, Architected.
              </h2>
              <p className="mt-3 text-base text-[#5B6B82]">
                We built a proprietary intelligence layer that transforms your static property rules into an interactive, 24/7 digital concierge.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left: 3 Interactive Steps */}
              <div className="lg:col-span-7 space-y-5">
                {/* Step 1 */}
                <div
                  onClick={() => setActiveStep(1)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer text-left ${
                    activeStep === 1
                      ? 'border-[#0B4FE3] bg-[#EAF1FF]/40 shadow-sm'
                      : 'border-[#E1E8F2] bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#0B4FE3]">01</span>
                    <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-[#0B4FE3]">
                      Knowledge Base Synced
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1B33] mt-2">Digitize the Property</h3>
                  <p className="text-xs sm:text-sm text-[#5B6B82] mt-2 leading-relaxed">
                    Upload your standard PDF guidebook, check-in instructions, and Wi-Fi codes. HostPilot's ingestion engine reads, maps, and stores every detail of your home in a secure vector database.
                  </p>
                </div>

                {/* Step 2 */}
                <div
                  onClick={() => setActiveStep(2)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer text-left ${
                    activeStep === 2
                      ? 'border-[#0B4FE3] bg-[#EAF1FF]/40 shadow-sm'
                      : 'border-[#E1E8F2] bg-white hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-extrabold text-[#0B4FE3]">02</span>
                  <h3 className="text-lg font-bold text-[#0B1B33] mt-2">Contextual AI Training</h3>
                  <p className="text-xs sm:text-sm text-[#5B6B82] mt-2 leading-relaxed">
                    Your digital concierge doesn't just parrot facts. It understands context. It knows that "Where do I park?" requires the driveway gate code, and "It's cold" means it should explain the smart thermostat.
                  </p>
                </div>

                {/* Step 3 */}
                <div
                  onClick={() => setActiveStep(3)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer text-left ${
                    activeStep === 3
                      ? 'border-[#0B4FE3] bg-[#EAF1FF]/40 shadow-sm'
                      : 'border-[#E1E8F2] bg-white hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-extrabold text-[#0B4FE3]">03</span>
                  <h3 className="text-lg font-bold text-[#0B1B33] mt-2">Flawless Execution</h3>
                  <p className="text-xs sm:text-sm text-[#5B6B82] mt-2 leading-relaxed">
                    Guests scan a QR code on the kitchen counter. Instantly, they are connected to a high-end web app tailored entirely to your brand, answering questions in real-time at 2:00 AM while you sleep.
                  </p>
                </div>
              </div>

              {/* Right: Phone mockup changing screen per step */}
              <div className="lg:col-span-5 flex justify-center">
                <PhoneMockup
                  title="HostPilot Autopilot"
                  location="Live Vector Engine"
                  tagline="Answering property queries instantly"
                  badge={`Step 0${activeStep}`}
                  variant="concierge-interactive"
                  activeStep={activeStep}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. A staff of one hundred. Invisible to the eye. */}
        <section className="py-20 lg:py-28 bg-[#F5F8FC]">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
                ALWAYS ON
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] mt-1 tracking-tight">
                A staff of one hundred. Invisible to the eye.
              </h2>
              <p className="mt-3 text-base text-[#5B6B82]">
                We didn't build a chatbot. We built an invisible estate manager that anticipates needs before they are spoken, operating entirely in the background.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="rounded-2xl bg-white p-8 border border-[#E1E8F2] shadow-xs space-y-3 text-left">
                <div className="h-10 w-10 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center">
                  <Languages className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1B33]">Speaks their language. Literally.</h3>
                <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                  Whether your guests are from Tokyo or Paris, the system adapts instantly. It responds in perfectly localized dialects, ensuring nothing is lost in translation. No awkward misunderstandings.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-white p-8 border border-[#E1E8F2] shadow-xs space-y-3 text-left">
                <div className="h-10 w-10 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1B33]">Disaster averted at 2:00 AM.</h3>
                <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                  If the power trips in a storm, guests don't wake you. They ask the concierge. It immediately provides the exact location of the breaker box with a photo, solving the crisis in seconds while you sleep.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-white p-8 border border-[#E1E8F2] shadow-xs space-y-3 text-left">
                <div className="h-10 w-10 rounded-xl bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1B33]">You never surrender the keys.</h3>
                <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                  You have a real-time window into every conversation. If a guest asks for something deeply personal, you can seamlessly pause the autopilot and step in to deliver a human touch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The ROI (blue stats band style) */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="rounded-[24px] bg-[#0B4FE3] text-white p-8 sm:p-14 shadow-xl">
              <div className="max-w-2xl text-left mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
                  RETURN ON INVESTMENT
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
                  Revenue, Amplified.
                </h2>
                <p className="mt-2 text-sm sm:text-base text-blue-100 leading-relaxed">
                  HostPilot doesn't just save you time. It actively generates revenue by offering frictionless late checkouts, extra nights, and premium upgrades, exactly when guests are most likely to say yes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-white/20 text-left">
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white flex items-center">
                    <StatsCounter value={35} suffix="%" />
                  </div>
                  <div className="text-sm font-bold text-blue-100 mt-1">Increase in Up-Sells</div>
                  <div className="text-xs text-blue-200 mt-0.5">Sample benchmark for late checkout & chef services</div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white flex items-center">
                    <StatsCounter value={14} suffix=" hrs" />
                  </div>
                  <div className="text-sm font-bold text-blue-100 mt-1">Saved Per Week</div>
                  <div className="text-xs text-blue-200 mt-0.5">Average host time reclaimed from repeat queries</div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white flex items-center">
                    <StatsCounter value={92} suffix="%" />
                  </div>
                  <div className="text-sm font-bold text-blue-100 mt-1">Guest Resolution Rate</div>
                  <div className="text-xs text-blue-200 mt-0.5">Inquiries solved without host phone intervention</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. The Digital Concierge (Live Demo + Dynamic SVG QR code) */}
        <section className="py-20 lg:py-28 bg-[#F5F8FC]">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-left space-y-5">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3]">
                  TEST IT LIVE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] tracking-tight">
                  A guide they will actually read.
                </h2>
                <p className="text-base text-[#5B6B82] leading-relaxed">
                  Beautifully designed. Instantly accessible. See what a bespoke guest experience looks like on a live digital concierge.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate('/demos')}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0B4FE3] px-6 py-3.5 text-xs font-bold text-white hover:bg-[#083CB3] transition-colors shadow-xs"
                  >
                    <span>Open the Live Demos</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="https://thepacificdream.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4FE3] hover:underline"
                  >
                    <span>Launch The Pacific Dream Direct</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <QrCodeSvg
                  url="https://thepacificdream.vercel.app"
                  title="Pacific Dream Concierge"
                  size={190}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA Band */}
        <section className="bg-[#0B4FE3] text-white py-16">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">
              THE FUTURE OF HOSPITALITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to disconnect from your phone?</h2>
            <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base">
              Apply for private intake today. We review every listing to ensure complete knowledge base alignment.
            </p>
            <div className="pt-3">
              <button
                onClick={() => onNavigate('/demos')}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-xs font-bold text-[#0B4FE3] hover:bg-blue-50 transition-colors shadow-md"
              >
                <span>Experience the Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
