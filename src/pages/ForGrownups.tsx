
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import PoohGreeting from '@/components/PoohGreeting';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Coffee, MessageSquare, FileText } from 'lucide-react';

const ForGrownups = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="text-center mb-6">
            <motion.h1 
              className="text-3xl md:text-4xl font-handwritten text-amber-800 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              For Grown-ups
            </motion.h1>
            <motion.p 
              className="text-amber-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Resources, tips, and guidance to help you support your child's learning journey with Pooh
            </motion.p>
          </div>
        </section>

        <section className="mb-8">
          <PoohGreeting message="Hello there, grown-ups! While the little ones are having their adventures, I thought you might like some help understanding how to make the most of our time together." />
        </section>
        
        <section className="mb-12">
          <Tabs defaultValue="guidance" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="guidance" className="flex flex-col items-center gap-2 py-3">
                <BookOpen size={20} />
                <span>Guidance</span>
              </TabsTrigger>
              <TabsTrigger value="discussion" className="flex flex-col items-center gap-2 py-3">
                <MessageSquare size={20} />
                <span>Discussion Prompts</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex flex-col items-center gap-2 py-3">
                <FileText size={20} />
                <span>Resources</span>
              </TabsTrigger>
              <TabsTrigger value="selfcare" className="flex flex-col items-center gap-2 py-3">
                <Coffee size={20} />
                <span>Self-care</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="guidance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-800">How to Support Your Child's Learning</CardTitle>
                  <CardDescription>Simple ways to enhance the experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-amber-900">
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Ask open-ended questions about the stories they read, like "How do you think Piglet felt when he was lost?" or "What would you have done if you were Pooh?"</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Encourage your child to complete the daily kindness tasks and discuss how it made them feel afterward.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Create a comfortable, distraction-free environment for reading and activities.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Be patient and let your child explore at their own pace - not every activity needs to be completed in one sitting.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Celebrate their kindness accomplishments, no matter how small they might seem.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-800">The Value of Pooh's Wisdom</CardTitle>
                  <CardDescription>The timeless lessons in Winnie the Pooh stories</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-amber-900">Winnie the Pooh stories contain simple yet profound wisdom that can help children develop emotional intelligence and social skills:</p>
                  <ul className="space-y-4 text-amber-900">
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Friendship:</strong> Pooh values his friends above all else, showing children the importance of nurturing relationships.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Acceptance:</strong> Each character in the Hundred Acre Wood has unique quirks that are embraced by the group.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Problem-solving:</strong> The stories often involve creative solutions to everyday challenges.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Mindfulness:</strong> Pooh's simple approach to life reminds us to be present and appreciate small joys.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="discussion" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-800">Story Discussion Prompts</CardTitle>
                  <CardDescription>Questions to deepen understanding after reading</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-amber-900">
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Who was your favorite character in the story and why?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>What was the kindest thing someone did in the story?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>If you could change one part of the story, what would it be?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>How did the story make you feel? Happy, sad, excited?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Can you think of a time when you faced a similar problem as one of the characters?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>What do you think happens after the story ends?</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-800">Kindness Reflection Questions</CardTitle>
                  <CardDescription>Help children process their kind actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-amber-900">
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>How did it feel when you did something kind for someone else?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>What was the nicest thing someone did for you today?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Did you see anyone else being kind today? What did they do?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Was it hard or easy to complete today's kindness task? Why?</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>What kind thing would you like to do tomorrow?</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-800">Recommended Books</CardTitle>
                  <CardDescription>Extend the learning with these titles</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-amber-900">
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>The Complete Tales of Winnie-the-Pooh</strong> by A.A. Milne - The original stories that started it all.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Winnie-the-Pooh's Little Book of Wisdom</strong> - Thoughtful quotes and insights from the beloved bear.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Return to the Hundred Acre Wood</strong> by David Benedictus - Authorized sequel to the original tales.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>The Tao of Pooh</strong> by Benjamin Hoff - A grown-up look at the philosophy within Pooh's simple approach to life.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-800">Additional Resources</CardTitle>
                  <CardDescription>More ways to explore the world of Pooh</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-amber-900">
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Printable Activities:</strong> <a href="#" className="text-blue-600 hover:underline">Download our collection of Pooh-themed coloring pages and activities</a></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>BBC's In Our Time - Winnie the Pooh:</strong> <a href="https://www.bbc.co.uk/programmes/b09jqtfs" className="text-blue-600 hover:underline">A thoughtful discussion on the cultural significance of A.A. Milne's creation</a></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span><strong>Visit the real Hundred Acre Wood:</strong> <a href="https://www.nationaltrust.org.uk/ashdown-forest" className="text-blue-600 hover:underline">Ashdown Forest in East Sussex, England</a> was the inspiration for the stories</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="selfcare" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-800">A Reminder for Parents</CardTitle>
                  <CardDescription>Taking care of yourself matters too</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-amber-900">As Pooh wisely says, "You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes." Remember to take care of yourself too:</p>
                  <ul className="space-y-4 text-amber-900">
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Take a few minutes each day for yourself, even if it's just to enjoy a cup of tea in peace.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Don't feel pressured to complete every activity or be "perfect" - you're doing great!</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Embrace the Pooh philosophy: slow down, be present, and enjoy the simple pleasures.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Connect with other parents to share experiences and support each other.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Remember that reading together isn't just good for your child - it's a special bonding time that benefits you both.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-amber-800">Pooh's Wisdom for Adults</CardTitle>
                  <CardDescription>Timeless quotes that speak to all ages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-amber-900">
                    <blockquote className="border-l-4 border-amber-300 pl-4 italic">
                      "Sometimes the smallest things take up the most room in your heart."
                    </blockquote>
                    <blockquote className="border-l-4 border-amber-300 pl-4 italic">
                      "You're braver than you believe, stronger than you seem, and smarter than you think."
                    </blockquote>
                    <blockquote className="border-l-4 border-amber-300 pl-4 italic">
                      "A little Consideration, a little Thought for Others, makes all the difference."
                    </blockquote>
                    <blockquote className="border-l-4 border-amber-300 pl-4 italic">
                      "How lucky I am to have something that makes saying goodbye so hard."
                    </blockquote>
                    <blockquote className="border-l-4 border-amber-300 pl-4 italic">
                      "Rivers know this: there is no hurry. We shall get there some day."
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </Layout>
  );
};

export default ForGrownups;
