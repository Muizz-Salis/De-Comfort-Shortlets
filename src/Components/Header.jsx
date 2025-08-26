
import { useState, useEffect } from 'react';
import Button from './ui/button.jsx';
import { Menu, X } from 'lucide-react';

// Simple utility to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simplified class-based scroll lock (more stable on iOS)
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isMobileMenuOpen) {
      html.classList.add('scroll-lock');
      body.classList.add('scroll-lock');
    } else {
      html.classList.remove('scroll-lock');
      body.classList.remove('scroll-lock');
    }
    return () => {
      html.classList.remove('scroll-lock');
      body.classList.remove('scroll-lock');
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#gallery', label: 'Gallery' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#testimonials', label: 'Reviews' },
  ];

  const handleNavLinkClick = () => {
    // Close the mobile menu when any link is clicked
    setIsMobileMenuOpen(false);
  };

  const NavMenu = ({isMobile = false}) => (
    <>
      {navLinks.map((link) => (
        <Button key={link.href} variant="ghost" asChild className={cn(isMobile ? 'w-full justify-start text-lg' : 'text-white hover:bg-white/10')}>
          <a href={link.href} onClick={handleNavLinkClick}>{link.label}</a>
        </Button>
      ))}
    </>
  );


  return (
    <header className={cn(
      'fixed top-0 z-50 w-full transition-all duration-300',
      scrolled ? 'text-white shadow-md backdrop-blur-sm' : 'text-white'
    )} style={{backgroundColor: scrolled ? '#188b8b' + 'E6' : '#188b8b'}}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="/" className="font-headline text-2xl font-bold">
          De-Comfort Shortlets
        </a>

        <nav className="hidden items-center space-x-2 md:flex">
          <NavMenu />
          <Button variant="default" className="text-white hover:opacity-90" style={{backgroundColor: '#d3a20d'}} asChild>
            <a href="#booking">Book Now</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
          
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-[60] flex flex-col text-white bg-[#188b8b] mobile-menu-overlay">
              <div className="flex h-20 items-center justify-between px-6 shrink-0">
                <a href="/" className="font-headline text-2xl font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                  De-Comfort Shortlets
                </a>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex-1 overflow-y-auto px-6 pb-10 pt-4 flex flex-col space-y-4">
                <NavMenu isMobile />
                <Button size="lg" className="w-full text-white hover:opacity-90 mt-2" style={{backgroundColor: '#d3a20d'}} asChild>
                  <a href="#booking" onClick={handleNavLinkClick}>Book Now</a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
