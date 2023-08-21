import React from 'react';
import Input from "../Input/Input";
import ButtonLogIn from "../ButtonLogIn/ButtonLogIn";
import useFormValidation from "../../hooks/useFormValidation";
import { useRouter } from 'next/router';

const CreateAccountForm = () => {

    const { values, errors, handleChange, validateForm } = useFormValidation();
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            router.push('/#');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                label="Email"
                placeholder="Email address"
                value={values.email}
                onChange={handleChange('email')}
            />

            <Input
                type="password"
                label="Password"
                placeholder="Password"
                value={values.password}
                showImage={true}
                onChange={handleChange('password')}
            />
            {errors.email && <p className="text-[14px] text-red-500 mb-2">{errors.email}</p>}
            {errors.password && <p className="text-[14px] text-red-500 mb-2">{errors.password}</p>}

            <ButtonLogIn 
                content="Create Account"
            />
        </form>
    );
};

export default CreateAccountForm;