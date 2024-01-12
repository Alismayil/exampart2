import React from 'react'
import './ourTeamSection.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function OurTeamSection() {
    return (
        <section id='ourTeamSection'>
            <div className="ourTeamSectionUpBox">
                <span>Contacts</span>
                <p>Our Team</p>
            </div>
            <div className="ourTeamSectionDownBox">
                <div className="ourTeamBox">

                    <div className="imageBox">
                        <div className="imageHoverBox">
                            <button><FaFacebookF /></button>
                            <button><FaTwitter /></button>
                            <button><FaInstagram /></button>
                        </div>
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                    </div>
                    <div className="textBox">
                        <p>Velva Kopf</p>
                        <span>Biologist</span>
                    </div>
                </div>
                <div className="ourTeamBox">

                    <div className="imageBox">
                        <div className="imageHoverBox">
                            <button><FaFacebookF /></button>
                            <button><FaTwitter /></button>
                            <button><FaInstagram /></button>
                        </div>
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                    </div>
                    <div className="textBox">
                        <p>Sarah Palmer</p>
                        <span>Florist</span>
                    </div>
                </div>
                <div className="ourTeamBox">

                    <div className="imageBox">
                        <div className="imageHoverBox">
                            <button><FaFacebookF /></button>
                            <button><FaTwitter /></button>
                            <button><FaInstagram /></button>
                        </div>
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
                    </div>
                    <div className="textBox">
                        <p>Jessica Swift</p>
                        <span>Photographer  </span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OurTeamSection