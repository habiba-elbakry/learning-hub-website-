import React, { useState } from 'react';
import { Search, BookOpen, User, Calendar, Award, Play, Menu, X, ChevronRight } from 'lucide-react';

const OnlineLearningPlatform = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('featured');
  
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      instructor: "Sarah Johnson",
      level: "Beginner",
      duration: "8 weeks",
      rating: 4.8,
      students: 12543,
      image: "/api/placeholder/400/225",
      category: "programming",
      featured: true
    },
    {
      id: 2,
      title: "Advanced Data Science",
      instructor: "Michael Chen",
      level: "Advanced",
      duration: "12 weeks",
      rating: 4.9,
      students: 8752,
      image: "/api/placeholder/400/225",
      category: "data",
      featured: true
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Emily Rodriguez",
      level: "Intermediate",
      duration: "6 weeks",
      rating: 4.7,
      students: 9621,
      image: "/api/placeholder/400/225",
      category: "marketing",
      featured: true
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "David Kim",
      level: "Beginner",
      duration: "10 weeks",
      rating: 4.6,
      students: 7325,
      image: "/api/placeholder/400/225",
      category: "design",
      featured: false
    },
    {
      id: 5,
      title: "Machine Learning Foundations",
      instructor: "Priya Patel",
      level: "Intermediate",
      duration: "14 weeks",
      rating: 4.9,
      students: 5843,
      image: "/api/placeholder/400/225",
      category: "data",
      featured: false
    },
    {
      id: 6,
      title: "Business Strategy & Leadership",
      instructor: "James Wilson",
      level: "Advanced",
      duration: "8 weeks",
      rating: 4.8,
      students: 4217,
      image: "/api/placeholder/400/225",
      category: "business",
      featured: false
    }
  ];
  
  const categories = [
    { name: "Programming", count: 145, icon: <BookOpen size={18} /> },
    { name: "Data Science", count: 87, icon: <BookOpen size={18} /> },
    { name: "Business", count: 126, icon: <BookOpen size={18} /> },
    { name: "Design", count: 92, icon: <BookOpen size={18} /> },
    { name: "Marketing", count: 73, icon: <BookOpen size={18} /> },
    { name: "Personal Development", count: 68, icon: <BookOpen size={18} /> }
  ];
  
  const filteredCourses = activeTab === 'featured' 
    ? courses.filter(course => course.featured)
    : courses;
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-indigo-600">LearnHub</span>
              </div>
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="#" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Courses</a>
                <a href="#" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Instructors</a>
                <a href="#" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">About</a>
              </nav>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="py-2 pl-10 pr-4 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                Sign In
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Courses</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Instructors</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">About</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="mt-3 px-2 space-y-1">
                <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Expand your skills, advance your career
              </h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                Access thousands of high-quality courses from expert instructors around the world. 
                Learn at your own pace and achieve your goals.
              </p>
              <div className="mt-8 flex">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50"
                  >
                    Explore Courses
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/api/placeholder/600/400" 
                alt="Online Learning Illustration" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 py-6">
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-indigo-600">1200+</p>
              <p className="text-gray-600">Courses</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-indigo-600">250+</p>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-indigo-600">15M+</p>
              <p className="text-gray-600">Students Worldwide</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-indigo-600">4.8/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex items-center justify-between text-gray-600 hover:text-indigo-600 group">
                        <div className="flex items-center">
                          {category.icon}
                          <span className="ml-2">{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 group-hover:text-indigo-600">{category.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Filter By</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Level</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input id="beginner" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="beginner" className="ml-2 text-sm text-gray-600">Beginner</label>
                        </div>
                        <div className="flex items-center">
                          <input id="intermediate" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="intermediate" className="ml-2 text-sm text-gray-600">Intermediate</label>
                        </div>
                        <div className="flex items-center">
                          <input id="advanced" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="advanced" className="ml-2 text-sm text-gray-600">Advanced</label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Duration</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input id="short" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="short" className="ml-2 text-sm text-gray-600">Under 4 weeks</label>
                        </div>
                        <div className="flex items-center">
                          <input id="medium" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="medium" className="ml-2 text-sm text-gray-600">4-8 weeks</label>
                        </div>
                        <div className="flex items-center">
                          <input id="long" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="long" className="ml-2 text-sm text-gray-600">Over 8 weeks</label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Rating</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input id="fourplus" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="fourplus" className="ml-2 text-sm text-gray-600">4.0 & above</label>
                        </div>
                        <div className="flex items-center">
                          <input id="threeplus" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="threeplus" className="ml-2 text-sm text-gray-600">3.0 & above</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Course listing */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Popular Courses</h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setActiveTab('featured')}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'featured' 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Featured
                  </button>
                  <button 
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      activeTab === 'all' 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    All Courses
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <div className="relative pb-1/2">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white text-indigo-600 text-xs font-bold uppercase rounded px-2 py-1">
                        {course.level}
                      </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <User size={16} className="mr-1" />
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={16} className="mr-1" />
                        <span>{course.duration}</span>
                        <span className="mx-2">•</span>
                        <Award size={16} className="mr-1" />
                        <span>{course.rating}/5.0</span>
                        <span className="mx-2">•</span>
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="mt-auto pt-4 flex space-x-2">
                        <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded font-medium flex items-center justify-center">
                          <Play size={16} className="mr-1" />
                          Enroll Now
                        </button>
                        <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 font-medium">
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="flex items-center text-indigo-600 font-medium hover:text-indigo-800">
                  View All Courses
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="bg-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Learn With Us?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform offers unique features to make your learning experience exceptional.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">High-Quality Content</h3>
                <p className="text-gray-600">
                  All our courses are created by industry experts and undergo rigorous quality checks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <User size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from professionals with real-world experience and proven teaching skills.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Certificates</h3>
                <p className="text-gray-600">
                  Earn recognized certificates upon completion to boost your resume and career.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What Our Students Say
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Thousands of students have transformed their careers with our courses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                    AS
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Alex Smith</h4>
                    <p className="text-sm text-gray-500">Web Developer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The web development course completely changed my career path. I went from knowing nothing about coding to landing my dream job in just 6 months."
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                    JP
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Jessica Park</h4>
                    <p className="text-sm text-gray-500">Data Analyst</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The data science courses here are incredible. The instructors break down complex concepts in ways that are easy to understand and apply immediately."
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                    RJ
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Raj Joshi</h4>
                    <p className="text-sm text-gray-500">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I took the Digital Marketing course to update my skills, and it was worth every penny. The practical exercises and case studies were particularly valuable."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
              Ready to start your learning journey?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Join thousands of students already learning on our platform.
              Get unlimited access to all courses for one low monthly price.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
                Sign Up Now
              </button>
              <button className="bg-indigo-800 text-white hover:bg-indigo-900 px-6 py-3 rounded-md font-medium text-lg">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LearnHub</h3>
              <p className="text-gray-400 text-sm">
                Empowering individuals through quality education and skill development since 2020.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Become an Instructor</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates on new courses and features.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 w-full text-gray-800 rounded-l-md focus:outline-none"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 LearnHub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OnlineLearningPlatform;