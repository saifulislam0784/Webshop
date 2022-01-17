import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Admin from "./Components/Admin/Admin";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Member from "./Components/Pages/Member/Member";
import Product from "./Components/Pages/Product/Product";
import Profile from "./Components/Admin/Profile/Profile";
import Settings from "./Components/Admin/Settings/Settings";
import Logout from "./Components/Admin/Logout/Logout";
import Password from "./Components/Admin/Password/Password";
import SingleProduct from "./Components/Pages/Product/SingleProduct/SingleProduct";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Blog from "./Components/Pages/Blog/Blog";
import About from "./Components/Pages/About Us/About";
import Contact from "./Components/Pages/Contact Us/Contact";



function App() {

  const [progress, setProgress] = useState(0)

  return (
    
    <>

    <BrowserRouter>

          <LoadingBar 

            color="red"
            progress={100}
            onLoaderFinished={ ()=> setProgress(0)}
          
          />

        <Header></Header>

            <Routes>
              <Route path='/' element={<Home></Home>} />
              <Route path='/Member' element={<Member></Member>} />
              <Route path='/Product' element={<Product></Product>} />
              <Route path='/Product/:productId' element={<SingleProduct></SingleProduct>} />
              <Route path='/Blog' element={<Blog></Blog>} />
              <Route path='/About' element={<About></About>} />
              <Route path='/Contact' element={<Contact></Contact>} />


              <Route path='/dashboard' element={<Admin></Admin>}>
                <Route path='/dashboard' element={ <Dashboard></Dashboard> } />
                <Route path='/dashboard/profile' element={ <Profile></Profile> } />
                <Route path='/dashboard/settings' element={ <Settings></Settings>} />
                <Route path='/dashboard/password' element={ <Password></Password>} />
                <Route path='/dashboard/logout' element={ <Logout></Logout>} />

              </Route>


            </Routes>

        <Footer></Footer>

    </BrowserRouter>
      
    </>

  );
}

export default App;
