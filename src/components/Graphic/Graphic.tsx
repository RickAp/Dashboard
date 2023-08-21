import React from "react";
import GraphicData from "../GraphicData/GraphicData";
import GraphicText from "../GraphicText/GraphicText";

const Graphic = () => {
    return (
        <div className="flex desktop:w-[1122px] tablet:w-[625px] h-[546px] mobile:h-[302px] desktop:ml-[30px] tablet:ml-[30px] mt-[30px] border border-[var(--grayscale-divider)] border-1 rounded-lg">
            <GraphicData />
            <GraphicText />
        </div>
    );
};

export default Graphic;