import CustomersComments from "./components/CustomersComments";
import Description from "./components/Description";
import MainBanner from "./components/MainBanner";
import Services from "./components/Services";
import WeWorkWith from "./components/WeWorkWith";

export default function IndexPage() {
  return (
    <>
      <MainBanner />
      <Description />
      <Services />
      <WeWorkWith />
      <CustomersComments />
    </>
  );
}
