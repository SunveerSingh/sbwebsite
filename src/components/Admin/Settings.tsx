import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, User, Bell, Shield, Palette, Globe } from 'lucide-react';
import Button from '../UI/Button';
import toast from 'react-hot-toast';

export default function Settings() {
  const [settings, setSettings] = useState({
    profile: {
      name: 'SB',
      email: 'admin@signaturebysb.com',
      phone: '+1 (647) 932-3409',
      timezone: 'EST'
    },
    notifications: {
      newLeads: true,
      taskReminders: true,
      paymentReceived: true,
      emailNotifications: false
    },
    business: {
      currency: 'USD',
      taxRate: 13,
      invoicePrefix: 'SB',
      paymentInstructions: 'Bank Transfer: [Account Details]\nUPI ID: signaturebysb@paytm'
    }
  });

  const handleSave = async () => {
    // Simulate save - replace with actual Firebase update
    await new Promise(resolve => setTimeout(resolve, 500));
    toast.success('Settings saved successfully!');
  };

  const updateSetting = (category: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: value
      }
    }));
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and business preferences.</p>
      </motion.div>

      <div className="space-y-8">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <User size={24} className="text-pink-500" />
            <h2 className="text-xl font-bold text-gray-900">Profile</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                value={settings.profile.name}
                onChange={(e) => updateSetting('profile', 'name', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                value={settings.profile.email}
                onChange={(e) => updateSetting('profile', 'email', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                value={settings.profile.phone}
                onChange={(e) => updateSetting('profile', 'phone', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Timezone</label>
              <select
                value={settings.profile.timezone}
                onChange={(e) => updateSetting('profile', 'timezone', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors"
              >
                <option value="EST">Eastern Time (EST)</option>
                <option value="PST">Pacific Time (PST)</option>
                <option value="IST">India Standard Time (IST)</option>
                <option value="GMT">Greenwich Mean Time (GMT)</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Bell size={24} className="text-pink-500" />
            <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
          </div>

          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </p>
                  <p className="text-sm text-gray-500">
                    {key === 'newLeads' && 'Get notified when new leads come in'}
                    {key === 'taskReminders' && 'Receive reminders for upcoming tasks'}
                    {key === 'paymentReceived' && 'Get alerts for payment confirmations'}
                    {key === 'emailNotifications' && 'Send notifications via email'}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => updateSetting('notifications', key, e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
                </label>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Business Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe size={24} className="text-pink-500" />
            <h2 className="text-xl font-bold text-gray-900">Business</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Currency</label>
              <select
                value={settings.business.currency}
                onChange={(e) => updateSetting('business', 'currency', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors"
              >
                <option value="USD">USD ($)</option>
                <option value="CAD">CAD ($)</option>
                <option value="INR">INR (₹)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Tax Rate (%)</label>
              <input
                type="number"
                value={settings.business.taxRate}
                onChange={(e) => updateSetting('business', 'taxRate', parseFloat(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Invoice Prefix</label>
              <input
                value={settings.business.invoicePrefix}
                onChange={(e) => updateSetting('business', 'invoicePrefix', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors"
                placeholder="SB"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Payment Instructions</label>
            <textarea
              value={settings.business.paymentInstructions}
              onChange={(e) => updateSetting('business', 'paymentInstructions', e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-pink-500 focus:outline-none transition-colors resize-none"
              placeholder="Include bank transfer details, UPI ID, etc."
            />
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-end"
        >
          <Button onClick={handleSave} size="lg">
            <Save size={20} />
            Save Settings
          </Button>
        </motion.div>
      </div>
    </div>
  );
}