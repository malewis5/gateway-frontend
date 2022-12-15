import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { LoginModalProvider } from '../context/LoginModalContext';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import { UserContextProvider } from '../context/UserContext';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();
  return (
    // Supabase provider
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      {/* Provider for accessing selected location */}
      <UserContextProvider>
        {/* Modal context provider */}
        <LoginModalProvider>
          {/* Custom Layout */}
          <DefaultSeo {...SEO} />
          {/* Hubspot Tracking Script */}
          <Script
            src="//js.hs-scripts.com/23586061.js"
            strategy="beforeInteractive"
          />
          {router.asPath.includes('/reset-password') ? (
            <>
              <Component {...pageProps} />
              <Analytics />
            </>
          ) : (
            <Layout>
              <Component {...pageProps} />
              <Analytics />
            </Layout>
          )}
        </LoginModalProvider>
      </UserContextProvider>
    </SessionContextProvider>
  );
}
