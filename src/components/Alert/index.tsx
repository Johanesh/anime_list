import { AlertContext } from "@/context/Alert";
import { useContext, useEffect } from "react";

export const Alert = () => {
    const {alert, setAlert} = useContext(AlertContext);

    useEffect(() => {
        if (alert.isOpen) {
            setTimeout(() => {
                setAlert({
                    isOpen: false,
                    message: ""
                })
            }, 1500);
        }
    }, [alert])

    if (alert.isOpen) {
        return (
            <div className="alert-container">
                <div className="alert alert-danger" role="alert">
                    {alert.message}
                </div>
            </div>
        )
    } else {
        return (
            <div className="d-none">&nbsp;</div>
        )
    }
}
