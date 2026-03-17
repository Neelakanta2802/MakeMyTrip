import React from "react";
import './SampleCards.css'
function SampleCards() {

  const cards = [
    {
      img: "https://promos.makemytrip.com/appfest/2x//Desktop-LongWeekend-03Mar.jpg?im=Resize=(134,134)",
      h1: "Upto 40% OFF* on Flights, Stays and Packages and more",
      p: "Pause your routine & get travel-ready for the April long weekend."
    },
    {
      img: "https://promos.makemytrip.com/appfest/2x//AirAsia-Desktop-LongWeekend-06Mar.jpg?im=Resize=(134,134)",
      h1: "Live Now: Upto 50% OFF* on AirAsia Flights",
      p: "To south east Asia, Japan and Australia"
    },
    {
      img: "https://promos.makemytrip.com/appfest/2x//Desktop-Songkran-10Mar.jpg?im=Resize=(134,134)",
      h1: "HEAD TO THAILAND FOR SONGKRAN",
      p: "Grab Upto 30% OFF* on Flights, Stays, Packages and more!"
    },
    {
      img: "https://promos.makemytrip.com/appfest/2x//116X116-dbs-bank-10032026.jpg?im=Resize=(134,134)",
      h1: "Summer Trips Made Better",
      p: "With Upto 30% OFF* on Flights, Stays & Holidays Packages"
    }
  ];

  return (
    <div className="cards-container">

      {cards.map((card, index) => (
        <div className="offers-cards" key={index}>

          <div>
            <img
              height="134"
              width="134"
              src={card.img}
              alt=""
            />
          </div>

          <div className="offer-content">
            <div>
              <h1>{card.h1}</h1>
              <p>{card.p}</p>
            </div>

            <p className="book-now">BOOK NOW</p>
          </div>

        </div>
      ))}

    </div>
  );
}

export default SampleCards;