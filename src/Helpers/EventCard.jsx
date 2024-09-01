import React from 'react';

const EventCard = ({ title, postDate, description, donation }) => {

    const handleReadMore = () => {
        console.log("read more is clicked");
    }

    // Split the description into words
    const words = description.split(' ');

    // If the description has more than 50 words and is not expanded, truncate it
    const shortDescription = words.length > 15
        ? words.slice(0, 50).join(' ') + '...'
        : description;

    return (
        <div className="border border-blue-200 p-6 rounded-lg shadow-lg text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:shadow-2xl transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-md text-gray-200 mb-4">{shortDescription}</p>
            <button
                onClick={handleReadMore}
                className="text-sm text-yellow-400 underline mb-4"
            >
                Read More
            </button>
            <p className="text-sm text-gray-300 mb-4">Posted on: {postDate}</p>
            {donation && (
                <button className="bg-yellow-400 text-black px-4 py-2 font-semibold rounded-full">
                    Donate
                </button>
            )}
        </div>
    );
};

export default EventCard;
