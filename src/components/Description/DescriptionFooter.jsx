import ShareCheckBox from "../../ui/ShareCheckBox";
import AvatarSection from "../AvatarSection";
import ShareBox from "../ShareBox";

const DescriptionFooter = () => {
  return (
    <div className="relative w-full flex justify-between mt-8">
      <AvatarSection />
      <ShareCheckBox>
        <ShareBox />
      </ShareCheckBox>
    </div>
  );
};
export default DescriptionFooter;
