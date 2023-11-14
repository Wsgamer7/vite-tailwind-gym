import { motion } from "framer-motion";

import userMediaQuery from "@/hooks/userMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/type";

import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const Home = (props: Props) => {
  const isAboveMediumScreen = userMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="bg-gary-20 gap-16 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => props.setSelectedPage(SelectedPage.Home)}
      >
        {/*Main head*/}
        <div className="z-10 mt-32 md:basis-3/5">
          {/*Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="Homepage text" />
              </div>
            </div>
            <p className="mb-5 ml-1 mt-5 text-sm md:text-start">
              haha haha haha hahahah a hahahaha hahahaha haha haha haha haha
              hahahah a hahahaha hahahaha haha haha haha haha hahahah a hahahaha
              hahahaha haha
            </p>
          </motion.div>
          {/*Actions*/}
          <div className="flex items-center gap-8 md:justify-start">
            <ActionButton setSelectedPage={props.setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-300 underline hover:text-secondary-500"
              onClick={() => props.setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn more
            </AnchorLink>
          </div>
        </div>
        {/*Images */}
        <motion.div
          className="flex basis-3/5 justify-center p-5 md:z-10 md:ml-20 md:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="home page graphic  " />
        </motion.div>
      </motion.div>
      {/*Sponces*/}
      {isAboveMediumScreen && (
        <div className="h-[100px] w-full bg-primary-100 py-5">
          <div className="mx-auto  w-5/6">
            <div className="flex items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="Sponsor Red Bull" />
              <img src={SponsorFortune} alt="Sponsor Fortune" />
              <img src={SponsorForbes} alt="Sponsor Forbes" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
