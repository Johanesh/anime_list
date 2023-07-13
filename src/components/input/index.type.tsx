interface InputFieldProps {
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    onKeyUp?: (key: number) => void;
}