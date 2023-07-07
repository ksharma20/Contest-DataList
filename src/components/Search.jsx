import { useState } from "react";

export default function Search({ filter, handleFilter }) {
  const searchFilter = { ...filter };
  const [searchName, setSearchName] = useState(false);
  const [searchSite, setSearchSite] = useState(false);
  function onTextChange(e) {
    searchFilter.text = e.target.value;
    syncFilter();
  }

  function onNameSearch() {
    setSearchName(!searchName);
    syncFilter();
  }

  function onSiteSearch() {
    setSearchSite(!searchSite);
    syncFilter();
  }

  function syncFilter() {
    if (searchName && searchSite) {
      searchFilter.type = 3;
    } else if (searchSite) {
      searchFilter.type = 2;
    } else {
      searchFilter.type = 1;
    }
    handleFilter(searchFilter);
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="Search ..." onChange={onTextChange} />
      </div>
      <div>
        <p>Search In: </p>
        <div>
          <input
            onClick={onSiteSearch}
            type="checkbox"
            name="searchPlatformName"
            id="searchPlatformName"
          />
          <label htmlFor="searchPlatformName">Platform Name</label>
        </div>
        <div>
          <input
            onClick={onNameSearch}
            type="checkbox"
            name="searchContestName"
            id="searchContestName"
          />
          <label htmlFor="searchContestName">Contest Name</label>
        </div>
      </div>
    </div>
  );
}
