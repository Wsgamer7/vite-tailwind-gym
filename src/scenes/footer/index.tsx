import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto w-5/6 gap-10 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p>
            llogo textlogo textlogo textlogo textlogo textlogo textlogo textlogo
            textogo text
          </p>
          <p>@ Evogym all Right Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus</p>
          <p>179-8743-8242</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
