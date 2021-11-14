import React from "react";
import {
    FooterConatiner,
    FooterWrap,
    FooterItemConatiner,
    FooterItemsWrapper,
    FooterItems,
    FooterTitle,
    Footertext,
    MediaWraper,
    SocialMediaWrap,
    Logo,
    SICONS,
    SoicalLinks,
    CopyRights,
    FootertextHide,
} from "./FooterStyle";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footers = () => {
    return (
        <FooterConatiner id="contact">
            <FooterWrap>
                <FooterItemConatiner>
                    <FooterItemsWrapper>
                        <FooterItems>
                            <FooterTitle>About Us </FooterTitle>
                            <Footertext
                                to={{ pathname: "https://vitap.ac.in/campus-life/clubs-chapters/" }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                VIT-AP
                            </Footertext>
                            <Footertext
                                to={{
                                    pathname: "https://www.instagram.com/semmozhi_tamil_mandram_vitap/",
                                }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                Instagram
                            </Footertext>
                            <FootertextHide to="/SemmozhiTamilMandrum">Vit </FootertextHide>
                        </FooterItems>

                        <FooterItems>
                            <FooterTitle>Contact Us </FooterTitle>
                            <Footertext
                                to={{
                                    pathname:
                                        "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tamil.asso@vitap.ac.in",
                                }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                Gmail
                            </Footertext>
                            <Footertext
                                to={{
                                    pathname:
                                        "https://www.facebook.com/profile.php?id=100072743001857",
                                }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                Meta{" "}
                            </Footertext>
                            <FootertextHide to="/SemmozhiTamilMandrum">Vit </FootertextHide>
                        </FooterItems>
                    </FooterItemsWrapper>


                </FooterItemConatiner>

                <MediaWraper>
                    <SocialMediaWrap>
                        <Logo to="banner"> Semmozhi Tamil Mandram</Logo>

                        <SICONS>
                            <SoicalLinks
                                href="https://www.instagram.com/semmozhi_tamil_mandram_vitap/"
                                target="_blank"
                                aria-label="Instagram"
                                rel="noreferrer"
                            >
                                {" "}
                                <FaInstagram />{" "}
                            </SoicalLinks>
                            <SoicalLinks
                                href="https://github.com/nishanthjoelmj/"
                                target="_blank"
                                aria-label="GitHub"
                                rel="noreferrer"
                            >
                                {" "}
                                <FaGithub />{" "}
                            </SoicalLinks>
                            <SoicalLinks
                                href="//mail.google.com/mail/?view=cm&fs=1&tf=1&to=tamil.asso@vitap.ac.in"
                                target="_blank"
                                aria-label="G-mail"
                                rel="noreferrer"
                            >
                                {" "}
                                <SiGmail />{" "}
                            </SoicalLinks>
                        </SICONS>
                    </SocialMediaWrap>
                </MediaWraper>
                <CopyRights>
                    Copyright © {new Date().getFullYear()} All rights reserved STM VITAP

                </CopyRights>
            </FooterWrap>
        </FooterConatiner>
    );
};

export default Footers;