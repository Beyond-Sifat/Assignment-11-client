import React from 'react';

const WhyTrack = () => {
    return (
        <div className="bg-green-50 rounded-xl p-6 mt-10 shadow-md">
            <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">Why Track Food Expiry?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center">
                Every year, millions of tons of food go to waste because of poor tracking and forgotten expiry dates. By keeping track of your food's shelf life, you can:
            </p>
            <ul className="list-disc text-gray-700 text-lg space-y-2 px-6">
                <li>Reduce food waste and contribute to a sustainable planet</li>
                <li>Save money by avoiding unnecessary repurchases</li>
                <li>Ensure the safety of your meals and avoid consuming expired food</li>
                <li>Plan meals smarter based on what's expiring soon</li>
                <li>Get a clear view of your fridge from your screen</li>
            </ul>
        </div>
    );
};

export default WhyTrack;