import { Outlet } from 'react-router-dom';

import { SidebarNav } from '../SidebarNav';
import { SiteFooter } from '../SiteFooter';
import { SiteHeader } from '../SiteHeader';

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <div className="container flex-1">
        <div className="grid flex-1 grid-cols-[240px_minmax(0,1fr)] items-start gap-10">
          <aside className="sticky top-14 z-30 block h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100">
            <div className="py-10 pr-6">
              <SidebarNav />
            </div>
          </aside>
          <Outlet />
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
