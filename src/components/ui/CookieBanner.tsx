import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('hostpilot_cookie_consent');
    if (!consent) {
      // Delay slightly for zero-latency initial render
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hostpilot_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('hostpilot_cookie_consent', 'rejected');
    setVisible(false);
  };

  const handleSaveManage = () => {
    localStorage.setItem(
      'hostpilot_cookie_consent',
      analyticsEnabled ? 'accepted' : 'rejected'
    );
    setVisible(false);
    setShowManage(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 rounded-2xl bg-white p-5 shadow-2xl border border-[#E1E8F2] animate-fadeIn"
    >
      <div className="flex items-start gap-3">
        <div className="h-8 w-8 rounded-lg bg-[#EAF1FF] text-[#0B4FE3] flex items-center justify-center shrink-0">
          <ShieldCheck className="h-4 w-4" />
        </div>
        <div className="flex-1 text-left">
          <h4 className="text-sm font-bold text-[#0B1B33]">Privacy & Analytics</h4>
          <p className="text-xs text-[#5B6B82] mt-1 leading-relaxed">
            We use privacy-friendly analytics to track inquiries and improve performance. No personal tracking or ad pixels.
          </p>

          {showManage ? (
            <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-800">Essential Technical Cookies</div>
                  <div className="text-[10px] text-slate-500">Form validation & session security (Required)</div>
                </div>
                <input type="checkbox" checked disabled className="rounded text-[#0B4FE3]" />
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                <div>
                  <div className="font-semibold text-slate-800">Performance Analytics</div>
                  <div className="text-[10px] text-slate-500">Core Web Vitals & conversion metrics</div>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="rounded text-[#0B4FE3]"
                />
              </div>
              <button
                onClick={handleSaveManage}
                className="w-full mt-2 rounded-lg bg-[#0B4FE3] py-1.5 text-xs font-semibold text-white hover:bg-[#083CB3]"
              >
                Save Preferences
              </button>
            </div>
          ) : (
            <div className="mt-3.5 flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 rounded-xl bg-[#0B4FE3] py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#083CB3] transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="flex-1 rounded-xl border border-[#E1E8F2] bg-white py-2 text-xs font-semibold text-[#1F2A3D] hover:bg-slate-50 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => setShowManage(true)}
                className="text-[11px] font-medium text-[#5B6B82] hover:text-[#0B1B33] underline px-1"
              >
                Manage
              </button>
            </div>
          )}
        </div>

        <button
          onClick={handleReject}
          className="text-slate-400 hover:text-slate-600 p-1"
          aria-label="Close cookie banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
};
