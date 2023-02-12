import { Outlet } from 'react-router-dom';

export function DocsLayout() {
  return (
    <main className="py-10">
      <Outlet />
    </main>
  );
}
