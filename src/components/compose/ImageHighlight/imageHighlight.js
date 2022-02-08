import React from 'react';

const ImageHighlight = () => {
    return (
        <div className="grid grid-rows-2 grid-cols-[1.2fr_1fr] gap-4 mb-16">
            <figure className="rounded-[15px] row-span-2 box-border overflow-hidden">
                <img className="w-full h-full object-cover" src="/images/places/anggana.png" alt="anggana" />
            </figure>
            <figure className="rounded-[15px] box-border overflow-hidden lg:h-60 xl:h-72">
                <img className="w-full h-full object-cover" src="/images/places/anggana.png" alt="anggana" />
            </figure>
            <figure className="rounded-[15px] box-border overflow-hidden lg:h-60 xl:h-72">
                <img className="w-full h-full object-cover" src="/images/places/anggana.png" alt="anggana" />
            </figure>
        </div>
    );
};

export default ImageHighlight;
