import React from "react";
import { Link } from "react-router-dom";
import TextLink from "../../base/TextLink";
import Logo from "../../base/Logo";

const Footer = () => {
    return (
        <footer className="text-base text-gray-400 border-t">
            <section className="w-10/12 mx-auto flex justify-between py-12">
                <div>
                    <figure>
                        <Link to="/">
                            <Logo />
                        </Link>
                        <figcaption className="mt-6 max-w-[258px]">
                            We kaboom your beauty holiday instantly and memorable.
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <h4 className="text-xl mb-6 text-stay-dark-blue font-bold">For Beginners</h4>
                    <nav>
                        <ul>
                            <li className="mb-2.5" key="/new-account">
                                <TextLink to="/new-account">New Account</TextLink>
                            </li>
                            <li className="mb-2.5" key="/booking-room">
                                <TextLink to="/booking-room">Start Booking a Room</TextLink>
                            </li>
                            <li className="mb-2.5" key="/payments">
                                <TextLink to="/payments">Use Payments</TextLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h4 className="text-xl mb-6 text-stay-dark-blue font-bold">Exlore Us</h4>
                    <nav>
                        <ul>
                            <li className="mb-2.5" key="/careers">
                                <TextLink to="/careers">Our Careers</TextLink>
                            </li>
                            <li className="mb-2.5" key="/privacy">
                                <TextLink to="/privacy">Privacy</TextLink>
                            </li>
                            <li className="mb-2.5" key="/term-conditions">
                                <TextLink to="/term-conditions">Term & Conditions</TextLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h4 className="text-xl mb-6 text-stay-dark-blue font-bold">Connect Us</h4>
                    <ul>
                        <li className="mb-2.5" key="/email">
                            <TextLink to="mailto:support@staycation.id" exlink>support@staycation.id</TextLink>
                        </li>
                        <li className="mb-2.5" key="/phone">
                            <TextLink to="telp:+62122081996" exlink>021 - 2208 - 1996</TextLink>
                        </li>
                        <li className="mb-2.5" key="/location">
                            <TextLink disabled>Staycation, Kemang, Jakarta</TextLink>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="text-center py-5">
                Copyright 2019 • All rights reserved • Staycation
            </section>
        </footer>
    );
};

export default Footer;
