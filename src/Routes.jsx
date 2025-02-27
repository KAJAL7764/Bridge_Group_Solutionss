import { Routes, Route } from "react-router-dom";
import About from "./component/Pages/About";
import Home from "./component/Pages/Home";
import Erp from "./component/Pages/Outsourcing/ErpandCustom";
import ContactUs from "./component/Pages/ContactUs";
import InternshipCard from "./component/Pages/careers/InternshipCard";
import CurrentOpening from "./component/Pages/careers/CurrentOpening";
import ImageGrid from "./component/Pages/ImgGrid";
import MutualFunds from "./component/Pages/Investing/MutualFunds";
import WealthManagement from "./component/Pages/Investing/WealthMangement";
import PortfolioManagement from "./component/Pages/Investing/PortfolioManagement";
import PensionFunds from "./component/Pages/Investing/PensionFunds";
import RealState from "./component/Pages/Investing/RealState";
import ErpandCustom from "./component/Pages/Outsourcing/ErpandCustom";
import SoftwareTesting from "./component/Pages/Outsourcing/SoftwareTesting";



const AppRoutes = () => {
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/erp&customizedsoftware" element={<Erp />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/gallery" element={<ImageGrid />} />
      <Route path="/internship" element={<InternshipCard/>} />
      <Route path="/currentopenings" element={<CurrentOpening/>} />
      <Route path="/mutualfund" element={<MutualFunds/>} />
      <Route path="/wealthmanagement" element={<WealthManagement/>} />
      <Route path="/portfoliomanagement" element={<PortfolioManagement/>} />
      <Route path="/pensionfunds" element={<PensionFunds/>} />
      <Route path="/realestate" element={<RealState/>} />
      <Route path="/erp&customizedsoftware" element={<ErpandCustom/>} />
      <Route path="/softwaretesting" element={<SoftwareTesting/>} />
    </Routes>
   
  );
};

export default AppRoutes;
