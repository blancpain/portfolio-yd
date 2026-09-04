import Link from 'next/link';

const Logo = () => {
  return (
    <div className="mt-2 flex items-center justify-center">
      <Link
        aria-label="Home"
        href="/"
        className="flex h-16 w-16 items-center justify-center rounded-full border border-transparent border-solid bg-dark font-bold text-2xl text-light hover:animate-rainbow motion-reduce:hover:animate-none motion-reduce:hover:bg-primary dark:border-light motion-reduce:dark:hover:bg-primaryDark motion-reduce:dark:hover:text-dark"
      >
        YD
      </Link>
    </div>
  );
};

export default Logo;
