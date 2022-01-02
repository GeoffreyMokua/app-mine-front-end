import { useState } from "react";
import "../styles/home.css";
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import TaskContainer from "./TaskContainer.js";
import TaskCard from "./TaskCard.js";

export default function Layout(props) {
    const {header, sidebar, container} = props || {};
    return (
        <div className="container-fluid m-0 p-0">
            <div className="row m-0 p-0">
                <div className="header col-12 g-0">
                    {header}
                </div>
                <div className="container-fluid m-0">
                    <div className="row px-2">
                        <div className="sidebar col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 px-0 py-2">
                            {sidebar}
                        </div>
                        <div className="container col-xs-12 col-sm-12 col-md-10 col-xl-10 px-2 py-2">
                            <div className="container-fluid d-flex justify-content-between">
                                <blockquote className="blockquote">
                                    <p>{"All Tasks"}</p>
                                </blockquote>
                                <button
                                    type="button"
                                    className="btn btn-outline-dark"
                                >
                                    New Task
                                </button>
                            </div>
                            <div className='container-fluid d-flex justify-content-start flex-wrap py-2'>
                                {}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
