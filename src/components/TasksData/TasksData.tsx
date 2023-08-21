import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Link from "next/link";
import Icon from "../Icon/Icon";
import ButtonLabel from "../ButtonLabel/ButtonLabel";
import { useMediaQuery } from "react-responsive";

const TasksData = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ maxWidth: 1032 });

    return (
        <div className="flex flex-col border border-[var(--grayscale-divider)] border-1 desktop:w-[546px] tablet:w-[628px] rounded-lg">
            <div className="flex items-center mt-[32px] ml-[32px] desktop:space-x-[360px] tablet:space-x-[415px] mobile:space-x-[200px]">
                <Paragraph 
                    content="Tasks"
                    color="text-[var(--grayscale-black)]"
                    size="xl"
                    fontWeight="font-[700]"
                />
                <Link href={'#'}>
                    <Paragraph 
                        content="View all"
                        color="text-[var(--main-blue)]"
                        size="sm"
                        fontWeight="font-[600]"
                    />
                </Link>
            </div>
            <div className="ml-[32px] mt-2">
                <Paragraph 
                    content="Today"
                    color="text-[var(--grayscale-gray)]"
                    size="xs"
                    fontWeight="font-[600]"
                />
            </div>

            <div className="flex ml-[32px] mt-[46px] desktop:space-x-[340px] tablet:space-x-[390px] mobile:space-x-[170px] mb-[18px]">
                <Paragraph 
                    content="Create new task"
                    color="text-[var(--grayscale-gray-light)]"
                    size="sm"
                    fontWeight="font-[600]"
                />
                <Icon src="inactive-icon.png" alt="add"/>
            </div>
            {!isTablet && !isMobile && (
                <svg xmlns="http://www.w3.org/2000/svg" width="546" height="2" viewBox="0 0 546 2" fill="none">
                    <path d="M0 1H546" stroke="#DFE0EB"/>
                </svg>
            )}
            {isTablet && !isMobile && (
                <svg xmlns="http://www.w3.org/2000/svg" width="628" height="2" viewBox="0 0 628 2" fill="none">
                    <path d="M0 1H628" stroke="#DFE0EB"/>
                </svg>
            )}
            {isMobile && (
                <svg xmlns="http://www.w3.org/2000/svg" width="390" height="2" viewBox="0 0 546 2" fill="none">
                    <path d="M0 1H546" stroke="#DFE0EB"/>
                </svg>
            )}
            <div className="flex ml-[32px] mt-[20px] desktop:space-x-[240px] tablet:space-x-[290px] mobile:space-x-[80px] mb-[18px]">
                <div className="flex items-center space-x-3 cursor-pointer">
                    <Icon src="checkbox-inactive-icon.png" alt="checkbox inactive" />
                    <Paragraph 
                        content="Finish ticket update"
                        color="text-[var(--grayscale-black)]"
                        size="sm"
                        fontWeight="font-[600]"
                    />
                </div>
                <ButtonLabel 
                    content="Urgent" 
                    backgroundColor="bg-[var(--yellow-default)]"
                    textColor="text-[white]"
                    width="w-[74px]"
                    height="h-[24px]"
                />
            </div>
            {!isTablet && !isMobile && (
                <svg xmlns="http://www.w3.org/2000/svg" width="546" height="2" viewBox="0 0 546 2" fill="none">
                    <path d="M0 1H546" stroke="#DFE0EB"/>
                </svg>
            )}
            {isTablet && !isMobile && (
                <svg xmlns="http://www.w3.org/2000/svg" width="628" height="2" viewBox="0 0 628 2" fill="none">
                    <path d="M0 1H628" stroke="#DFE0EB"/>
                </svg>
            )}
            {isMobile && (
                <svg xmlns="http://www.w3.org/2000/svg" width="390" height="2" viewBox="0 0 546 2" fill="none">
                    <path d="M0 1H546" stroke="#DFE0EB"/>
                </svg>
            )}
            <div className="flex ml-[32px] mt-[20px] desktop:space-x-[210px] tablet:space-x-[260px] mobile:space-x-[50px] mb-[18px]">
                <div className="flex items-center space-x-3 cursor-pointer">
                    <Icon src="checkbox-inactive-icon.png" alt="checkbox inactive" />
                    <Paragraph 
                        content="Create new ticket example"
                        color="text-[var(--grayscale-black)]"
                        size="sm"
                        fontWeight="font-[600]"
                    />
                </div>
                <ButtonLabel 
                    content="New" 
                    backgroundColor="bg-[var(--green-default)]"
                    textColor="text-[white]"
                    width="w-[54px]"
                    height="h-[24px]"
                />
            </div>
            {!isTablet && !isMobile && (
                <svg xmlns="http://www.w3.org/2000/svg" width="546" height="2" viewBox="0 0 546 2" fill="none">
                    <path d="M0 1H546" stroke="#DFE0EB"/>
                </svg>
            )}
            {isTablet && !isMobile && (
                <svg xmlns="http://www.w3.org/2000/svg" width="628" height="2" viewBox="0 0 628 2" fill="none">
                    <path d="M0 1H628" stroke="#DFE0EB"/>
                </svg>
            )}
            {isMobile && (
                <svg xmlns="http://www.w3.org/2000/svg" width="390" height="2" viewBox="0 0 546 2" fill="none">
                    <path d="M0 1H546" stroke="#DFE0EB"/>
                </svg>
            )}
            <div className="flex ml-[32px] mt-[20px] desktop:space-x-[235px] tablet:space-x-[280px] mobile:space-x-[70px] mb-[18px]">
                <div className="flex items-center space-x-3 cursor-pointer">
                    <Icon src="checkbox-active-icon.png" alt="checkbox inactive" />
                    <Paragraph 
                        content="Update ticket report"
                        color="text-[var(--grayscale-black)]"
                        size="sm"
                        fontWeight="font-[600]"
                    />
                </div>
                <ButtonLabel 
                    content="Default" 
                    backgroundColor="bg-[var(--grayscale-gray-lightest)]"
                    textColor="text-[var(--grayscale-gray)]"
                    width="w-[76px]"
                    height="h-[24px]"
                />
            </div>
        </div>
    );
};

export default TasksData;