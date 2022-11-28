import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../public/hero.webp';

export default function Hero() {
  return (
    <div className="min-h-[520px] flex items-center justify-center flex-col relative">
      <Image
        priority
        src={heroImage}
        placeholder="blur"
        fill
        alt=""
        className="z-[-1] object-cover"
      />
      <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ">
        <span className="block text-white mb-[20px]">Gateway Subs</span>
      </h1>
      <Link href="/#menu">
        <button className="flex w-[200px] items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-darkBlue">
          Order Now
        </button>
      </Link>
    </div>
  );
}
