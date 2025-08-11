import { useLoaderData, useNavigate } from 'react-router';

const Fridge = () => {
    const foods = useLoaderData()
    const navigate = useNavigate()

    const isExpired = (expireDate) => {
        const now = new Date();
        const expiDate = new Date(expireDate);
        return expiDate < now;
    };

    return (
        <div className="my-10 max-w-6xl mx-auto pt-16">
            <h2 className="text-3xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                Fridge Inventory
            </h2>

            <div className="grid gap-8 w-[80%] mx-auto">
                {foods.map((food) => {
                    const expired = isExpired(food.expiryDate);

                    return (
                        <div
                            key={food._id}
                            className={`rounded-xl p-5 shadow-lg border transition-transform transform hover:scale-[1.02] hover:shadow-xl
                                ${expired
                                    ? 'bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 border-red-100'
                                    : 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-green-100'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Image */}
                                <img
                                    src={food.image}
                                    alt={food.title}
                                    className="h-72 w-72 object-cover rounded-xl shadow-md border border-gray-300"
                                />

                                {/* Details */}
                                <div className="flex flex-col gap-2 flex-1">
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                                        {food.title}
                                    </h2>
                                    <p className="text-slate-700">
                                        <span className="font-semibold">Category:</span> {food.category}
                                    </p>
                                    <p className="text-slate-700">
                                        <span className="font-semibold">Quantity:</span> {food.quantity}
                                    </p>
                                    <p className={`font-semibold ${expired ? 'text-red-600' : 'text-green-600'}`}>
                                        <span>Expiry:</span> {food.expiryDate}
                                    </p>

                                    {expired && (
                                        <span className="self-start bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                            Expired
                                        </span>
                                    )}

                                    <button
                                        className="mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:shadow-lg transition-all"
                                        onClick={() => navigate(`/food-details/${food._id}`)}
                                    >
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Fridge;