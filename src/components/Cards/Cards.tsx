import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import useSelectedCard from "../../hooks/useSelectedCard";

const Cards: React.FC = () => {

    const [selected, handleSelect] = useSelectedCard();

    const divClass = (index: number) => {
        return `flex flex-col justify-center items-center desktop:w-[258px] tablet:w-[298px] mobile:w-[190px] rounded-lg space-y-[12px] border ${selected === index ? "border-[var(--main-blue)]" : "border-[var(--grayscale-divider)]"} border-1 cursor-pointer`;
    };

    const paragraphColor = (index: number) => {
        return selected === index ? "text-[var(--main-blue)]" : "text-[var(--grayscale-gray)]";
    };

    const titles: string[] = ['Unresolved', 'Overdue', 'Open', 'On hold'];
    const counts: string[] = ['60', '16', '43', '64'];

    return (
        <div className="flex flex-wrap desktop:w-[1122px] tablet:w-[625px] desktop:h-[134px] tablet:h-[282px] mobile:h-[270px] desktop:mt-[58px] tablet:mt-[21px] desktop:justify-center tablet:justify-between mobile:justify-between tablet:gap-y-3 mobile:gap-y-1 desktop:space-x-[30px] desktop:ml-[30px] tablet:ml-[30px]">
            {titles.map((title, index) => (
                <div key={index} className={divClass(index)} data-testid={`card-${index}`}  onClick={() => handleSelect(index)}>
                    <Paragraph 
                        content={title}
                        color={paragraphColor(index)}
                        size="lg"
                        fontWeight="font-[700]"
                        testId={`title-${index}`}
                    />
                    <Paragraph 
                        content={counts[index]}
                        color={paragraphColor(index)}
                        size="xxxl"
                        fontWeight="font-[700]"
                        testId={`count-${index}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default Cards;