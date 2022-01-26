import React from "react";
import Button from "../../base/Button";
import StarRating from "../StarRating";

const TestimonialsHighlight = () => {
    return (
        <section className="pt-2 pb-16">
            <div className="w-10/12 m-auto flex">
                <figure className="w-3/12">
                    <img src="/images/testimonies/family-1-inframe.png" alt="family testimonials" />
                </figure>
                <div className="text-stay-dark-blue pt-20 pl-14">
                    <h2 className="text-2xl font-medium mb-10">Happy Family</h2>
                    <StarRating classes="mb-2" />
                    <p className="text-3xl max-w-[595px] mb-2">What a great trip with my family and I should try again next time soon.</p>
                    <p className="text-lg text-gray-400 font-light mb-12">Angga, Product Designer</p>

                    <Button>Read Their Story</Button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsHighlight;
