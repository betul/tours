import React, { useState } from "react";
import Card from "./Card";
import "./Card.css";
import dataList from "./data";

function CardList() {
    const [tours, setTours] = useState(dataList);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    const toggleSummary = (id) => {
        const newTours = tours.map((tour) => {
            if (tour.id === id) {
                return {
                    ...tour,
                    isSummaryShown: !tour.isSummaryShown,
                };
            } else {
                return tour;
            }
        });
        setTours(newTours);
    };

    if (tours.length === 0) {
        return (
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
        );
    }

    return (
        <main>
            <section>
                <div className="title">
                    <h2>our tours</h2>
                    <div className="underline"></div>
                </div>
                <div className="tours">
                    {tours.map((tour) => (
                        <Card key={tour.id} tour={tour} removeTour={removeTour} toggleSummary={toggleSummary} />
                    ))}
                </div>

            </section>
        </main>
    );
}

export default CardList;
