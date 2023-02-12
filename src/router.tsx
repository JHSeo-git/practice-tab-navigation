import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { DynamicRoutes } from './components/DynamicRoutes';
import { RootLayout } from './components/RootLayout';
import DocsIndexPage from './pages/docs';
import DesignSystemPage from './pages/docs/design-system';
import InstallationPage from './pages/docs/installation';
import IntroductionPage from './pages/docs/introduction';
import IndexPage from './pages/index-page';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       {
//         index: true,
//         element: <IndexPage />,
//       },
//       {
//         path: 'docs',
//         element: <DocsLayout />,
//         children: [
//           {
//             index: true,
//             element: <DocsIndexPage />,
//           },
//           {
//             path: 'introduction',
//             element: <IntroductionPage />,
//           },
//           {
//             path: 'installation',
//             element: <InstallationPage />,
//           },
//           {
//             path: 'design-system',
//             element: <DesignSystemPage />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<IndexPage />} />
      <Route path="docs">
        {/* <Route index element={<DocsIndexPage />} />
        <Route path="introduction" element={<IntroductionPage />} />
        <Route path="installation" element={<InstallationPage />} />
        <Route path="design-system" element={<DesignSystemPage />} /> */}
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
];

export const notFoundRoute: RouteInfo = {
  path: '*',
  title: 'Not Found',
  element: <div>Not Found</div>,
};

export const getRouteByPath = (path: string) => {
  const found = docsRoutes.find((route) => route.path === path);

  return found ?? notFoundRoute;
};

export const getElementByPath = (path: string) => {
  const found = getRouteByPath(path);
  if (!found) {
    return null;
  }

  return found.element;
};
