import { useState } from 'react';

export const useForm = <T extends Object>( fields: T ) => {
    const [form, setForm] = useState(fields);

    const onChange = (value: String, field: keyof T) => {
        setForm({
            ...form,
            [field]: value
        });
        
    };

    return {
        ...form,
        form,
        onChange
    }
};