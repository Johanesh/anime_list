const InputField = (props: InputFieldProps) => {
    const {
        testId,
        type,
        name,
        value,
        placeholder,
        onChange,
        onKeyUp,
    } = props;

    return (
        <div className="input">
            <input data-testid={testId} type={type ? type : "text"} name={name} value={value} placeholder={placeholder} onChange={(e) => onChange ? onChange(e.target.value, e.target.name) : () => {}} onKeyUp={(e) => onKeyUp ? onKeyUp(e.keyCode) : () => {}} />
        </div>
    )
}

export default InputField;