import { NextSeo } from 'next-seo';
import Image from 'next/image';

const people = [
  {
    name: 'Grant Strayer',
    role: 'Founder/All Things People',
    imageUrl:
      'https://res.cloudinary.com/dn4bh5hdx/image/upload/v1668447509/Gateway%20Subs/grant_ek1hc8.png',
  },
  {
    name: 'Brandon Ruditz',
    role: 'All Things Lunch',
    imageUrl:
      'https://res.cloudinary.com/dn4bh5hdx/image/upload/v1668447509/Gateway%20Subs/grant_ek1hc8.png',
  },
  {
    name: 'Morgan Zook',
    role: 'All Things Fun',
    imageUrl:
      'https://res.cloudinary.com/dn4bh5hdx/image/upload/v1668447509/Gateway%20Subs/grant_ek1hc8.png',
  },
  {
    name: 'Matthew Lewis',
    role: 'All Things Tech',
    imageUrl:
      'https://res.cloudinary.com/dn4bh5hdx/image/upload/v1668447509/Gateway%20Subs/grant_ek1hc8.png',
  },
];

export default function About() {
  return (
    <>
      <NextSeo
        title="About Us"
        description="We are epicureans who value good business and treat people as people"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'About Us',
          description:
            'We are epicureans who value good business and treat people as people',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Gatway Subs',
        }}
        twitter={{
          handle: '@gatewaysubs',
          site: '@gatewaysubs',
          cardType: 'summary_large_image',
        }}
      />
      <div>
        <div className="min-h-[512px] flex items-center justify-center bg-black">
          <video
            className="h-[512px]"
            controls
            controlsList="nodownload"
            loop={true}
            // poster="https://res.cloudinary.com/dn4bh5hdx/image/upload/v1668447509/Gateway%20Subs/grant_ek1hc8.png"
          >
            <source
              src="https://res.cloudinary.com/dn4bh5hdx/video/upload/v1668447165/Gateway%20Subs/292214593_2963796663928427_7739763106111229135_n_ss25qw.mp4#t=0.1"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Meet our leadership
              </h2>
              <p className="text-xl text-gray-500">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse. Vivamus
                fringilla.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <div className="relative h-16 w-16 lg:h-20 lg:w-20">
                        <Image
                          fill
                          src={person.imageUrl}
                          alt=""
                          className="rounded-full"
                        />
                      </div>
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-darkBlue">{person.role}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
