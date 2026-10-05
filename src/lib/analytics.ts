// Analytics event logger and cookie consent manager

export type AnalyticsEventType = 'form_submit' | 'whatsapp_click' | 'demo_launch' | 'cta_click';

export function trackEvent(eventName: AnalyticsEventType, properties?: Record<string, unknown>) {
  const consent = localStorage.getItem('hostpilot_cookie_consent');
  if (consent === 'accepted') {
    // If GA4 or tracking script is initialized, dispatch to dataLayer
    if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: eventName,
        ...properties,
        timestamp: new Date().toISOString(),
      });
    }
  }
}
