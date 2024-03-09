import React from 'react';

const Card = ({ img, id, creator }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={img} alt={id} className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-gray-800 font-bold text-lg">Clicked by {creator}</p>
            </div>
        </div>
    );
};

export default Card;