import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import MainContent from "@/components/MainContent/MainContent";

const Dashboard = () => {
    return (
        <div className="flex w-full h-full mobile:justify-center">
            <Sidebar />
            <MainContent/>
        </div>
    );
};

export default Dashboard;