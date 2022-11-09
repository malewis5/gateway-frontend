import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Hero() {
  return (
    <div className="min-h-[520px] flex items-center justify-center flex-col">
      <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ">
        <span className="block text-blue-700 mb-[20px]">Gateway Subs</span>
      </h1>
      <button className="flex w-[200px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700">
        Order Now
      </button>
    </div>
  );
}
