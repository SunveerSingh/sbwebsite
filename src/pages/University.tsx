import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { GraduationCap, ArrowRight, CheckCircle, Play, Download, Users, Clock, Award, Zap, Music } from 'lucide-react';
import Button from '../components/UI/Button';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  experience: yup.string().required('Experience level is required'),
  goals: yup.string().required('Goals are required')
});

interface FormData {
  name: string;
  email: string;
  experience: string;
  goals: string;
}

export default function University() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const modules = [
    'Foundation: Studio Setup & Signal Flow',
    'Recording Techniques & Vocal Production', 
    'Beat Making & Sound Design',
    'Mixing Fundamentals & EQ',
    'Compression & Dynamics',
    'Effects & Creative Processing',
    'Mastering for Streaming Platforms',
    'Industry Standards & Workflow'
  ];

  const bonuses = [
    { 
      name: 'Don\'t Look Kit', 
      description: 'Multi-kit with stems and MIDI files',
      type: 'kit'
    },
    { 
      name: 'Bad Habits Kit', 
      description: 'Complete production package with breakdown',
      type: 'kit'
    },
    { 
      name: 'Kala Maal Kit', 
      description: 'Punjabi fusion elements and traditional sounds',
      type: 'kit'
    },
    { 
      name: 'Courtside Kit', 
      description: 'Gold-certified track breakdown + stems',
      type: 'exclusive'
    },
    { 
      name: 'SB Mix Template', 
      description: 'Professional mixing template used on hit records',
      type: 'template'
    }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('University signup:', data);
      setIsSubmitted(true);
      toast.success('Welcome to the waitlist! You\'ll be notified when we launch.');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black pt-32 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center fade-in-up">
          <CheckCircle size={64} className="text-white mx-auto mb-8" />
          <h1 className="text-3xl font-light text-white mb-8 tracking-[0.05em]">You're On The List!</h1>
          <p className="text-lg text-white/70 mb-12 leading-relaxed font-light">
            Thanks for joining the Signature University waitlist. You'll be the first to know when we launch, 
            plus you'll get 25% off the early bird pricing.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 mb-12">
            <h3 className="text-white font-medium mb-6 tracking-wide">What happens next?</h3>
            <ul className="text-white/60 space-y-3 font-light text-left">
              <li>• You'll receive launch notifications via email</li>
              <li>• Get exclusive early access before public release</li>
              <li>• Receive your 25% discount code</li>
              <li>• Access to VIP Discord community</li>
            </ul>
          </div>
          
          <Button variant="secondary" href="/">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <GraduationCap size={48} className="text-white" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.05em] leading-none">
              SIGNATURE UNIVERSITY
            </h1>
          </div>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Learn recording, producing, mixing, and mastering in 30 days for a fraction of the cost of traditional music schools.
          </p>

          <div className="bg-white/10 border border-white/20 p-8 mb-12 max-w-3xl mx-auto">
            <p className="text-white/90 font-light mb-4 text-lg">Instead of paying $15,000+ at Berklee or Metalworks for 2-4 years...</p>
            <p className="text-3xl font-light text-white mb-4">Master it all in 30 days</p>
            <p className="text-white/70 font-light">For a fraction of the cost</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" href="#signup">
              Join Waitlist - 25% Off
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="secondary" href="#curriculum">
              View Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              WHY SIGNATURE UNIVERSITY?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-light text-white mb-8 tracking-wide">Traditional Music School</h3>
              <div className="space-y-4 text-white/60 font-light">
                <p>❌ $15,000 - $50,000+ tuition costs</p>
                <p>❌ 2-4 years of your life</p>
                <p>❌ Outdated curriculum and equipment</p>
                <p>❌ Theory-heavy, limited practical application</p>
                <p>❌ No industry connections or mentorship</p>
                <p>❌ Generic approach, not genre-specific</p>
                <p>❌ No guaranteed job placement</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-white mb-8 tracking-wide">Signature University</h3>
              <div className="space-y-4 text-white font-light">
                <p>✅ Fraction of the cost</p>
                <p>✅ 30-day intensive program</p>
                <p>✅ Current industry techniques & tools</p>
                <p>✅ Hands-on, practical learning</p>
                <p>✅ Direct mentorship from SB</p>
                <p>✅ Punjabi music production focus</p>
                <p>✅ Real-world project experience</p>
                <p>✅ Industry connections & opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section id="curriculum" className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              CURRICULUM PREVIEW
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              8 comprehensive modules covering everything from basics to advanced techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/20 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <h3 className="text-white font-light tracking-wide">{module}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Bonuses */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              EXCLUSIVE BONUSES
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Get these premium bonuses when you join the early access program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-8 text-center">
                {bonus.type === 'kit' && <Music size={32} className="text-white mx-auto mb-6" />}
                {bonus.type === 'template' && <Download size={32} className="text-white mx-auto mb-6" />}
                {bonus.type === 'exclusive' && <Award size={32} className="text-white mx-auto mb-6" />}
                <h3 className="text-white font-medium mb-4 tracking-wide">{bonus.name}</h3>
                <p className="text-white/60 font-light text-sm">{bonus.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 p-8">
            <div className="text-center">
              <h3 className="text-2xl font-light text-white mb-8 tracking-wide">Plus Special Discounts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 p-6">
                  <p className="text-3xl font-light text-white mb-2">10% OFF</p>
                  <p className="text-white/60 font-light mb-2">Mixing Services</p>
                  <p className="text-white/40 text-sm font-light">(Valid 3 months after course completion)</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <p className="text-3xl font-light text-white mb-2">20% OFF</p>
                  <p className="text-white/60 font-light mb-2">Full Production</p>
                  <p className="text-white/40 text-sm font-light">(Valid 3 months after course completion)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section id="signup" className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              JOIN THE WAITLIST
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Be the first to access Signature University and save 25% on early bird pricing.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="bg-white/5 border border-white/10 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Full Name *</label>
                  <input
                    {...register('name')}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-light"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-2 font-light">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Email *</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-light"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-2 font-light">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Experience Level *</label>
                  <select
                    {...register('experience')}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/40 focus:outline-none transition-colors font-light"
                  >
                    <option value="" className="bg-black">Select level</option>
                    <option value="beginner" className="bg-black">Complete Beginner</option>
                    <option value="some-experience" className="bg-black">Some Experience</option>
                    <option value="intermediate" className="bg-black">Intermediate</option>
                    <option value="advanced" className="bg-black">Advanced</option>
                  </select>
                  {errors.experience && <p className="text-red-400 text-sm mt-2 font-light">{errors.experience.message}</p>}
                </div>

                <div>
                  <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Primary Goal *</label>
                  <select
                    {...register('goals')}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/40 focus:outline-none transition-colors font-light"
                  >
                    <option value="" className="bg-black">Select goal</option>
                    <option value="produce-own-music" className="bg-black">Produce My Own Music</option>
                    <option value="start-career" className="bg-black">Start Production Career</option>
                    <option value="improve-skills" className="bg-black">Improve Current Skills</option>
                    <option value="learn-mixing" className="bg-black">Learn Mixing & Mastering</option>
                  </select>
                  {errors.goals && <p className="text-red-400 text-sm mt-2 font-light">{errors.goals.message}</p>}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="min-w-[250px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent" />
                    Joining Waitlist...
                  </>
                ) : (
                  <>
                    <GraduationCap size={20} />
                    Join Waitlist - 25% Off
                  </>
                )}
              </Button>
              
              <p className="text-white/50 text-sm font-light mt-4">
                No spam. You'll only hear from us when we launch.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* VIP Discord Access */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 p-12">
            <Users size={48} className="text-purple-400 mx-auto mb-8" />
            <h2 className="text-3xl font-light text-white mb-8 tracking-wide">VIP Discord Community</h2>
            <p className="text-lg text-white/70 font-light mb-8 leading-relaxed">
              Get exclusive access to our private Discord server where you can connect with other students, 
              get feedback on your work, and participate in live Q&A sessions with SB.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/60 font-light">
              <p>🎵 Share your productions</p>
              <p>💬 Get instant feedback</p>
              <p>🎤 Live sessions with SB</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}