import { useOptionUpdate } from "../services/OptionProvider.js";

export default function SideBar() {

    const setNewOption = useOptionUpdate();

    const itemList = [
        {optionName: "All Tasks", icon: "fa-tasks", link: "#" },
        {optionName: "In Progress", icon: "fa-spinner", link: "#" },
        {optionName: "Completed", icon: "fa-check-double", link: "#" },
        {optionName: "Today", icon: "fa-calendar-day", link: "#" },
        {optionName: "Tommorow", icon: "fa-calendar-week", link: "#" },
        {optionName: "Month", icon: "fa-calendar-alt", link: "#" },
    ]
    return (
        // <div className='sidebar col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 px-0 py-2'>
        <div className='app-sidebar col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 px-0 py-2'>
            <div className="list-group list-group-flush">
                {
                    itemList.map( (item, index) => {
                        const { optionName, icon, link } = item;
                        return (
                            <a
                                className="list-group-item list-group-item-action list-group-item-light px-2"
                                key={index}
                                href={link}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setNewOption(optionName);
                                }}
                            >
                                <i className={`fas ${icon}`}>
                                    &nbsp; &nbsp;
                                    {optionName}
                                </i>
                            </a>
                        );
                    })
                }
            </div>
        </div>
    )
}

