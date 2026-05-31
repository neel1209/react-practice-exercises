import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

function JokeFetcher() {
    const BASE_URL = "https://official-joke-api.appspot.com/random_joke";
    const [url, setUrl] = useState(BASE_URL);
    const { data, isFetching, err } = useFetch(url);

    const generateNewJoke = () => {
        setUrl(`${BASE_URL}?t=${Math.random()}`);
    };
    return (
        <>
            <div>
                {isFetching && <h1>Loading</h1>}
                {err && <h1>{err}</h1>}
                {!isFetching && data && (
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
