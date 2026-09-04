'use client';

import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useState } from 'react';

type FrozenRouteProps = {
  children: React.ReactNode;
};

const FrozenRoute = ({ children }: FrozenRouteProps) => {
  const context = useContext(LayoutRouterContext);
  // Capture the router context on first render so the exiting page keeps
  // rendering its own route while AnimatePresence plays the exit animation.
  const [frozen] = useState(context);

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

export default FrozenRoute;
