import React from 'react';

const ButtonLabel = ({ content, backgroundColor, textColor, width, height  }: {content: string, backgroundColor: string, textColor: string, width: string, height: string}) => {
    return (
        <button type='button' className={`${backgroundColor} ${textColor} ${width} ${height} rounded-lg`}>{content}</button>
    );
};

export default ButtonLabel;