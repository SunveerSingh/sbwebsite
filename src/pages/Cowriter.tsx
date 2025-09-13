import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { PenTool, ArrowRight, CheckCircle, Globe, Smartphone, Users, Zap, Music, Languages, Clock } from 'lucide-react';
import Button from '../components/UI/Button';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  language: yup.string().required('Preferred language is required'),
  experience: yup.string().required('Experience level is required')
});

interface FormData {
  name: string;
  email: string;
  language: string;
  experience: string;
}

export default function Cowriter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const features = [
    {
      icon: Languages,
      title: 'Multilingual Support',
      description: 'Write in English, Punjabi, and Hindi with intelligent language switching and cultural context.'
    },
    {
      icon: Music,
      title: 'Genre-Specific Templates',
      description: 'Pre-built song structures for Punjabi pop, Bhangra, hip-hop fusion, and contemporary styles.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Suggestions',
      description: 'Get intelligent rhyme suggestions, melody ideas, and cultural references that fit your style.'
    },
    {
      icon: Users,
      title: 'Collaboration Tools',
      description: 'Work with other writers in real-time, share ideas, and build songs together remotely.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Write on the go with our mobile app. Capture ideas anywhere, anytime.'
    },
    {
      icon: Globe,
      title: 'Cultural Context',
      description: 'Built-in understanding of Punjabi culture, traditions, and contemporary references.'
    }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pa', name: 'Punjabi', flag: '🇮🇳' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' }
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Cowriter signup:', data);
      setIsSubmitted(true);
      toast.success('Welcome to the Cowriter waitlist! You\'ll be first to access the app.');
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
            Thanks for joining the Cowriter waitlist. You'll be among the first to access the app when we launch, 
            plus you'll get exclusive early access features.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 mb-12">
            <h3 className="text-white font-medium mb-6 tracking-wide">What happens next?</h3>
            <ul className="text-white/60 space-y-3 font-light text-left">
              <li>• You'll receive app launch notifications</li>
              <li>• Get early beta access before public release</li>
              <li>• Access to exclusive writing templates</li>
              <li>• Join the private writers community</li>
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
            <PenTool size={48} className="text-white" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.05em] leading-none">
              COWRITER
            </h1>
          </div>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            The first multilingual songwriting app designed for Punjabi, Hindi, and English artists. 
            Write better songs faster with AI-powered assistance.
          </p>

          <div className="bg-white/10 border border-white/20 p-8 mb-12 max-w-3xl mx-auto">
            <p className="text-white/90 font-light mb-4 text-lg">Coming Soon</p>
            <p className="text-3xl font-light text-white mb-4">Free App Launch</p>
            <p className="text-white/70 font-light">Join the waitlist for early access</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" href="#signup">
              Join Free Waitlist
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="secondary" href="#features">
              See Features
            </Button>
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              MULTILINGUAL BY DESIGN
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
              The first songwriting app built specifically for multilingual artists. Switch between languages seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {languages.map((lang, index) => (
              <div key={lang.code} className="text-center">
                <div className="w-20 h-20 bg-white/10 border border-white/20 mx-auto mb-8 flex items-center justify-center text-3xl">
                  {lang.flag}
                </div>
                <h3 className="text-xl font-medium text-white mb-6 tracking-wide">{lang.name}</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  {lang.code === 'en' && 'Full English support with contemporary slang, cultural references, and modern expressions.'}
                  {lang.code === 'pa' && 'Native Punjabi writing with traditional and modern vocabulary, cultural context, and regional dialects.'}
                  {lang.code === 'hi' && 'Complete Hindi support including Bollywood references, poetic expressions, and contemporary usage.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              POWERFUL FEATURES
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Everything you need to write better songs, faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                <feature.icon size={32} className="text-white mb-6" />
                <h3 className="text-white font-medium mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              BUILT FOR CREATORS
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Designed by songwriters, for songwriters. Every feature serves your creative process.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-12">
            <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center mb-8">
              <div className="text-center">
                <Smartphone size={64} className="text-white/40 mx-auto mb-4" />
                <p className="text-white/40 font-light">App Preview Coming Soon</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-medium mb-4 tracking-wide">Smart Writing Assistant</h3>
                <ul className="text-white/60 space-y-2 font-light text-sm">
                  <li>• Intelligent rhyme suggestions</li>
                  <li>• Cultural context awareness</li>
                  <li>• Genre-specific templates</li>
                  <li>• Real-time collaboration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4 tracking-wide">Professional Tools</h3>
                <ul className="text-white/60 space-y-2 font-light text-sm">
                  <li>• Voice memo integration</li>
                  <li>• Chord progression helper</li>
                  <li>• Export to popular formats</li>
                  <li>• Cloud sync across devices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Plan Integration */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              PART OF THE SIGNATURE ECOSYSTEM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-white font-medium mb-6 tracking-wide">University Integration</h3>
              <p className="text-white/60 font-light mb-6 leading-relaxed">
                Cowriter will be integrated into Signature University as a bonus module, 
                teaching students how to use AI tools for songwriting.
              </p>
              <Button variant="secondary" href="/university.html">
                Learn About University
              </Button>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-white font-medium mb-6 tracking-wide">Production Pipeline</h3>
              <p className="text-white/60 font-light mb-6 leading-relaxed">
                Write your songs in Cowriter, then bring them to The Signature Collective 
                for full production and professional recording.
              </p>
              <Button variant="secondary" href="/lets-work.html">
                Explore TSC
              </Button>
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
              Be among the first to access Cowriter when we launch. It's completely free.
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
                  <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Preferred Language *</label>
                  <select
                    {...register('language')}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/40 focus:outline-none transition-colors font-light"
                  >
                    <option value="" className="bg-black">Select language</option>
                    <option value="english" className="bg-black">English</option>
                    <option value="punjabi" className="bg-black">Punjabi</option>
                    <option value="hindi" className="bg-black">Hindi</option>
                    <option value="multilingual" className="bg-black">All Languages</option>
                  </select>
                  {errors.language && <p className="text-red-400 text-sm mt-2 font-light">{errors.language.message}</p>}
                </div>

                <div>
                  <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Writing Experience *</label>
                  <select
                    {...register('experience')}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/40 focus:outline-none transition-colors font-light"
                  >
                    <option value="" className="bg-black">Select experience</option>
                    <option value="beginner" className="bg-black">Just Starting Out</option>
                    <option value="hobbyist" className="bg-black">Hobbyist Writer</option>
                    <option value="semi-pro" className="bg-black">Semi-Professional</option>
                    <option value="professional" className="bg-black">Professional Songwriter</option>
                  </select>
                  {errors.experience && <p className="text-red-400 text-sm mt-2 font-light">{errors.experience.message}</p>}
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
                    <PenTool size={20} />
                    Join Free Waitlist
                  </>
                )}
              </Button>
              
              <p className="text-white/50 text-sm font-light mt-4">
                100% free app. No spam, just launch updates.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* MVP Timeline */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 p-12">
            <Clock size={48} className="text-blue-400 mx-auto mb-8" />
            <h2 className="text-3xl font-light text-white mb-8 tracking-wide">Launch Timeline</h2>
            <p className="text-lg text-white/70 font-light mb-8 leading-relaxed">
              We're targeting an 8-week MVP launch. Join the waitlist to be notified 
              when beta testing begins and get early access to all features.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/60 font-light">
              <p>📱 Mobile-first design</p>
              <p>🤖 AI-powered assistance</p>
              <p>🌍 Multilingual support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}