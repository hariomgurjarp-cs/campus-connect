'use server';
/**
 * @fileOverview AI Course Recommendation Agent.
 *
 * - recommendCourses - Recommends college courses based on student interests.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RecommendCoursesInputSchema = z.object({
  interests: z.string().describe('The student\'s academic or professional interests.'),
});
export type RecommendCoursesInput = z.infer<typeof RecommendCoursesInputSchema>;

const RecommendCoursesOutputSchema = z.object({
  courses: z.array(z.object({
    name: z.string().describe('Name of the recommended course.'),
    reason: z.string().describe('Why this course is a good fit for the student.'),
  })),
  advice: z.string().describe('General career or study advice for the student.'),
});
export type RecommendCoursesOutput = z.infer<typeof RecommendCoursesOutputSchema>;

export async function recommendCourses(input: RecommendCoursesInput): Promise<RecommendCoursesOutput> {
  return recommendCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendCoursesPrompt',
  input: { schema: RecommendCoursesInputSchema },
  output: { schema: RecommendCoursesOutputSchema },
  prompt: `You are an expert academic advisor at ABC College. 
  
  Based on the following student interests: "{{{interests}}}", recommend 2-3 specific courses from our curriculum (BCA, B.Sc, B.A, B.Com, M.Sc, M.A).
  
  Provide a clear reason for each recommendation and some brief career advice.`,
});

const recommendCoursesFlow = ai.defineFlow(
  {
    name: 'recommendCoursesFlow',
    inputSchema: RecommendCoursesInputSchema,
    outputSchema: RecommendCoursesOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
