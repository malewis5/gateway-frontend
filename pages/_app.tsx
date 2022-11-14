import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { LoginModalProvider } from '../context/LoginModalContext';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <LoginModalProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </LoginModalProvider>
    </SessionContextProvider>
  );
}
