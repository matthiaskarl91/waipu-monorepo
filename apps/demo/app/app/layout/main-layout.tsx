import { NavLink, Outlet } from 'react-router';

export function MainLayout() {
  return (
    <div>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
