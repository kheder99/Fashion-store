
import React,{useState} from 'react';
import './App.css';
import RootLayout from './Layouts/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Verification from './pages/Verification';
import SingleProduct from './pages/SingleProduct';
import { createBrowserRouter, createRoutesFromElements ,Route, RouterProvider} from 'react-router-dom';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [notification,setNotification] = useState(false);
  const turnoff = () => {
    setIsOpen(false);
    setNotification(false);
  }
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleNotification = () => {
    setNotification(!notification);
  }
    
  //create router 
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout isOpen={isOpen} notification={notification} turnoff={turnoff} handleToggle={handleToggle} toggleNotification={toggleNotification}/>}>
          <Route index element={<Home isOpen={isOpen} notification={notification} turnoff={turnoff} handleToggle={handleToggle} toggleNotification={toggleNotification}/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signUp' element={<SignUp/>}/>
          <Route path='verification' element={<Verification/>}/>
          <Route path='product/:id' element={<SingleProduct isOpen={isOpen} notification={notification} turnoff={turnoff} />}/>
        </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router} />
    {/* <SingleProduct products= {products} isOpen={isOpen} notification={notification} turnoff={turnoff} />
      <Home  isOpen={isOpen} notification={notification} turnoff={turnoff} 
      handleToggle={handleToggle} toggleNotification={toggleNotification}/> */}
    </>
  );
}


export default App;
