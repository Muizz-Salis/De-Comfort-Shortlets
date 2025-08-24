import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Star, StarHalf } from 'lucide-react';
// Define Avatar components directly in this file to avoid import issues
const Avatar = ({ className, children, ...props }) => (
  <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className || ''}`} {...props}>
    {children}
  </div>
);

const AvatarImage = ({ src, alt, className, ...props }) => (
  <img src={src} alt={alt} className={`aspect-square h-full w-full ${className || ''}`} {...props} />
);

const AvatarFallback = ({ className, children, ...props }) => (
  <div className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-900 ${className || ''}`} {...props}>
    {children}
  </div>
);

const testimonials = [
  {
    name: 'Adewale Kingsley',
    avatar: 'JD',
    image: 'https://placehold.co/100x100.png',
    hint: 'couple portrait',
    rating: 5,
    quote: 'Absolutely breathtaking! The apartment was stunning, and the service was impeccable. We felt like royalty. Can\'t wait to come back!',
  },
  {
    name: 'Mustapaha Akintola',
    avatar: 'SG',
    image: 'https://placehold.co/100x100.png',
    hint: 'man portrait',
    rating: 5,
    quote: 'By far the best shortlet I\'ve stayed in. The attention to detail is amazing. It was clean, comfortable, and had all the modern amenities I needed.',
  },
  {
    name: 'Bukunmi Grace',
    avatar: 'MG',
    image: 'https://placehold.co/100x100.png',
    hint: 'woman portrait',
    rating: 4.5,
    quote: 'A wonderful experience. The location is perfect, and the view is spectacular. The 24/7 power was a huge plus. Highly recommended!',
  },
];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full_${i}`} className="w-5 h-5" style={{color: 'gold', fill: 'gold'}} />);
  }
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="w-5 h-5" style={{color: 'gold', fill: 'gold'}} />);
  }
  for (let i = stars.length; i < 5; i++) {
    stars.push(<Star key={`empty_${i}`} className="w-5 h-5 text-gray-300" />);
  }
  return stars;
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24" style={{ backgroundColor: '#bfddee' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold" style={{color: '#299394'}}>What Our Guests Say</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            We are proud to have hosted wonderful guests from all over the world. Here's what they have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg">
              <CardHeader className="flex-row items-center gap-4">
                 <Avatar className="w-14 h-14">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-lg" style={{color: '#299394'}}>{testimonial.name}</h3>
                  <div className="flex mt-1">{renderStars(testimonial.rating)}</div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
