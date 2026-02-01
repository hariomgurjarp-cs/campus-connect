
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary py-20 text-white mb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">Contact Us</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-body">We're here to help and answer any questions you might have.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 font-headline">Get in Touch</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Have questions about admissions, courses, or campus life? Reach out to us through any of the following channels.
              </p>
              
              <div className="space-y-6">
                <ContactInfoItem 
                  icon={<MapPin className="h-6 w-6" />}
                  title="Campus Address"
                  content="ABC College, Main Road, City, State, India - 123456"
                />
                <ContactInfoItem 
                  icon={<Mail className="h-6 w-6" />}
                  title="Email Us"
                  content="info@abccollege.edu"
                />
                <ContactInfoItem 
                  icon={<Phone className="h-6 w-6" />}
                  title="Call Us"
                  content="+91-XXXXXXXXXX"
                />
                <ContactInfoItem 
                  icon={<Clock className="h-6 w-6" />}
                  title="Working Hours"
                  content="Mon - Sat: 9:00 AM - 5:00 PM"
                />
              </div>
            </div>

            <div className="h-64 bg-secondary rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/20">
              <span className="text-primary/50 font-headline font-bold">Interactive Map Placeholder</span>
            </div>
          </div>

          <div>
            <Card className="p-8 shadow-xl border-none">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-primary mb-6 font-headline">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Full Name</label>
                      <Input placeholder="John Doe" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Subject</label>
                    <Input placeholder="Inquiry about BCA Admission" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Message</label>
                    <Textarea placeholder="How can we help you?" className="min-h-[150px] bg-background" />
                  </div>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 py-6 text-lg font-bold">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors group">
      <div className="p-3 bg-primary text-accent rounded-xl shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-primary font-headline">{title}</h4>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
}
