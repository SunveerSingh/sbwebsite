import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Phone, Mail, DollarSign, Calendar, MoreVertical } from 'lucide-react';
import { Deal } from '../../types';

export default function Pipeline() {
  const stages = [
    'New',
    'Qualified', 
    'Discovery Booked',
    'Quote Sent',
    'Deposit Received',
    'Production',
    'Vocals Received',
    'Mix',
    'Master',
    'Client Approval',
    'Release Prep',
    'Closed Won',
    'Closed Lost'
  ];

  // Mock data - replace with actual Firebase data
  const [deals] = useState<Deal[]>([
    {
      id: '1',
      contactId: 'c1',
      title: 'Summer Vibes EP',
      source: 'website',
      stage: 'Production',
      services: ['Production', 'Mix', 'Master'],
      budget: { min: 5000, max: 8000, currency: 'USD' },
      timeline: { start: new Date(), end: new Date() },
      priorityScore: 85,
      ownerUserId: 'sb1',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    // Add more mock deals here
  ]);

  const getDealsByStage = (stage: string) => {
    return deals.filter(deal => deal.stage === stage);
  };

  const getPriorityColor = (score: number) => {
    if (score >= 80) return 'bg-red-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const formatBudget = (budget: Deal['budget']) => {
    return `$${budget.min.toLocaleString()} - $${budget.max.toLocaleString()}`;
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Pipeline</h1>
          <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Plus size={20} />
            New Deal
          </button>
        </div>
        <p className="text-gray-600">Manage your sales pipeline and track deal progress.</p>
      </motion.div>

      <div className="overflow-x-auto">
        <div className="flex gap-6 min-w-max pb-6">
          {stages.map((stage, stageIndex) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stageIndex * 0.05, duration: 0.6 }}
              className="bg-gray-100 rounded-lg p-4 min-w-[300px]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{stage}</h3>
                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {getDealsByStage(stage).length}
                </span>
              </div>

              <div className="space-y-3">
                {getDealsByStage(stage).map((deal) => (
                  <div
                    key={deal.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{deal.title}</h4>
                        <p className="text-sm text-gray-600">{formatBudget(deal.budget)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getPriorityColor(deal.priorityScore)}`}></div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(deal.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1 capitalize">
                        {deal.source}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <button className="p-1 text-gray-400 hover:text-pink-500 transition-colors">
                        <Phone size={14} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-pink-500 transition-colors">
                        <Mail size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}