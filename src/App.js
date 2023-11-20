import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import CardPage from './pages/Card';
import SignInPage from './pages/SignIn';
import ErrorPage from './pages/Error';
import SettingsPage from './pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'signin', element: <SignInPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'card/:id', element: <CardPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
