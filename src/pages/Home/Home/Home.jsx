import Banner from "../Banner/Banner";
import Story from "../Story/Story";
import TourType from "../TourType/TourType";
import TraverlGuideTabs from "../TraverlGuideTabs/TraverlGuideTabs";


const Home = () => {
   return (
      <div>
         <Banner />
         <TraverlGuideTabs/>
         <TourType />
         <Story/>
      </div>
   );
};

export default Home;