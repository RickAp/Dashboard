import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Icon from "../Icon/Icon";

const GraphicData = () => {
    return (
        <div className="flex flex-col desktop:w-[780px] tablet:w-[375px] mobile:w-[390px] ml-[32px] mt-[32px]">
            <div>
                <Paragraph
                    content="Today’s trends"
                    color="text-[var(--grayscale-black)]"
                    size="lg"
                    fontWeight="font-[700]"
                />
            </div>
            <div className="flex mt-2 desktop:items-center tablet:flex-col mobile:flex-col">
                <Paragraph
                    content="as of 25 May 2019, 09:41 PM"
                    color="text-[var(--grayscale-gray)]"
                    size="xs"
                    fontWeight="font-[400]"
                />
                <div className="flex tablet:mt-[32px] mobile:mt-[24px]">
                    <div className="flex items-center space-x-2 desktop:ml-[370px] tablet:ml-[32px] mobile:ml-[70px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="2" viewBox="0 0 18 2" fill="none">
                            <path d="M1 1H17" stroke="#3751FF" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <Paragraph
                            content="Today"
                            color="text-[var(--grayscale-gray)]"
                            size="xs"
                            fontWeight="font-[400]"
                        />
                    </div>
                    <div className="flex items-center space-x-2 desktop:ml-[32px] tablet:ml-[32px] mobile:ml-[32px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="2" viewBox="0 0 18 2" fill="none">
                            <path d="M1 1H17" stroke="#DFE0EB" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <Paragraph
                            content="Yesterday"
                            color="text-[var(--grayscale-gray)]"
                            size="xs"
                            fontWeight="font-[400]"
                        />
                    </div>
                </div>
            </div>
            <div className="desktop:mt-[73px] tablet:mt-[20px]">
                <Icon src="full-graph.png" alt="graphic" width="tablet:w-[335px]" height="tablet:h-[370px] mobile:h-[170px]" />
            </div>
        </div>
    );
};

export default GraphicData;