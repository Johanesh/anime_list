interface InputFieldProps {
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    onChange?: (value: string, name:string) => void;
    onKeyUp?: (key: number) => void;
}