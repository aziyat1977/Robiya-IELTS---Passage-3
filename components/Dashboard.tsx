import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Laptop, ChevronRight } from 'lucide-react';
import { useReading } from '../context/ReadingContext';

const Dashboard: React.FC = () => {
  const { moduleData } = useReading();

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{moduleData.title}</h1>
          <p className="text-xl text-gray-600 font-light">{moduleData.subtitle}</p>
          <p className="text-gray-500 mt-2">{moduleData.description}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vocab Card */}
          <Link to="/reading/vocab" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 h-full flex flex-col cursor-pointer group-hover:-translate-y-1">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <BookOpen className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pre-Teach Vocabulary</h3>
              <p className="text-gray-600 flex-grow">
                Master {moduleData.vocabSection.length} key academic terms found in the test.
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                Start Lesson <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          {/* Grammar Card */}
          <Link to="/reading/grammar" className="group">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 h-full flex flex-col cursor-pointer group-hover:-translate-y-1">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <GraduationCap className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Grammar Focus</h3>
              <p className="text-gray-600 flex-grow">
                Learn <strong>{moduleData.grammarSection.topic}</strong> to understand complex sentences.
              </p>
              <div className="mt-4 flex items-center text-purple-600 font-medium">
                Start Lesson <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          {/* Test Card */}
          <Link to="/reading/test" className="group">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-700 h-full flex flex-col cursor-pointer group-hover:-translate-y-1">
              <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Start Mock Test</h3>
              <p className="text-gray-300 flex-grow">
                Full 60-minute IELTS Computer-Delivered simulation. 40 Questions.
              </p>
              <div className="mt-4 flex items-center text-white font-medium">
                Launch Simulator <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;