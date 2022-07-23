import { Dispatch, SetStateAction } from "react"
import { Auth } from "../auth/Auth"

export const Modal = ({openModal, setOpenModal}: {openModal: boolean, setOpenModal:Dispatch<SetStateAction<boolean>>}) => {
    return (
    <div className={`modal ${openModal && 'd-block'}`}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">User registration</h5>
                <button type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        onClick={() => setOpenModal(false)}
                        >
                </button>
            </div>
            <div className="modal-body">
                <Auth />
            </div>
            <div className="modal-footer">
                <button type="button" 
                        className="btn btn-secondary" 
                        data-bs-dismiss="modal"
                        onClick={() => setOpenModal(false)}>Close
                        </button>
            </div>
            </div>
        </div>
    </div>
    )
}