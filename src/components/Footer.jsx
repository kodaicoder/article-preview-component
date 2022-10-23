import { createPortal } from "react-dom";

const FooterText = () => {
  return (
    <small className="text-[color:var(--primary)]">
      Challenge by{" "}
      <a className="text-blue-500" href="https://www.frontendmentor.io/">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a className="text-blue-500" href="https://github.com/kodaicoder">
        Kodaicoder
      </a>
      .
    </small>
  );
};

export const Footer = (props) => {
  return <>{createPortal(<FooterText />, document.getElementById("footer"))}</>;
};
