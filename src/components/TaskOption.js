import { useState, useContext } from "react"
import TaskCreate from "./TaskCreate.js"
import { OptionContext } from "../services/OptionProvider.js"


export default function TaskOption() {
    const currentOption = useContext(OptionContext);

    const [show, setShow] = useState(false)
    const handleOpen = () => {setShow(true)}
    const handleClose = () => {setShow(false)}

    return (
        <div className="container-fluid d-flex justify-content-between">
            <div className="fs-4 fw-bold text-secondary text-capitalize">
                {currentOption}
            </div>
            <div>
                <button type="button" className="btn btn-outline-dark" onClick={handleOpen}>
                    New Task
                </button>
            </div>
            <TaskCreate 
                status={show} 
                // handleOpen={handleOpen} 
                handleClose={handleClose} 
            />
        </div>
    );
}
