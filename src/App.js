import { useEffect, useState } from "react";
import "./App.css";
import DisplayContestList from "./components/Display";
import SideBar from "./components/Sidebar";
import { getContests } from "./externalApis";

function App() {
  const [contests, setContests] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [filter, setFilter] = useState({
    type: 1,
    text: "",
  });
  useEffect(() => {
    if (contests.length < 1) {
      alert("No Contest Found i.e., Showing all");
      getContests(setContests);
    }
  }, [contests]);
  return (
    <div className="app">
      <SideBar
        filter={filter}
        handleFilter={setFilter}
        contests={contests}
        setContests={setContests}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <DisplayContestList contests={contests} filter={filter} />
    </div>
  );
}

export default App;
