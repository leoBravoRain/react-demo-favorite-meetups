import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const totalFavorites = favoritesCtx.totalFavorites;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              All meetups
            </Link>
          </li>
          <li>
            <Link to="/new-meetup">New meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              {totalFavorites>0 && (
                <span className={classes.badge}>{totalFavorites}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
