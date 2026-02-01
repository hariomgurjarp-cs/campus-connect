
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Code, FlaskConical, Calculator, Users, Languages } from 'lucide-react';

const courses = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    category: "Undergraduate",
    icon: <Code className="h-6 w-6" />,
    description: "Focus on modern software development, database management, and computer networks."
  },
  {
    title: "Bachelor of Science (B.Sc.)",
    category: "Undergraduate",
    icon: <FlaskConical className="h-6 w-6" />,
    description: "In-depth study of physical and biological sciences with practical laboratory sessions."
  },
  {
    title: "Bachelor of Arts (B.A.)",
    category: "Undergraduate",
    icon: <Languages className="h-6 w-6" />,
    description: "Broad exploration of humanities, social sciences, and literary studies."
  },
  {
    title: "Bachelor of Commerce (B.Com.)",
    category: "Undergraduate",
    icon: <Calculator className="h-6 w-6" />,
    description: "Foundation in accounting, finance, business law, and management principles."
  },
  {
    title: "Master of Science (M.Sc.)",
    category: "Postgraduate",
    icon: <FlaskConical className="h-6 w-6" />,
    description: "Advanced research and theoretical studies in specialized scientific domains."
  },
  {
    title: "Master of Arts (M.A.)",
    category: "Postgraduate",
    icon: <Users className="h-6 w-6" />,
    description: "Specialized postgraduate studies in languages, history, or social science subjects."
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary py-20 text-white mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">Courses Offered</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-body">Diverse programs designed for your success.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    {course.icon}
                  </div>
                  <Badge variant="secondary" className="bg-accent/20 text-primary border-none">
                    {course.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold font-headline">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>
                <div className="mt-6 pt-6 border-t flex items-center text-accent font-bold text-sm cursor-pointer hover:gap-2 transition-all">
                  View Curriculum <BookOpen className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
