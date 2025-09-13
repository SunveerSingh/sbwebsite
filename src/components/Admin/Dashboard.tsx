import React from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { name: 'Active Deals', value: '12', change: '+2.5%', icon: TrendingUp },
    { name: 'New Contacts', value: '8', change: '+12.1%', icon: Users },
    { name: 'Revenue (MTD)', value: '$24,500', change: '+8.2%', icon: DollarSign },
    { name: 'Avg. Deal Time', value: '18 days', change: '-3.2%', icon: Clock }
  ];

  const recentActivity = [
    { type: 'contact', message: 'New contact from website: Rajesh Kumar', time: '2 hours ago' },
    { type: 'deal', message: 'Deal "Summer Vibes EP" moved to Production', time: '4 hours ago' },
    { type: 'payment', message: 'Payment received for Invoice SB-2025-0034', time: '6 hours ago' },
    { type: 'task', message: 'Discovery call scheduled with Priya Singh', time: '1 day ago' }
  ];

  const upcomingTasks = [
    { title: 'Discovery call with Arjun Patel', due: 'Today at 3:00 PM', priority: 'high' },
    { title: 'Send quote for "Midnight Dreams" project', due: 'Tomorrow', priority: 'medium' },
    { title: 'Follow up on pending invoice', due: 'Dec 15', priority: 'low' },
    { title: 'Master delivery for "City Lights"', due: 'Dec 16', priority: 'high' }
  ];

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-3xl font-light text-gray-900 mb-3 tracking-wide">Dashboard</h1>
        <p className="text-gray-600 font-light">Welcome back! Here's what's happening with your studio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, index) => (
          <div
            key={stat.name}
            className="bg-white border border-gray-200 p-8 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-light tracking-wide">{stat.name}</p>
                <p className="text-3xl font-light text-gray-900 mt-2">{stat.value}</p>
              </div>
              <stat.icon size={32} className="text-gray-400" />
            </div>
            <div className="mt-6 flex items-center">
              <span className={`text-sm font-light ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2 font-light">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 p-8">
          <h2 className="text-xl font-light text-gray-900 mb-8 tracking-wide">Recent Activity</h2>
          <div className="space-y-6">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                  {activity.type === 'contact' && <Users size={16} className="text-gray-600" />}
                  {activity.type === 'deal' && <TrendingUp size={16} className="text-gray-600" />}
                  {activity.type === 'payment' && <DollarSign size={16} className="text-gray-600" />}
                  {activity.type === 'task' && <Calendar size={16} className="text-gray-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 font-light">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1 font-light">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white border border-gray-200 p-8">
          <h2 className="text-xl font-light text-gray-900 mb-8 tracking-wide">Upcoming Tasks</h2>
          <div className="space-y-6">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className={`w-3 h-3 ${
                  task.priority === 'high' ? 'bg-red-400' :
                  task.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-light text-gray-900">{task.title}</p>
                  <p className="text-xs text-gray-500 mt-1 font-light">{task.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}