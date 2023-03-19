// Libraries
import React, { useEffect } from "react";
import TypeIt from "typeit";

interface QuoteTextProps {}

export const QuoteText: React.FC<QuoteTextProps> = () => {
  // Effects
  useEffect(() => {
    setTimeout(() => {
      new TypeIt("#quote-content", {
        speed: 30,
        loop: true,
        lifeLike: true,
        waitUntilVisible: true,
      })
        .type("Every moment is an opportunity for growth and learning", {
          delay: 2000,
        })
        .delete()
        .type("Kindness is a language that everyone can understand", {
          delay: 2000,
        })
        .delete()
        .type("Change begins with a single step forward", { delay: 2000 })
        .delete()
        .type("Gratitude is the key to a happy life", { delay: 2000 })
        .delete()
        .type("Challenges are opportunities in disguise", { delay: 2000 })
        .delete()
        .type("A positive attitude can make all the difference", {
          delay: 2000,
        })
        .delete()
        .type("Happiness is a journey, not a destination", { delay: 2000 })
        .delete()
        .type("It's okay to make mistakes, they help us learn and grow", {
          delay: 2000,
        })
        .delete()
        .type(
          "The only limit to what we can achieve is the limit we set for ourselves",
          { delay: 2000 }
        )
        .delete()
        .type(
          "Life is too short to hold grudges, let go of the past and move forward",
          { delay: 2000 }
        )
        .delete()
        .go();
    }, 100);
  }, []);

  return (
    <p id="quote-content" className="lg:mt-5 mt-10 lg:text-left text-center" />
  );
};
