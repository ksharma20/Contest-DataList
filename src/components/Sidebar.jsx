import { useEffect, useState } from "react";
import { getContests } from "../externalApis";
import Search from "./Search";

function PlatformList({ setContests }) {
  let [platformNames, setPlatformNames] = useState([]);
  useEffect(() => {
    if (platformNames.length < 2) {
      getContests(setPlatformNames, "sites");
    }
  }, [platformNames]);

  platformNames = platformNames.map((v) => {
    return (
      <button
        key={v[2]}
        onClick={() => {
          getContests(setContests, v[1]);
        }}
      >
        {v[0]}
      </button>
    );
  });
  platformNames.push(
    <button
      key={"rf"}
      onClick={() => {
        getContests(setContests);
      }}
    >
      Reset Filter
    </button>
  );
  return <div className="sidebar_platformNames">{platformNames}</div>;
}

export default function SideBar({
  filter,
  handleFilter,
  contests,
  setContests,
  showMenu,
  setShowMenu,
}) {
  return (
    <div>
      <button className="sidebar_menu" onClick={() => setShowMenu(!showMenu)}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </button>
      {showMenu ? (
        <div className="sidebar">
          <Search filter={filter} handleFilter={handleFilter} />
          <PlatformList contests={contests} setContests={setContests} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
