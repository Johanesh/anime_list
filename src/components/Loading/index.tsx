import { useContext } from "react";
import { LoadingContext } from "@/context/Loading";
import Modal from "../Modal";

export const Loading = () => {
    const {isLoading} = useContext(LoadingContext);

    if (isLoading) {
        return (
            <>
                <Modal isOpen={isLoading} onCloseModal={() => {}}>
                    <div className="loading">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </Modal>
            </>
        )
    } else {
        return (
            <div className="d-none">&nbsp;</div>
        )
    }
}
