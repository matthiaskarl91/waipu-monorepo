import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from './app/pages/home';
import { About } from './app/pages/about';
import { MainLayout } from './app/layout/main-layout';

export default function App() {
  return (
    <BrowserRouter basename="react-1">
      <RoutesList />
    </BrowserRouter>
  );
}

function RoutesList() {
  const location = useLocation();
  const pathname = location.pathname?.split('/').at(-1);

  return (
    <Routes location={`/${pathname}`}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
