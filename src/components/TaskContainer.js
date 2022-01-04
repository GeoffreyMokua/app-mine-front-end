import {useContext} from "react";
import { endPointContext } from "../services/OptionProvider.js";

function TaskContainer(props) {
    const url = useContext(endPointContext);

    return url ?(
        <div className='container-fluid d-flex justify-content-center flex-wrap py-2'>
            {props.children}
        </div>
    )
    : <></>
};

export default TaskContainer;