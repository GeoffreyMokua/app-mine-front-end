
export default function Container({children}) {

    return (
        <div className='app-container container col-xs-12 col-sm-12 col-md-10 col-xl-10 px-2 py-2'>
            {children}
        </div>
    )
}
