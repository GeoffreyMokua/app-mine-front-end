import React from "react";
import { useGetData } from "../api/useGetData.js";

function TaskContainer(props) {
    const todos = useGetData('localhost:9292', 'todos')
    // console.log(props.children)
    // console.log(React.Children.count(props.children))
    // props.children.forEach( (children) => {
    //     console.log(children)
    // })

    return (
        <div className='container-fluid d-flex justify-content-start flex-wrap py-2'>
            {props.children}
        </div>
    )
};

export default TaskContainer;
