import { createContext, useState, useEffect } from "react";

export const GalleryContext = createContext({
    data: [],
    error: "",
    setError: () => { },
    setQuery: () => { },
    setSearchTrigger: () => { }
});

export const GalleryContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [searchTrigger, setSearchTrigger] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const encodedQuery = encodeURIComponent(query)
                const response = await fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${encodedQuery}&image_type=photo&pretty=true`);
                const imageData = await response.json();
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                if (!imageData.hits.length) {
                    setError("No images found")
                    return;
                }
                setData(imageData.hits);
            } catch (error) {
                setError(error.message);
            }
        }
        fetchData();

    }, [!searchTrigger]);
    return (
        <GalleryContext.Provider value={{ data, error, setError, setQuery, setSearchTrigger }}>
            {children}
        </GalleryContext.Provider>
    )
}