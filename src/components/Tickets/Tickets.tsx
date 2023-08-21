import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Tickets = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ maxWidth: 1032 });
    
    return (
        <div className="flex flex-col border border-[var(--grayscale-divider)] border-1 desktop:w-[546px] tablet:w-[628px] mobile:w-[390px] rounded-lg">
            <div className="flex items-center mt-[32px] ml-[32px] desktop:space-x-[220px] tablet:space-x-[280px] mobile:space-x-[62px]">
                <Paragraph 
                    content="Unresolved tickets"
                    color="text-[var(--grayscale-black)]"
                    size="xl"
                    fontWeight="font-[700]"
                />
                <Link href={'#'}>
                    <Paragraph 
                        content="View details"
                        color="text-[var(--main-blue)]"
                        size="sm"
                        fontWeight="font-[600]"
                    />
                </Link>
            </div>
            <div className="flex ml-[32px] mt-2 space-x-1">
                <Paragraph 
                    content="Group:"
                    color="text-[var(--grayscale-gray)]"
                    size="xs"
                    fontWeight="font-[600]"
                />
                <Paragraph 
                    content="Support"
                    color="text-[var(--grayscale-black)]"
                    size="xs"
                    fontWeight="font-[600]"
                />
            </div>
            <div className="flex ml-[32px] mt-[55px] desktop:space-x-[255px] tablet:space-x-[310px] mobile:space-x-[95px] mb-[18px]">
                <Paragraph 
                    content="Waiting on Feature Request"
                    color="text-[var(--grayscale-black)]"
                    size="sm"
                    fontWeight="font-[600]"
                />
                <Paragraph 
                    content="4238"
                    color="text-[var(--grayscale-gray)]"
                    size="sm"
                    fontWeight="font-[600]"
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
            <div className="flex ml-[32px] mt-[20px] desktop:space-x-[245px] tablet:space-x-[300px] mobile:space-x-[85px] mb-[18px]">
                <Paragraph 
                    content="Awaiting Customer Response"
                    color="text-[var(--grayscale-black)]"
                    size="sm"
                    fontWeight="font-[600]"
                />
                <Paragraph 
                    content="1005"
                    color="text-[var(--grayscale-gray)]"
                    size="sm"
                    fontWeight="font-[600]"
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
            <div className="flex ml-[32px] mt-[20px] desktop:space-x-[293px] tablet:space-x-[350px] mobile:space-x-[130px] mb-[18px]">
                <Paragraph 
                    content="Awaiting Developer Fix"
                    color="text-[var(--grayscale-black)]"
                    size="sm"
                    fontWeight="font-[600]"
                />
                <Paragraph 
                    content="914"
                    color="text-[var(--grayscale-gray)]"
                    size="sm"
                    fontWeight="font-[600]"
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
            <div className="flex ml-[32px] mt-[20px] desktop:space-x-[392px] tablet:space-x-[450px] mobile:space-x-[230px] mb-[18px]">
                <Paragraph 
                    content="Pending"
                    color="text-[var(--grayscale-black)]"
                    size="sm"
                    fontWeight="font-[600]"
                />
                <Paragraph 
                    content="281"
                    color="text-[var(--grayscale-gray)]"
                    size="sm"
                    fontWeight="font-[600]"
                />
            </div>
        </div>
    );
};

export default Tickets;