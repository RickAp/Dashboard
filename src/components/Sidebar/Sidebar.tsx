import React from "react";
import Logo from "../Logo/Logo";
import Paragraph from "../Paragraph/Paragraph";
import Icon from "../Icon/Icon";

const Sidebar = () => {
    return (
        <div className="flex flex-col w-[255px] tablet:w-[76px] mobile:hidden h-auto bg-[var(--sidebar-bg)]">
            <div className="flex items-center tablet:justify-center mt-[37px] desktop:ml-[32px] space-x-3 desktop:mr-[40px] mb-[59px]">
                <Logo width="w-[32px]" height="h-[32px]" />
                <Paragraph
                    content="Dashboard Kit"
                    color="text-[var(--sidebar-gray)]"
                    size="xl"
                    fontWeight="font-[700]"
                    hideText="tablet:hidden"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center px-[32px] space-x-6 py-4 bg-[var(--grayscale-gray)] opacity-40 cursor-pointer">
                    <Icon src="graphic-icon.png" alt="graphic icon" />
                    <Paragraph 
                        content="Overview"
                        color="text-[var(--main-light-blue)]"
                        fontWeight="font-[400]"
                        hideText="tablet:hidden"
                    />
                </div>
                <div className="flex items-center px-[32px] space-x-6 py-4 cursor-pointer hover:opacity-40">
                    <Icon src="tickets-icon.png" alt="graphic icon" />
                    <Paragraph 
                        content="Tickets"
                        color="text-[var(--main-light-blue)]"
                        fontWeight="font-[400]"
                        hideText="tablet:hidden"
                    />
                </div>
                <div className="flex items-center px-[32px] space-x-6 py-4 cursor-pointer hover:opacity-40">
                    <Icon src="ideas-icon.png" alt="graphic icon" />
                    <Paragraph 
                        content="Ideas"
                        color="text-[var(--main-light-blue)]"
                        fontWeight="font-[400]"
                        hideText="tablet:hidden"
                    />
                </div>
                <div className="flex items-center px-[32px] space-x-6 py-4 cursor-pointer hover:opacity-40">
                    <Icon src="contacts-icon.png" alt="graphic icon" />
                    <Paragraph 
                        content="Contacts"
                        color="text-[var(--main-light-blue)]"
                        fontWeight="font-[400]"
                        hideText="tablet:hidden"
                    />
                </div>
                <div className="flex items-center px-[32px] space-x-6 py-4 cursor-pointer hover:opacity-40">
                    <Icon src="agents-icon.png" alt="graphic icon" />
                    <Paragraph 
                        content="Agents"
                        color="text-[var(--main-light-blue)]"
                        fontWeight="font-[400]"
                        hideText="tablet:hidden"
                    />
                </div>
                <div className="flex items-center px-[32px] space-x-6 py-4 cursor-pointer hover:opacity-40">
                    <Icon src="articles-icon.png" alt="graphic icon" />
                    <Paragraph 
                        content="Articles"
                        color="text-[var(--main-light-blue)]"
                        fontWeight="font-[400]"
                        hideText="tablet:hidden"
                    />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="255" height="2" viewBox="0 0 255 2" fill="none">
                    <g opacity="0.06">
                        <path d="M0 1H255" stroke="#DFE0EB"/>
                    </g>
                </svg>
                <div className="flex items-center px-[32px] space-x-6 py-4 mt-[18px] cursor-pointer hover:opacity-40">
                    <Icon src="settings-icon.png" alt="graphic icon" />
                    <Paragraph 
                        content="Settings"
                        color="text-[var(--main-light-blue)]"
                        fontWeight="font-[400]"
                        hideText="tablet:hidden"
                    />
                </div>
                <div className="flex items-center px-[32px] space-x-6 py-4 cursor-pointer hover:opacity-40">
                    <Icon src="subscription-icon.png" alt="graphic icon" />
                    <Paragraph 
                        content="Subscription"
                        color="text-[var(--main-light-blue)]"
                        fontWeight="font-[400]"
                        hideText="tablet:hidden"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;