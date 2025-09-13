import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, File, Check } from 'lucide-react';

interface UploadedFile {
  id: string;
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  url?: string;
}

interface FileUploaderProps {
  onFilesUploaded: (files: UploadedFile[]) => void;
  maxSize?: number;
  acceptedTypes?: string[];
  maxFiles?: number;
  className?: string;
}

export default function FileUploader({ 
  onFilesUploaded, 
  maxSize = 100, 
  acceptedTypes = ['audio/mpeg', 'audio/wav', 'audio/mp3', 'application/zip'],
  maxFiles = 10,
  className = ''
}: FileUploaderProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles: UploadedFile[] = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      progress: 0,
      status: 'uploading'
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach((uploadedFile) => {
      const interval = setInterval(() => {
        setUploadedFiles(prev => prev.map(f => 
          f.id === uploadedFile.id 
            ? { ...f, progress: Math.min(f.progress + Math.random() * 30, 100) }
            : f
        ));
      }, 200);

      setTimeout(() => {
        clearInterval(interval);
        setUploadedFiles(prev => prev.map(f => 
          f.id === uploadedFile.id 
            ? { ...f, progress: 100, status: 'completed', url: URL.createObjectURL(f.file) }
            : f
        ));
      }, 2000 + Math.random() * 1000);
    });

    onFilesUploaded(newFiles);
  }, [onFilesUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    maxSize: maxSize * 1024 * 1024,
    maxFiles
  });

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={className}>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-12 text-center cursor-pointer transition-all ${
          isDragActive 
            ? 'border-white/40 bg-white/10' 
            : 'border-white/20 hover:border-white/30 bg-white/5'
        }`}
      >
        <input {...getInputProps()} />
        <Upload size={48} className="mx-auto mb-6 text-white/40" />
        
        {isDragActive ? (
          <p className="text-white font-light">Drop your files here...</p>
        ) : (
          <div>
            <p className="text-white font-light mb-3">
              Drag & drop your demo files here, or click to browse
            </p>
            <p className="text-white/40 text-sm font-light">
              Supports MP3, WAV, ZIP files up to {maxSize}MB each
            </p>
          </div>
        )}
      </div>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="mt-8 space-y-4">
          <h4 className="text-white/80 font-light text-sm tracking-wide">Uploaded Files</h4>
          {uploadedFiles.map((uploadedFile) => (
            <div key={uploadedFile.id} className="bg-white/5 border border-white/10 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <File size={16} className="text-white/40" />
                  <span className="text-white text-sm font-light truncate">
                    {uploadedFile.file.name}
                  </span>
                  <span className="text-white/40 text-xs font-light">
                    {formatFileSize(uploadedFile.file.size)}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  {uploadedFile.status === 'completed' && (
                    <Check size={16} className="text-white" />
                  )}
                  <button
                    onClick={() => removeFile(uploadedFile.id)}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              
              {uploadedFile.status === 'uploading' && (
                <div className="w-full bg-white/10 h-1">
                  <div 
                    className="bg-white h-full transition-all duration-300"
                    style={{ width: `${uploadedFile.progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}