import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
// import { ModalContext } from '../services/ModalProvider.js';

export default function TaskModifier({todo, show, handleClose}) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    function testMe(){
        console.log("from close button")
        handleClose()
    }

    const handleForm = () =>{

    }


    return (
        <Modal
            show={show}
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
                                onChange={(se) => {
                                    setTitle(se.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Todo Content</label>
                            <textarea
                                name="content"
                                className="form-control"
                                rows="3"
                                placeholder="Content"
                                onChange={(se) => {
                                    setContent(se.target.value);
                                }}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mb-3"
                            onClick={handleForm}
                        >
                            Save
                        </button>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-primary mb-3"
                            onClick={handleClose}
                        >
                            close
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
