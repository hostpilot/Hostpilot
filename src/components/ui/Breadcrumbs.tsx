import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '../../lib/schema';
import { JsonLd } from './JsonLd';

interface BreadcrumbsProps {
  items: Array<{
    name: string;
    href?: string;
  }>;
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const schemaItems = [
    { name: 'Home', url: 'https://hostpilot.online/' },
    ...items.map((it) => ({
      name: it.name,
      url: it.href ? `https://hostpilot.online${it.href}` : 'https://hostpilot.online',
    })),
  ];

  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="py-3 text-xs text-[#5B6B82]">
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li className="flex items-center">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-1 hover:text-[#0B4FE3] transition-colors"
              aria-label="Back to home"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </button>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
                {item.href && !isLast ? (
                  <button
                    onClick={() => onNavigate(item.href!)}
                    className="hover:text-[#0B4FE3] transition-colors"
                  >
                    {item.name}
                  </button>
                ) : (
                  <span className="font-semibold text-[#0B1B33]" aria-current="page">
                    {item.name}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
