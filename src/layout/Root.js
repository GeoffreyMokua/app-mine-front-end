import OptionProvider from "../services/OptionProvider.js"
export default function Root({children}) {


    return (
        <div className='app-container container-fluid m-0 row px-2 mx-0'>
            <OptionProvider>
                {children}
            </OptionProvider>
        </div>
    )
}

