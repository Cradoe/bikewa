import Aboutsection from "../../components/aboutSection";
import AppDownloadArea from "../../components/appDownloadArea";
import AwesomeFeatAreaSection from "../../components/awesomeFeatAreaSection";
import Coresection from "../../components/coreSection";
import CustomPlanArea from "../../components/customPlanArea";
import FaqAreaSection from "../../components/faqAreaSection";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Homesection from "../../components/homeSection";
import HowWorkAreaSection from "../../components/howWorkAreaSection";
import Preloader from "../../components/preloader";
import PricingAreaSection from "../../components/pricingAreaSection";
import ScreenshotAreaSection from "../../components/screenshotAreaSection";
import TestimonialArea from "../../components/testimonialArea";
import VideoSection from "../../components/videoSection";

const  HomePage = ()=> {
  return (
    <>
 
    <Preloader />
    
   <Header />
    
    <Homesection />

    <Coresection />
    
    <Aboutsection />
    
    <VideoSection />
    
   <AwesomeFeatAreaSection />

    <HowWorkAreaSection />
   
    <ScreenshotAreaSection />

    <PricingAreaSection />

    <CustomPlanArea />
  
    <TestimonialArea />

    <AppDownloadArea />

    <FaqAreaSection />

    <Footer />

    </>
  );
}

export default HomePage;
