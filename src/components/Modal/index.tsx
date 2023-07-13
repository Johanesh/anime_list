const Modal = (props: ModalProps) => {
    const {
        isOpen,
    } = props;

    return (
        <div className={`modal ${isOpen ? "d-block" : ""}`}>
            <div className="modal__overlay"/>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body modal__content">
                        Modal 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;