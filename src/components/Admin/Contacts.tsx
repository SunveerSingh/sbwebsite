import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Phone, Mail, Instagram, Music } from 'lucide-react';
import { Contact } from '../../types';

export default function Contacts() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data - replace with actual Firebase data
  const [contacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'Rajesh Kumar',
      artistName: 'RK Music',
      email: 'rajesh@email.com',
      whatsappE164: '+919876543210',
      instagram: 'https://instagram.com/rkmusic',
      location: 'Mumbai, India',
      timezone: 'IST',
      notes: 'Interested in full production package',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      name: 'Priya Singh', 
      artistName: 'Priya',
      email: 'priya@email.com',
      whatsappE164: '+917890123456',
      spotify: 'https://open.spotify.com/artist/priya',
      location: 'Toronto, Canada',
      timezone: 'EST',
      notes: 'Looking for mixing and mastering services',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (contact.artistName && contact.artistName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
          <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Plus size={20} />
            Add Contact
          </button>
        </div>
        <p className="text-gray-600">Manage your contacts and artist relationships.</p>
      </motion.div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search contacts..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact, index) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{contact.name}</h3>
                {contact.artistName && (
                  <p className="text-pink-600 font-medium text-sm">{contact.artistName}</p>
                )}
                <p className="text-gray-600 text-sm">{contact.email}</p>
              </div>
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 font-bold">
                  {contact.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>

            {contact.location && (
              <p className="text-gray-500 text-sm mb-4">📍 {contact.location}</p>
            )}

            {contact.notes && (
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{contact.notes}</p>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                {contact.whatsappE164 && (
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <Phone size={16} />
                  </button>
                )}
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Mail size={16} />
                </button>
                {contact.instagram && (
                  <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                    <Instagram size={16} />
                  </button>
                )}
                {contact.spotify && (
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <Music size={16} />
                  </button>
                )}
              </div>
              <span className="text-xs text-gray-400">
                {new Date(contact.createdAt).toLocaleDateString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Users size={48} className="text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No contacts found</p>
          <p className="text-gray-500">Try adjusting your search or add a new contact.</p>
        </motion.div>
      )}
    </div>
  );
}