
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Library, Monitor, GraduationCap, Trophy, Home, Wifi } from 'lucide-react';

const facilities = [
  {
    title: "Well-equipped Library",
    icon: <Library className="h-10 w-10" />,
    img: PlaceHolderImages.find(img => img.id === 'library'),
    desc: "A vast collection of academic journals, books, and digital resources to support learning."
  },
  {
    title: "Computer Lab",
    icon: <Monitor className="h-10 w-10" />,
    img: PlaceHolderImages.find(img => img.id === 'computer-lab'),
    desc: "Advanced computing facilities with high-speed internet and latest software for practical learning."
  },
  {
    title: "Smart Classrooms",
    icon: <GraduationCap className="h-10 w-10" />,
    img: PlaceHolderImages.find(img => img.id === 'classroom'),
    desc: "Modern teaching environments equipped with audio-visual aids and interactive smart boards."
  },
  {
    title: "Sports & Playground",
    icon: <Trophy className="h-10 w-10" />,
    img: PlaceHolderImages.find(img => img.id === 'sports'),
    desc: "Extensive facilities for outdoor and indoor sports to promote physical fitness."
  },
  {
    title: "Hostel Facility",
    icon: <Home className="h-10 w-10" />,
    img: PlaceHolderImages.find(img => img.id === 'hostel'),
    desc: "Secure and comfortable on-campus residence for students coming from far away regions."
  },
  {
    title: "Wi-Fi Campus",
    icon: <Wifi className="h-10 w-10" />,
    img: PlaceHolderImages.find(img => img.id === 'hero-campus'),
    desc: "High-speed wireless connectivity available across the entire campus for students and staff."
  }
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary py-20 text-white mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">Campus Facilities</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-body">Modern infrastructure for a world-class experience.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => (
            <Card key={idx} className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-48 w-full overflow-hidden">
                {facility.img && (
                  <Image
                    src={facility.img.imageUrl}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={facility.img.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur rounded-lg text-primary shadow-lg">
                  {facility.icon}
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-headline">{facility.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {facility.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
