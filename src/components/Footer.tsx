
import Link from 'next/link';
import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-accent" />
              <span className="font-headline text-xl font-bold">CampusConnect</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Shaping futures through academic excellence, innovation, and holistic student development.
            </p>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-accent transition-colors">Courses Offered</Link></li>
              <li><Link href="/faculty" className="hover:text-accent transition-colors">Our Faculty</Link></li>
              <li><Link href="/admissions" className="hover:text-accent transition-colors">Admissions 2026</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-4 text-accent">Facilities</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Smart Classrooms</li>
              <li>Central Library</li>
              <li>Computer Labs</li>
              <li>Hostel Facilities</li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold text-lg mb-4 text-accent">Contact Info</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>ABC College, City, State, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@abccollege.edu" className="hover:text-accent transition-colors">info@abccollege.edu</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91-XXXXXXXXXX</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} ABC College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
