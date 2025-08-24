import React, { useRef } from 'react';
import { Card, CardContent } from './ui/card.jsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel.jsx';
import Autoplay from "embla-carousel-autoplay";

const apartments = [
  { name: 'Elegant Living Room', src: 'https://res.cloudinary.com/dmahzfixo/image/upload/v1755786040/dcomfort3_dgdi9d.jpg', hint: 'living room elegant' },
  { name: 'Serene Master Bedroom', src: 'https://res.cloudinary.com/dmahzfixo/image/upload/v1755786039/dcomfort1_fh6aac.jpg', hint: 'bedroom modern' },
  { name: 'Gourmet Modern Kitchen', src: 'https://res.cloudinary.com/dmahzfixo/image/upload/v1755786040/dcomfort2_ywqszz.jpg', hint: 'kitchen apartment' },
  { name: 'Front View ', src: 'https://res.cloudinary.com/dmahzfixo/image/upload/v1755786042/dcomfort5_d4g4vo.jpg', hint: 'apartment balcony' },
  { name: 'Cozy Guest Bedroom', src: 'https://res.cloudinary.com/dmahzfixo/image/upload/v1755786040/dcomfort4_jkwtjt.jpg', hint: 'bedroom cozy' },
];

function ImageCarouselSection() {
  // Create ref for autoplay plugin
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  
  return (
    <section id="gallery" className="py-16 sm:py-24" style={{ backgroundColor: '#f5f7f9' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold" style={{color: '#188b8b'}}>Explore Our Spaces</h2>
          <p className="mt-2 max-w-2xl mx-auto" style={{color: '#a2aebf'}}>
            Each room is meticulously designed to provide you with a seamless blend of comfort, style, and modern amenities.
          </p>
        </div>
        <Carousel 
          opts={{ align: 'start', loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="!gap-0 !ml-0 !pl-0">
            {apartments.map((apartment, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-0">
                <Card className="overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)] group h-[350px] w-full m-0">
                  <CardContent className="relative p-0 h-full w-full">
                    <img
                      src={apartment.src}
                      alt={apartment.name}
                      className="absolute inset-0 object-cover w-full h-full"
                      data-ai-hint={apartment.hint}
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-xl font-bold">{apartment.name}</h3>
                        {/* <p className="text-lg font-semibold text-accent">${apartment.price}<span className="text-sm font-normal text-white/80">/night</span></p> */}
                      </div>
                    </CardContent>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

export default ImageCarouselSection;