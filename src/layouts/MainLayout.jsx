import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navber from '../shared/Navber/Navber';

const MainLayout = () => {
   return (
      <div className=' mx-auto '>
         <Navber/>
         <Outlet />
         <Footer/>
      </div>
   );
};

export default MainLayout;