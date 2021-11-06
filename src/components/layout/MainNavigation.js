import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const isActiveClass = (navData) => (navData.isActive ? classes.active : '');

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" className={isActiveClass}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" className={isActiveClass}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
