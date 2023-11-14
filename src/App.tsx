import { useState, useEffect } from "react";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import { SelectedPage } from "@/shared/type";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleSroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleSroll);
    return () => {
      window.removeEventListener("scroll", handleSroll);
    };
  }, []);

  const testSetSelectedPage = (selectedPageNew: SelectedPage) => {
    setSelectedPage(selectedPageNew);
    console.log("now selected page is:" + selectedPage);
  };

  return (
    <div className="app bg-gray-20 ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={selectedPage} />
    </div>
  );
}

export default App;
