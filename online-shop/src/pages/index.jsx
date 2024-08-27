import SideBar from "../components/SideBar"
import NavBar from "../components/NavBar"
import { useState } from "react";

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
    </>
  )
}

export default Home
