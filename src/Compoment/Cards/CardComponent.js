import React from "react";
import Carousel from "react-elastic-carousel";
import style from "./StyleButtons.css";
import { MainCards } from "./CardStyle";
import Imag from "../../Files/cmsoon.jpg"


function CardComponent() {

    return (
        <>
            <div className="NaveenCard" style={style} id="events">
                <div className="brStyleCard" style={style}></div>
                <h1 className="EventTilesInfo">EVENTS</h1>

                <div className="CarouselWidthController" style={style}>
                    <Carousel breakPoints={breakPoints} style={style}>

                        <MainCard image={Imag} key={1} />
                        <MainCard image={Imag} key={2} />
                        <MainCard image={Imag} key={3} />
                        <MainCard image={Imag} key={4} />
                        <MainCard image={Imag} key={5} />
                        <MainCard image={Imag} key={6} />


                    </Carousel>
                </div>
            </div>
        </>
    );
}

const MainCard = (props) => (
    <>
        <MainCards>
            <img
                className="ImageMaincard"
                src={props.image}
                alt="Images"
                width="400px"
                height="400px"
            />
        </MainCards>
    </>
);

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1500, itemsToShow: 3 },
    { width: 2000, itemsToShow: 3 },
];

export default CardComponent;