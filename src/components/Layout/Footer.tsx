import React from 'react';

export default function Footer() {
  const whatsappUrl = 'https://wa.me/16479323409';

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-light text-lg tracking-[0.2em] mb-6">SIGNATURE BY SB</h3>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Producer & mix/mastering engineer crafting radio-ready records for artists who want the real thing.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wide mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-white/60 hover:text-white text-sm font-light transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/lets-work.html" className="text-white/60 hover:text-white text-sm font-light transition-colors">
                  Let's Work
                </a>
              </li>
              <li>
                <a href="/university.html" className="text-white/60 hover:text-white text-sm font-light transition-colors">
                  University
                </a>
              </li>
              <li>
                <a href="/cowriter.html" className="text-white/60 hover:text-white text-sm font-light transition-colors">
                  Cowriter
                </a>
              </li>
              <li>
                <a href="/sound-kits.html" className="text-white/60 hover:text-white text-sm font-light transition-colors">
                  Sound Kits
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wide mb-6">Contact</h4>
            <div className="space-y-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/60 hover:text-white text-sm font-light transition-colors"
              >
                +1 (647) 932-3409
              </a>
              <a 
                href="mailto:hello@signaturebysb.com"
                className="block text-white/60 hover:text-white text-sm font-light transition-colors"
              >
                hello@signaturebysb.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8">
          <p className="text-white/40 text-xs font-light text-center">
            © 2025 Signature By SB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}