const selectFavorite = (reduxState) => {
    return reduxState.favorite.favoriteValue;
}

export {selectFavorite};