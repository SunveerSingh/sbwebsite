import React from 'react';
import { ArrowRight, Music, Instagram, Youtube, MessageCircle, Apple, Cloud, Play, Users, TrendingUp } from 'lucide-react';
import Button from '../components/UI/Button';
import AudioPlayer from '../components/UI/AudioPlayer';

export default function Landing() {
  const whatsappUrl = 'https://wa.me/16479323409';
  
  const selectedWork = [
    {
      title: 'P1',
      artist: 'Artist Name',
      afterSrc: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
    },
    {
      title: 'P2',
      artist: 'Another Artist',
      afterSrc: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
    },
    {
      title: 'P3',
      artist: 'Third Artist', 
      afterSrc: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
    }
  ];

  const achievements = [
    { number: '217M+', label: 'Total Streams', icon: Play },
    { number: '50+', label: 'Releases', icon: Music },
    { number: '25+', label: 'Collaborations', icon: Users },
    { number: 'Billboard', label: 'Charted', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image - Lazy loaded */}
        <div className="absolute inset-0 bg-black">
          <img 
            src="/herobg.JPG" 
            alt="Hero background"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <div className="text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 tracking-wide leading-none">
            SIGNATURE BY SB
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-white/60 text-xs sm:text-sm mb-8 font-light tracking-wider">
            <span>217M+ STREAMS</span>
            <span className="hidden sm:block w-1 h-1 bg-white/60 rounded-full"></span>
            <span>BILLBOARD CHARTED</span>
            <span className="hidden sm:block w-1 h-1 bg-white/60 rounded-full"></span>
            <span>TRUSTED IN PUNJABI MUSIC</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" href="/lets-work.html">
              Let's Work Together
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <achievement.icon size={32} className="text-white/40 mx-auto mb-4 group-hover:text-white/60 transition-colors" />
                <p className="text-3xl md:text-4xl font-light text-white mb-2">{achievement.number}</p>
                <p className="text-white/60 font-light tracking-wide text-sm">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About SB */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">
                ABOUT SB
              </h2>
              
              <div className="space-y-8 text-lg text-white/70 leading-relaxed font-light">
                <p>
                  Signature By SB is a Toronto-based music producer who has been active since 2019. 
                  He is known for his unique fusion of Bhangra-inspired rhythms and hip-hop production, 
                  creating Punjabi language pop songs that resonate with a global audience.
                </p>
                <p>
                  He often collaborates with singer Bhalwaan, resulting in a dynamic partnership that 
                  has produced several notable tracks. SB's unique perspective on Punjabi music has 
                  resulted in a distinctive sound that appeals to fans worldwide.
                </p>
                <p>
                  With 217M+ streams and Billboard placements, SB brings both the technical expertise 
                  and creative intuition needed to elevate music to its full potential.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Portrait placeholder */}
              <div className="aspect-[4/5] border border-white/10 relative overflow-hidden bg-gray-900">
                <img 
                  src="/about.jpg" 
                  alt="About SB"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-16">
            "If you've spent thousands on studio time and still don't have a song you're proud of — it's not your fault. Get the right producer in the room."
          </blockquote>
          <cite className="text-white/60 text-xl font-light tracking-wide">— SB, Executive Producer</cite>
        </div>
      </section>

      {/* The Priceless Collection */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wider">
              THE PRICELESS COLLECTION
            </h2>
            <p className="text-lg text-white/60 font-light tracking-wide">
              BHALWAAN & SIGNATURE BY SB
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {selectedWork.map((track, index) => (
              <div key={track.title} className="group cursor-pointer">
                {/* Vinyl/CD Container */}
                <div className="aspect-square mb-6 relative bg-black overflow-hidden">
                  {/* Normal state: Square artwork */}
                  <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-700">
                    <img 
                      src={`/${index === 0 ? 'p1.jpg' : index === 1 ? 'p2.jpg' : 'p3.jpg'}`}
                      alt={track.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Hover state: Vinyl/CD disc */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-spin-slow">
                    {/* Main vinyl disc with artwork */}
                    <div className="w-full h-full rounded-full relative shadow-2xl overflow-hidden">
                      <img 
                        src={`/${index === 0 ? 'p1.jpg' : index === 1 ? 'p2.jpg' : 'p3.jpg'}`}
                        alt={track.title}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Vinyl grooves - subtle concentric circles */}
                      <div className="absolute inset-0 rounded-full">
                        <div className="absolute inset-4 border border-black/20 rounded-full"></div>
                        <div className="absolute inset-8 border border-black/15 rounded-full"></div>
                        <div className="absolute inset-12 border border-black/10 rounded-full"></div>
                        <div className="absolute inset-16 border border-black/10 rounded-full"></div>
                        <div className="absolute inset-20 border border-black/5 rounded-full"></div>
                      </div>

                      {/* Center label area */}
                      <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center z-10">
                        
                      </div>

                      {/* Center hole */}
                      <div className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full border border-white/30 z-20"></div>

                      {/* Holographic shine effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-white/5 via-transparent via-white/10 to-transparent opacity-60"></div>
                      
                      {/* Subtle reflection */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-white/70 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
              SB's unique perspective on Punjabi music has resulted in a distinctive sound that appeals to fans worldwide, 
              blending traditional elements with contemporary music styles.
            </p>
            
            <Button variant="secondary" href="/lets-work.html">
              LET'S WORK
            </Button>
          </div>
        </div>
      </section>

      {/* Connect with SB */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/20 rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 -rotate-45"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-wider">
              CONNECT WITH SB
            </h2>
            <p className="text-xl text-white/60 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              Join the community of artists, producers, and music lovers who follow the signature sound across all platforms
            </p>
          </div>

          {/* Social Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Spotify */}
            <a 
              href="https://open.spotify.com/artist/5uhcvmuj3X2tr8ooCLrUAx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 p-8 hover:border-green-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Music size={20} className="text-white" />
                </div>
                <div className="text-right">
                  <p className="text-green-400 text-sm font-light tracking-wider">STREAM</p>
                  <p className="text-white text-2xl font-light">217M+</p>
                </div>
              </div>
              <h3 className="text-white text-xl font-light mb-3 tracking-wide group-hover:text-green-400 transition-colors">Spotify</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">Listen to the complete discography and latest releases</p>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/signaturebysb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-pink-500/10 to-purple-600/5 border border-pink-500/20 p-8 hover:border-pink-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10"
            >
              <div className="flex items-center justify-between mb-6">
                <Instagram size={32} className="text-pink-500" />
                <div className="text-right">
                  <p className="text-pink-400 text-sm font-light tracking-wider">BEHIND</p>
                  <p className="text-white text-2xl font-light">THE SCENES</p>
                </div>
              </div>
              <h3 className="text-white text-xl font-light mb-3 tracking-wide group-hover:text-pink-400 transition-colors">Instagram</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">Studio sessions, behind-the-scenes content, and daily updates</p>
            </a>

            {/* YouTube */}
            <a 
              href="https://youtube.com/@signaturebysb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 p-8 hover:border-red-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
            >
              <div className="flex items-center justify-between mb-6">
                <Youtube size={32} className="text-red-500" />
                <div className="text-right">
                  <p className="text-red-400 text-sm font-light tracking-wider">WATCH</p>
                  <p className="text-white text-2xl font-light">VIDEOS</p>
                </div>
              </div>
              <h3 className="text-white text-xl font-light mb-3 tracking-wide group-hover:text-red-400 transition-colors">YouTube</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">Music videos, production tutorials, and exclusive content</p>
            </a>

            {/* WhatsApp */}
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-400/10 to-green-500/5 border border-green-400/20 p-8 hover:border-green-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/10"
            >
              <div className="flex items-center justify-between mb-6">
                <MessageCircle size={32} className="text-green-400" />
                <div className="text-right">
                  <p className="text-green-400 text-sm font-light tracking-wider">DIRECT</p>
                  <p className="text-white text-2xl font-light">CONTACT</p>
                </div>
              </div>
              <h3 className="text-white text-xl font-light mb-3 tracking-wide group-hover:text-green-400 transition-colors">WhatsApp</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">Get in touch directly for collaborations and inquiries</p>
            </a>

            {/* Apple Music */}
            <a 
              href="https://music.apple.com/artist/signature-by-sb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-400/10 to-gray-500/5 border border-gray-400/20 p-8 hover:border-gray-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-400/10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Music size={20} className="text-white" />
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm font-light tracking-wider">APPLE</p>
                  <p className="text-white text-2xl font-light">MUSIC</p>
                </div>
              </div>
              <h3 className="text-white text-xl font-light mb-3 tracking-wide group-hover:text-gray-400 transition-colors">Apple Music</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">Stream in high quality on Apple's premium platform</p>
            </a>

            {/* SoundCloud */}
            <a 
              href="https://soundcloud.com/signaturebysb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 p-8 hover:border-orange-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="flex items-center justify-between mb-6">
                <Cloud size={32} className="text-orange-500" />
                <div className="text-right">
                  <p className="text-orange-400 text-sm font-light tracking-wider">EXCLUSIVE</p>
                  <p className="text-white text-2xl font-light">TRACKS</p>
                </div>
              </div>
              <h3 className="text-white text-xl font-light mb-3 tracking-wide group-hover:text-orange-400 transition-colors">SoundCloud</h3>
              <p className="text-white/60 font-light text-sm leading-relaxed">Unreleased tracks, remixes, and experimental sounds</p>
            </a>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-xl text-white/70 font-light mb-12 leading-relaxed max-w-3xl mx-auto">
              Stay connected with the signature sound. Follow across all platforms for the latest releases, 
              behind-the-scenes content, and exclusive updates from the studio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" href="/lets-work.html">
                WORK WITH SB
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="secondary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                MESSAGE DIRECTLY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wider">
            THE SIGNATURE COLLECTIVE
          </h2>
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
              More than just production — it's a complete creative ecosystem designed to transform your musical vision into chart-ready reality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 border border-white/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-light">01</span>
                </div>
                <h3 className="text-white font-medium mb-3 tracking-wide">Elite Network</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Handpicked producers, engineers, and musicians who've worked with the biggest names in the industry
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 border border-white/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-light">02</span>
                </div>
                <h3 className="text-white font-medium mb-3 tracking-wide">Proven Process</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  From initial concept to final master, every step is optimized for maximum impact and commercial success
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 border border-white/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-light">03</span>
                </div>
                <h3 className="text-white font-medium mb-3 tracking-wide">Quality Promise</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Every track backed by our signature guarantee — if it doesn't meet your standards, we make it right
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 mb-12">
              <blockquote className="text-lg text-white/80 font-light italic leading-relaxed mb-4">
                "The Collective isn't just about making music — it's about creating records that compete with the best in the world. 
                We've built a system that eliminates guesswork and delivers results."
              </blockquote>
              <cite className="text-white/60 text-sm font-light tracking-wide">— SB, Founder</cite>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" href="/lets-work.html">
              LET'S WORK TOGETHER
              <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="secondary" href="/contact.html">
              GET STARTED
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}