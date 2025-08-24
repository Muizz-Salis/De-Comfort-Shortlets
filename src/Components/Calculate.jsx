import React, { useMemo, useState } from 'react'

const roomTypes = [
  { id: 'standard', name: 'Standard Room', pricePerNight: 150 },
  { id: 'deluxe', name: 'Deluxe Suite', pricePerNight: 250 },
  { id: 'presidential', name: 'Presidential Suite', pricePerNight: 500 },
];

const Calculate = () => {
    const [nights, setNights] = useState(1);
    const [selectedRoomId, setSelectedRoomId] = useState(roomTypes[0].id);
    const [showBookingMessage, setShowBookingMessage] = useState(false);

    const selectedRoom = useMemo(() => roomTypes.find(r => r.id === selectedRoomId), [selectedRoomId]);
    const totalPrice = useMemo(() => {
        if (!selectedRoom) {
            return 0;
        } else {
            return selectedRoom.pricePerNight * nights;
        }
    }, [nights, selectedRoom]);

    const handleNightsChange = (e) => {
        const value = parseInt(e.target.value) || 1;
        setNights(Math.max(1, value));
    };

    const handleRoomChange = (e) => {
        setSelectedRoomId(e.target.value);
    };

    const bookHotel = () => {
        setShowBookingMessage(true);
        setTimeout(() => setShowBookingMessage(false), 3000);
    };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Calculate Your Stay</h3>
      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="flex-1">
          <label htmlFor="room-select" className="block text-sm font-medium text-gray-700 mb-1">
            Select Room Type
          </label>
          <select 
            id="room-select" 
            className="w-full p-2 border rounded-md" 
            value={selectedRoomId}
            onChange={handleRoomChange}
          >
            {roomTypes.map(room => (
              <option key={room.id} value={room.id}>
                {room.name} - ${room.pricePerNight}/night
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="nights-input" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Nights
          </label>
          <input 
            id="nights-input"
            type="number" 
            className="w-full p-2 border rounded-md"
            value={nights}
            onChange={handleNightsChange}
            min={1}
            max={30}
          />
        </div>
        <div className="flex-1">
          <button 
            onClick={bookHotel}
            className="w-full py-2 px-4 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
          >
            Book for ${totalPrice}
          </button>
        </div>
      </div>
      {showBookingMessage && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          Thank you for booking! Your total is ${totalPrice}.
        </div>
      )}
    </div>
  )
}

export default Calculate