import { useState, ChangeEventHandler, ChangeEvent } from "react"

const useInput = defaultValue => {
    const [value, setValue] = useState(defaultValue);

    const onChange : ChangeEventHandler<HTMLInputElement> = (e : ChangeEvent<HTMLInputElement>) => {
        const { target : { value } } = e;

        setValue(value);
    };

    return {
        value,
        onChange,
        setValue
    };
};

export default useInput;