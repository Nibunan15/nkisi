import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PageMount from './layouts/PageMount.jsx';
import { PAGES, pathsFor } from './config/routes.js';
import { useSpaLinks } from './hooks/useSpaLinks.js';

function AppRoutes() {
  useSpaLinks();
  const { pathname } = useLocation();
  return (
    <Routes>
      {PAGES.flatMap((page) =>
        pathsFor(page).map((path) => (
          // key = pathname → every navigation fully remounts the page, like the original multi-page site.
          <Route key={path} path={path} element={<PageMount key={pathname} page={page} />} />
        ))
      )}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
