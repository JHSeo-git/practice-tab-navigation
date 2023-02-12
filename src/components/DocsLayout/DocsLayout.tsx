import { Outlet, useLocation } from 'react-router-dom';

import { RouteContextProvider } from '@/context/RouteContext';
import { getRouteByPath } from '@/router';

import { SidebarNav } from '../SidebarNav';

function DocsLayout() {
  const location = useLocation();

  return (
    <RouteContextProvider initialRoute={getRouteByPath(location.pathname)}>
      <div className="grid flex-1 grid-cols-[240px_minmax(0,1fr)] items-start gap-10">
        <aside className="sticky top-14 z-30 block h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100">
          <div className="py-10 pr-6">
            <SidebarNav />
          </div>
        </aside>
        <main className="py-10">
          <Outlet />
        </main>
      </div>
    </RouteContextProvider>
  );
}

export default DocsLayout;
