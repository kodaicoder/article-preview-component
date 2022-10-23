import Card from "./ui/Card";
import CardLayout from "./layouts/CardLayout";
import Image from "./components/Image";
import DescriptionContainer from "./components/Description/DescriptionContainer";
import { Footer } from "./components/Footer";

export default function App() {
  console.log("render");
  return (
    <>
      <Card>
        <CardLayout>
          <Image />
        </CardLayout>
        <CardLayout>
          <DescriptionContainer />
        </CardLayout>
      </Card>
      <Footer />
    </>
  );
}
