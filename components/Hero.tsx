import Link from 'next/link';

export default function Hero() {
  return (
    <div className="min-h-[520px] flex items-center justify-center flex-col bg-hero sm:bg-cover bg-left">
      <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ">
        <span className="block text-white mb-[20px]">Gateway Subs</span>
      </h1>
      <Link href="/#menu">
        <button className="flex w-[200px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700">
          Order Now
        </button>
      </Link>
    </div>
  );
}
