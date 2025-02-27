import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './component/Navbar'
import Footer from './component/Footer'
import AppRoutes from './Routes';
import Navbarb from './component/Navbarb';









const App = () => {
  return (
    <div>
  
  <Router>
   <Navbarb/>
   <AppRoutes />
   <Footer/>
   </Router>
    </div>
  )
}



 



export default App
