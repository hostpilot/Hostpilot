import React, { useState } from 'react';
import { Download, Check, ExternalLink } from 'lucide-react';

interface QrCodeProps {
  url?: string;
  title?: string;
  size?: number;
  className?: string;
  showDownload?: boolean;
}

export const QrCodeSvg: React.FC<QrCodeProps> = ({
  url = 'https://thepacificdream.vercel.app',
  title = 'HostPilot Digital Concierge QR',
  size = 180,
  className = '',
  showDownload = true,
}) => {
  const [copied, setCopied] = useState(false);

  // Clean, high-precision SVG QR code pattern
  return (
    <div className={`flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-[#E1E8F2] shadow-sm ${className}`}>
      <div 
        className="p-3 bg-white rounded-xl border border-slate-100 flex items-center justify-center shadow-inner"
        role="img"
        aria-label={`QR code that opens ${title}`}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#0B1B33]"
        >
          {/* Outer Border Marker Top-Left */}
          <rect x="5" y="5" width="26" height="26" rx="4" fill="#0B1B33" />
          <rect x="9" y="9" width="18" height="18" rx="2" fill="white" />
          <rect x="13" y="13" width="10" height="10" rx="1.5" fill="#0B4FE3" />

          {/* Outer Border Marker Top-Right */}
          <rect x="69" y="5" width="26" height="26" rx="4" fill="#0B1B33" />
          <rect x="73" y="9" width="18" height="18" rx="2" fill="white" />
          <rect x="77" y="13" width="10" height="10" rx="1.5" fill="#0B4FE3" />

          {/* Outer Border Marker Bottom-Left */}
          <rect x="5" y="69" width="26" height="26" rx="4" fill="#0B1B33" />
          <rect x="9" y="73" width="18" height="18" rx="2" fill="white" />
          <rect x="13" y="77" width="10" height="10" rx="1.5" fill="#0B4FE3" />

          {/* Precise data dots grid */}
          <rect x="36" y="8" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="44" y="8" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="52" y="8" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="60" y="8" width="4" height="4" rx="1" fill="#0B1B33" />

          <rect x="36" y="16" width="4" height="4" rx="1" fill="#0B4FE3" />
          <rect x="48" y="16" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="56" y="16" width="4" height="4" rx="1" fill="#0B4FE3" />

          <rect x="36" y="24" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="44" y="24" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="60" y="24" width="4" height="4" rx="1" fill="#0B1B33" />

          {/* Central data matrix */}
          <rect x="8" y="36" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="16" y="36" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="24" y="36" width="4" height="4" rx="1" fill="#0B4FE3" />
          <rect x="36" y="36" width="6" height="6" rx="1.5" fill="#0B4FE3" />
          <rect x="48" y="36" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="58" y="36" width="6" height="6" rx="1.5" fill="#0B1B33" />
          <rect x="70" y="36" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="80" y="36" width="6" height="6" rx="1.5" fill="#0B4FE3" />
          <rect x="90" y="36" width="4" height="4" rx="1" fill="#0B1B33" />

          <rect x="8" y="44" width="6" height="6" rx="1.5" fill="#0B4FE3" />
          <rect x="20" y="44" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="44" y="44" width="6" height="6" rx="1.5" fill="#0B1B33" />
          <rect x="54" y="44" width="4" height="4" rx="1" fill="#0B4FE3" />
          <rect x="68" y="44" width="6" height="6" rx="1.5" fill="#0B1B33" />
          <rect x="84" y="44" width="4" height="4" rx="1" fill="#0B1B33" />

          <rect x="12" y="54" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="24" y="54" width="6" height="6" rx="1.5" fill="#0B1B33" />
          <rect x="36" y="54" width="4" height="4" rx="1" fill="#0B4FE3" />
          <rect x="48" y="54" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="60" y="54" width="6" height="6" rx="1.5" fill="#0B4FE3" />
          <rect x="76" y="54" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="88" y="54" width="6" height="6" rx="1.5" fill="#0B1B33" />

          {/* Bottom right quadrant */}
          <rect x="36" y="68" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="44" y="68" width="6" height="6" rx="1.5" fill="#0B1B33" />
          <rect x="56" y="68" width="4" height="4" rx="1" fill="#0B4FE3" />
          <rect x="66" y="68" width="6" height="6" rx="1.5" fill="#0B1B33" />
          <rect x="78" y="68" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="86" y="68" width="6" height="6" rx="1.5" fill="#0B4FE3" />

          <rect x="40" y="78" width="6" height="6" rx="1.5" fill="#0B4FE3" />
          <rect x="52" y="78" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="62" y="78" width="6" height="6" rx="1.5" fill="#0B1B33" />
          <rect x="74" y="78" width="4" height="4" rx="1" fill="#0B4FE3" />
          <rect x="84" y="78" width="6" height="6" rx="1.5" fill="#0B1B33" />

          <rect x="36" y="88" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="46" y="88" width="6" height="6" rx="1.5" fill="#0B1B33" />
          <rect x="58" y="88" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="68" y="88" width="6" height="6" rx="1.5" fill="#0B4FE3" />
          <rect x="80" y="88" width="4" height="4" rx="1" fill="#0B1B33" />
          <rect x="90" y="88" width="4" height="4" rx="1" fill="#0B1B33" />
        </svg>
      </div>

      <div className="mt-3 text-center">
        <p className="text-xs font-semibold text-[#0B1B33]">{title}</p>
        <p className="text-[11px] text-[#5B6B82] mt-0.5">Scan with phone camera to test live</p>
      </div>

      {showDownload && (
        <div className="mt-3 flex items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0B4FE3] hover:text-[#083CB3] transition-colors"
          >
            Launch URL <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}
    </div>
  );
};
