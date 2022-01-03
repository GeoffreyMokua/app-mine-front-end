import React from 'react'
import { useGetData } from "../api/useGetData.js";
import { useEndPoint } from "../services/OptionProvider.js";

export default function TaskLayout({itemComponent: ItemComponent}) {
    const url = useEndPoint();
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
