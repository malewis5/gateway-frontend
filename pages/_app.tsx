import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { LoginModalProvider } from '../context/LoginModalContext';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import { SessionLocationProvider } from '../context/SessionContext';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    // Supabase provider
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      {/* Provider for accessing selected location */}
      <SessionLocationProvider>
        {/* Modal context provider */}
        <LoginModalProvider>
          {/* Custom Layout */}
          <DefaultSeo {...SEO} />
          <Layout>
            <Component {...pageProps} />
            <Analytics />
          </Layout>
        </LoginModalProvider>
      </SessionLocationProvider>
    </SessionContextProvider>
  );
}
