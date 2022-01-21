import React from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../../base/ButtonLink";
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
                                <ButtonLink to="/new-account">New Account</ButtonLink>
                            </li>
                            <li className="mb-2.5" key="/booking-room">
                                <ButtonLink to="/booking-room">Start Booking a Room</ButtonLink>
                            </li>
                            <li className="mb-2.5" key="/payments">
                                <ButtonLink to="/payments">Use Payments</ButtonLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h4 className="text-xl mb-6 text-stay-dark-blue font-bold">Exlore Us</h4>
                    <nav>
                        <ul>
                            <li className="mb-2.5" key="/careers">
                                <ButtonLink to="/careers">Our Careers</ButtonLink>
                            </li>
                            <li className="mb-2.5" key="/privacy">
                                <ButtonLink to="/privacy">Privacy</ButtonLink>
                            </li>
                            <li className="mb-2.5" key="/term-conditions">
                                <ButtonLink to="/term-conditions">Term & Conditions</ButtonLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h4 className="text-xl mb-6 text-stay-dark-blue font-bold">Connect Us</h4>
                    <nav>
                        <ul>
                            <li className="mb-2.5" key="/email">
                                <ButtonLink to="/email" disabled>support@staycation.id</ButtonLink>
                            </li>
                            <li className="mb-2.5" key="/phone">
                                <ButtonLink to="/phone" disabled>021 - 2208 - 1996</ButtonLink>
                            </li>
                            <li className="mb-2.5" key="/location">
                                <ButtonLink to="/location" disabled>Staycation, Kemang, Jakarta</ButtonLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section className="text-center pt-5">
                Copyright 2019 • All rights reserved • Staycation
            </section>
        </footer>
    );
};

export default Footer;
