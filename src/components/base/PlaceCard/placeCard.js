import propTypes from "prop-types";
import React from "react";

const PlaceCard = ({
  classes,
  overlay
}) => {
  const cssContainerClasses = [
    "rounded-[15px]",
    "hover:cursor-pointer",
    ...classes.split(" ")
  ];
  const cssThumbnailClasses = [
    "relative",
    "box-border",
    "overflow-hidden",
    "rounded-[15px]",
    "w-full",
    "h-44",
    "mb-4"
  ];
  const cssThumbnailImageClasses = ["object-cover"];
  const cssThumbnailBaseClasses = ["w-full", "h-full"];
  const cssDescriptionClasses = ["text-gray-400"];

  let descTitleTextColor = "text-stay-dark-blue";

  if (overlay) {
    descTitleTextColor = "text-white";

    cssContainerClasses.push("relative");
    
    cssThumbnailClasses.splice(cssThumbnailClasses.indexOf("relative"), 1);
    cssThumbnailClasses.splice(cssThumbnailClasses.indexOf("h-44"), 1);
    cssThumbnailClasses.push("absolute", "h-full", "top-0", "left-0");

    cssThumbnailBaseClasses.push(
      "after:content-['']",
      "after:absolute",
      "after:bottom-0",
      "after:left-0",
      "after:w-full",
      "after:h-1/2",
      "after:bg-gradient-to-t",
      "after:from-neutral-700"
    );
       
    cssDescriptionClasses.splice(cssThumbnailClasses.indexOf("text-gray-400"), 1);
    cssDescriptionClasses.push(
      "absolute", 
      "bottom-0", 
      "left-0", 
      "px-6", 
      "pb-6",
      "text-white",
      "w-full", 
    );

    if (classes.length < 1) {
      cssContainerClasses.push("h-52");
    } else {
      cssThumbnailClasses.splice(cssThumbnailClasses.indexOf("object-cover"), 1);
      cssThumbnailImageClasses.push("h-full");
    }
  }

  return (
    // <div className="w-[263px] mx-3.5">
    <div className={cssContainerClasses.join(" ")}>
      <div className={cssThumbnailClasses.join(" ")}>
        <figure className={cssThumbnailBaseClasses.join(" ")}>
          <img
            className={cssThumbnailImageClasses.join(" ")}
            src="/images/places/tabby-town.png"
            alt="tabby town"
          />
        </figure>
        <span className="absolute top-0 right-0 bg-stay-magenta text-white px-9 py-2.5 rounded-bl-[15px]">Popular Choice</span>
      </div>
      <div className={ cssDescriptionClasses.join(" ") }>
        {/* FIXME: maybe need to add onClick listener to handle redirect page */}
        <h3 className={`${descTitleTextColor} text-xl mb-px`}>Tabby Town</h3>
        <p className="text-[15px] font-light">Gunung Batu, Indonesia</p>
      </div>
    </div>
  );
};

PlaceCard.defaultProps = {
  classes: "",
  overlay: false,
};

PlaceCard.propsType = {
  classes: propTypes.string,
  overlay: propTypes.bool,
};

export default PlaceCard;
