export function getContests(setContests, name = "all") {
  fetch(`https://kontests.net/api/v1/${name}`)
    .then((res) => res.json())
    .then(
      (contests) => {
        setContests(contests);
      },
      (e) => {
        console.error("Error in getContest rejection => ", e);
        alert(`No Contest found for ${name}`);
      }
    )
    .catch((e) => {
      console.error("Error in getContest catch => ", e);
    });
}
