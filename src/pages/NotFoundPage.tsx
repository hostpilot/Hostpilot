import React from 'react';
import { Home, ArrowRight, Compass, HelpCircle, Phone } from 'lucide-react';

export const NotFoundPage: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-white py-20 sm:py-28 text-center">
      <div className="mx-auto max-w-xl px-4 sm:px-6 space-y-6">
        <span className="inline-block rounded-full bg-[#EAF1FF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0B4FE3]">
          404 · Page Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1B33] tracking-tight">
          Lost in Navigation?
        </h1>
        <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
          The page you are looking for has been moved or does not exist. Here are the most helpful sections to get you back on track:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-left">
          <button
            onClick={() => onNavigate('/')}
            className="p-3.5 rounded-xl border border-[#E1E8F2] hover:border-[#0B4FE3] hover:bg-[#F5F8FC] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <Home className="h-4 w-4 text-[#0B4FE3]" />
              <span className="text-xs font-bold text-[#0B1B33]">HostPilot Home</span>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
          </button>

          <button
            onClick={() => onNavigate('/services')}
            className="p-3.5 rounded-xl border border-[#E1E8F2] hover:border-[#0B4FE3] hover:bg-[#F5F8FC] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <Compass className="h-4 w-4 text-[#0B4FE3]" />
              <span className="text-xs font-bold text-[#0B1B33]">Core Services</span>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
          </button>

          <button
            onClick={() => onNavigate('/demos')}
            className="p-3.5 rounded-xl border border-[#E1E8F2] hover:border-[#0B4FE3] hover:bg-[#F5F8FC] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <Compass className="h-4 w-4 text-[#0B4FE3]" />
              <span className="text-xs font-bold text-[#0B1B33]">Live Concierge Demos</span>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
          </button>

          <button
            onClick={() => onNavigate('/faq')}
            className="p-3.5 rounded-xl border border-[#E1E8F2] hover:border-[#0B4FE3] hover:bg-[#F5F8FC] transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <HelpCircle className="h-4 w-4 text-[#0B4FE3]" />
              <span className="text-xs font-bold text-[#0B1B33]">FAQ</span>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
