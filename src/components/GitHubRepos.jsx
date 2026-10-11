import { useEffect, useState } from "react";
import { FiGithub, FiStar, FiGitBranch } from "react-icons/fi";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [state, setState] = useState("loading");

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=30`)
      .then((r) => {
        if (!r.ok) throw new Error("GitHub error");
        return r.json();
      })
      .then((data) => {
        setRepos(data.filter((r) => !r.fork).slice(0, 9));
        setState("done");
      })
      .catch(() => setState("error"));
  }, []);

  return (
    <section id="github" className="section">
      <div className="container">
        <SectionHeading
          label="GITHUB"
          title="Open source & engineering."
          subtitle={`Public repositories from github.com/${profile.githubUser}, pulled live from the GitHub API.`}
        />

        {state === "loading" && <p className="muted">Loading repositories…</p>}
        {state === "error" && <p className="muted">Couldn’t load repositories right now. Please visit my GitHub directly.</p>}

        <div className="repo-grid">
          {repos.map((r) => (
            <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer" className="card repo">
              <div className="repo-top">
                <FiGithub />
                <span className="mono-small">
                  <FiStar /> {r.stargazers_count} &nbsp; <FiGitBranch /> {r.forks_count}
                </span>
              </div>
              <h4>{r.name}</h4>
              <p className="muted clamp">{r.description || "No description provided."}</p>
              {r.language && <span className="chip-green mono">{r.language}</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}