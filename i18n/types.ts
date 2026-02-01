export interface Translation {
  hero: {
    title: string;
    role: string;
    github: string;
    telegram: string;
    listening: string;
    os: string;
    copilot: string;
    sherry: string;
    woof: string;
  };
  journey: {
    title: string;
    nodes: {
      title: string;
      subtitle: string;
      desc: string;
    }[];
  };
  philosophy: {
    subtitle: string;
    title: string;
    cards: {
      title: string;
      text: string;
    }[];
  };
  dashboard: {
    title: string;
    active: string;
    cards: {
      nextcloud: { title: string; desc: string; };
      pterodactyl: { title: string; desc: string; };
      jitsi: { title: string; desc: string; };
      nginx: { title: string; desc: string; };
      excalidraw: { title: string; desc: string; };
    };
  };
  footer: {
    status: string;
    cta: string;
    copyright: string;
  };
}
