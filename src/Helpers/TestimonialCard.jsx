import React from 'react'

const TestimonialCard = ({ name, image, rating, text }) => {
    return (
        <div className="border border-blue-200 p-6 rounded-lg shadow-lg text-center max-w-sm">
            <img className="w-24 h-24 rounded-full mx-auto" src={image} alt={name} />
            <h3 className="text-lg font-semibold mt-4">{name}</h3>
            <div className="flex justify-center my-2">
                {[...Array(5)].map((_, index) => (
                    <span key={index}>
                        {index < rating ? (
                            <span className="text-orange-500">&#9733;</span>
                        ) : (
                            <span className="text-gray-300">&#9733;</span>
                        )}
                    </span>
                ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">{text}</p>
        </div>
    )
}

export default TestimonialCard
