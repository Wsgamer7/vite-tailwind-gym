import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitPageGraphics from "@/assets/BenefitsPageGraphic.png";
import { motion } from "framer-motion";

import { SelectedPage, Benefit } from "@/shared/type";
import HText from "@/shared/HText";
import ABenefit from "./ABenefit";
import ActionButton from "@/shared/ActionButton";

const contianer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits: Array<Benefit> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State for the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "expert Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];
type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Benefits = (props: Props) => {
  return (
    <section id="benefits" className="py=20 mx-auto min-h-full w-5/6">
      <motion.div
        onViewportEnter={() => props.setSelectedPage(SelectedPage.Benefits)}
      >
        {/*HEAD*/}
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
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            we provide ____ddaadaadada ,daada ddaadaadada ,daada ddaadaadada
            ,daada ddaadaadada ,daada
          </p>
        </motion.div>
        {/*Benefits*/}
        <motion.div
          className="items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={contianer}
        >
          {benefits.map((benefit: Benefit) => (
            <ABenefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={props.setSelectedPage}
            />
          ))}
        </motion.div>
        {/*Graphics and description*/}
        <div className="mx-auto mt-10 w-5/6 items-center justify-center gap-20 md:flex md:h-5/6">
          {/*Graphic*/}
          <img
            className="mx-auto"
            src={BenefitPageGraphics}
            alt="benefit page graphics"
          />
          {/*Description*/}
          <div className="md:mx-auto">
            {/*Title*/}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.3, ease: "easeIn" }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <HText>
                  MILLIONS OF HAPPY MENBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </div>
            </motion.div>
            {/*description*/}
            <div className="my-5">
              <p className="mt-5">
                haahhahahahahashhsasakjasdklasdkjajdasdjakjadqhw
              </p>
              <p>qiqwwqqqeqqweqqeqeqeweqwqe qiqwwqqqeqqweqqeqeqeweqwqe</p>
            </div>
            {/*Button*/}
            <div className="relative mt-16">
              <div className="before:absolute before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={props.setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
