import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Book, Award, Globe, Star, UserCheck, Globe2, Mail, PhoneCall, ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Enhanced Design */}
      <div className="relative bg-white">
        <div className="absolute inset-0 bg-blue-50 opacity-50 h-1/2 w-full z-0"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left space-y-6 md:w-2/3">
              <Badge variant="outline" className="px-4 py-1 border-blue-200 bg-blue-50 text-blue-800">
                Distinguished Academic & Mentor
              </Badge>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Prof. (Dr) Rajiv Bhushan</span>
                <span className="block text-blue-600 text-2xl mt-3 font-medium">Interview Coach & Global Mentor</span>
              </h1>
              <p className="text-xl text-gray-600">
                Distinguished faculty at NIT Jamshedpur with 33 years of academic excellence and global impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="px-8 py-6 rounded-lg text-lg font-medium bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open('https://app.simplymeet.me/drrajiv', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="px-8 py-6 rounded-lg text-lg font-medium border-blue-200 text-blue-700 hover:bg-blue-50 shadow-md hover:shadow-lg transition-all"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-200 to-blue-50 blur-lg opacity-75"></div>
                <Avatar className="w-64 h-64 border-4 border-white shadow-xl">
                  <AvatarImage src="/api/placeholder/400/400" alt="Dr. Rajiv Bhushan" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-700 text-4xl text-white">RB</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-blue-700">33+</span>
              <span className="text-gray-600 mt-1">Years of Academic Excellence</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-blue-700">15,000+</span>
              <span className="text-gray-600 mt-1">Students Mentored</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-blue-700">40+</span>
              <span className="text-gray-600 mt-1">Research Publications</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-blue-700">10+</span>
              <span className="text-gray-600 mt-1">Years as Head of Training & Placement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Highlights Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-1 border-blue-200 bg-blue-50 text-blue-800 mb-4">
              Professional Highlights
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Decades of Excellence and Impact</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              A distinguished career built on academic excellence, practical expertise, and a passion for mentoring the next generation
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardHeader>
                <UserCheck className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-900">Interview Coach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  An expert Interview Coach with 10 years of experience as Head Training and Placement and 21 years as founding professor in-charge of soft skills club at NIT Jamshedpur
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardHeader>
                <Globe2 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-900">Global Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mentored over 15,000 students globally, shaping careers and fostering academic excellence in India and abroad.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardHeader>
                <Award className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-900">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gold medallist and university rank holder throughout academic career. University teaching and research in India and abroad for 33 years. LinkedIn Top Voice in Mentoring, Career Counselling, Higher Education, Team Management and Public Affairs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl font-bold text-gray-900">International Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Six years as Assistant Professor at Sana'a University, Yemen, bringing global perspective to education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Tabbed Expertise Section */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-1 border-blue-200 bg-blue-50 text-blue-800 mb-4">
              Areas of Expertise
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Multifaceted Expertise</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Decades of experience across academic, professional, and consultative domains
            </p>
          </div>
          
          <Tabs defaultValue="academic" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 gap-4 p-1 rounded-full bg-blue-50 w-auto">
                <TabsTrigger value="academic" className="rounded-full px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Academic
                </TabsTrigger>
                <TabsTrigger value="professional" className="rounded-full px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Professional
                </TabsTrigger>
                <TabsTrigger value="consultative" className="rounded-full px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Consultative
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="academic" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "English Language & Literature",
                  "Research Methodology",
                  "Academic Leadership",
                  "Higher Education",
                  "Curriculum Development",
                  "Educational Technology"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <GraduationCap className="h-6 w-6 text-blue-600 mr-4" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="professional" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Corporate Communication",
                  "Business Communication",
                  "Leadership & Motivation",
                  "Media Specialist",
                  "Team Management",
                  "Public Affairs"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <Briefcase className="h-6 w-6 text-blue-600 mr-4" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="consultative" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "HR Interview",
                  "Training & Placement",
                  "Group Discussion",
                  "Soft Skills",
                  "Campus to Corporate Training",
                  "Career Counselling"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <Star className="h-6 w-6 text-blue-600 mr-4" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Research & Publications with Scroll Area */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="px-4 py-1 border-blue-200 bg-blue-50 text-blue-800 mb-4">
              Academic Contributions
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Research & Publications</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              A rich body of academic work spanning multiple disciplines
            </p>
          </div>
          
          <Card className="shadow-lg border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="h-6 w-6 text-blue-600 mr-3" />
                Research Experience and PhD Supervision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Over 20 years of research experience with 40 research papers and multiple book chapters in specialized areas. Guided numerous Post Graduate Research students and PhD candidates across multiple disciplines globally.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-blue-800 mb-4">Featured Publications</h3>
                <ScrollArea className="h-64 rounded-md border border-blue-100 bg-white p-4">
                  <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="pb-4">
                        <h4 className="font-medium text-gray-900 mb-1">Research Paper Title {item}</h4>
                        <p className="text-sm text-gray-600">
                          Journal of Academic Excellence, Vol. {20 + item}, 20{10 + item}
                        </p>
                        <Separator className="mt-4" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                <span className="block">Ready to amplify your placement and career prospects?</span>
              </h2>
              <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                Schedule a one-on-one consultation with Prof. Dr. Rajiv Bhushan and take the first step toward professional excellence
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="px-8 py-6 rounded-lg text-lg font-medium bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.open('https://app.simplymeet.me/drrajiv', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="px-8 py-6 rounded-lg text-lg font-medium border-white text-white hover:bg-white/20 shadow-md hover:shadow-lg transition-all"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Contact Dr. Rajiv
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Prof. (Dr) Rajiv Bhushan</h3>
              <p className="mb-4">Interview Coach & Global Mentor</p>
              <p className="flex items-center mb-2">
                <Mail className="h-4 w-4 mr-2" />
                contact@drrajivbhushan.com
              </p>
              <p className="flex items-center">
                <PhoneCall className="h-4 w-4 mr-2" />
                +91 12345 67890
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> About</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Services</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Publications</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors flex items-center"><ArrowRight className="h-3 w-3 mr-2" /> Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 5.16c-.58.26-1.19.44-1.84.52.66-.4 1.17-1.03 1.4-1.78-.62.37-1.31.64-2.03.79-.58-.62-1.41-1.01-2.32-1.01-1.76 0-3.18 1.43-3.18 3.18 0 .25.03.49.08.73-2.64-.13-4.98-1.4-6.55-3.32-.27.47-.43 1.02-.43 1.6 0 1.1.56 2.07 1.41 2.64-.52-.02-1.01-.16-1.44-.4v.04c0 1.54 1.1 2.83 2.56 3.12-.27.07-.55.11-.84.11-.21 0-.41-.02-.61-.06.41 1.27 1.58 2.19 2.97 2.21-1.09.85-2.46 1.36-3.95 1.36-.26 0-.51-.01-.76-.04 1.4.9 3.07 1.43 4.85 1.43 5.82 0 9-4.82 9-9 0-.14 0-.28-.01-.41.62-.45 1.16-1 1.58-1.64z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Prof. (Dr) Rajiv Bhushan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
