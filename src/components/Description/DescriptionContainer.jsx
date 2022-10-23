import DescriptionFooter from "./DescriptionFooter";
import DescriptionText from "./DescriptionText";

const DescriptionContainer = () => {
  return (
    <div className="flex flex-col w-full h-full justify-between pt-8 pb-4 px-8 md:p-8">
      <DescriptionText />
      <DescriptionFooter />
    </div>
  );
};
export default DescriptionContainer;
