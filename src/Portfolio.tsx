import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Calendar, Book, Award, Globe, Star, UserCheck, Globe2 } from 'lucide-react';


const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Prof. (Dr) Rajiv Bhushan</span>
              <span className="block text-blue-600 text-2xl mt-3">Interview Coach & Global Mentor</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Distinguished faculty at NIT Jamshedpur with 33 years of academic excellence and global impact
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Button 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                onClick={() => window.open('https://app.simplymeet.me/drrajiv', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <UserCheck className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interview Coach</h3>
                <p className="text-gray-600">An expert Interview Coach with 10 years of experience as Head Training and Placement and 21 years as founding professor in-charge of soft skills club at NIT Jamshedpur</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Globe2 className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Mentorship</h3>
                <p className="text-gray-600">Mentored over 15,000 students globally, shaping careers and fostering academic excellence in India and abroad.</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Academic Excellence</h3>
                
                <p className="text-gray-600">Gold medallist and university rank holder throughout academic career. University teaching and research in India and abraod for 33 years. LinkedIn Top Voice in Mentoring, Career Councelling, Higher Education, Team Management and Public Affairs.
                {/* <ul className="list-disc pl-6 text-gray-600">
                  <li>Mentoring</li>
                  <li>Career Councelling</li>
                  <li>Higher Education</li>
                  <li>Team Management</li>
                  <li>Public Affairs</li>
                </ul> */}
                </p>
              </CardContent>
            </Card>

            

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow xl:col-start-2 xl:row-start-2">
              <CardContent className="p-6">
                <Globe className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">International Experience</h3>
                <p className="text-gray-600">Six years as Assistant Professor at Sana'a University, Yemen, bringing global perspective to education.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "HR Interview",
              "Training & Placement",
              "Group Discussion",
              "Soft Skills",
              "Leadership & Motivation",
              "Campus to Corporate Training",
              "Corporate Communication",
              "Business Communication",
              "Media Specialist",
              "English Language & Literature"
            ].map((skill, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Star className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research & Publications */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Research & Publications</h2>
          <div className="grid grid-cols-1">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <Book className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Research Experience and PhD Supervision</h3>
                <p className="text-gray-600">Over 20 years of research experience with 40 research papers and multiple book chapters in specialized areas. Guided numerous Post Graduate Research students and PhD candidates across multiple disciplines globally.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to amplify your placement and career prospects?</span>
            </h2>
            <div className="mt-8 flex justify-center">
              <Button 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                onClick={() => window.open('https://app.simplymeet.me/drrajiv', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;