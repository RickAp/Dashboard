import React from 'react';
import SignForm from '@/components/SignForm/SignForm';

const SignUp = () => {
    return (
        <div className='flex w-full h-full tablet:h-[1180px] py-[139px] justify-center items-center bg-[var(--sidebar-bg)]'>
            <SignForm />
        </div>
    );
};

export default SignUp;