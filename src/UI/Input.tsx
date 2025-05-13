type InputProps = {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number';
    placeholder?: string;
};

export function Input(props: InputProps) {
    const {
        name,
        value,
        onChange,
        type = 'text',
        placeholder = 'Enter text'
    } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    };

    return (
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
};