import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
// import Navber from '../shared/Navber/Navber';
import Nav from '../shared/Navber/Nav';

const MainLayout = () => {
   return (
      <div className='max-w-7xl mx-auto '>
         <Nav/>
         <Outlet />
         <Footer/>
      </div>
   );
};

export default MainLayout;