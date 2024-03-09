// Header.js

import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";

const Header = () => {
    const { setQuery, setSearchTrigger, setError } = useContext(GalleryContext);

    const handleSearch = () => {
        setSearchTrigger(prevState => !prevState);
        setError(false);
    }
    return (
        <header className="flex justify-center items-center p-4">
            <div className="flex items-center space-x-4">
                <Input
                    type="search"
                    placeholder="Search images"
                    onChange={e => setQuery(e.target.value)}
                />
                <Button onClick={handleSearch}>Search</Button>
            </div>
        </header>
    );
};

export default Header;
