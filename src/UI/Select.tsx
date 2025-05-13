type SelectProps = {
    name: string;
    options: {
        value: string;
        displayValue?: React.ReactNode[];
    }[];
    value: string;
    displayValue?: string;
    onChange: (value: string) => void;
};

export function Select(props: SelectProps) {
    const { options, value, onChange, displayValue } = props;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    const mappedOptions = options.map(
        (option) => (
            <option
                key={option.value}
                value={option.value}>
                {option.displayValue}
            </option>
        )
    );

    return (
        <select
            value={value}
            onChange={handleChange}
        >
            {mappedOptions}
        </select>
    );
};