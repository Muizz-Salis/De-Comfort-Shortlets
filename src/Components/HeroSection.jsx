import React from 'react';
import Button from './ui/button.jsx';

export default function HeroSection() {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover -z-10"
        poster="https://placehold.co/1920x1080.png"
        data-ai-hint="apartment exterior"
      >
        {/* Placeholder video - replace with your actual video file */}
        <source src="https://res.cloudinary.com/dmahzfixo/video/upload/v1755971508/DeComforthd_tlcpbe.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl">
          Luxury Living, Unforgettable Stays
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 drop-shadow-lg">
          Discover the pinnacle of comfort and style at De-Comfort Shortlets. Your perfect getaway awaits.
        </p>
        
        {/* Option 2: Anchor tag approach - BETTER for pure React */}
        <a 
          href="#booking" 
          onClick={handleSmoothScroll}
          className="inline-block mt-8"
        >
          <Button size="lg" className="text-white hover:opacity-90 transition-transform duration-300 hover:scale-105" style={{backgroundColor: '#d3a20d'}}>
            Book Your Stay
          </Button>
        </a>
      </div>
    </section>
  );
}