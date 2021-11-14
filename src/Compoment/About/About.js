import React from "react";
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
    EventSwrapper,
    LinkWrapper,
    ExternalLink,
} from "./AboutStyled";
import "./Youtubes.css";
import Limg from "../../Files/logo.png"
const About = ({
    id,
    lightBg,
    imgStart,
    topline,
    lightText,
    headline,
    darkText,
    description,
    alt,
    eventSwapper,
    dates,
    venu,
    Linkdisc,
    eventLinks,
    headingcolor,
    logos,
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine headingcolor={headingcolor}>{topline}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>

                                <EventSwrapper eventSwapper={eventSwapper}>
                                    <Subtitle darkText={darkText}>{dates}</Subtitle>
                                    <Subtitle darkText={darkText}>{venu}</Subtitle>

                                    <LinkWrapper>
                                        <ExternalLink to={{ pathname: eventLinks }} target="_blank" rel="noreferrer">
                                            {Linkdisc}
                                        </ExternalLink>
                                    </LinkWrapper>
                                </EventSwrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <div id="Youtubeplayerac">
                                    <img src={Limg} width="350px" height="350px" alt="Logo" />
                                </div>
                                <Img src={logos} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default About;