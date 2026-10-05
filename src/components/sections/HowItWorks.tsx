import React from 'react';
import { Search, Compass, Code, Rocket, LifeBuoy } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: 'Discover',
      desc: 'We learn your business goals, target audience, and workflow.',
      icon: <Search className="h-5 w-5" />,
    },
    {
      num: 2,
      title: 'Design',
      desc: 'Interactive wireframes and clean, branded visual systems.',
      icon: <Compass className="h-5 w-5" />,
    },
    {
      num: 3,
      title: 'Build',
      desc: 'Clean, fast, tested code with zero bloated templates.',
      icon: <Code className="h-5 w-5" />,
    },
    {
      num: 4,
      title: 'Launch',
      desc: 'Technical SEO setup, structured schema, analytics & go-live.',
      icon: <Rocket className="h-5 w-5" />,
    },
    {
      num: 5,
      title: 'Support',
      desc: 'Ongoing updates, performance audits & post-launch warranty.',
      icon: <LifeBuoy className="h-5 w-5" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white" id="how-it-works">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B4FE3] mb-2">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B33] tracking-tight">
            A Smarter Way to Build
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5B6B82]">
            A structured, transparent engineering process that eliminates guesswork and delivers on schedule.
          </p>
        </div>

        {/* 5-step numbered steps with connector line */}
        <div className="relative">
          {/* Dotted connecting line behind steps (desktop) */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 border-t-2 border-dashed border-[#0B4FE3]/40 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 group"
              >
                {/* Numbered circular blue icon */}
                <div className="relative">
                  <div className="h-14 w-14 rounded-full bg-[#0B4FE3] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#0B1B33] text-white text-[10px] font-extrabold flex items-center justify-center ring-2 ring-white">
                    {step.num}
                  </span>
                </div>

                <div className="pt-2">
                  <h3 className="text-base font-bold text-[#0B1B33]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#5B6B82] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
