import Link from 'next/link';

const Logo = () => {
  return (
    <div className="mt-2 flex items-center justify-center">
      <Link
        aria-label="Home"
        href="/"
        className="flex h-16 w-16 items-center justify-center rounded-full border border-transparent border-solid bg-dark font-bold text-2xl text-light hover:animate-rainbow dark:border-light"
      >
        YD
      </Link>
    </div>
  );
};

export default Logo;
