import React from "react";
import Video from "../../Files/wallpaper.mp4";
import { BannerContainer, Banner, VideoBg } from "./BannerStyle";
import "./Banners.css";

const VideoBanner = () => {
    return (
        <BannerContainer id="banner">
            <Banner>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </Banner>
        </BannerContainer>
    );
};

export default VideoBanner;
