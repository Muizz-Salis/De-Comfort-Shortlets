import { Twitter, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"
import Button from "./ui/button"

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#188b8b' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-headline text-2xl font-bold">De-Comfort Stays</h3>
            <p className="mt-2 text-primary-foreground/80">
              Your home away from home. Experience luxury and comfort like never before.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-accent transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-accent transition-colors">
                  Booking
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-accent transition-colors">
                  Facilities
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider">Contact Us</h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />Abule Egba, Lagos state, Nigeria
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> contact@decomfort.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> + (234) 8137736148
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider">Follow Us</h4>
            <div className="flex mt-4 space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <a href="https://www.instagram.com/p/DC5Tnt_pjWv/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              </a>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} De-Comfort Stays. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
