import React, { useState } from "react";

const FormContext = React.createContext();

const Form = ({ chirdren, schema, onSubmit }) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const { error } = schema.validate(data, { abortEarly: false });
        if (!error) return null;

        const validationErrors = {};
        error.datails.forEach((item) => {
            validationErrors[item.path[0]] = item.message;
        });

        return validationErrors;
    }

    const handleChange = (name, value) => {
        setErrors({
            ...errors,
            [name]: "",
        });
        data[name] = value;
        setData(data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const validationErrors = validate();
        setErrors(validationErrors || {});

        if (!validationErrors) {
            await onSubmit(data);
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        setLoading(false);
    };

    return (
        <FormContext.Provider value={{ data, errors, handleChange, loading }}>
            <form onSubmit={handleSubmit}>{chirdren}</form>
        </FormContext.Provider>
    );
}

export {FormContext , Form};