
import { CheckCircle2, FileText, ArrowRight, Info } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdmissionsPage() {
  const steps = [
    { title: "Apply Online", desc: "Fill the comprehensive online application form available on our portal." },
    { title: "Verification", desc: "Submit all required scanned documents for initial verification." },
    { title: "Merit Evaluation", desc: "Selection based on merit list or entrance examination scores." },
    { title: "Confirmation", desc: "Submit the prescribed fee to confirm your seat and finalize admission." }
  ];

  const documents = [
    "High School (10th) & Intermediate (12th) Mark sheets",
    "Transfer Certificate (TC) & Migration Certificate",
    "Aadhar Card / Valid Government ID Proof",
    "4 Recent Passport-size Photographs",
    "Character Certificate from last attended institution",
    "Caste Certificate (if applicable)"
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary py-20 text-white mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">Admissions 2026</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-body">Join our vibrant academic community today.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-primary mb-8 font-headline flex items-center gap-3">
                <Info className="h-8 w-8 text-accent" />
                Admission Process
              </h2>
              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent before:to-transparent">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent bg-background text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {idx + 1}
                    </div>
                    <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 shadow-sm border-none group-hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-primary mb-2 font-headline">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground border-none shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent font-headline">
                  <FileText className="h-6 w-6" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/80">{doc}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-accent border-2 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-primary font-headline">Ready to apply?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-6">
                  Online applications for the 2026 academic session are now open for all courses.
                </p>
                <Button className="w-full bg-primary text-white hover:bg-primary/90 font-bold">
                  Start Application <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
