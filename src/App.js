import React,{useState,useEffect,useRef} from 'react';
import {BrowserRouter,Switch,useLocation,Route} from 'react-router-dom';
import TopBarProgress from "react-topbar-progress-indicator";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Header} from './components';
import {Home} from './pages';

const CustomSwitch = ({ children }) => {

   const [progress, setProgress] = useState(false)
   const [prevLoc, setPrevLoc] = useState("");
   
   const location = useLocation()

   useEffect(() => {
      setPrevLoc(location.pathname)
      setProgress(true)
   }, [location])

   useEffect(() => {
      setProgress(false)
   }, [prevLoc])


   return (
     <>
     {progress && <TopBarProgress />}
      <Switch>
         { children }
      </Switch>
     </> 
   )
}

const App = () =>{

  const [showform,setShowForm] = useState(false);
  const handleClickForm = () => setShowForm(!showform);

   const homeRef = useRef();
   const aboutRef = useRef();
   const courseRef = useRef();
   const contactRef = useRef();
   const teacherRef = useRef();

  return (
    <BrowserRouter>
      <ToastContainer />
      <Header handleClickForm={handleClickForm}
          homeRef={homeRef}
          aboutRef={aboutRef}
          courseRef={courseRef}
          contactRef={contactRef}
          teacherRef={teacherRef}/>
      <CustomSwitch>
        <Route path='/' exact>
          <Home 
          showform={showform} 
          handleClickForm={handleClickForm}
          homeRef={homeRef}
          aboutRef={aboutRef}
          courseRef={courseRef}
          contactRef={contactRef}
          teacherRef={teacherRef}
          />
        </Route>
      </CustomSwitch>
    </BrowserRouter>
  );
}

export default App;
