import React, { useState } from 'react';
import { ArrowRight, CheckCircle, X, Play, Pause, DollarSign, Clock, Users, Star, MessageCircle } from 'lucide-react';
import Button from '../components/UI/Button';
import AudioPlayer from '../components/UI/AudioPlayer';

export default function LetsWork() {
  const [activeComparison, setActiveComparison] = useState<'diy' | 'tsc'>('tsc');
  const whatsappUrl = 'https://wa.me/16479323409';

  const beforeAfterTracks = [
    {
      title: 'Summer Vibes',
      artist: 'Artist Name',
      beforeSrc: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      afterSrc: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
    },
    {
      title: 'City Nights',
      artist: 'Another Artist',
      beforeSrc: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      afterSrc: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh K.',
      message: 'Bro the track is absolutely fire! 🔥 You understood my vision perfectly. This is exactly what I wanted.',
      time: '2:34 PM',
      avatar: 'RK'
    },
    {
      name: 'Priya S.',
      message: 'Thank you so much SB! The mix is incredible. My vocals have never sounded this good. Ready to drop this! 🚀',
      time: '4:21 PM',
      avatar: 'PS'
    },
    {
      name: 'Arjun M.',
      message: 'Just got the master back and WOW! This is going straight to Spotify. You killed it as always 💯',
      time: '6:15 PM',
      avatar: 'AM'
    }
  ];

  const faqItems = [
    {
      question: 'How do I submit my demo?',
      answer: 'Send your demo via WhatsApp (+1 647 932 3409) or email (hello@signaturebysb.com). Include reference tracks, BPM, key, and your vision for the song. We\'ll review within 24 hours and let you know if it\'s a good fit for TSC.'
    },
    {
      question: 'What do you need for full production?',
      answer: 'A clear concept, reference tracks, and your vocal recordings (if you have them). We handle everything else from beat creation to final master. If you need vocal recording, we can arrange studio time in Toronto or Vancouver.'
    },
    {
      question: 'Do you work with artists outside Toronto?',
      answer: 'Absolutely! We work with artists worldwide through our proven remote collaboration process. Most of our communication happens via WhatsApp, and we use secure file sharing for all audio transfers.'
    },
    {
      question: 'What\'s your revision policy?',
      answer: 'Full production includes 3 major revisions at key stages: after beat approval, after rough mix, and after final mix. Additional revisions are available at $150 each. We want you to be 100% happy with your track.'
    },
    {
      question: 'How long does production take?',
      answer: 'Full production: 2-3 weeks from start to final master. Mixing & mastering only: 1 week. Rush delivery available for urgent projects (additional 50% fee). We\'ll give you exact timelines when you book.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes! 50% deposit to start, 50% on completion. For full production, we can also do 3 payments: 40% to start, 30% after beat approval, 30% on final delivery. All payments via e-transfer or PayPal.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img 
            src="/herobg.JPG" 
            alt="Studio background"
            className="w-full h-full object-cover opacity-40"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-[0.05em] leading-none">
            THE SIGNATURE COLLECTIVE
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Stop wasting money on studio time that doesn't deliver. Get radio-ready records with our proven full-production system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" href="#pricing">
              Get Started - $2,899
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why TSC Section */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              WHY THE SIGNATURE COLLECTIVE?
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
              Most artists waste thousands on disconnected services. We provide everything under one roof with proven results.
            </p>
          </div>

          {/* Process Infographic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 border border-white/20 mx-auto mb-8 flex items-center justify-center">
                <span className="text-white text-2xl font-light">01</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-6 tracking-wide">Send Your Idea</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Share your demos, voice notes, and vision with us via WhatsApp. We'll review and confirm if it's a good fit for TSC.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 border border-white/20 mx-auto mb-8 flex items-center justify-center">
                <span className="text-white text-2xl font-light">02</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-6 tracking-wide">We Create Your Track</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Custom beat production, arrangement, recording (if needed), mixing, and mastering. Guided experience throughout.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 border border-white/20 mx-auto mb-8 flex items-center justify-center">
                <span className="text-white text-2xl font-light">03</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-6 tracking-wide">Radio-Ready Master</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Receive your polished, release-ready track that competes with anything on the charts. Guaranteed quality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 border border-white/20 mx-auto mb-8 flex items-center justify-center">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-6 tracking-wide">Complete Solution</h3>
              <p className="text-white/60 leading-relaxed font-light">
                From concept to master, we handle every aspect of your production. No more coordinating between multiple producers, engineers, and studios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 border border-white/20 mx-auto mb-8 flex items-center justify-center">
                <Star size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-6 tracking-wide">Proven Results</h3>
              <p className="text-white/60 leading-relaxed font-light">
                217M+ streams, Billboard charts, and countless satisfied artists. Our track record speaks for itself in the Punjabi music industry.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 border border-white/20 mx-auto mb-8 flex items-center justify-center">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-6 tracking-wide">Guided Experience</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Work directly with SB and our elite team. Get hands-on guidance throughout the entire creative process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs TSC Comparison */}
      <section id="pricing" className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              DIY VS THE SIGNATURE COLLECTIVE
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
              See the real cost of going it alone vs. getting it right the first time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* DIY Column */}
            <div className="bg-white/5 border border-white/10 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">Do It Yourself</h3>
                <p className="text-white/60 font-light">The hidden costs add up fast</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div>
                    <span className="text-white/80 font-light">Beat Lease (Non-Exclusive)</span>
                    <p className="text-white/50 text-sm">Restrictions, rebuy risk</p>
                  </div>
                  <span className="text-white">$30 - $200</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div>
                    <span className="text-white/80 font-light">Beat Lease (Exclusive)</span>
                    <p className="text-white/50 text-sm">If available</p>
                  </div>
                  <span className="text-white">$500 - $5,000+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div>
                    <span className="text-white/80 font-light">Studio Time</span>
                    <p className="text-white/50 text-sm">Multiple sessions needed</p>
                  </div>
                  <span className="text-white">$1,500+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/80 font-light">Professional Mixing</span>
                  <span className="text-white">$250 - $650+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/80 font-light">Professional Mastering</span>
                  <span className="text-white">$150 - $400+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div>
                    <span className="text-white/80 font-light">Hidden Costs</span>
                    <p className="text-white/50 text-sm">Miscommunication, file transfers, revisions</p>
                  </div>
                  <span className="text-white">$500 - $1,000+</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-red-500/10 border border-red-500/20 p-4">
                  <div className="text-center">
                    <p className="text-red-400 text-sm font-light mb-1">LOW END (shortcuts)</p>
                    <p className="text-xl font-light text-white">$750 - $1,200</p>
                    <p className="text-red-400/80 text-xs font-light">Unmet expectations</p>
                  </div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4">
                  <div className="text-center">
                    <p className="text-yellow-400 text-sm font-light mb-1">MID RANGE (passable)</p>
                    <p className="text-xl font-light text-white">$1,500 - $3,000</p>
                    <p className="text-yellow-400/80 text-xs font-light">Inconsistent quality</p>
                  </div>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 p-4">
                  <div className="text-center">
                    <p className="text-red-400 text-sm font-light mb-1">HIGH END (best hands)</p>
                    <p className="text-xl font-light text-white">$4,000 - $7,000+</p>
                    <p className="text-red-400/80 text-xs font-light">Still disconnected process</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-white/60 font-light">
                <p>❌ Multiple vendors to coordinate</p>
                <p>❌ Inconsistent vision execution</p>
                <p>❌ File transfer complications</p>
                <p>❌ No guarantee of radio-ready quality</p>
                <p>❌ Potential for costly revisions</p>
              </div>
            </div>

            {/* TSC Column */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-black px-6 py-2 text-sm font-medium tracking-wide">NO-BRAINER VALUE</span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">The Signature Collective</h3>
                <p className="text-white/60 font-light">Everything you need, one price</p>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-light text-white mb-2">$2,899</div>
                <p className="text-white/60 font-light">USD - Full Production Package</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-white font-light">Exclusive, custom beat (1 of 1)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-white font-light">High-end production & arrangement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-white font-light">Professional recording & vocal production</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-white font-light">Radio-ready mixing & mastering</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-white font-light">Guided, hands-on experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-white font-light">Full project development & management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-white font-light">3 major revisions included</span>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 p-6 mb-8">
                <div className="text-center">
                  <p className="text-green-400 text-sm font-light mb-2">YOU SAVE</p>
                  <p className="text-2xl font-light text-white">$1,100 - $4,100+</p>
                  <p className="text-green-400/80 text-sm font-light mt-2">+ Guaranteed quality</p>
                </div>
              </div>

              <Button size="lg" className="w-full mb-6" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Started Now
                <ArrowRight size={20} />
              </Button>

              <p className="text-center text-white/60 text-sm font-light">
                Ready to work? Message us on WhatsApp to begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Work - Before/After */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              PROOF OF WORK
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
              Listen to actual before and after examples from our TSC productions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterTracks.map((track, index) => (
              <AudioPlayer
                key={index}
                title={track.title}
                artist={track.artist}
                beforeSrc={track.beforeSrc}
                afterSrc={track.afterSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              WHAT ARTISTS SAY
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Real messages from artists who've experienced The Signature Collective.
            </p>
          </div>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.name}</p>
                    <p className="text-white/60 text-xs">{testimonial.time}</p>
                  </div>
                  <MessageCircle size={16} className="text-green-500 ml-auto" />
                </div>
                <p className="text-white font-light leading-relaxed">{testimonial.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Are You a Good Fit? - FAQ */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              ARE YOU A GOOD FIT?
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Pre-qualify yourself with these common questions from serious artists.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-8">
                <h3 className="text-white font-medium text-lg mb-4 tracking-wide">{item.question}</h3>
                <p className="text-white/70 font-light leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 tracking-[0.05em]">
            READY TO CREATE YOUR SIGNATURE SOUND?
          </h2>
          
          <p className="text-xl text-white/70 font-light mb-16 leading-relaxed max-w-3xl mx-auto">
            Stop wasting money on disconnected services. Get everything you need to create radio-ready records with The Signature Collective.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button size="lg" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Start Your Project - $2,899
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp Questions
            </Button>
          </div>

          <p className="text-white/50 text-sm font-light mt-8">
            Ready to work with us? Send us a message and let's create something incredible together.
          </p>
        </div>
      </section>
    </div>
  );
}