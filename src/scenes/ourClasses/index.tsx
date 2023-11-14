import React from "react";
import { motion } from "framer-motion";
import { SelectedPage, OurClass } from "@/shared/type";
import HText from "@/shared/HText";
import ClassItem from "./classItem";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

const classes: Array<OurClass> = [
  {
    name: "the first classes",
    description: "asahdaossakjasjsa",
    image: image1,
  },
  {
    name: "the second train classes",
    description: "asahdaossakjasjsa",
    image: image2,
  },
  {
    name: "the third classes",
    description: "asahdaossakjasjsa",
    image: image3,
  },
  {
    name: "the forth classes",
    description: "asahdaossakjasjsa",
    image: image4,
  },
  {
    name: "the fifth classes",
    description: "asahdaossakjasjsa",
    image: image5,
  },
  {
    name: "the sixth classes",
    description: "asahdaossakjasjsa",
    image: image6,
  },
];
type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const OurClasses = (props: Props) => {
  return (
    <section id="benefits" className="py=20 mx-auto min-h-full w-5/6">
      <motion.div
        onViewportEnter={() => props.setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Head and description*/}
          <div>
            <HText>OUR CLASS</HText>
            <p className="my-5 text-sm">
              daadaa said lka sdao aoadoiqwe jkajopa oha jassa jkal asdjksa asas
            </p>
          </div>
        </motion.div>
        {/* Images */}
        <div className="mt-10 h-[300px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((classItem) => (
              <ClassItem
                key={classItem.name}
                name={classItem.name}
                description={classItem.description}
                image={classItem.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
