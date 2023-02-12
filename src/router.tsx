import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import DocsLayout from './components/DocsLayout/DocsLayout';
import { DynamicRoutes } from './components/DynamicRoutes';
import { RootLayout } from './components/RootLayout';
import DocsIndexPage from './pages/docs';
import AlertPage from './pages/docs/components/alert';
import ButtonPage from './pages/docs/components/button';
import ColorPage from './pages/docs/design/color';
import DesignSystemPage from './pages/docs/design/design-system';
import TypographyPage from './pages/docs/design/typography';
import InstallationPage from './pages/docs/installation';
import IntroductionPage from './pages/docs/introduction';
import IndexPage from './pages/index-page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<IndexPage />} />
      <Route path="docs" element={<DocsLayout />}>
        <Route index path="*" element={<DynamicRoutes />} />
      </Route>
    </Route>
  )
);

export interface RouteInfo {
  index?: boolean;
  path: string;
  title: string;
  element: JSX.Element;
}
export const docsRoutes: RouteInfo[] = [
  {
    index: true,
    path: '/docs',
    title: 'Welcome',
    element: <DocsIndexPage />,
  },
  {
    path: '/docs/introduction',
    title: 'Introduction',
    element: <IntroductionPage />,
  },
  {
    path: '/docs/installation',
    title: 'Installation',
    element: <InstallationPage />,
  },
  {
    path: '/docs/design-system',
    title: 'Design System',
    element: <DesignSystemPage />,
  },
  {
    path: '/docs/color',
    title: 'Color',
    element: <ColorPage />,
  },
  {
    path: '/docs/typography',
    title: 'Typography',
    element: <TypographyPage />,
  },
  {
    path: '/docs/components/alert',
    title: 'Alert',
    element: <AlertPage />,
  },
  {
    path: '/docs/components/button',
    title: 'Button',
    element: <ButtonPage />,
  },
];

export const notFoundRoute: RouteInfo = {
  path: '*',
  title: 'Not Found',
  element: <div>Not Found</div>,
};

export const getRouteByPath = (path: string) => {
  const found = docsRoutes.find((route) => route.path === path);

  return found;
};

export const getElementByPath = (path: string) => {
  const found = getRouteByPath(path);

  if (!found) {
    return null;
  }

  return found.element;
};
