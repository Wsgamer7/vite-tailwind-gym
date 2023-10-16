import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/type";
import userMediaQuery from "@/hooks/userMediaQuery";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};
const index = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = userMediaQuery("(min-width: 1000px)");
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <img alt="logo" src={Logo} />

            {/* Right Side */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Class"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <p>Sign in</p>
                  <button> Become a Member</button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Bars3Icon className="h-5 w-5 text-white" />
              </button>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default index;