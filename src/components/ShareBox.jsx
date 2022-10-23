import { IoLogoFacebook, IoLogoTwitter, IoLogoPinterest } from "react-icons/io";

const ShareBox = () => {
  return (
    <div
      className={`absolute flex w-[90vw] invisible opacity-0 -left-8 items-center
      px-10 py-4  rounded-b-[1rem]  bg-[color:var(--dark-grayish-blue)]
      transition-[opacity,visibility] duration-300 peer-checked:visible peer-checked:opacity-100
      md:justify-around md:w-72 md:left-auto md:-top-[6rem] md:py-3 md:rounded-[1rem]
      md:after:absolute md:after:content-[' '] md:after:w-5 after:h-5 md:after:bg-[color:var(--dark-grayish-blue)]
      md:after:rotate-45 md:after:left-1/2 md:after:-bottom-2 md:after:-translate-x-1/2`}
    >
      <p className="tracking-[.25rem] uppercase p-3 md:p-0">Share</p>
      <a
        href="#facebook"
        className="p-3 hover:bg-[color:var(--light-grayish-blue)] rounded-full group z-10"
      >
        <IoLogoFacebook
          className={`text-3xl text-[color:var(--light-grayish-blue)]
        group-hover:text-[color:var(--dark-blue)]`}
        />
      </a>
      <a
        href="#twitter"
        className="p-3 hover:bg-[color:var(--light-grayish-blue)] rounded-full group z-10"
      >
        <IoLogoTwitter
          className={`text-3xl text-[color:var(--light-grayish-blue)]
        group-hover:text-[color:var(--dark-blue)]`}
        />
      </a>
      <a
        href="#pinterest"
        className="p-3 hover:bg-[color:var(--light-grayish-blue)] rounded-full group z-10"
      >
        <IoLogoPinterest
          className={`text-3xl text-[color:var(--light-grayish-blue)]
        group-hover:text-[color:var(--dark-blue)]`}
        />
      </a>
    </div>
  );
};
export default ShareBox;
