import { useState } from "react";

export const useCreateActions = () => {
  const [showCards, setShowCards] = useState(false);
  const showHideCards = (e) => {
    const cards = document.querySelectorAll(".new-category-playlist-card");

    if (e.target.value === "New Playlist") {
      if (showCards && !cards[1].classList.contains("hide")) {
        cards[0].classList.toggle("hide");
      } else if (showCards && cards[1].classList.contains("hide")) {
        cards[0].classList.toggle("hide");
        setShowCards(false);
      } else if (!showCards && cards[1].classList.contains("hide")) {
        cards[0].classList.remove("hide");
        setShowCards(true);
      } else {
        cards[0].classList.remove("hide");
      }
    }

    if (e.target.value === "New Category") {
      if (showCards && !cards[0].classList.contains("hide")) {
        cards[1].classList.toggle("hide");
      } else if (showCards && cards[0].classList.contains("hide")) {
        cards[1].classList.toggle("hide");
        setShowCards(false);
      } else if (!showCards && cards[0].classList.contains("hide")) {
        cards[1].classList.remove("hide");
        setShowCards(true);
      } else {
        cards[1].classList.remove("hide");
      }
    }
  };

  const moverForm = (e) => {
    const move = document.querySelectorAll(".create-card");

    if (e.target.value === "Next") {
      move[0].style.transform = "translateX(-100%)";
      move[1].style.transform = "translateX(-100%)";
    }

    if (e.target.value === "Back") {
      move[0].style.transform = "translateX(0%)";
      move[1].style.transform = "translateX(0%)";
    }
  };

  return { showHideCards, showCards, setShowCards, moverForm };
};
