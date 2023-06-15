import React, { useState } from "react";
import Banner1 from "./Banner1";
import Navbar from './Navbar'
import Footer from './Footer'
import Power from "./Power";

const Home = () => {

    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <>
            <Navbar openModal={openModal} closeModal={closeModal} open={open} />
            <Banner1 openModal={openModal} closeModal={closeModal} open={open} />
            <Power />
            <Footer />

        </>
    )
};

export default Home;
