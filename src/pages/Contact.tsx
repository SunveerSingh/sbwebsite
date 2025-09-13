import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { Send, CheckCircle } from 'lucide-react';
import Button from '../components/UI/Button';
import FileUploader from '../components/UI/FileUploader';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  artistName: yup.string(),
  email: yup.string().email('Invalid email').required('Email is required'),
  whatsapp: yup.string().required('WhatsApp number is required'),
  location: yup.string(),
  timezone: yup.string(),
  instagram: yup.string().url('Invalid URL'),
  spotify: yup.string().url('Invalid URL'),
  youtube: yup.string().url('Invalid URL'),
  projectType: yup.string().required('Project type is required'),
  services: yup.array().min(1, 'Select at least one service').required(),
  budgetMin: yup.number().min(0, 'Budget must be positive'),
  budgetMax: yup.number().min(0, 'Budget must be positive'),
  timelineStart: yup.date(),
  timelineEnd: yup.date(),
  urgency: yup.string(),
  hearAbout: yup.string(),
  notes: yup.string()
});

interface FormData {
  name: string;
  artistName?: string;
  email: string;
  whatsapp: string;
  location?: string;
  timezone?: string;
  instagram?: string;
  spotify?: string;
  youtube?: string;
  projectType: string;
  services: string[];
  budgetMin?: number;
  budgetMax?: number;
  timelineStart?: Date;
  timelineEnd?: Date;
  urgency?: string;
  hearAbout?: string;
  notes?: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const serviceOptions = [
    'Production',
    'Additional Production', 
    'Writing/Topline',
    'Vocal Direction',
    'Editing/Tuning',
    'Mix',
    'Master',
    'Release Prep'
  ];

  const projectTypes = ['Single', 'EP', 'Album', 'Other'];
  const urgencyOptions = ['No rush', 'Standard (2-3 weeks)', 'Priority (1-2 weeks)', 'Rush (under 1 week)'];
  const hearAboutOptions = ['Instagram', 'Spotify', 'YouTube', 'Referral', 'Google Search', 'Other'];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual Firebase function
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submission:', { ...data, files: uploadedFiles });
      
      setIsSubmitted(true);
      toast.success('Demo submitted successfully! We\'ll be in touch soon.');
      
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black pt-32 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center fade-in-up">
          <CheckCircle size={64} className="text-white mx-auto mb-8" />
          <h1 className="text-3xl font-light text-white mb-8 tracking-[0.05em]">Demo Submitted</h1>
          <p className="text-lg text-white/70 mb-12 leading-relaxed font-light">
            Thanks for submitting your demo. We'll review it and get back to you within 24 hours 
            with next steps for your project.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-8 mb-12 text-left">
            <h3 className="text-white font-medium mb-6 tracking-wide">What happens next?</h3>
            <ul className="text-white/60 space-y-3 font-light">
              <li>• We'll listen to your demo and review your requirements</li>
              <li>• Our team will reach out via WhatsApp or email within 24 hours</li>
              <li>• We'll schedule a free consultation to discuss your vision</li>
              <li>• You'll receive a custom quote for your project</li>
            </ul>
          </div>

          {/* Calendar Embed Placeholder */}
          <div className="bg-white/5 border border-white/10 p-8 mb-12">
            <h3 className="text-white font-medium text-lg mb-6 tracking-wide">Book Your Free Consultation</h3>
            <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
              <p className="text-white/40 font-light">Calendar widget would be embedded here</p>
            </div>
          </div>
          
          <Button variant="secondary" href="/">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-20 fade-in-up">
          <h1 className="text-3xl md:text-5xl font-light text-white mb-8 tracking-[0.05em]">
            SUBMIT YOUR DEMO
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to transform your ideas into radio-ready records? 
            Share your vision and let's create something extraordinary together.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          {/* Contact Information */}
          <div className="bg-white/5 border border-white/10 p-8">
            <h2 className="text-xl font-medium text-white mb-8 tracking-wide">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Full Name *</label>
                <input
                  {...register('name')}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-light"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-2 font-light">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Artist Name</label>
                <input
                  {...register('artistName')}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-light"
                  placeholder="Your artist/stage name"
                />
              </div>

              <div>
                <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Email *</label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-light"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-2 font-light">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">WhatsApp Number *</label>
                <input
                  {...register('whatsapp')}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-light"
                  placeholder="+1 234 567 8900"
                />
                {errors.whatsapp && <p className="text-red-400 text-sm mt-2 font-light">{errors.whatsapp.message}</p>}
              </div>

              <div>
                <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Location</label>
                <input
                  {...register('location')}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors font-light"
                  placeholder="City, Country"
                />
              </div>

              <div>
                <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Timezone</label>
                <select
                  {...register('timezone')}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/40 focus:outline-none transition-colors font-light"
                >
                  <option value="" className="bg-black">Select timezone</option>
                  <option value="EST" className="bg-black">Eastern Time (EST)</option>
                  <option value="PST" className="bg-black">Pacific Time (PST)</option>
                  <option value="IST" className="bg-black">India Standard Time (IST)</option>
                  <option value="GMT" className="bg-black">Greenwich Mean Time (GMT)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-white/5 border border-white/10 p-8">
            <h2 className="text-xl font-medium text-white mb-8 tracking-wide">Project Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Project Type *</label>
                <select
                  {...register('projectType')}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/40 focus:outline-none transition-colors font-light"
                >
                  <option value="" className="bg-black">Select project type</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type} className="bg-black">{type}</option>
                  ))}
                </select>
                {errors.projectType && <p className="text-red-400 text-sm mt-2 font-light">{errors.projectType.message}</p>}
              </div>

              <div>
                <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">Timeline Urgency</label>
                <select
                  {...register('urgency')}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/40 focus:outline-none transition-colors font-light"
                >
                  <option value="" className="bg-black">Select urgency</option>
                  {urgencyOptions.map(option => (
                    <option key={option} value={option} className="bg-black">{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-white/80 font-light mb-4 text-sm tracking-wide">Services Needed *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceOptions.map(service => (
                  <label key={service} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      {...register('services')}
                      type="checkbox"
                      value={service}
                      className="border border-white/20 bg-transparent text-white focus:ring-0 focus:ring-offset-0"
                    />
                    <span className="text-white/70 text-sm font-light">{service}</span>
                  </label>
                ))}
              </div>
              {errors.services && <p className="text-red-400 text-sm mt-3 font-light">{errors.services.message}</p>}
            </div>

            <div className="mb-8">
              <div>
                <label className="block text-white/80 font-light mb-3 text-sm tracking-wide">How did you hear about us?</label>
                <select
                  {...register('hearAbout')}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-white/40 focus:outline-none transition-colors font-light"
                >
                  <option value="" className="bg-black">Select source</option>
                  {hearAboutOptions.map(option => (
                    <option key={option} value={option} className="bg-black">{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="bg-white/5 border border-white/10 p-8">
            <h2 className="text-xl font-medium text-white mb-8 tracking-wide">Upload Your Demo</h2>
            <FileUploader
              onFilesUploaded={setUploadedFiles}
              maxSize={100}
              acceptedTypes={['audio/mpeg', 'audio/wav', 'audio/mp3', 'application/zip', 'audio/x-wav']}
              maxFiles={10}
            />
          </div>

          {/* Additional Notes */}
          <div className="bg-white/5 border border-white/10 p-8">
            <h2 className="text-xl font-medium text-white mb-8 tracking-wide">Tell Us More</h2>
            <textarea
              {...register('notes')}
              rows={6}
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors resize-none font-light"
              placeholder="Share your vision, reference tracks, specific requirements, or any other details that will help us understand your project better..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="min-w-[200px]"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Submit Demo
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}