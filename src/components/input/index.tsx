const InputField = (props: InputFieldProps) => {
    const {
        placeholder,
    } = props;

    return (
        <div className="input">
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default InputField;