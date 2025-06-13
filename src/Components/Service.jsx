import React from 'react';
import CountUp from 'react-countup';

const Service = () => {
    return (
        <div className="bg-blue-50 rounded-xl p-6 mt-10 shadow-md">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">How Our System Helps You</h2>

            {/* Grid: Feature Points */}
            <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg mb-10">
                <div>
                    <p className="mb-2">Automatically categorizes food by expiry status</p>
                    <p className="mb-2">Add, edit, and delete items anytime</p>
                    <p className="mb-2">Tracks when items were added and when they'll expire</p>
                </div>
                <div>
                    <p className="mb-2">Add personal notes for food items</p>
                    <p className="mb-2">Sync with your account across devices</p>
                    <p className="mb-2">User-friendly digital fridge interface</p>
                </div>
            </div>

            {/* Grid: CountUp Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Active Users</h3>
                    <p className="text-3xl font-bold text-blue-600">
                        <CountUp end={1200} duration={2.5} />
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Total Reviews</h3>
                    <p className="text-3xl font-bold text-blue-600">
                        <CountUp end={350} duration={2.5} />
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Tracked Items</h3>
                    <p className="text-3xl font-bold text-blue-600">
                        <CountUp end={4800} duration={2.5} />
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Service;