import { useOption } from "../services/OptionProvider.js"

export default function TaskOption() {
    const currentOption = useOption()
    return (
        <div className='container-fluid d-flex justify-content-between'>
            <div className='fs-4 fw-bold text-secondary text-capitalize'>
                {currentOption }
            </div>
            <div>
                <button type="button" className="btn btn-outline-dark">New Task</button>
            </div>
        </div>
    )
}
