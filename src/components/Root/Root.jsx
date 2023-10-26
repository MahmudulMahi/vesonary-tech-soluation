
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Header from '../Layouts/Header/Header';

const Root = () => {
  return (
    <div className='container   mx-auto px-2'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;