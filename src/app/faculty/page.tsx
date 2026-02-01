
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const facultyMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Head of Department, Science",
    exp: "20+ Years",
    image: PlaceHolderImages.find(img => img.id === 'faculty-1'),
    desc: "Expert in Organic Chemistry with numerous international publications."
  },
  {
    name: "Prof. Priya Sharma",
    role: "Senior Professor, BCA",
    exp: "15+ Years",
    image: PlaceHolderImages.find(img => img.id === 'faculty-2'),
    desc: "Specialist in Artificial Intelligence and Cloud Computing architectures."
  },
  {
    name: "Dr. Amit Verma",
    role: "Professor, Arts",
    exp: "12+ Years",
    image: PlaceHolderImages.find(img => img.id === 'faculty-1'),
    desc: "Renowned historian focusing on Indian heritage and culture."
  },
  {
    name: "Prof. Sangeeta Gupta",
    role: "Assistant Professor, Commerce",
    exp: "8+ Years",
    image: PlaceHolderImages.find(img => img.id === 'faculty-2'),
    desc: "Chartered Accountant with a passion for teaching Financial Management."
  }
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary py-20 text-white mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">Our Faculty</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-body">Meet the mentors who shape the future leaders.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            "Our faculty members are highly qualified, experienced, and dedicated to student success. They use modern teaching methods and provide personal guidance to students."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, idx) => (
            <Card key={idx} className="overflow-hidden border-none shadow-md group">
              <div className="relative h-64 w-full">
                {member.image && (
                  <Image
                    src={member.image.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={member.image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg font-headline">{member.name}</h3>
                  <p className="text-xs text-white/80">{member.role}</p>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4 text-accent">
                  <Award className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{member.exp} Experience</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.desc}
                </p>
                <div className="flex gap-4">
                  <div className="p-2 bg-secondary rounded-lg"><GraduationCap className="h-4 w-4 text-primary" /></div>
                  <div className="p-2 bg-secondary rounded-lg"><BookOpen className="h-4 w-4 text-primary" /></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
