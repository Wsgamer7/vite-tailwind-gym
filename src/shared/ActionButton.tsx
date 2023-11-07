import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./type";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const ActionButton = (props: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => props.setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {props.children}
    </AnchorLink>
  );
};

export default ActionButton;
