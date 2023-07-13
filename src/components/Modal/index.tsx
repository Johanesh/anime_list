const Modal = (props: ModalProps) => {
    const {
        children,
        isOpen,
    } = props;

    return (
        <div className={`modal ${isOpen ? "d-block" : ""}`}>
            <div className="modal__overlay"/>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body modal__content">
                        <div className="modal__close"/>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;