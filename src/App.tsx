import { useState } from "react";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/type";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  return (
    <div className="app bg-gray-20 ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
