import React from "react";
import Carousel from "react-elastic-carousel";
import "./TestTimonialStyle.css";
import Limg from "../../Files/q1.jpg"
function TestTimonialCardComponent() {


    return (
        <>
            <Carousel breakPoints={breakPoints} className="TestMon">

                <TsMainCard
                    image={Limg}
                    key={1}
                    testimony="One of the best clubs out there to hone your skills."
                    author="Thiruvalluvar"
                />
                <TsMainCard
                    image={Limg}
                    key={2}
                    testimony="One of the best clubs out there to hone your skills."
                    author="Thiruvalluvar"
                />
                <TsMainCard
                    image={Limg}
                    key={3}
                    testimony="One of the best clubs out there to hone your skills."
                    author="Thiruvalluvar"
                />


            </Carousel>
        </>
    );
}

const TsMainCard = (props) => (
    <>
        <div className="TsConatiner">
            <div className="TS1">
                <img
                    className="ImageTsCard"
                    src={props.image}
                    alt="Images"
                    width="147px"
                    height="220px"
                />
            </div>

            <div className="TS2">
                <p>
                    {props.testimony} <span>{props.author}</span>
                </p>
            </div>
        </div>
    </>
);

// Styles

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 800, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
    { width: 2000, itemsToShow: 1 },
];

export default TestTimonialCardComponent;