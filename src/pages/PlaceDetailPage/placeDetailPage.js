import React from 'react';
import IconStat from '../../components/base/IconStat';
import BookingForm from '../../components/compose/BookingForm';
import Breadcrumbs from '../../components/compose/Breadcrumbs/breadcrumbs';
import HeaderSection from '../../components/compose/HeaderSection';
import ImageHighlight from '../../components/compose/ImageHighlight';
import Layout from '../../components/compose/Layout';
import PlaceHighlight from '../../components/compose/PlaceHighlight';
import TestimonialsHighlight from '../../components/compose/TestimonialsHighlight';
import usePlaceDetailPage from './usePlaceDetailPage';

const placeStatistics = [
    {
        icon: "/icons/ic_bedroom.png",
        value: '5',
        label: 'bedrooms',
    },
    {
        icon: "/icons/ic_livingroom.png",
        value: '1',
        label: 'livingroom',
    },
    {
        icon: "/icons/ic_bathroom.png",
        value: '3',
        label: 'bathrooms',
    },
    {
        icon: "/icons/ic_diningroom.png",
        value: '1',
        label: 'diningroom',
    },
    {
        icon: "/icons/ic_wifi.png",
        value: '10',
        label: 'mbp/s',
    },
    {
        icon: "/icons/ic_ac.png",
        value: '7',
        label: 'unit ready',
    },
    {
        icon: "/icons/ic_refrigerator.png",
        value: '2',
        label: 'refrigerators',
    },
    {
        icon: "/icons/ic_tv.png",
        value: '4',
        label: 'televisions',
    },
];

const PlaceDetailPage = () => {
    usePlaceDetailPage();

    return (
        <Layout>
            <Breadcrumbs />
            
            <HeaderSection
                title="Village Angga"
                description="Bogor, Indonesia"
            />
            <section className="w-10/12 m-auto mb-16">
                <ImageHighlight />

                <div className="grid grid-cols-[1.2fr_1fr] gap-4">
                    <div>
                        <header className="mb-2.5">
                            <h2 className="text-stay-dark-blue text-xl font-medium">About the place</h2>
                        </header>

                        <div className="text-base text-gray-400 font-light mb-7">
                            <p className="mb-2.5">Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.</p>
                            <p className="mb-2.5">Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.</p>
                            <p>Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.</p>
                        </div>

                        <div className="flex flex-wrap">
                            { placeStatistics.map((stat, index) => (
                                <IconStat key={ index } classes="w-[110px] mr-12 mb-5" { ...stat } />
                            )) }
                        </div>
                    </div>
                    <div>
                        <BookingForm />
                    </div>
                </div>
            </section>
            <PlaceHighlight title="Treasure to Choose" />
            <TestimonialsHighlight />
        </Layout>
  );
};

export default PlaceDetailPage;
