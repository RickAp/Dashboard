import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import { useMediaQuery } from "react-responsive";

const GraphicText = () => {

    const isTablet = useMediaQuery({ maxWidth: 1023 });
    return (
        <div className="flex flex-col desktop:w-[342px] tablet:w-[250px] border border-[var(--grayscale-divider)] border-1 mobile:hidden">
            <div className="flex flex-col items-center">
                <div className="mt-[24px]">
                    <Paragraph
                        content="Resolved"
                        color="text-[var(--grayscale-gray)]"
                        size="lg"
                        fontWeight="font-[600]"
                    />
                </div>
                <div className="mt-[6px] mb-[16px]">
                    <Paragraph
                        content="449"
                        color="text-[var(--grayscale-black)]"
                        size="xxl"
                        fontWeight="font-[700]"
                    />
                </div>
                {!isTablet 
                    ?   
                    <svg xmlns="http://www.w3.org/2000/svg" width="342" height="2" viewBox="0 0 342 2" fill="none">
                        <path d="M0 1H342" stroke="#DFE0EB"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="2" viewBox="0 0 250 2" fill="none">
                        <path d="M-92 1H250" stroke="#DFE0EB"/>
                    </svg>
                }  
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-[24px]">
                    <Paragraph
                        content="Received"
                        color="text-[var(--grayscale-gray)]"
                        size="lg"
                        fontWeight="font-[600]"
                    />
                </div>
                <div className="mt-[6px] mb-[16px]">
                    <Paragraph
                        content="426"
                        color="text-[var(--grayscale-black)]"
                        size="xxl"
                        fontWeight="font-[700]"
                    />
                </div>
                {!isTablet 
                    ?   
                    <svg xmlns="http://www.w3.org/2000/svg" width="342" height="2" viewBox="0 0 342 2" fill="none">
                        <path d="M0 1H342" stroke="#DFE0EB"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="2" viewBox="0 0 250 2" fill="none">
                        <path d="M-92 1H250" stroke="#DFE0EB"/>
                    </svg>
                } 
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-[24px]">
                    <Paragraph
                        content="Average first response time"
                        color="text-[var(--grayscale-gray)]"
                        size="lg"
                        fontWeight="font-[600]"
                    />
                </div>
                <div className="mt-[6px] mb-[16px]">
                    <Paragraph
                        content="33m"
                        color="text-[var(--grayscale-black)]"
                        size="xxl"
                        fontWeight="font-[700]"
                    />
                </div>
                {!isTablet 
                    ?   
                    <svg xmlns="http://www.w3.org/2000/svg" width="342" height="2" viewBox="0 0 342 2" fill="none">
                        <path d="M0 1H342" stroke="#DFE0EB"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="2" viewBox="0 0 250 2" fill="none">
                        <path d="M-92 1H250" stroke="#DFE0EB"/>
                    </svg>
                } 
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-[24px]">
                    <Paragraph
                        content="Average response time"
                        color="text-[var(--grayscale-gray)]"
                        size="lg"
                        fontWeight="font-[600]"
                    />
                </div>
                <div className="mt-[6px] mb-[16px]">
                    <Paragraph
                        content="33h 8m"
                        color="text-[var(--grayscale-black)]"
                        size="xxl"
                        fontWeight="font-[700]"
                    />
                </div>
                {!isTablet 
                    ?   
                    <svg xmlns="http://www.w3.org/2000/svg" width="342" height="2" viewBox="0 0 342 2" fill="none">
                        <path d="M0 1H342" stroke="#DFE0EB"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="2" viewBox="0 0 250 2" fill="none">
                        <path d="M-92 1H250" stroke="#DFE0EB"/>
                    </svg>
                } 
            </div>
            <div className="flex flex-col items-center">
                <div className="mt-[24px]">
                    <Paragraph
                        content="Resolution within SLA"
                        color="text-[var(--grayscale-gray)]"
                        size="lg"
                        fontWeight="font-[600]"
                    />
                </div>
                <div className="mt-[6px] mb-[16px]">
                    <Paragraph
                        content="94%"
                        color="text-[var(--grayscale-black)]"
                        size="xxl"
                        fontWeight="font-[700]"
                    />
                </div>
            </div>
        </div>
    );
};

export default GraphicText;