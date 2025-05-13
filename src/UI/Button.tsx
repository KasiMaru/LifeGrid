type ButtonProps = {
    text: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button(props: ButtonProps) {
    const { text, onClick } = props;

    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};
