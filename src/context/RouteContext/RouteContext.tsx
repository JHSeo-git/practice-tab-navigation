import * as React from 'react';
import { matchRoutes, useLocation } from 'react-router-dom';

import type { RouteInfo } from '@/router';
import { notFoundRoute } from '@/router';

interface RouteContextValue {
  routes: RouteInfo[];
  appendRoute: (route: RouteInfo) => void;
  removeRoute: (route: RouteInfo) => void;
  resetRoute: () => void;
  currentRoute: RouteInfo;
}

const RouteContext = React.createContext<RouteContextValue | null>(null);

const RouteContextProvider = ({
  initialRoute,
  limit = 10,
  children,
}: {
  initialRoute: RouteInfo;
  limit?: number;
  children: React.ReactNode;
}) => {
  const [routes, setRoutes] = React.useState<RouteInfo[]>([initialRoute]);
  const location = useLocation();

  const appendRoute = React.useCallback(
    (route: RouteInfo) => {
      setRoutes((prevRoutes) => {
        if (prevRoutes.find((r) => r.path === route.path)) {
          return prevRoutes;
        }

        const newRoutes = [...prevRoutes, route];
        return newRoutes.slice(Math.max(newRoutes.length - limit, 0));
      });
    },
    [setRoutes]
  );

  const removeRoute = React.useCallback(
    (route: RouteInfo) => {
      setRoutes((prevRoutes) => prevRoutes.filter((r) => r !== route));
    },
    [setRoutes]
  );

  const resetRoute = React.useCallback(() => {
    setRoutes([]);
  }, [setRoutes]);

  const currentRoute = React.useMemo(() => {
    return matchRoutes(routes, location)?.at(0)?.route ?? notFoundRoute;
  }, [routes, location]);

  const value = React.useMemo(() => {
    return {
      routes,
      appendRoute,
      removeRoute,
      resetRoute,
      currentRoute,
    };
  }, [routes, appendRoute, removeRoute, resetRoute, currentRoute]);

  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>;
};

const useRouteContext = () => {
  const context = React.useContext(RouteContext);
  if (!context) {
    throw new Error('useRouteContext must be used within a RouteContextProvider');
  }
  return context;
};

export {
  //
  RouteContextProvider,
  useRouteContext,
};
