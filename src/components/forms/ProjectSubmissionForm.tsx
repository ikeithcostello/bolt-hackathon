import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../../components/ui/card';
import { AlertCircle, CheckCircle, Upload, Link as LinkIcon, Github } from 'lucide-react';

interface ProjectSubmissionFormProps {
  onSubmit: (formData: ProjectSubmissionData) => void;
  initialData?: Partial<ProjectSubmissionData>;
  categories?: { id: string; name: string }[];
  isLoading?: boolean;
  error?: string;
}

export interface ProjectSubmissionData {
  title: string;
  description: string;
  categoryId: string;
  repositoryUrl: string;
  demoUrl: string;
  videoUrl?: string;
  thumbnail?: File | null;
  additionalLinks: string[];
  teamMembers: string[];
  tools: string[];
  acceptedTerms: boolean;
}

export function ProjectSubmissionForm({
  onSubmit,
  initialData,
  categories = [
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI/Machine Learning' },
    { id: 'mobile', name: 'Mobile App' },
    { id: 'game', name: 'Game Development' },
    { id: 'iot', name: 'IoT / Hardware' },
    { id: 'data', name: 'Data Visualization' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'accessibility', name: 'Accessibility' },
    { id: 'education', name: 'Education' },
    { id: 'health', name: 'Healthcare' },
  ],
  isLoading = false,
  error
}: ProjectSubmissionFormProps) {
  const [formData, setFormData] = useState<ProjectSubmissionData>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    categoryId: initialData?.categoryId || '',
    repositoryUrl: initialData?.repositoryUrl || '',
    demoUrl: initialData?.demoUrl || '',
    videoUrl: initialData?.videoUrl || '',
    thumbnail: initialData?.thumbnail || null,
    additionalLinks: initialData?.additionalLinks || [''],
    teamMembers: initialData?.teamMembers || [''],
    tools: initialData?.tools || [''],
    acceptedTerms: initialData?.acceptedTerms || false
  });

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ProjectSubmissionData, string>>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error when field is edited
    if (formErrors[name as keyof ProjectSubmissionData]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, thumbnail: file }));
    
    // Generate preview URL
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setThumbnailPreview(null);
    }
  };

  const handleArrayFieldAdd = (field: 'additionalLinks' | 'teamMembers' | 'tools') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const handleArrayFieldRemove = (field: 'additionalLinks' | 'teamMembers' | 'tools', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleArrayFieldChange = (
    field: 'additionalLinks' | 'teamMembers' | 'tools',
    index: number,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item))
    }));
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof ProjectSubmissionData, string>> = {};
    
    if (!formData.title.trim()) {
      errors.title = 'Project title is required';
    }
    
    if (!formData.description.trim()) {
      errors.description = 'Project description is required';
    } else if (formData.description.length < 100) {
      errors.description = 'Description should be at least 100 characters';
    }
    
    if (!formData.categoryId) {
      errors.categoryId = 'Please select a category';
    }
    
    if (!formData.repositoryUrl.trim()) {
      errors.repositoryUrl = 'Repository URL is required';
    } else if (!isValidUrl(formData.repositoryUrl)) {
      errors.repositoryUrl = 'Please enter a valid URL';
    }
    
    if (formData.demoUrl && !isValidUrl(formData.demoUrl)) {
      errors.demoUrl = 'Please enter a valid URL';
    }
    
    if (formData.videoUrl && !isValidUrl(formData.videoUrl)) {
      errors.videoUrl = 'Please enter a valid URL';
    }
    
    if (!formData.acceptedTerms) {
      errors.acceptedTerms = 'You must accept the terms and conditions';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Filter out empty array fields
      const cleanedFormData = {
        ...formData,
        additionalLinks: formData.additionalLinks.filter(link => link.trim() !== ''),
        teamMembers: formData.teamMembers.filter(member => member.trim() !== ''),
        tools: formData.tools.filter(tool => tool.trim() !== '')
      };
      
      onSubmit(cleanedFormData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="bg-background-secondary border-border">
        <CardHeader>
          <p className="text-sm text-gray-400">
            Showcase your hackathon project to the world. Provide as much detail as possible to help judges evaluate your work.
          </p>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {/* Project Basic Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-blue">Basic Information</h3>
              
              <div>
                <label htmlFor="title" className="block mb-1">Project Title <span className="text-accent-red">*</span></label>
                <input
                  id="title"
                  name="title"
                  placeholder="Enter your project title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-gray-800 border ${formErrors.title ? 'border-accent-red' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                />
                {formErrors.title && (
                  <div className="text-accent-red text-sm mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {formErrors.title}
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="description" className="block mb-1">Project Description <span className="text-accent-red">*</span></label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe your project, the problem it solves, and how it works"
                  rows={6}
                  value={formData.description}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-gray-800 border ${formErrors.description ? 'border-accent-red' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                />
                {formErrors.description ? (
                  <div className="text-accent-red text-sm mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {formErrors.description}
                  </div>
                ) : (
                  <div className="text-gray-400 text-sm mt-1">
                    Minimum 100 characters - {formData.description.length} characters entered
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="categoryId" className="block mb-1">Project Category <span className="text-accent-red">*</span></label>
                <select
                  id="categoryId"
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-gray-800 border ${formErrors.categoryId ? 'border-accent-red' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                {formErrors.categoryId && (
                  <div className="text-accent-red text-sm mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {formErrors.categoryId}
                  </div>
                )}
              </div>
            </div>
            
            {/* Project Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-blue">Project Links</h3>
              
              <div>
                <label htmlFor="repositoryUrl" className="block mb-1">Repository URL <span className="text-accent-red">*</span></label>
                <div className="relative">
                  <input
                    id="repositoryUrl"
                    name="repositoryUrl"
                    placeholder="https://github.com/username/repository"
                    value={formData.repositoryUrl}
                    onChange={handleInputChange}
                    className={`w-full pl-10 px-3 py-2 bg-gray-800 border ${formErrors.repositoryUrl ? 'border-accent-red' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Github size={16} />
                  </div>
                </div>
                {formErrors.repositoryUrl && (
                  <div className="text-accent-red text-sm mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {formErrors.repositoryUrl}
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="demoUrl" className="block mb-1">Demo URL</label>
                <div className="relative">
                  <input
                    id="demoUrl"
                    name="demoUrl"
                    placeholder="https://your-demo-site.com"
                    value={formData.demoUrl}
                    onChange={handleInputChange}
                    className={`w-full pl-10 px-3 py-2 bg-gray-800 border ${formErrors.demoUrl ? 'border-accent-red' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <LinkIcon size={16} />
                  </div>
                </div>
                {formErrors.demoUrl && (
                  <div className="text-accent-red text-sm mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {formErrors.demoUrl}
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="videoUrl" className="block mb-1">Video Demo URL</label>
                <div className="relative">
                  <input
                    id="videoUrl"
                    name="videoUrl"
                    placeholder="https://youtube.com/watch?v=..."
                    value={formData.videoUrl || ''}
                    onChange={handleInputChange}
                    className={`w-full pl-10 px-3 py-2 bg-gray-800 border ${formErrors.videoUrl ? 'border-accent-red' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue`}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <LinkIcon size={16} />
                  </div>
                </div>
                {formErrors.videoUrl && (
                  <div className="text-accent-red text-sm mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {formErrors.videoUrl}
                  </div>
                )}
                <div className="text-gray-400 text-sm mt-1">
                  Optional but recommended - YouTube, Vimeo, or other video platforms
                </div>
              </div>
              
              {/* Additional Links */}
              <div>
                <label className="block mb-1">Additional Links</label>
                {formData.additionalLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-2 mt-2">
                    <div className="relative flex-1">
                      <input
                        placeholder={`Additional link ${index + 1}`}
                        value={link}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleArrayFieldChange('additionalLinks', index, e.target.value)}
                        className="w-full pl-10 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <LinkIcon size={16} />
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => handleArrayFieldRemove('additionalLinks', index)}
                      disabled={formData.additionalLinks.length === 1 && index === 0}
                    >
                      &times;
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  className="mt-2"
                  onClick={() => handleArrayFieldAdd('additionalLinks')}
                >
                  <span className="flex items-center">
                    <LinkIcon size={16} className="mr-2" />
                    Add Link
                  </span>
                </Button>
              </div>
            </div>
            
            {/* Project Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-blue">Project Media</h3>
              
              <div>
                <label htmlFor="thumbnail" className="block mb-1">Project Thumbnail</label>
                <div className="mt-2 border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  {thumbnailPreview ? (
                    <div className="space-y-3">
                      <img 
                        src={thumbnailPreview} 
                        alt="Thumbnail preview" 
                        className="mx-auto h-48 object-cover rounded-md" 
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, thumbnail: null }));
                          setThumbnailPreview(null);
                        }}
                      >
                        Remove Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="text-sm text-gray-300">
                        Drag and drop an image or click to browse
                      </div>
                      <div className="text-xs text-gray-400">
                        PNG, JPG, GIF up to 5MB • Recommended: 1200 × 630px
                      </div>
                      <input
                        id="thumbnail"
                        name="thumbnail"
                        type="file"
                        accept="image/*"
                        onChange={handleThumbnailChange}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById('thumbnail')?.click()}
                      >
                        Select Image
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Team and Tools */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-blue">Team and Technologies</h3>
              
              {/* Team Members */}
              <div>
                <label className="block mb-1">Team Members</label>
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-2 mt-2">
                    <input
                      placeholder={`Team Member ${index + 1}`}
                      value={member}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleArrayFieldChange('teamMembers', index, e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => handleArrayFieldRemove('teamMembers', index)}
                      disabled={formData.teamMembers.length === 1 && index === 0}
                    >
                      &times;
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  className="mt-2"
                  onClick={() => handleArrayFieldAdd('teamMembers')}
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg>
                    Add Team Member
                  </span>
                </Button>
              </div>
              
              {/* Tools and Technologies */}
              <div>
                <label className="block mb-1">Tools & Technologies</label>
                {formData.tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2 mt-2">
                    <input
                      placeholder={`Technology ${index + 1} (e.g., React, Node.js, etc.)`}
                      value={tool}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleArrayFieldChange('tools', index, e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => handleArrayFieldRemove('tools', index)}
                      disabled={formData.tools.length === 1 && index === 0}
                    >
                      &times;
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  className="mt-2"
                  onClick={() => handleArrayFieldAdd('tools')}
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                    Add Technology
                  </span>
                </Button>
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="acceptedTerms"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleCheckboxChange}
                  className={`mt-1 ${formErrors.acceptedTerms ? 'border-accent-red' : 'border-gray-700'}`}
                />
                <div className="space-y-1">
                  <label 
                    htmlFor="acceptedTerms" 
                    className={`block ${formErrors.acceptedTerms ? 'text-accent-red' : ''}`}
                  >
                    I agree to the Terms and Conditions <span className="text-accent-red">*</span>
                  </label>
                  <p className="text-sm text-gray-400">
                    By submitting this project, you confirm that you have the right to share this code,
                    all team members are listed, and you agree to the hackathon rules and code of conduct.
                  </p>
                  {formErrors.acceptedTerms && (
                    <div className="text-accent-red text-sm flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      {formErrors.acceptedTerms}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Form Error */}
            {error && (
              <div className="bg-red-900/20 border border-red-800 text-accent-red rounded-md p-3 text-sm flex items-start">
                <AlertCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <div>{error}</div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-end space-x-4 pt-6 border-t border-gray-700">
            <Button
              type="button"
              variant="outline"
              disabled={isLoading}
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                Save as Draft
              </span>
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="min-w-[120px]"
            >
              {isLoading ? 'Submitting...' : (
                <span className="flex items-center">
                  {!isLoading && <CheckCircle size={16} className="mr-2" />}
                  Submit Project
                </span>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  );
} 