import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import About from './About';
import Home from './Home';
import Navbar from '../Layouts/Navbar';
import Help from '../Layouts/Help';
import Contact, { contactAction } from './Contact'
import Faq from './Faq'
import NotFound from './NotFound';
import CareerLayout from'../Layouts/CareerLayout';
import Career, { careerLoader } from './Career';
import CareerDetails, { careerDetailsLoader } from './CareerDetails';
import CareerError from './CareerError';

const router = createBrowserRouter(
    createRoutesFromElements(
         <Route path='/' element={<Navbar />}>
             <Route index element={<Home />}/>
             <Route path='about' element={<About />}/>   
             <Route path='help' element={<Help />}>
                  <Route path='faq' element={<Faq />}/>
                  <Route path='contact' element={<Contact />} action={contactAction}/>  
            </Route>
            
            <Route path='careers' element={<CareerLayout />} errorElement={<CareerError />}>
               <Route 
                      index
                      element={<Career />}
                      loader={careerLoader}/>
                 <Route 
                      path=':id'
                      element={<CareerDetails />}
                      loader={careerDetailsLoader}
                    />     
              </Route>
            <Route path='*' element={<NotFound />}/>
            
        </Route>
    )
)

export default function Routing () {
    return (
         <RouterProvider router={router}/>
    )
}