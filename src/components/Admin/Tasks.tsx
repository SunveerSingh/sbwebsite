import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Clock, CheckSquare, AlertCircle, Calendar } from 'lucide-react';
import { Task } from '../../types';

export default function Tasks() {
  // Mock data - replace with actual Firebase data
  const [tasks] = useState<Task[]>([
    {
      id: '1',
      dealId: 'deal1',
      title: 'Discovery call with Arjun Patel',
      dueAt: new Date('2025-01-15T15:00:00'),
      status: 'pending',
      assigneeUserId: 'sb1',
      createdAt: new Date()
    },
    {
      id: '2',
      dealId: 'deal2', 
      title: 'Send quote for "Midnight Dreams" project',
      dueAt: new Date('2025-01-16T10:00:00'),
      status: 'pending',
      assigneeUserId: 'sb1',
      createdAt: new Date()
    },
    {
      id: '3',
      dealId: 'deal3',
      title: 'Master delivery for "City Lights"',
      dueAt: new Date('2025-01-16T17:00:00'),
      status: 'pending',
      assigneeUserId: 'sb1',
      createdAt: new Date()
    }
  ]);

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter(task => task.status === status);
  };

  const isOverdue = (task: Task) => {
    return task.status === 'pending' && new Date(task.dueAt) < new Date();
  };

  const formatDueDate = (date: Date) => {
    const now = new Date();
    const due = new Date(date);
    const diffInHours = (due.getTime() - now.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return `Due today at ${due.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    } else if (diffInHours < 48) {
      return `Due tomorrow at ${due.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    } else {
      return `Due ${due.toLocaleDateString()}`;
    }
  };

  const getPriorityLevel = (task: Task) => {
    const hoursUntilDue = (new Date(task.dueAt).getTime() - new Date().getTime()) / (1000 * 60 * 60);
    if (hoursUntilDue < 0) return 'overdue';
    if (hoursUntilDue < 24) return 'urgent';
    if (hoursUntilDue < 72) return 'high';
    return 'normal';
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
          <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
          <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Plus size={20} />
            New Task
          </button>
        </div>
        <p className="text-gray-600">Stay on top of all your project tasks and deadlines.</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <Clock size={24} className="text-yellow-500" />
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{getTasksByStatus('pending').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <CheckSquare size={24} className="text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{getTasksByStatus('completed').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <AlertCircle size={24} className="text-red-500" />
            <div>
              <p className="text-sm text-gray-600">Overdue</p>
              <p className="text-2xl font-bold text-gray-900">{tasks.filter(isOverdue).length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <Calendar size={24} className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Due Today</p>
              <p className="text-2xl font-bold text-gray-900">
                {tasks.filter(task => {
                  const today = new Date();
                  const due = new Date(task.dueAt);
                  return due.toDateString() === today.toDateString();
                }).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">All Tasks</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={task.status === 'completed'}
                    className="mt-1 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                    onChange={() => {}} // Add task completion logic
                  />
                  <div>
                    <h3 className={`font-medium ${task.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                      {task.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDueDate(task.dueAt)}
                      </span>
                      <span className="capitalize">Deal #{task.dealId}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {(() => {
                    const priority = getPriorityLevel(task);
                    if (priority === 'overdue') {
                      return (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <AlertCircle size={12} className="mr-1" />
                          Overdue
                        </span>
                      );
                    } else if (priority === 'urgent') {
                      return (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          <Clock size={12} className="mr-1" />
                          Urgent
                        </span>
                      );
                    } else if (priority === 'high') {
                      return (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          High Priority
                        </span>
                      );
                    }
                    return null;
                  })()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {filteredContacts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <CheckSquare size={48} className="text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No tasks found</p>
          <p className="text-gray-500">Create your first task to get started.</p>
        </motion.div>
      )}
    </div>
  );
}