import React from 'react';
import Logo from "../../components/Logo/Logo";
import Paragraph from "../../components/Paragraph/Paragraph";
import Input from '../Input/Input';
import useFormValidation from "../../hooks/useFormValidation";
import { useRouter } from 'next/router';
import ButtonLogIn from '../ButtonLogIn/ButtonLogIn';
import Link from 'next/link';

const RecoverForm = () => {
    const { values, errors, handleChange, validateForm } = useFormValidation();
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            router.push('#');
        }
    };

    return(
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
                    content='Account Recovery'
                    color='text-[var(--grayscale-black)]'
                    size='xxl'
                    fontWeight='font-[700]'
                />
            </div>
            <div className='mt-3 text-center px-5'>
                <Paragraph
                    content="To recover your account we have to make sure it's really you"
                    color='text-[var(--grayscale-gray)]'
                    size='sm'
                    fontWeight='font-[400]'
                />
            </div>
            <div className='mt-[48px]'>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        label="Enter your email"
                        placeholder="Email address"
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                    {errors.email && <p className="text-[14px] text-red-500 mb-2">{errors.email}</p>}
                    <ButtonLogIn 
                        content="Send Recovery Code To Email"
                    />
                </form>
            </div>
            <div className='mt-[15px]'>
                <Paragraph
                    content='Or'
                    color='text-[var(--grayscale-black)]'
                    size='lg'
                    fontWeight='font-[700]'
                />
            </div>
            <div className='mt-[15px]'>
                <Link href={'#'}>
                    <ButtonLogIn 
                        content="Send SMS"
                    />
                </Link>
            </div>
        </div>
    );
};

export default RecoverForm;