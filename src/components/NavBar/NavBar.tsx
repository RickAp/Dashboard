import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Icon from "../Icon/Icon";
import { useMediaQuery } from "react-responsive";
import Logo from "../Logo/Logo";

const NavBar = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <div className="flex desktop:mt-[30px] tablet:mt-[30px] desktop:ml-[30px] tablet:ml-[30px] items-center desktop:space-x-[735px] tablet:space-x-[280px] tablet:w-[625px] mobile:w-auto mobile:bg-[var(--sidebar-bg)] mobile:h-[59px] mobile:space-x-[310px]">
            <div>
                {!isMobile
                    ? 
                    <Paragraph 
                    content="Overview"
                    color="text-[var(--grayscale-black)]"
                    size="xxl"
                    fontWeight="font-[700]"
                />
                    :
                    <div className="mobile:ml-[9px]">
                        <Logo width="w-[32px]" height="h-[32px]" />
                    </div>
                }  
            </div>
            <div className="flex items-center space-x-[24px] cursor-pointer">
                {!isMobile && (
                    <Icon src="search-icon.png" alt="search icon"/>
                )}
                <Icon src="notification-icon.png" alt="notification icon"/>
                {!isMobile && (
                    <div className="ml-[8px] mr-[8px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="32" viewBox="0 0 2 32" fill="none">
                        <path d="M1 0V32" stroke="#DFE0EB"/>
                    </svg>
                </div>
                )}
                {!isMobile && (
                    <Paragraph 
                        content="Jones Ferdinand"
                        color="text-[var(--grayscale-black)]"
                        size="sm"
                        fontWeight="font-[600]"
                    />
                )}
                {!isMobile && (
                    <Icon src="profile-icon.png" alt="profile icon" rounded={true} />
                )}
            </div>
        </div>
    );
};

export default NavBar;
