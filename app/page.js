import DeviceCategory from "./Components/DeviceCategory";
import Footer from "./Components/Footer";
import GeekCare from "./Components/GeekCare";
import GeekContent from "./Components/GeekContent";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import TestContact from "./Components/TestContact";

export default function Home() {
  return (
    <>
      
      <HeroSection/>
      <GeekContent/>
      <GeekCare/>
      <DeviceCategory/>
      <TestContact/>
    
    </>
  );
}
