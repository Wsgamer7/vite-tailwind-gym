export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClass = "ourclass",
  ContactUs = "contactus",
}
export interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}
