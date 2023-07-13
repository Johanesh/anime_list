interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    hasContainer?: boolean;
    onCloseModal: () => void;
}