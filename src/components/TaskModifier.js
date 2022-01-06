import Dropdown from 'react-bootstrap/esm/Dropdown';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function TaskModifier({todo, show, handleClose}) {

    const [category, setCategory] = useState('')
    const handleTaskModifier = () => {
            handleClose(false);
        };
    
    const modalOnOpen = () =>{
        fetch(`http://localhost:9292/api/todo/${todo.id}`)
            .then((res) => res.json())
            .then((todo_obj) => {
                if(todo_obj.category){
                    setCategory(todo_obj.category.category)
                } else{
                    setCategory('')
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const [title, setTitle] = useState(todo.title);
    const [content, setContent] = useState(todo.content);
    
    const handleForm = () =>{
        todo.title = title
        todo.content = content
        fetch(`http://localhost:9292/api/todo/${todo.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                content: content,
            }),
        })
            .then((response) => response.json())
            .then((record) => {
                console.log(record);
            })
            .catch((err) => {
                console.error(err);
            });
            handleTaskModifier();
    }

    return (
        <Modal
            show={show}
            onHide={handleTaskModifier}
            onShow={modalOnOpen}
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
                                value={title}
                                onChange={(se) => {
                                    setTitle(se.target.value);
                                }}
                            />
                        </div>
                        <div className="  mb-3">
                            <div>
                                <label className="form-label">Category</label>
                                <fieldset disabled>
                                    <input
                                        id="disabledTextInput"
                                        name="category"
                                        type="text"
                                        className="form-control"
                                        placeholder="Disabled"
                                        value={category}
                                        onChange={() => {
                                            return null;
                                        }}
                                    />
                                </fieldset>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Todo Content</label>
                            <textarea
                                name="content"
                                className="form-control"
                                rows="3"
                                placeholder="Content"
                                value={content}
                                onChange={(se) => {
                                    setContent(se.target.value);
                                }}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mb-3"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleForm();
                            }}
                        >
                            Save
                        </button>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-primary mb-3"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleTaskModifier();
                            }}
                        >
                            close
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
