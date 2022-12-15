import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ContactForm } from '../components/common/ContactForm';

const locations = [
  {
    name: 'South Pasadena',
    address: '2525 Pasadena Ave S, South Pasadena, FL 33707',
    phone: '+1 (561) 376 4083',
    googleLink:
      'https://www.google.com/maps/place/Gateway+Subs/@27.7510114,-82.743154,904m/data=!3m1!1e3!4m5!3m4!1s0x88c2fdd39a8d655d:0x8af1b383cf950f33!8m2!3d27.7511964!4d-82.7426579',
    appleLink:
      'https://maps.apple.com/?address=2525%20Pasadena%20Ave%20S,%20Unit%200,%20South%20Pasadena,%20FL%20%2033707,%20United%20States&auid=8181165096293580891&ll=27.751061,-82.743194&lsp=9902&q=Gateway%20Subs',
  },
  {
    name: 'St. Petersburg',
    address: '3112 3rd Ave N, St. Petersburg, FL 33713',
    phone: '+1 (561) 376 4083',
    googleLink:
      'https://www.google.com/maps/place/Gateway+Subs/@27.7743968,-82.6780589,17z/data=!4m12!1m6!3m5!1s0x88c2e3696a79f0d3:0x2741652ae03db09a!2sGateway+Subs!8m2!3d27.7743968!4d-82.6758702!3m4!1s0x88c2e3696a79f0d3:0x2741652ae03db09a!8m2!3d27.7743968!4d-82.6758702',
    appleLink:
      'https://maps.apple.com/?address=3112%20Third%20Ave%20N,%20Saint%20Petersburg,%20FL%2033713,%20United%20States&auid=12579609265094006543&ll=27.774359,-82.675831&lsp=9902&q=Gateway%20Subs',
  },
];

export default function Example() {
  function iOS() {
    if (
      [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod',
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    )
      setIos(true);
  }

  useEffect(() => {
    iOS();
  });

  const [ios, setIos] = useState(false);

  return (
    <div className="bg-white">
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">gatewaysubs@gmail.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
            Locations
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
            {locations.map((item) => {
              return (
                <div key={item.name}>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {item.name}
                  </h3>
                  <div className="mt-2 text-base text-gray-500 underline">
                    <Link href={ios ? item.appleLink : item.googleLink}>
                      {item.address}
                    </Link>
                  </div>
                  <div className="mt-2 text-base text-gray-500 underline">
                    <Link href={`tel:${item.phone}`}>{item.phone}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
