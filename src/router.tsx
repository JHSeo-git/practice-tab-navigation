import { createBrowserRouter } from 'react-router-dom';

import { DocsLayout } from './components/DocsLayout/DocsLayout';
import { RootLayout } from './components/RootLayout';
import DocsIndexPage from './pages/docs';
import DesignSystemPage from './pages/docs/design-system';
import InstallationPage from './pages/docs/installation';
import IntroductionPage from './pages/docs/introduction';
import IndexPage from './pages/index-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'docs',
        element: <DocsLayout />,
        children: [
          {
            index: true,
            element: <DocsIndexPage />,
          },
          {
            path: 'introduction',
            element: <IntroductionPage />,
          },
          {
            path: 'installation',
            element: <InstallationPage />,
          },
          {
            path: 'design-system',
            element: <DesignSystemPage />,
          },
        ],
      },
    ],
  },
]);
