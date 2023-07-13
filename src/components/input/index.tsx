const InputField = (props: InputFieldProps) => {
    const {
        value,
        placeholder,
        onChange,
        onKeyUp,
    } = props;

    return (
        <div className="input">
            <input type="text" value={value} placeholder={placeholder} onChange={(e) => onChange ? onChange(e.target.value) : () => {}} onKeyUp={(e) => onKeyUp ? onKeyUp(e.keyCode) : () => {}} />
        </div>
    )
}

export default InputField;