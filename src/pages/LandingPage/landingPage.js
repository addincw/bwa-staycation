import React from "react";

import { formatToCurrency } from "../../utils/common";

import Button from "../../components/base/Button";
import IconStat from "../../components/base/IconStat";
import Layout from "../../components/compose/Layout";
import PlaceHighlight from "../../components/compose/PlaceHighlight";
import TestimonialsHighlight from "../../components/compose/TestimonialsHighlight";
import useLandingPage from "./useLandingPage";

const welcomeStatistics = [
    {
        icon: "/icons/ic_traveler.png",
        value: 80409,
        label: 'travelers',
    },
    {
        icon: "/icons/ic_treasure.png",
        value: 80409,
        label: 'treasures',
    },
    {
        icon: "/icons/ic_cities.png",
        value: 80409,
        label: 'cities',
    },
];

const LandingPage = () => {   
    const {
        handleWelcomeButtonOnClick,
        mostPickedRef,
    } = useLandingPage();

    return (
        <Layout>
            {/* welcome section */}
            <section className="pt-16 pb-14">
                <div className="w-10/12 m-auto flex lg:justify-between">
                    <div className="md:w-full lg:w-8/12 xl:w-4/12">
                        <h1 className="text-[42px] text-stay-dark-blue font-bold mb-5">Forget Busy Work, Start Next Vacation</h1>
                        <p className="text-lg text-gray-400 mb-7 whitespace-pre-line">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
                        <Button classes="mb-20" onClick={handleWelcomeButtonOnClick}>
                            Show Me Now
                        </Button>
                        <div className="flex justify-between">
                            { welcomeStatistics.map(({ value, ...stat }, index) => (
                                <IconStat key={ index } value={ formatToCurrency(value) } { ...stat } />
                            )) }
                        </div>
                    </div>
                    <figure>
                        <img src="/images/banner.png" alt="banner" />
                    </figure>
                </div>
            </section>
            {/* place by group section */}
            <PlaceHighlight
                ref={mostPickedRef}
                layout="tile"
                title="Most Picked" 
            />

            <PlaceHighlight title="House with Beauty Backyard" />
            
            <PlaceHighlight title="Hotels with large living room" />

            <PlaceHighlight title="Apartments with kitchen set" />
            {/* highlight testimonials section */}
            <TestimonialsHighlight />
        </Layout>
    );
};

export default LandingPage;
