import { useContext } from "react";
import { TasksProvider } from "../layout/Container.js";
// import { useGetData } from "../api/useGetData.js";
// import { endPointContext } from "../services/OptionProvider.js";

export default function TaskLayout({itemComponent: ItemComponent}) {
    
    const { tasksList } = useContext(TasksProvider);
    // const url = useContext(endPointContext);
    // const todos = useGetData(`/api${url}`);
    // console.log("tasksList: ", tasksList);
    
    return (
        tasksList.map( (todo) => (
            <ItemComponent 
                key={todo.id}
                todo={todo}
            />
        ))
        // <h2>1</h2>
    )
}
