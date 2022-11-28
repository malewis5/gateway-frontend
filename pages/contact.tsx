import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Input } from '../components/common/Input';

const locations = [
  {
    name: 'South Pasadena',
    address: '2525 Pasadena Ave S, South Pasadena, FL 33707',
    phone: '+1 (561) 376 4083',
    googleLink: 'https://goo.gl/maps/WajXdJgdtxySRoTi7',
    appleLink:
      'https://maps.apple.com/?address=2525%20Pasadena%20Ave%20S,%20Unit%20O,%20South%20Pasadena,%20FL%20%2033707,%20United%20States&ll=27.751061,-82.743194&q=2525%20Pasadena%20Ave%20S,%20Unit%20O',
  },
  {
    name: 'St. Petersburg',
    address: '3112 3rd Ave N, St. Petersburg, FL 33713',
    phone: '+1 (561) 376 4083',
    googleLink: 'https://goo.gl/maps/dv9YunypdXMWzsy47',
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
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <Input
                htmlFor="full-name"
                type="text"
                name="full-name"
                id="full-name"
                autoComplete="name"
                placeholder="Full name"
              />
              <Input
                htmlFor="email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
              />
              <Input
                htmlFor="phone"
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                placeholder="Phone"
              />
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-primary py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        {/* <div className="divide-y-2 divide-gray-200"> */}
        {/* <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Customer Support
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Collaborate
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Press
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Join our team
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Say hello
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div> */}
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
