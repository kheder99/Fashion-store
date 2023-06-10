
import React,{Suspense, useState} from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements ,Route, RouterProvider} from 'react-router-dom';
const  RootLayout = React.lazy(()=> import('./Layouts/RootLayout'));
const  Home = React.lazy(()=> import('./pages/Home'));
const  Login = React.lazy(()=> import('./pages/Login'));
const  SignUp = React.lazy(()=> import('./pages/SignUp'));
const  Verification = React.lazy(()=> import('./pages/Verification'));
const  SingleProduct = React.lazy(()=> import('./pages/SingleProduct'));



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
          <Route path='/' element={
            <React.Suspense fallback={<>...</>}>
                    <RootLayout isOpen={isOpen} notification={notification} turnoff={turnoff} handleToggle={handleToggle} toggleNotification={toggleNotification}/>
            </React.Suspense>
          }>
            <Route index element={<Suspense>
              <Home isOpen={isOpen} notification={notification} turnoff={turnoff} handleToggle={handleToggle} toggleNotification={toggleNotification}/>
            </Suspense>}/>

            <Route path='login' element={<Suspense>
              <Login/>
            </Suspense>}/>

            <Route path='signUp' element={<Suspense>
              <SignUp/>
            </Suspense>}/>

            <Route path='verification' element={<Suspense>
              <Verification/>
            </Suspense>}/>
            
            <Route path='product/:id' element={<React.Suspense>
              <SingleProduct isOpen={isOpen} notification={notification} turnoff={turnoff} />
            </React.Suspense>}/>
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
