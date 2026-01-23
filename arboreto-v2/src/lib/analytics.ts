export type AnalyticsPayload = Record<string, unknown>;

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

export const trackEvent = (event: string, payload: AnalyticsPayload = {}) => {
  if (typeof window === "undefined") return;
  const typedWindow = window as DataLayerWindow;
  typedWindow.dataLayer = typedWindow.dataLayer ?? [];
  typedWindow.dataLayer.push({ event, ...payload });
};
