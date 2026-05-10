import React, { useState, useEffect } from "react";

function JokeFetcher() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [generate, setGenerate] = useState(0);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        const fetchJoke = async () => {
            try {
                const res = await fetch(
                    "https://official-joke-api.appspot.com/random_joke",
                );
                setData(await res.json());
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchJoke();
        return () => controller.abort();
    }, [generate]);

    const generateNewJoke = () => setGenerate((prev) => prev + 1);

    return (
        <>
            <div>
                {loading && <h1>Loading</h1>}
                {error && <h1>{error}</h1>}
                {data && (
                    <>
                        <h1>Setup:</h1>
                        <h2>{data.setup}</h2>
                        <h1>Punch Line:</h1>
                        <h2>{data.punchline}</h2>
                    </>
                )}
                <button onClick={generateNewJoke}>New Joke</button>
            </div>
        </>
    );
}
export default JokeFetcher;
