import React from "react";

interface IconProps {
    src: string;
    alt: string;
    rounded?: boolean;
    width?: string;
    height?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, rounded, width, height}) => {
    return (
        <img src={src} alt={alt} className={`${rounded ? "rounded-full" : ""} ${width} ${height}`} />
    );
};

export default Icon;