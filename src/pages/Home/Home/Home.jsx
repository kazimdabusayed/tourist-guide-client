import Package from "../../AllPackages/Package/Package";
import Banner from "../Banner/Banner";
import Story from "../Story/Story";
import TourType from "../TourType/TourType";
import TravelGuideTabs from "../TravelGuideTabs/TravelGuideTabs";


const Home = () => {
   return (
      <div>
         <Banner />
         <TravelGuideTabs/>
         <TourType />
         <Story />
         <Package/>
      </div>
   );
};

export default Home;