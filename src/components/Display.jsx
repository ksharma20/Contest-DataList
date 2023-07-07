function DisplayContest({ contest }) {
  return (
    <>
      <h1>
        <a href={contest.url}>{contest.name}</a>
      </h1>
      <h3>{contest.site}</h3>
    </>
  );
}

export default function DisplayContestList({ contests, filter }) {
  const contestsList = contests?.map((v, i) => {
    if (
      filter.type === 3 &&
      (v.name.toLowerCase().includes(filter.text.toLowerCase()) ||
        v.site.toLowerCase().includes(filter.text.toLowerCase()))
    ) {
      return (
        <div key={i + 1}>
          <DisplayContest contest={v} />
        </div>
      );
    } else if (
      filter.type === 2 &&
      v.site.toLowerCase().includes(filter.text.toLowerCase())
    ) {
      return (
        <div key={i + 1}>
          <DisplayContest contest={v} />
        </div>
      );
    } else if (v.name.toLowerCase().includes(filter.text.toLowerCase())) {
      return (
        <div key={i + 1}>
          <DisplayContest contest={v} />
        </div>
      );
    } else {
      return <div key={i + 1}></div>;
    }
  });
  return <div key="displayList">{contestsList}</div>;
}
