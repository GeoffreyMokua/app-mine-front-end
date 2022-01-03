

const usDateFormat =  (input) => {
    return new Date(input).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

export default function ToDoCard({todo, handleOnClick}) {
    const { title, content, updated_at } = todo || {};

    const handleTodoCard = ()=> {
        console.log( "some thing")
    }

    return (
        <div className="card-deck" onClick={(e) => {
            e.stopPropagation();
            handleTodoCard()
        }}>
            <div
                className="card m-2"
                // align-items-stretch
                style={{ minWidth: "250px", minHeight: "200px" }}
            >
                <h4 className="card-header">{title}</h4>
                <div className="card-body">
                    <p className="card-text">{content}</p>
                    {/* <a href="#" className="card-link">
                    Card link
                </a> */}
                </div>
                <div className="d-flex justify-content-between m-0 p-0">
                    <div className="mx-2">
                        <i className="far fa-clock"></i>&nbsp;
                        <small>{usDateFormat(updated_at)}</small>
                    </div>
                    <div className="mx-2 px-1">
                        <i className="fas fa-edit"></i>
                        &nbsp;
                        <i className="fas fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
