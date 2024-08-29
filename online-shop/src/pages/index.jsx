import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar"
import { useState } from "react";
import LandingPage from "../components/LandingPage";

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
    </>
  )
}

export default Home
