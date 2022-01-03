import Modal from 'react-bootstrap/Modal'

import { useState } from 'react'
import React from 'react'

export default function TaskModifier(status, handleClose) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("http://localhost:9292/api/todo/new")
            .then((res) => res.json())
            .then((todos) => {
                console.log(todos);
                setToDo(todos);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    }

    return (
        <Modal
            show={status}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <div className="card">
                <div className="card-header">New Task</div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input 
                                    name="title" 
                                    type="title" 
                                    className="form-control" 
                                    placeholder="Title" 
                                    value ={todo.title}
                                    onChange={(se)=>{setTitle(se.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Todo Content</label>
                                <textarea 
                                    name="content"
                                    className="form-control" 
                                    rows="3" 
                                    placeholder="Content" 
                                    value = {todo.content}
                                    onChange={(se)=>{setContent(se.target.value)}}>

                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-3" onClick={(e)=>{console.log("aa")}}>Save</button>
                            &nbsp;
                            <button type="submit" className="btn btn-primary mb-3" onClick={(e)=>{console.log('bb')}}>close</button>
                        </form>
                    </div>
            </div>

        </Modal>
    )
}
