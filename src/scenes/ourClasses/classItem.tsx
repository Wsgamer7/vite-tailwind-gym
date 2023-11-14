import React from "react";

type Props = {
  name: string;
  description: string;
  image: string;
};

const ClassItem = (props: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[300px] w-[400px] flex-col
    items-center justify-center whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <div className="relative mx-5 inline-block h-[300px] w-[400px]">
      <div className={overlayStyles}>
        <p>{props.name}</p>
        <p>{props.description}</p>
      </div>
      <img src={props.image} alt={`${props.image}`} />
    </div>
  );
};

export default ClassItem;
