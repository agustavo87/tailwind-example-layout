import React from "react";

export default function DestinationCard({ destination }) {
  return (
    <div className="flex items-center rounded-sm bg-white shadow-sm overflow-hidden">
      <img className="h-32 w-32 flex-shrink-0" src={destination.imageUrl} alt={destination.imageAlt} />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{destination.city}</h3>

        <p className="text-gray-600">${destination.averagePrice} / night average</p>
        <div className="mt-4">
          <a href="#" className="text-red-800 hover:text-red-700 font-semibold text-sm">
            Explore {destination.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
}
