import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-12 md:p-8
      sm:p-6 xs:p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
