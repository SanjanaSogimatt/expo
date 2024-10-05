import React, { useState } from 'react';
import { Card } from './Card';

export default function ReviewCarousel() {
    const reviews = [
        { bgcolor: '#e3f2ff', content: 'Amazing service! Highly recommend.' },
        { bgcolor: '#f3ffe3', content: 'Professional and quick turnaround time.' },
        { bgcolor: '#fde4f9', content: 'The best experience I’ve had with a service provider.' }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* Title and Subtitle */}
            <div className="flex flex-col items-center my-6">
                <h1 className="font-bold font-SpaceGrotesk text-4xl p-4">Reviews</h1>
                <p className="font-semibold font-SpaceGrotesk">What our clients say about us.</p>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full flex justify-center items-center">
                <div className="w-full md:w-2/3 lg:w-1/2 overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {reviews.map((review, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <Card bgcolor={review.bgcolor} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controllers */}
                <div className="flex justify-between mt-6 w-full md:w-2/3 lg:w-1/2">
                    <button
                        onClick={handlePrev}
                        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-l"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-r"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
