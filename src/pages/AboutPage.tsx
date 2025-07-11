import React from 'react';
import { Code2, Heart, Users, Target, Mail, Github, Twitter } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Former software engineer turned educator, passionate about making programming accessible to everyone.',
      image: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in educational technology and AI-powered learning systems.',
      image: '👨‍💻'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Learning Experience Designer',
      bio: 'PhD in Educational Psychology, specializing in cognitive learning and skill acquisition.',
      image: '👩‍🎓'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Accessibility',
      description: 'We believe programming should be accessible to everyone, regardless of their background or experience level.'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We understand the challenges beginners face and design our platform with empathy and patience.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Learning is better together. We foster a supportive community of learners and educators.'
    },
    {
      icon: Code2,
      title: 'Innovation',
      description: 'We continuously explore new ways to make programming education more engaging and effective.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Logic2Code</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            We're on a mission to bridge the gap between human logic and programming concepts, 
            making coding accessible and intuitive for everyone.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that everyone has the capacity to think logically and solve problems. 
              Our platform transforms this natural ability into programming skills through 
              real-world scenarios and intuitive learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Problem</h3>
              <p className="text-gray-600 mb-6">
                Traditional programming education often starts with syntax and abstract concepts, 
                leaving many learners feeling overwhelmed and disconnected from the practical 
                applications of code.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Solution</h3>
              <p className="text-gray-600">
                Logic2Code starts with what you already know - how to think through problems 
                and make decisions. We then show you how these thought processes translate 
                directly into programming logic.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">From Logic to Code</h4>
                <p className="text-gray-600 text-sm">
                  Transform your natural problem-solving abilities into programming skills
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Logic2Code
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're a diverse team of educators, developers, and designers united by our 
              passion for making programming education better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
              <div className="text-gray-600">Students Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">50+</div>
              <div className="text-gray-600">Scenarios Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
              <div className="text-gray-600">Programming Languages</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello.
          </p>
          
          <div className="flex items-center justify-center space-x-6">
            <a
              href="mailto:hello@logic2code.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>hello@logic2code.com</span>
            </a>
            <a
              href="https://github.com/logic2code"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/logic2code"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;