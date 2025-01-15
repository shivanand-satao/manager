
import React from 'react';
import { format } from 'date-fns';

const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-2">{event.description}</p>
        <div className="text-sm text-gray-500">
          <p>Date: {format(new Date(event.date), 'PPP')}</p>
          <p>Location: {event.location}</p>
          <p>Category: {event.category}</p>
        </div>
        <div className="mt-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {event.attendees.length} attendees
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;