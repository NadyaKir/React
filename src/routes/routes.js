import { createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from './protectedRoute';

import RootLayout from '../pages/Root';
import HomePage from '../pages/Home';
import CardPage from '../pages/Card';
import SignInPage from '../pages/SignIn';
import ErrorPage from '../pages/Error';
import SettingsPage from '../pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'signin', element: <SignInPage /> },
      {
        path: 'settings',
        element: (
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        ),
      },
      { path: 'card/:id', element: <CardPage /> },
    ],
  },
]);

export default router;
