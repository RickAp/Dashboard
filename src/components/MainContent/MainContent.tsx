import React from "react";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import Graphic from "../Graphic/Graphic";
import Tasks from "../Tasks/Tasks";

const MainContent = () => {
    return (
        <div className="flex flex-col bg-[var(--grayscale-bg)] w-full mobile:w-[390px]">
            <NavBar />
            <Cards />
            <Graphic />
            <Tasks/>
        </div>
    );
};

export default MainContent;