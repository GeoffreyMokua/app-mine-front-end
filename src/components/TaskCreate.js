import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

export default function TaskCreate({status, handleClose}) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const handleForm = (event) => {
        event.preventDefault();
        // event.reset();
        fetch("http://localhost:9292/api/todo/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                content: content
            }),
        })
            .then((r) => r.json())
            .then(console.log);
            handleClose()
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
                                <input name="title" type="title" className="form-control" placeholder="Title" onChange={(se)=>{setTitle(se.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Todo Content</label>
                                <textarea name="content"className="form-control" rows="3" placeholder="Content" onChange={(se)=>{setContent(se.target.value)}}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-3" onClick={handleForm}>Save</button>
                            &nbsp;
                            <button type="submit" className="btn btn-primary mb-3" onClick={handleClose}>close</button>
                        </form>
                    </div>
            </div>

        </Modal>
    );
}
