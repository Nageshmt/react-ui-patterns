import { useState } from "react";

function UserDetails() {

    const [username, setUsername] = useState("");
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [includeforks, setIncludeforks] = useState(false);

    const fetchRepos = async () => {
        setError("");
        setRepos([]);
        setLoading(true);

        try {
            const response = await fetch(
                `https://api.github.com/users/${username}/repos`,
                {
                    headers: {
                        Accept: "application/vnd.github.v3+json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("User not found")
            }

            let data = await response.json();
            if (!includeforks) {
                data = data.filter((repo) => !repo.fork)
            }

            data.sort((a, b) => b.size - a.size);
            setRepos(data);

        } catch (err) {
            setError("Invalid Github username")
        } finally {
            setLoading(false);
        }

       

    }
     const handleSubmit = (e) => {
            e.preventDefault();
            fetchRepos();
        }

    return (
        <div style={{ padding: "20px" }}>
            <h2>GitHub Repository viewer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Enter Github username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button type="submit" disabled={!username}>Submit</button>
                <div>
                    <input type="checkbox"
                        checked={includeforks}
                        onChange={() => setIncludeforks(!includeforks)}
                    />
                    <label>Include Fork</label>
                </div>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p style={{color:"red"}}>{error}</p>}

            <ul>
                {repos.map((repo)=>(
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}

                        </a>{" "}
                        (Size:{repo.size})
                    </li>

                ))}
            </ul>

        </div>
    )

}
export default UserDetails