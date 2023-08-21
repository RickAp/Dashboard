import React from "react";
import Tickets from "../Tickets/Tickets";
import TasksData from "../TasksData/TasksData";

const Tasks = () => {
    return (
        <div className="flex tablet:flex-col mobile:flex-col desktop:w-[1122px] tablet:w-[628px] mobile:w-[390px] desktop:h-[366px] tablet:h-auto mt-[30px] desktop:ml-[30px] tablet:ml-[30px] mb-[38px] desktop:space-x-[30px] tablet:space-y-[10px] mobile:space-y-[10px]">
            <Tickets />
            <TasksData />
        </div>
    );
};

export default Tasks;