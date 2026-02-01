
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Building2, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-campus');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {heroImg && (
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            className="object-cover brightness-50"
            data-ai-hint={heroImg.imageHint}
            priority
          />
        )}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Welcome to <span className="text-accent">ABC College</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body">
            A premier institution committed to excellence in education, innovation, and holistic development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-primary font-bold hover:bg-accent/90">
              <Link href="/admissions">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose ABC College?</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HighlightCard
              icon={<BookOpen className="h-10 w-10" />}
              title="Quality Education"
              description="Rigorous academic programs designed to challenge and inspire."
            />
            <HighlightCard
              icon={<Users className="h-10 w-10" />}
              title="Experienced Faculty"
              description="Learn from industry leaders and dedicated educators."
            />
            <HighlightCard
              icon={<Building2 className="h-10 w-10" />}
              title="Modern Campus"
              description="State-of-the-art facilities for learning and recreation."
            />
            <HighlightCard
              icon={<Briefcase className="h-10 w-10" />}
              title="Career Oriented"
              description="Focus on skills that translate directly to professional success."
            />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Your Journey Today</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <QuickLink href="/about" label="Learn About Us" />
            <QuickLink href="/faculty" label="Meet Our Faculty" />
            <QuickLink href="/facilities" label="Campus Facilities" />
            <QuickLink href="/contact" label="Get in Touch" />
          </div>
        </div>
      </section>
    </div>
  );
}

function HighlightCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="hover:shadow-xl transition-shadow border-none">
      <CardContent className="pt-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-primary text-accent rounded-2xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-2 hover:text-accent transition-colors"
    >
      <span className="text-lg font-medium">{label}</span>
      <div className="w-8 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform"></div>
    </Link>
  );
}
