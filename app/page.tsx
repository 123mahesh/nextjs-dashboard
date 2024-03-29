import AcmeLogo from '@/app/ui/heramba-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import HerambaLogo from '@/app/ui/heramba-logo';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-orange-500 p-4 md:h-52">
        <HerambaLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        {/* <div className={styles.shape} /> */}
        <p
      className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
    >
            <strong>Welcome to Heramba.</strong> A complete baby store. {' '}
            {/* <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a> */}
            Wholesale & Retail.
          </p>
          {/* <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link> */}
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12"> 
          {/* Add Hero Images Here */}
          <Image
        src="/heramba-logo-big.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Big heramba logo"
      />
      <Image
        src="/heramba-logo-small.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Small heramba logo"
      />
         </div>
      </div>
    </main>
  );
}
