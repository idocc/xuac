'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Intercom: any;
    intercomSettings: any;
  }
}

interface IntercomSettings {
  api_base: string;
  app_id: string;
  user_id?: string;
  name?: string;
  email?: string;
  created_at?: number;
}

export function Intercom() {
  useEffect(() => {
    // Set up Intercom settings
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "geoln7h4",
      // Add user data here if available
      // user_id: user.id,
      // name: user.name,
      // email: user.email,
      // created_at: user.createdAt,
    };

    // Load Intercom widget
    const loadIntercom = () => {
      const w = window;
      const ic = w.Intercom;
      
      if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        const d = document;
        const i: any = function() {
          i.c(arguments);
        };
        i.q = [];
        i.c = function(args: any) {
          i.q.push(args);
        };
        w.Intercom = i;
        
        const l = function() {
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/geoln7h4';
          const x = d.getElementsByTagName('script')[0];
          x.parentNode?.insertBefore(s, x);
        };
        
        if (document.readyState === 'complete') {
          l();
        } else {
          w.addEventListener('load', l, false);
        }
      }
    };

    loadIntercom();

    // Cleanup function
    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  return null;
}

