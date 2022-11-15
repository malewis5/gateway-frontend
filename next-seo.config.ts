import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Gateway Subs',
  titleTemplate: 'Gateway Subs | %s',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.url.ie/',
    siteName: 'Gateway Subs',
  },
  twitter: {
    handle: '@gatewaysubs',
    site: '@gatewaysubs',
    cardType: 'summary_large_image',
  },
};

export default config;
