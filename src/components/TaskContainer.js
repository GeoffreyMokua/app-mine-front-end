import React from "react";
import { useEndPoint } from "../services/OptionProvider.js";

function TaskContainer(props) {
    const url = useEndPoint();

    return url ?(
        <div className='container-fluid d-flex justify-content-center flex-wrap py-2'>
            {props.children}
        </div>
    )
    : <></>
};

export default TaskContainer;
