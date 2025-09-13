import React, { useState } from 'react';
import { Play, Pause, Download, ShoppingCart, Music, Headphones, Volume2 } from 'lucide-react';
import Button from '../components/UI/Button';

interface Kit {
  id: string;
  name: string;
  type: 'multi-kit' | 'template';
  price: number;
  originalTrack?: string;
  description: string;
  includes: string[];
  previewUrl: string;
  image: string;
  featured?: boolean;
}

export default function SoundKits() {
  const [playingKit, setPlayingKit] = useState<string | null>(null);
  const [cart, setCart] = useState<string[]>([]);

  const kits: Kit[] = [
    {
      id: 'dont-look',
      name: 'Don\'t Look',
      type: 'multi-kit',
      price: 49,
      originalTrack: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      description: 'Complete production package from the hit single. Includes stems, MIDI files, and bonus content.',
      includes: ['Stems (8 tracks)', 'MIDI Files', 'One-shots (24)', 'Bonus Loops (12)', 'Original Track'],
      previewUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      image: '/p1.jpg',
      featured: true
    },
    {
      id: 'bad-habits',
      name: 'Bad Habits',
      type: 'multi-kit',
      price: 39,
      originalTrack: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      description: 'Dark, moody production elements with contemporary Punjabi fusion sounds.',
      includes: ['Stems (6 tracks)', 'MIDI Files', 'One-shots (20)', 'Vocal Chops (8)', 'Original Track'],
      previewUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      image: '/p2.jpg'
    },
    {
      id: 'kala-maal',
      name: 'Kala Maal',
      type: 'multi-kit',
      price: 44,
      originalTrack: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      description: 'Traditional meets modern with authentic Punjabi instruments and contemporary production.',
      includes: ['Stems (7 tracks)', 'MIDI Files', 'Traditional Instruments', 'Modern Elements', 'Original Track'],
      previewUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      image: '/p3.jpg'
    },
    {
      id: 'courtside',
      name: 'Courtside',
      type: 'multi-kit',
      price: 59,
      originalTrack: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      description: 'Gold-certified track breakdown. Premium package with exclusive content and detailed breakdown.',
      includes: ['Full Stems', 'MIDI Files', 'Exclusive Breakdown Video', 'Producer Notes', 'Original Track'],
      previewUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      image: '/about.jpg',
      featured: true
    },
    {
      id: 'sb-mix-template',
      name: 'SB Mix Template',
      type: 'template',
      price: 29,
      description: 'Professional mixing template used on hit records. Compatible with major DAWs.',
      includes: ['Pro Tools Template', 'Logic Pro Template', 'Ableton Template', 'Setup Guide', 'Video Tutorial'],
      previewUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      image: '/herobg.JPG'
    }
  ];

  const togglePlay = (kitId: string) => {
    if (playingKit === kitId) {
      setPlayingKit(null);
    } else {
      setPlayingKit(kitId);
    }
  };

  const addToCart = (kitId: string) => {
    if (!cart.includes(kitId)) {
      setCart([...cart, kitId]);
    }
  };

  const removeFromCart = (kitId: string) => {
    setCart(cart.filter(id => id !== kitId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, kitId) => {
      const kit = kits.find(k => k.id === kitId);
      return total + (kit?.price || 0);
    }, 0);
  };

  const featuredKits = kits.filter(kit => kit.featured);
  const regularKits = kits.filter(kit => !kit.featured);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img 
            src="/herobg.JPG" 
            alt="Studio background"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Music size={48} className="text-white" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.05em] leading-none">
              SOUND KITS
            </h1>
          </div>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Premium sound kits and templates from chart-topping productions. 
            Get the exact sounds used in hit records.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" href="#featured">
              Browse Kits
              <Music size={20} />
            </Button>
            <Button size="lg" variant="secondary" href="#cart">
              Cart ({cart.length})
              <ShoppingCart size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Kits */}
      <section id="featured" className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              FEATURED KITS
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
              Premium packages from our biggest hits. Complete production breakdowns with stems, MIDI, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredKits.map((kit) => (
              <div key={kit.id} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                <div className="aspect-square mb-6 relative overflow-hidden">
                  <img 
                    src={kit.image} 
                    alt={kit.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => togglePlay(kit.id)}
                      className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      {playingKit === kit.id ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2 tracking-wide">{kit.name}</h3>
                    <p className="text-white/60 text-sm font-light uppercase tracking-wider">
                      {kit.type === 'multi-kit' ? 'Multi Kit' : 'Template'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-light text-white">${kit.price}</p>
                  </div>
                </div>

                <p className="text-white/70 font-light mb-6 leading-relaxed">{kit.description}</p>

                {kit.originalTrack && (
                  <div className="bg-white/5 border border-white/10 p-4 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Volume2 size={16} className="text-white/60" />
                      <span className="text-white/80 text-sm font-light">Original Track Included</span>
                    </div>
                    <button
                      onClick={() => togglePlay(kit.id + '-original')}
                      className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-light"
                    >
                      {playingKit === kit.id + '-original' ? <Pause size={14} /> : <Play size={14} />}
                      Listen to Original
                    </button>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3 text-sm tracking-wide">INCLUDES:</h4>
                  <ul className="text-white/60 text-sm font-light space-y-1">
                    {kit.includes.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  {cart.includes(kit.id) ? (
                    <Button 
                      variant="secondary" 
                      className="flex-1"
                      onClick={() => removeFromCart(kit.id)}
                    >
                      Remove from Cart
                    </Button>
                  ) : (
                    <Button 
                      className="flex-1"
                      onClick={() => addToCart(kit.id)}
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </Button>
                  )}
                  <Button variant="ghost">
                    <Download size={16} />
                    Preview
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Kits */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
              ALL KITS & TEMPLATES
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Complete catalog of professional sound kits and mixing templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularKits.map((kit) => (
              <div key={kit.id} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                <div className="aspect-square mb-4 relative overflow-hidden">
                  <img 
                    src={kit.image} 
                    alt={kit.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => togglePlay(kit.id)}
                      className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      {playingKit === kit.id ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1 tracking-wide">{kit.name}</h3>
                    <p className="text-white/60 text-xs font-light uppercase tracking-wider">
                      {kit.type === 'multi-kit' ? 'Multi Kit' : 'Template'}
                    </p>
                  </div>
                  <p className="text-xl font-light text-white">${kit.price}</p>
                </div>

                <p className="text-white/70 font-light mb-4 text-sm leading-relaxed">{kit.description}</p>

                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 text-xs tracking-wide">INCLUDES:</h4>
                  <ul className="text-white/60 text-xs font-light space-y-1">
                    {kit.includes.slice(0, 3).map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                    {kit.includes.length > 3 && (
                      <li className="text-white/40">+ {kit.includes.length - 3} more...</li>
                    )}
                  </ul>
                </div>

                <div className="flex gap-2">
                  {cart.includes(kit.id) ? (
                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="flex-1"
                      onClick={() => removeFromCart(kit.id)}
                    >
                      Remove
                    </Button>
                  ) : (
                    <Button 
                      size="sm"
                      className="flex-1"
                      onClick={() => addToCart(kit.id)}
                    >
                      <ShoppingCart size={14} />
                      Add
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <Download size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart */}
      {cart.length > 0 && (
        <section id="cart" className="py-32 px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
                YOUR CART
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 p-8">
              <div className="space-y-6 mb-8">
                {cart.map((kitId) => {
                  const kit = kits.find(k => k.id === kitId);
                  if (!kit) return null;

                  return (
                    <div key={kitId} className="flex items-center justify-between py-4 border-b border-white/10">
                      <div className="flex items-center gap-4">
                        <img 
                          src={kit.image} 
                          alt={kit.name}
                          className="w-16 h-16 object-cover"
                        />
                        <div>
                          <h3 className="text-white font-medium tracking-wide">{kit.name}</h3>
                          <p className="text-white/60 text-sm font-light">
                            {kit.type === 'multi-kit' ? 'Multi Kit' : 'Template'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-white font-light">${kit.price}</span>
                        <button
                          onClick={() => removeFromCart(kitId)}
                          className="text-white/40 hover:text-red-400 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-light text-white">Total:</span>
                  <span className="text-2xl font-light text-white">${getTotalPrice()}</span>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart size={20} />
                    Checkout - ${getTotalPrice()}
                  </Button>
                  <Button size="lg" variant="secondary" onClick={() => setCart([])}>
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Growing Catalog */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 tracking-[0.05em]">
            GROWING CATALOG
          </h2>
          
          <p className="text-xl text-white/70 font-light mb-16 leading-relaxed max-w-3xl mx-auto">
            New kits and templates added regularly. Follow us on social media to be the first 
            to know about new releases and exclusive drops.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 p-8">
              <Music size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-medium mb-3 tracking-wide">New Releases</h3>
              <p className="text-white/60 font-light text-sm">Fresh kits from latest productions</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8">
              <Headphones size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-medium mb-3 tracking-wide">Exclusive Content</h3>
              <p className="text-white/60 font-light text-sm">Unreleased sounds and bonus material</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8">
              <Download size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-medium mb-3 tracking-wide">Instant Access</h3>
              <p className="text-white/60 font-light text-sm">Download immediately after purchase</p>
            </div>
          </div>
          
          <Button size="lg" href="https://instagram.com/signaturebysb" target="_blank" rel="noopener noreferrer">
            Follow for Updates
          </Button>
        </div>
      </section>
    </div>
  );
}