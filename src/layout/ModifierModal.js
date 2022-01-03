import { useState, useEffect } from 'react'
import React from 'react'
import TaskModifier from '../components/TaskModifier.js';

export default function ModifierModal() {

    const [show, setShow] = useState(false)
    const handleOpen = () => {setShow(true)}
    const handleClose = () => {setShow(false)}

    const [todo, setToDo] = useState(null)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const getTask = () => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks


    return (
        <>
            <TaskModifier status={show} handleClose={handleClose} />
        </>
    );

}
