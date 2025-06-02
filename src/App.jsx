import { Routes,  Route } from "react-router-dom"
import Home from "./Components/Home.jsx"
import Sidebar from "./Components/Sidebar.jsx"
import { useState } from "react"


function App() {

  const [showsidebar, setShowSidebar] = useState(true);

  return (
    <>
      
        <div className="flex">
          {showsidebar && <Sidebar setShowSidebar={setShowSidebar} />}
          <div className={`flex-1 ${showsidebar ? 'ml-0' : 'm-0'} p-4`}>
            {!showsidebar && (
               <button onClick={()=>setShowSidebar(true)}>
                show Sidebar
               </button>
            )}</div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="/Sidebar" element={<Sidebar />}></Route> */}
              </Routes>
        </div>
       
    </>
  )
}

export default App
