import "../styles/Sidebar.css";
import { SidebarData } from "./SidebarData";
import { useState } from "react";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      {!sidebar ? (
        <button onClick={() => setSidebar(!sidebar)} className="menu-btn">
          Shop by Department
        </button>
      ) : (
        <>
          <button>hello</button>
          <div className="Sidebar">
            <ul className="SidebarList">
              <button
                onClick={() => setSidebar(!sidebar)}
                className="close-btn"
              >
                X
              </button>
              {SidebarData.map((val, key) => {
                return (
                  <li
                    key={key}
                    className="row"
                    onClick={() => {
                      window.location.pathname = val.path;
                    }}
                  >
                    {" "}
                    <div id="title">{val.title}</div>{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Sidebar;
