import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../loader/Loader";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <>
      <div className={css.sharedHeader}>
        <nav className={css.navigation}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <div className={css.footer}>
        <p>Copyright © 2023</p>
      </div>
    </>
  );
};

export default SharedLayout;

