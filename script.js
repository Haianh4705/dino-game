async function loadRandomProblem() {
  const res = await fetch("https://codeforces.com/api/problemset.problems");
  const data = await res.json();

  if (data.status !== "OK") {
    document.getElementById("problem").innerText = "Failed to load problem!";
    return;
  }

  const problems = data.result.problems;
  const randomIndex = Math.floor(Math.random() * problems.length);
  const problem = problems[randomIndex];

  const contestId = problem.contestId;
  const index = problem.index;
  const name = problem.name;

  const url = `https://codeforces.com/problemset/problem/${contestId}/${index}`;

  document.getElementById("problem").innerHTML = `
    <h2>${name}</h2>
    <p><strong>Contest:</strong> ${contestId}, Index: ${index}</p>
    <p><a href="${url}" target="_blank">🔗 View Problem on Codeforces</a></p>
  `;
}
