import React from 'react';
import propTypes from 'prop-types';
import { Check as IconCheck } from 'react-feather';

const StepIndicator = ({
  active,
  children,
  complete,
  last,
  size,
  space,
}) => {
  const containerClasses = ["relative"];
  const wrapperClasses = ["p-1.5"];
  const indicatorClasses = [
    "rounded-full",
    "bg-gray-200",
    "text-2xl",
    "text-gray-400",
    "pt-[7px]",
    "px-5",
    "pb-2",
  ];
  const containerSpace = !last ? `${ space }px` : '0px';
  const indicatorSize = `${ size }px`;

  if (!last) {
    wrapperClasses.push(
      "before:content-['']",
      "before:absolute",
      "before:top-8",
      "before:right-[-10px]",
      `before:w-full`,
      "before:h-px",
      "before:bg-gray-200",
      "before:-z-10"
    );
    if (!active) indicatorClasses.push("pl-[18px]");
  }
  if (active) {
    wrapperClasses.push(
      "rounded-full",
      "bg-white",
      "border",
      "border-gray-200",
    );
    indicatorClasses.push("font-medium");
  }
  if (complete) {
    indicatorClasses.splice(indicatorClasses.indexOf("bg-gray-200"), 1);
    indicatorClasses.splice(indicatorClasses.indexOf("text-gray-400"), 1);
    indicatorClasses.push("bg-teal-500", "text-white");
  }

  const maybeComplete = !complete
    ? children
    : (
      <div className="translate-x-[-7px] translate-y-[5px]">
        <IconCheck />
      </div>
    );

  return (
    <div className={containerClasses.join(" ")} style={{ paddingRight: containerSpace }}>
      <div className={wrapperClasses.join(" ")}>
        <div
          className={ indicatorClasses.join(" ") }
          style={ { width: indicatorSize, height: indicatorSize } }
        >
          {maybeComplete}
        </div>
      </div>
    </div>
  );
};

StepIndicator.defaultProps = {
  active: false,
  complete: false,
  last: false,
  size: 50,
  space: 50,
};

StepIndicator.propsType = {
  active: propTypes.bool,
  complete: propTypes.bool,
  last: propTypes.bool,
  size: propTypes.number,
  space: propTypes.number,
};

export default StepIndicator;
