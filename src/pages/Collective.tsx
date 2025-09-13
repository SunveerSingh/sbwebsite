import React from 'react';
import { Calendar, ArrowRight, CheckCircle, Music, Headphones, Mic } from 'lucide-react';
import Button from '../components/UI/Button';
import AudioPlayer from '../components/UI/AudioPlayer';

export default function Collective() {
  const whatsappUrl = 'https://wa.me/16479323409';
  
  const services = [
    { 
      name: 'Full Production', 
      price: 'From $2,000', 
      desc: 'Complete track from concept to master',
      features: ['Beat creation', 'Arrangement', 'Mix & Master', '3 revisions']
    },
    { 
      name: 'Mix & Master', 
      price: 'From $600', 
      desc: 'Professional mixing and mastering',
      features: ['Professional mix', 'Radio-ready master', 'Stem delivery', '2 revisions']
    },
    { 
      name: 'Additional Production', 
      price: 'From $800', 
      desc: 'Enhance existing tracks',
      features: ['Sound design', 'Arrangement', 'Polish existing beats', '2 revisions']
    },
    { 
      name: 'Vocal Production', 
      price: 'From $400', 
      desc: 'Recording, editing, and tuning',
      features: ['Vocal recording', 'Pitch correction', 'Vocal effects', '1 revision']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Send Your Idea',
      desc: 'Share your demos, voice notes, and vision with us',
      icon: Music
    },
    {
      step: '02', 
      title: 'Get Pro Vocals',
      desc: 'Work with our vetted engineers or bring your own',
      icon: Mic
    },
    {
      step: '03',
      title: 'We Deliver Your Track',
      desc: 'Receive your polished, release-ready master',
      icon: Headphones
    }
  ];

  const faqs = [
    { 
      q: 'How long does production take?', 
      a: 'Typical turnaround is 2-3 weeks for full production, 1 week for mixing/mastering. Rush delivery available for urgent projects.' 
    },
    { 
      q: 'Do you work with artists outside Punjab?', 
      a: 'Absolutely. We work with artists worldwide and support remote collaboration through our proven digital workflow.' 
    },
    { 
      q: 'What if I need revisions?', 
      a: 'Every package includes 3 major revisions. Additional revisions are available at a reduced rate if needed.' 
    },
    { 
      q: 'Can I use my own vocalist?', 
      a: 'Yes! We work with your existing team or connect you with our collective of elite engineers and vocalists.' 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-32 relative overflow-hidden">
        {/* Stunning Animated Music Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Frequency Bars - Multiple Layers */}
          <div className="absolute inset-0">
            {/* Layer 1 - Main Spectrum */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end gap-1 opacity-20">
              {Array.from({ length: 60 }, (_, i) => (
                <div
                  key={`spectrum-${i}`}
                  className="bg-gradient-to-t from-blue-400 via-purple-500 to-pink-400 rounded-t-sm spectrum-bar"
                  style={{
                    width: '4px',
                    height: `${20 + Math.sin(i * 0.3) * 40}px`,
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: `${2 + (i % 4) * 0.5}s`
                  }}
                />
              ))}
            </div>

            {/* Layer 2 - Floating Bars Left */}
            <div className="absolute left-10 top-1/4 flex flex-col gap-2 opacity-15">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={`left-bars-${i}`}
                  className="bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full floating-bar-left"
                  style={{
                    width: `${30 + i * 3}px`,
                    height: '3px',
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${4 + (i % 3) * 1}s`
                  }}
                />
              ))}
            </div>

            {/* Layer 3 - Floating Bars Right */}
            <div className="absolute right-10 top-1/3 flex flex-col gap-2 opacity-15">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={`right-bars-${i}`}
                  className="bg-gradient-to-l from-cyan-400 to-blue-500 rounded-full floating-bar-right"
                  style={{
                    width: `${25 + i * 4}px`,
                    height: '3px',
                    animationDelay: `${i * 0.4}s`,
                    animationDuration: `${3.5 + (i % 3) * 1.2}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Particle System - Musical Notes */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-white/10 rounded-full musical-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          {/* Geometric Morphing Shapes */}
          <div className="absolute inset-0">
            {/* Circle Pulses */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/5 rounded-full pulse-circle" 
                 style={{ animationDuration: '6s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/5 rounded-full pulse-circle" 
                 style={{ animationDuration: '8s', animationDelay: '2s' }} />
            
            {/* Morphing Lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent morphing-line" />
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent morphing-line" 
                 style={{ animationDelay: '3s' }} />
          </div>

          {/* Sound Wave Ripples */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 border border-white/3 rounded-full sound-ripple" style={{ animationDuration: '10s' }} />
            <div className="absolute inset-8 border border-white/3 rounded-full sound-ripple" style={{ animationDuration: '12s', animationDelay: '2s' }} />
            <div className="absolute inset-16 border border-white/3 rounded-full sound-ripple" style={{ animationDuration: '14s', animationDelay: '4s' }} />
          </div>
        </div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 tracking-[0.05em] leading-none whitespace-nowrap">
            THE SIGNATURE COLLECTIVE
          </h1>
          
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            More than production — a complete creative ecosystem designed to transform your musical vision into chart-ready reality.
          </p>
          
          <div className="flex justify-center">
            <Button size="lg" href="/contact.html">
              Submit Your Demo
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="text-center">
              <p className="text-4xl font-light text-white mb-4">217M+</p>
              <p className="text-white/60 font-light tracking-wide">Total Streams</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-light text-white mb-4">50+</p>
              <p className="text-white/60 font-light tracking-wide">Elite Network</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-light text-white mb-4">2019</p>
              <p className="text-white/60 font-light tracking-wide">Since</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-32 border-t border-white/5 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              THE PROCESS
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
              Three simple steps to transform your ideas into radio-ready records
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {processSteps.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 bg-white/5 border border-white/20 flex items-center justify-center mx-auto mb-8">
                  <item.icon size={32} className="text-white/60" />
                </div>
                
                <div className="text-6xl font-light text-white/20 mb-6">{item.step}</div>
                <h3 className="text-xl font-medium text-white mb-6 tracking-wide">{item.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Before/After Demo */}

      {/* Why Choose The Signature Collective */}
      <section className="py-32 border-t border-white/5 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              Why Choose The Signature Collective?
            </h2>
          </div>

          <div className="space-y-12 text-lg text-white/70 leading-relaxed font-light">
            <div>
              <p className="text-xl text-white mb-6 font-medium">
                Have you invested heavily in studio time but still lack a song that truly represents your vision?
              </p>
              <p>
                You're not alone, and it's not a reflection of your talent or dedication. The music production industry is filled with challenges that can derail even the most promising projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-6 font-medium tracking-wide">What makes us different:</h3>
              <p>
                With over 217 million streams and Billboard chart success, The Signature Collective was founded to address the systemic issues plaguing music production today. Too many talented artists face inadequate guidance, subpar mixing quality, missed deadlines, and ultimately receive tracks that fall short of their creative vision.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-6 font-medium tracking-wide">Our approach:</h3>
              <ul className="space-y-4 ml-6">
                <li className="flex items-start gap-4">
                  <span className="text-white font-medium">•</span>
                  <div>
                    <span className="text-white font-medium">Complete creative freedom for you</span> - Focus entirely on your artistry while we handle the technical execution
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white font-medium">•</span>
                  <div>
                    <span className="text-white font-medium">End-to-end production services</span> - From initial beat creation to final mastering, we manage every aspect of your project
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white font-medium">•</span>
                  <div>
                    <span className="text-white font-medium">Elite team of specialists</span> - Handpicked producers, engineers, and musicians who understand your genre and vision
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white font-medium">•</span>
                  <div>
                    <span className="text-white font-medium">Quality guarantee</span> - We deliver the version of your song you imagined, or exceed those expectations
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-white mb-6 font-medium tracking-wide">Ready to hear the difference?</h3>
              <p>
                If you have a demo or rough idea, we can transform it into a professionally competitive record that stands alongside industry leaders. Your vision deserves production quality that matches your ambition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 border-t border-white/5 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              FREQUENTLY ASKED
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-white font-medium text-lg mb-6 tracking-wide">{faq.q}</h3>
                <p className="text-white/60 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-white/5 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-white mb-12 tracking-[0.05em]">
            Ready to join The Signature Collective?
          </h2>
          
          <p className="text-lg text-white/60 font-light mb-16 leading-relaxed max-w-2xl mx-auto">
            Transform your musical vision into chart-ready reality. Book your free consultation today and discover what The Collective can do for your sound.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button size="lg" href="/contact.html">
              Submit Your Demo
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </Button>
            <Button size="lg" variant="ghost">
              <Calendar size={20} />
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}