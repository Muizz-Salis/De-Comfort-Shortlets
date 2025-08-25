import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label-simple';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select-simple';
import Button from './ui/button';
import { BedDouble, Moon, Wallet } from 'lucide-react';

const roomTypes = [
  { id: 'standard', name: 'Standard Room', pricePerNight: 120000 },
  { id: 'deluxe', name: 'Deluxe Suite', pricePerNight: 250000 },
  { id: 'presidential', name: 'Presidential Suite', pricePerNight: 500000 },
];

// IMPORTANT: Replace with your own WhatsApp number
const WHATSAPP_NUMBER = "2348137736148"; // Example: use your country code without '+' or '00'

export default function BookingSection() {
  const [nights, setNights] = useState(1);
  const [inputValue, setInputValue] = useState("1"); // Separate state for the input field
  const [selectedRoomId, setSelectedRoomId] = useState(roomTypes[0].id);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const selectedRoom = useMemo(() => roomTypes.find(r => r.id === selectedRoomId), [selectedRoomId]);
  const totalPrice = useMemo(() => {
    if (!selectedRoom) return 0;
    return selectedRoom.pricePerNight * nights;
  }, [nights, selectedRoom]);

  // Handle input change to allow empty field temporarily
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    // If the value is not empty, update nights
    if (value !== "") {
      const numValue = parseInt(value);
      if (!isNaN(numValue) && numValue >= 1) {
        setNights(numValue);
      }
    }
  };
  
  // Handle blur event to enforce minimum value
  const handleInputBlur = () => {
    if (inputValue === "" || parseInt(inputValue) < 1 || isNaN(parseInt(inputValue))) {
      setInputValue("1");
      setNights(1);
    }
  };

  const handleBooking = () => {
    if (!selectedRoom) return;
    
    // Ensure nights value is valid before sending
    handleInputBlur();

    const message = `Hello De-Comfort Shortlets,
I would like to book a room.

Details:
- Room Type: ${selectedRoom.name}
- Number of Nights: ${nights}
- Total Price: ₦${totalPrice.toLocaleString()}

I'm ready to proceed with the booking. Please confirm availability.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Handle smooth scrolling to booking section (if linking from other components)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#booking') {
        const element = document.getElementById('booking');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Check on component mount
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (!isMounted) {
    return null; // or a loading skeleton
  }

  return (
    <section id="booking" className="py-16 sm:py-24 bg-sky-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Card className="w-full max-w-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white rounded-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl md:text-4xl text-gray-900">Book Your Stay</CardTitle>
              <CardDescription className="text-gray-500">Secure your spot in paradise. It only takes a minute.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 gap-8 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="room-type" className="flex items-center gap-2 text-gray-800 font-medium">
                    <BedDouble className="h-5 w-5" />
                    Room Type
                  </Label>
                  <Select 
                    id="room-type"
                    value={selectedRoomId} 
                    onValueChange={setSelectedRoomId}
                    className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 bg-white"
                  >
                    {roomTypes.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} (₦{room.pricePerNight}/night)
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nights" className="flex items-center gap-2 text-gray-800 font-medium">
                    <Moon className="h-5 w-5" />
                    Number of Nights
                  </Label>
                  <Input
                    id="nights"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    placeholder="1"
                    className="w-full h-12 border border-gray-300 rounded-md px-4 py-2 bg-white"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleInputBlur();
                        handleBooking();
                      }
                    }}
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum stay: 1 night</p>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-6 pt-8">
              <div className="text-center">
                <p className="text-gray-500 flex items-center justify-center gap-2 mb-1">
                  <Wallet className="h-5 w-5" />
                  Total Price
                </p>
                <p className="text-5xl font-bold text-teal-600">
                  ₦{totalPrice.toLocaleString()}
                </p>
              </div>
              <Button 
                size="lg" 
                className="w-full max-w-md h-14 bg-yellow-500 text-white hover:bg-yellow-600 rounded-md text-lg font-medium" 
                onClick={handleBooking}
                type="button"
              >
                Book Now via WhatsApp
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}