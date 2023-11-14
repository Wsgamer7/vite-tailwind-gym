import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/type";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import contactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const ContactUs = (props: Props) => {
  const inputStyle = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 md:py-16">
      <motion.div
        className="items-center justify-center"
        onViewportEnter={() => props.setSelectedPage(SelectedPage.ContactUs)}
      >
        {/*HEADING AND DESCRIPTION*/}
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
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAP
          </HText>
          <p className="my-5 text-sm">
            we provide ____ddaadaadada ,daada ddaadaadada ,daada ddaadaadada
            ,daada ddaadaadada ,daada
          </p>
        </motion.div>
        {/*FROM and IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/ws18022@outlook.com"
              method="POST"
            >
              <input
                className={`${inputStyle}`}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 chars"}
                </p>
              )}
              <input
                className={`${inputStyle}`}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Invaild email address"}
                </p>
              )}
              <textarea
                className={`${inputStyle} `}
                rows={4}
                placeholder="MESSAGE"
                {...register("message", { required: true })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-400 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          {/*Graphic*/}
          <motion.div className="relative mt-16 basis-2/5 md:mt-0">
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img src={contactUsPageGraphic} alt="contact us graphic" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
