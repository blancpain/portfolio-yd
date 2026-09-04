import type React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-light p-32 xs:p-6 sm:p-6 md:p-8 lg:p-12 xl:p-24 dark:bg-dark ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
