import { Card, CardHeader, CardTitle } from './ui/card';
import { Wifi, Zap, ShieldCheck, Tv, Utensils, ParkingCircle } from 'lucide-react';

const facilities = [
  { icon: Wifi, text: 'Free WiFi' },
  { icon: Zap, text: '24/7 Power' },
  { icon: ShieldCheck, text: 'Top-notch Security' },
  { icon: Tv, text: 'Smart TV with Netflix' },
  { icon: Utensils, text: 'Full Kitchen Access' },
  { icon: ParkingCircle, text: 'Ample Parking' },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-16 sm:py-24" style={{backgroundColor: '#f5f7f9'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our World-Class Facilities</h2>
          <p className="mt-2 max-w-2xl mx-auto" style={{color: '#9ea7b1'}}>
            We provide everything you need for a comfortable and memorable stay. Your comfort is our priority.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {facilities.map((facility, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-0">
                <facility.icon className="h-10 w-10 mb-4" style={{color: '#188b8b'}} />
                <CardTitle className="text-base font-semibold">{facility.text}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
