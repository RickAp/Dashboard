import React from 'react';
import Logo from '../Logo/Logo';
import Paragraph from '../Paragraph/Paragraph';
import Form from '../Form/Form';
import Link from 'next/link';

const Login = () => {
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
                    content='Log In to Dashboard Kit'
                    color='text-[var(--grayscale-black)]'
                    size='xxl'
                    fontWeight='font-[700]'
                />
            </div>
            <div className='mt-3'>
                <Paragraph
                    content='Enter your email and password below'
                    color='text-[var(--grayscale-gray)]'
                    size='sm'
                    fontWeight='font-[400]'
                />
            </div>
            <div className='mt-[48px]'>
                <Form />
            </div>
            <div className='mt-8'>
                <div className='flex space-x-1'>
                    <Paragraph 
                        content='Don’t have an account?'
                        color='text-[var(--grayscale-gray)]'
                        size='sm'
                        fontWeight='font-[400]'
                    />
                    <Link href={'/signUp'}>
                        <Paragraph 
                            content='Sign up'
                            color='text-[var(--main-blue)]'
                            size='sm'
                            fontWeight='font-[600]'
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;