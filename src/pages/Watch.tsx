import React from "react";
import FilmCardList from "../components/FilmCardList/FilmCardList";
import Navigation from "../components/Navigation/Navigation";
import Sort from "../components/Sort/Sort";

function Watch(props) {
  return (
    <div>
      <Navigation />
      <Sort />
      <FilmCardList />
    </div>
  );
}

export default Watch;
