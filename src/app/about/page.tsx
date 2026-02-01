
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Target, Eye, GraduationCap } from 'lucide-react';

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'library');

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary py-20 text-white mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">About Us</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-body">Empowering minds, shaping futures.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Legacy of Excellence</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ABC College was established with the vision of providing affordable and quality higher education. 
              Our institution focuses on academic excellence, discipline, and overall personality development of students.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the years, we have grown into a premier institution recognized for our commitment to fostering 
              innovation and preparing students for the challenges of the modern professional world.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            {aboutImg && (
              <Image
                src={aboutImg.imageUrl}
                alt={aboutImg.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImg.imageHint}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-accent">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower students with knowledge, skills, and values to succeed in their professional 
              and personal lives through high-quality educational experiences.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-accent">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 text-primary rounded-xl">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become a leading educational institution recognized globally for academic excellence, 
              holistic development, and contribution to societal progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
