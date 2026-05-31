import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setIsFetching(true);
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const res = await fetch(url, { signal: controller.signal });
                setData(await res.json());
            } catch (error) {
                if (error.name === "AbortError") return;
                setErr(error.message);
            } finally {
                setIsFetching(false);
            }
        };
        fetchData();
        return () => controller.abort();
    }, [url]);
    return { data, isFetching, err };
};

export default useFetch;
