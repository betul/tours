import React, { useState } from "react";
import Card from "./Card";
import "./Card.css";
import dataList from "./data";

function CardList() {
    const [tours, setTours] = useState(dataList);

    const removeTour = (id) => {
        setTours((prevTours) => {
          return prevTours.filter((tour) => tour.id !== id);
        });
      };
      

    return (
        <>
            {tours.length === 0 ? (
                <main>
                    <section>
                        <div className="title">
                            <h2>no tours left</h2>
                            <button className="btn" onClick={() => setTours(dataList)}>
                                refresh
                            </button>
                        </div>
                    </section>
                </main>
            ) : (
                <main>
                    <section>
                        <div className="title">
                            <h2>our tours</h2>
                            <div className="underline"></div>
                        </div>
                        <div className="tours">
                            {tours.map((tour) => (
                                <Card key={tour.id} tour={tour} removeTour={removeTour} />
                            ))}
                        </div>
                    </section>
                </main>
            )}
        </>
    );
}

export default CardList;
