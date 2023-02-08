import { Outlet } from 'react-router-dom';

export function DocsLayout() {
  return (
    <div className="grid flex-1 grid-cols-[240px_minmax(0,1fr)] items-start gap-10">
      <aside className="sticky top-14 z-30 block h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100">
        Side navigation
      </aside>
      <Outlet />
    </div>
  );
}
