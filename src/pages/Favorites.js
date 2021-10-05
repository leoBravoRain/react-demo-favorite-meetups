import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  const totalFavorites = favoritesCtx.totalFavorites;
  let content;

  if (totalFavorites == 0) {
    content = <p>No favorites yet. Please add some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>Favorites page</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
