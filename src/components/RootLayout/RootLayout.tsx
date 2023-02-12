import { Outlet } from 'react-router-dom';

import { SiteFooter } from '../SiteFooter';
import { SiteHeader } from '../SiteHeader';

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <div className="container flex-1">
        <Outlet />
      </div>

      <SiteFooter />
    </div>
  );
}
