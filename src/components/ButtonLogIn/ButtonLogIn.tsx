import React from 'react';

const ButtonLogIn = ({ content }: {content: string}) => {
    return (
        <button 
            type='submit'
            className='w-[316px] h-[48px] rounded-lg bg-[var(--main-blue)] text-[white] hover:bg-[var(--hover-blue)] transition duration-300 ease-in-out'
        >
            {content}
        </button>
    );
};

export default ButtonLogIn;