import AvatarImage from "../assets/avatar-michelle.jpg";
const AvatarSection = () => {
  return (
    <div className="flex">
      <img src={AvatarImage} alt="Avatar image" className="rounded-full w-12" />
      <div className="flex flex-col justify-center ml-5">
        <p className="font-[700] text-[color:var(--dark-grayish-blue)]">
          Michelle Appleton
        </p>
        <p>28 Jun 2020</p>
      </div>
    </div>
  );
};
export default AvatarSection;
