import { useContext } from "react";
import { useGetData } from "../api/useGetData.js";
import { endPointContext } from "../services/OptionProvider.js";

export default function TaskLayout({itemComponent: ItemComponent}) {
    const url = useContext(endPointContext);
    const todos = useGetData(`/api${url}`)

    return (
        todos.map( (todo) => (
            <ItemComponent 
                key={todo.id}
                todo={todo}
            />
        )
        )
    )
}
