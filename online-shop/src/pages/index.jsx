import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar"
import { useState } from "react";
import LandingPage from "../components/LandingPage";
import Infos from "../components/Infos";
import {homeObjOne, homeObjTwo} from "../components/Infos/Data"
import Footer from "../components/Footer";
function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <LandingPage />
        <Infos {...homeObjOne}/>
        <Infos {...homeObjTwo}/>
        <Footer />
    </>
  )
}

export default Home
