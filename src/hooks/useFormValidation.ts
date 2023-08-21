import { useState } from 'react';

interface FormState {
    email: string;
    password: string;
}

interface ValidationErrors {
    email?: string;
    password?: string;
}

const useFormValidation = () => {
    const [values, setValues] = useState<FormState>({ email: '', password: '' });
    const [errors, setErrors] = useState<ValidationErrors>({});

    const isValidEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValues((prev) => ({ ...prev, [field]: newValue }));

        switch (field) {
            case 'email':
                if (!isValidEmail(newValue)) {
                    setErrors((prev) => ({ ...prev, email: 'Invalid email address.' }));
                } else {
                    setErrors((prev) => ({ ...prev, email: undefined }));
                }
                break;
            case 'password':
                if (newValue.length > 40) {
                    setErrors((prev) => ({ ...prev, password: 'Password should not exceed 40 characters.' }));
                } else {
                    setErrors((prev) => ({ ...prev, password: undefined }));
                }
                break;
        }
    };

    const validateForm = (): boolean => {
        if (!values.email || !isValidEmail(values.email)) {
            setErrors((prev) => ({ ...prev, email: 'Invalid email address.' }));
            return false;
        }
        if (values.password.length < 8 || (!values.password) || (values.password.length > 40))  {
            setErrors((prev) => ({ ...prev, password: 'Password should be between 8 and 40 characters.' }));
            return false;
        }
        return true;
    };

    return {
        values,
        errors,
        handleChange,
        validateForm
    };
};

export default useFormValidation;