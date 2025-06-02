import { Link } from "react-router-dom";
import { useState } from "react";
const Sidebar = ({setShowSidebar}) => {

     
    return (
        <>
            <div className="w-100 h-screen border">
                <div className="mr-0">
                    <button onClick={()=>setShowSidebar(false)}>
                         Hide Sidebar
                    </button>
                </div>


                {setShowSidebar && (
                    <div>
                        <div className=" ml-15 mt-10 text-3xl font-bold ">
                            <h1>Company Name</h1>
                        </div>

                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Contact'>Contact</Link> </li>
                            <li><Link to='/Service'>Service</Link> </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};
export default Sidebar;