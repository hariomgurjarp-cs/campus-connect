"use client";

import { useState, useEffect } from 'react';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, User, Mail, Calendar, Sparkles } from 'lucide-react';
import { recommendCourses, type RecommendCoursesOutput } from '@/ai/flows/course-recommendation-flow';

export default function ProfilePage() {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  
  const profileRef = useMemoFirebase(() => {
    if (!db || !user) return null;
    return doc(db, 'users', user.uid);
  }, [db, user]);

  const { data: profile, isLoading: isProfileLoading } = useDoc(profileRef);
  
  const [fullName, setFullName] = useState('');
  const [interests, setInterests] = useState('');
  const [recommendation, setRecommendation] = useState<RecommendCoursesOutput | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    if (profile) {
      setFullName(profile.fullName || '');
    }
  }, [profile]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (profileRef) {
      updateDoc(profileRef, { fullName });
    }
  };

  const handleGetRecommendations = async () => {
    if (!interests) return;
    setIsAiLoading(true);
    try {
      const result = await recommendCourses({ interests });
      setRecommendation(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAiLoading(false);
    }
  };

  if (isUserLoading || isProfileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold font-headline text-primary">Your Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1 h-fit">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <User className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-xl">{profile?.fullName || 'User'}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <div className="pt-4 border-t space-y-2 text-left text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Joined {profile?.registrationDate ? new Date(profile.registrationDate).toLocaleDateString() : 'N/A'}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Edit Information</CardTitle>
              <CardDescription>Update your personal details here.</CardDescription>
            </CardHeader>
            <form onSubmit={handleUpdateProfile}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} 
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Save Changes</Button>
              </CardFooter>
            </form>
          </Card>

          <Card className="border-accent/50 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                AI Course Assistant
              </CardTitle>
              <CardDescription>Tell us your interests and we'll recommend the best courses for you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>What are you interested in?</Label>
                <Input 
                  placeholder="e.g. Web development, UI design, Data science" 
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                />
              </div>
              
              {recommendation && (
                <div className="mt-6 p-4 bg-white rounded-lg border border-accent/20 space-y-4">
                  <h3 className="font-bold text-primary">Recommended Courses:</h3>
                  <div className="grid gap-3">
                    {recommendation.courses.map((course, idx) => (
                      <div key={idx} className="p-3 bg-secondary/50 rounded-md border">
                        <p className="font-bold text-sm">{course.name}</p>
                        <p className="text-xs text-muted-foreground">{course.reason}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 italic text-xs text-muted-foreground">
                    Tip: {recommendation.advice}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleGetRecommendations} 
                className="w-full bg-primary text-white"
                disabled={isAiLoading || !interests}
              >
                {isAiLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2" />}
                Get AI Recommendations
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
