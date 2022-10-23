const Card = (props) => {
  return (
    <div
      className={`shadow-xl flex flex-col md:flex-row justify-center bg-white rounded-xl 
      max-w-[90vw] md:max-w-[45vw]`}
    >
      {props.children}
    </div>
  );
};
export default Card;
