import React from 'react';
import { useContext } from 'react';
import { GalleryContext } from '../context/GalleryContext';
import Card from './Card';

const Gallery = () => {
    const { data, error } = useContext(GalleryContext);

    return (
        <main className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                { error && <p style={{color:'red'}}>{error}</p>}
                {!error &&
                    data.map((items) => (
                        <Card
                            img={items.largeImageURL}
                            creator={items.user}
                            id={items.id}
                            key={items.id}
                        />
                    ))}
            </div>
        </main>
    );
};

export default Gallery;
