import React from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/type";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (page: SelectedPage) => void;
};

const ABenefit = (props: Props) => {
  return (
    <motion.div
      className="border-gary-100 mt-5 rounded-md border-2 px-5 py-16 text-center"
      variants={childVariants}
    >
      <div className="mb-4 flex justify-center">
        <div className="border-gary-100 rounded-full border-2 bg-primary-100 p-4">
          {props.icon}
        </div>
      </div>
      <h4 className="font-bold">{props.title}</h4>
      <p className="my-3">{props.description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-300 underline hover:text-secondary-500"
        onClick={() => props.setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        Learn more
      </AnchorLink>
    </motion.div>
  );
};

export default ABenefit;
