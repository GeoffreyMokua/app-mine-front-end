
export default function ToDoCard({todo, handleOnClick}) {
    const {title, content} = todo || {};
    return (
        <div
            className="card" 
            style={{maxWidth: "300px"}} 
            onClick={(event) => {
                event.stopPropagation()
                handleOnClick()
            }}
        >
            <h4 className="card-header">
                {title}
            </h4>
            <div className="card-body">
                <p className="card-text">
                    {content}
                </p>
                {/* <a href="#" className="card-link">
                    Card link
                </a> */}
                
            </div>
        </div>
    )
}
