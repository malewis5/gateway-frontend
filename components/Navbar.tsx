import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useLoginModal } from '../context/LoginModalContext';
import { useSession } from '@supabase/auth-helpers-react';
import Image from 'next/image';

const navigation = [
  { name: 'Order', href: '/#menu' },
  { name: 'Catering', href: '/catering' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { dispatch } = useLoginModal();
  const session = useSession();

  return (
    <header>
      <Popover className="relative bg-white">
        {({ close }) => (
          <>
            <div className="mx-auto flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-5">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                    alt=""
                  />
                </Link>
                <div>{/* <LocationSelect /> */}</div>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group
                as="nav"
                className="hidden space-x-10 md:flex uppercase"
              >
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </Popover.Group>
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                {session ? (
                  <Image
                    height={40}
                    width={40}
                    onClick={() => dispatch({ type: 'toggle' })}
                    className="inline-block rounded-full cursor-pointer"
                    src={session.user.user_metadata.avatar_url}
                    alt="user profile picture"
                  />
                ) : (
                  <>
                    <button
                      onClick={() => {
                        dispatch({ type: 'toggle' });
                      }}
                      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Sign in
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: 'toggle' });
                      }}
                      className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                    >
                      Sign up
                    </button>
                  </>
                )}
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                          alt="Your Company"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    {session ? (
                      <div className="py-5 px-3 flex items-center">
                        <Link href="/" className="group block flex-shrink-0">
                          <div className="flex items-center">
                            <div>
                              <img
                                className="inline-block h-10 w-10 rounded-full"
                                src={session.user.user_metadata.avatar_url}
                                alt="profile"
                              />
                            </div>
                            <div
                              className="ml-3 "
                              onClick={() => dispatch({ type: 'toggle' })}
                            >
                              <p className="text-md font-medium text-gray-700 group-hover:text-gray-900">
                                {session.user.email}
                              </p>
                              <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                View profile
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ) : (
                      <div className="py-5 px-5">
                        <button
                          onClick={() => {
                            close();
                            dispatch({ type: 'toggle' });
                          }}
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                        >
                          Sign up
                        </button>

                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          Existing customer?{' '}
                          <button
                            onClick={() => {
                              close();
                              dispatch({ type: 'toggle' });
                            }}
                            className="text-gray-900"
                          >
                            Sign in
                          </button>
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="py-6 px-5">
                    <div className="grid grid-cols-2 gap-4">
                      {navigation.map((item) => (
                        <Link
                          onClick={() => close()}
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </header>
  );
}
