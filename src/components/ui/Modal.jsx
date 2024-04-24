import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";

export const Modal = ({children, open, onClose, className = ''}) => {
    const modalId = document.getElementById('modal')
    const dialog = useRef();
    useEffect(() => {
        const modal = dialog.current
        if (open) {
            modal.showModal()
        }
        return () => modal.close()
    }, [open])

    return (
        createPortal(
            <dialog ref={dialog}
                    className={`modal ${className}`} onClose={onClose}>
                {children}
            </dialog>
            , modalId)
    )
}