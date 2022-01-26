import React from "react";

import Button from "../components/base/Button";
import Layout from "../components/compose/Layout";
import PlaceGroup from "../components/compose/PlaceGroup";
import TestimonialsHighlight from "../components/compose/TestimonialsHighlight";

const LandingPage = () => {
    return (
        <Layout>
            {/* welcome section */}
            <section className="pt-16 pb-14">
                <div className="w-10/12 m-auto flex lg:justify-between">
                    <div className="md:w-full lg:w-8/12 xl:w-4/12">
                        <h1 className="text-[42px] text-stay-dark-blue font-bold mb-5">Forget Busy Work, Start Next Vacation</h1>
                        <p className="text-lg text-gray-400 mb-7 whitespace-pre-line">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
                        {/* TODO: function scroll to most picked */}
                        <Button classes="mb-20">Show Me Now</Button>
                        <div className="flex justify-between">
                            <figure>
                                <img
                                    className="w-8 h-8 mb-2.5"
                                    src="/icons/ic_traveler.png"
                                    alt="travelers-icon"
                                />
                                <figcaption className="text-base text-gray-400">
                                    {/* TODO: funtion format number */}
                                    <span className="text-stay-dark-blue font-bold">80,409</span> travelers
                                </figcaption>
                            </figure>
                            <figure>
                                <img
                                    className="w-8 h-8 mb-2.5"
                                    src="/icons/ic_treasure.png"
                                    alt="treasure-icon"
                                />
                                <figcaption className="text-base text-gray-400">
                                    <span className="text-stay-dark-blue font-bold">80,409</span> treasures
                                </figcaption>
                            </figure>
                            <figure>
                                <img
                                    className="w-8 h-8 mb-2.5"
                                    src="/icons/ic_cities.png"
                                    alt="cities-icon"
                                />
                                <figcaption className="text-base text-gray-400">
                                    <span className="text-stay-dark-blue font-bold">80,409</span> cities
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <figure>
                        <img src="/images/banner.png" alt="banner" />
                    </figure>
                </div>
            </section>
            {/* place by group section */}
            <PlaceGroup title="Most Picked" layout="tile" />

            <PlaceGroup title="House with Beauty Backyard" />
            
            <PlaceGroup title="Hotels with large living room" />

            <PlaceGroup title="Apartments with kitchen set" />
            {/* highlight testimonials section */}
            <TestimonialsHighlight />
        </Layout>
    );
};

export default LandingPage;
