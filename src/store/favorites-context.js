import { createContext, useState } from "react";

// define context
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavoriteHandler: (favoriteMeetup) => {},
  removeFavoriteHandler: (meetup) => {},
  itemIsFavoriteHanlder: (meetupUd) => {},
});

// add context logic
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHanlder(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavoriteHandler: addFavoriteHandler,
    removeFavoriteHandler: removeFavoriteHandler,
    itemIsFavoriteHanlder: itemIsFavoriteHanlder,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
