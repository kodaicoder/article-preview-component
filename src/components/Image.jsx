import CardImage from "../assets/drawers.jpg";

const Image = () => {
  return (
    <img
      src={CardImage}
      alt="drawers image"
      className={`w-full h-full object-cover object-top rounded-t-xl max-h-[35vh]
      md:rounded-tr-none md:rounded-l-xl md:object-left md:max-h-max`}
    />
  );
};
export default Image;
