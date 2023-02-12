import { X } from 'lucide-react';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { useRouteContext } from '@/context/RouteContext';
import { cn } from '@/lib/utils';
import type { RouteInfo } from '@/router';
import { notFoundRoute } from '@/router';

interface RouteTabProps {
  isCurrent?: boolean;
  onlyOne?: boolean;
  route: RouteInfo;
}
function RouteTab({ isCurrent, onlyOne, route }: RouteTabProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { removeRoute } = useRouteContext();

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (isCurrent) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [isCurrent]);

  return (
    <div
      ref={ref}
      className={cn(
        'text-base-weak inline-flex min-w-[100px] shrink-0 scroll-mx-1 items-center justify-center rounded-[0.185rem] text-sm transition-all',
        'disabled:pointer-events-none disabled:opacity-50',
        isCurrent && 'bg-white text-gray-900 shadow-sm'
      )}
    >
      <Link className="whitespace-nowrap px-3 py-1.5" to={route.path}>
        {route.title}
      </Link>
      {!onlyOne && (
        <button
          type="button"
          className="mr-2 flex items-center justify-center rounded-md p-1 transition-colors hover:bg-gray-200"
          onClick={() => removeRoute(route)}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export function DynamicRoutes() {
  const { currentRoute, routes } = useRouteContext();
  const onlyOne = routes.length === 1;

  if (routes.length === 0) {
    return <>{notFoundRoute.element}</>;
  }

  return (
    <>
      <div className="scrollbar-hide inline-flex w-full items-center overflow-x-auto rounded-md bg-gray-100 p-1">
        {routes.map((route) => (
          <RouteTab
            key={route.path}
            route={route}
            isCurrent={currentRoute === route}
            onlyOne={onlyOne}
          />
        ))}
      </div>
      <div className="py-6 px-3">
        {routes.map((route) => (
          <Visualizer key={route.path} visible={currentRoute === route}>
            {route.element}
          </Visualizer>
        ))}
      </div>
    </>
  );
}

const Visualizer = ({
  visible = true,
  children,
}: {
  visible?: boolean;
  children: React.ReactNode;
}) => {
  return <div className={cn(visible ? 'block' : 'hidden')}>{children}</div>;
};
