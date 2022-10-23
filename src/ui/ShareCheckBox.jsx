import ShareIcon from "../assets/icon-share.svg";
import { IoMdShareAlt } from "react-icons/io";
import { useState } from "react";
import ShareBox from "../components/ShareBox";
import { useRef } from "react";
const ShareCheckBox = () => {
  return (
    <div className="md:relative flex justify-center items-center">
      <input
        id="shareCheckbox"
        name="shareCheckbox"
        className="appearance-none peer"
        type="checkbox"
      />
      <label
        htmlFor="shareCheckbox"
        className={`group rounded-full p-2 bg-[color:var(--light-grayish-blue)] cursor-pointer
        transition-all duration-300
        hover:bg-[color:var(--dark-blue)]
        peer-checked:bg-[color:var(--dark-blue)] peer-checked:[&>svg]:text-[color:var(--light-grayish-blue)]
        z-50`}
      >
        <IoMdShareAlt
          className={`text-2xl text-[color:var(--dark-blue)]
          transition-all duration-300
          group-hover:text-[color:var(--light-grayish-blue)]
          `}
        />
      </label>
      <ShareBox />
    </div>
  );
};
export default ShareCheckBox;
