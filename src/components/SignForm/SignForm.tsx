import React from 'react';
import Logo from '../Logo/Logo';
import Paragraph from '../Paragraph/Paragraph';
import CreateAccountForm from '../CreateAccountForm/CreateAccountForm';

const SignForm = () => {
    return (
        <div className='flex flex-col w-[380px] h-[582px] items-center bg-white rounded-lg'>
            <div className='mt-10'>
                <Logo width='w-[48px]' height='h-[48px]'/>
            </div>
            <div className='mt-[12px]'>
                <Paragraph 
                    content='Dashboard Kit'
                    color='text-[var(--sidebar-gray)]'
                    size='lg'
                    fontWeight='font-[700]'
                />
            </div>
            <div className='mt-8'>
                <Paragraph 
                    content='Create Account'
                    color='text-[var(--grayscale-black)]'
                    size='xxl'
                    fontWeight='font-[700]'
                />
            </div>
            <div className='mt-3 text-center px-5'>
                <Paragraph
                    content="Enter your email and password below to create an account"
                    color='text-[var(--grayscale-gray)]'
                    size='sm'
                    fontWeight='font-[400]'
                />
            </div>
            <div className='mt-[48px]'>
                <CreateAccountForm />
            </div>
        </div>
    );
};

export default SignForm;