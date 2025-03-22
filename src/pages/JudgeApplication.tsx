import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Award, ArrowLeft, CheckCircle, ChevronRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

function JudgeApplication() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    yearsOfExperience: '',
    expertise: [] as string[],
    linkedinProfile: '',
    githubProfile: '',
    motivation: '',
    availability: '',
  });
  
  // Set document title
  useEffect(() => {
    document.title = "Become a Judge | The World's Largest Hackathon";
  }, []);

  const updateForm = (field: string, value: string | string[]) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const submitApplication = () => {
    // In a real application, you'd submit to an API here
    console.log('Form data submitted:', formData);
    nextStep();
  };

  const expertiseOptions = [
    'Artificial Intelligence/ML',
    'Web Development',
    'Mobile Development',
    'Blockchain/Web3',
    'Cloud Computing',
    'DevOps',
    'UX/UI Design',
    'IoT',
    'Cybersecurity',
    'Data Science',
    'Game Development',
    'AR/VR',
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16 flex flex-col justify-center relative">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop)', 
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary/95 via-background-primary/85 to-background-primary"></div>
      
      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 md:top-6 md:left-6 z-10 flex items-center text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full mx-auto relative z-10 px-4 sm:px-6"
      >
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex items-center justify-center mb-2">
            <Award className="text-[#43AFFF] w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Become a Judge</h1>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">The World's Largest Hackathon</h2>
        </div>
        
        {/* Progress Steps */}
        <div className="mb-6">
          <div className="flex items-center justify-between px-2">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center z-10 
                    ${step < currentStep ? 'bg-[#43AFFF]' : 
                      step === currentStep ? 'bg-[#43AFFF]' : 'bg-gray-700'}`}
                  >
                    {step < currentStep ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    ) : (
                      <span className="text-xs sm:text-sm text-white">{step}</span>
                    )}
                  </div>
                  <span className={`mt-2 text-xs sm:text-sm ${
                    step === currentStep ? 'text-[#43AFFF]' : 
                    step < currentStep ? 'text-[#43AFFF]' : 'text-gray-500'
                  }`}>
                    {step === 1 && 'Personal'}
                    {step === 2 && 'Expertise'}
                    {step === 3 && 'Motivation'}
                    {step === 4 && 'Confirm'}
                  </span>
                </div>
                
                {step < 4 && (
                  <div className={`flex-1 h-0.5 ${
                    step < currentStep ? 'bg-[#43AFFF]' : 'bg-gray-700'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="bg-background-primary/70 backdrop-blur-md p-4 sm:p-8 rounded-lg shadow-2xl border border-white/10">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Personal Information</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  Tell us about yourself. This information will be used to identify you as a judge.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                        value={formData.firstName}
                        onChange={(e) => updateForm('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                        value={formData.lastName}
                        onChange={(e) => updateForm('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 sm:px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                        value={formData.company}
                        onChange={(e) => updateForm('company', e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                        value={formData.jobTitle}
                        onChange={(e) => updateForm('jobTitle', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                      Years of Professional Experience*
                    </label>
                    <select
                      className="w-full px-3 sm:px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                      value={formData.yearsOfExperience}
                      onChange={(e) => updateForm('yearsOfExperience', e.target.value)}
                      required
                    >
                      <option value="">Select years of experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="11-15">11-15 years</option>
                      <option value="16+">16+ years</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-end gap-3">
                  <Button
                    onClick={nextStep}
                    className="bg-[#43AFFF] hover:bg-[#3a9ee6]"
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
            
            {/* Step 2: Professional Information and Expertise */}
            {currentStep === 2 && (
              <>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Areas of Expertise</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  Select your areas of expertise and provide your professional profiles.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                      Areas of Technical Expertise*
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                      {expertiseOptions.map((option) => (
                        <div key={option} className="flex items-start">
                          <input
                            id={`expertise-${option}`}
                            type="checkbox"
                            className="mt-1 h-4 w-4 rounded border-gray-700 text-[#43AFFF] focus:ring-[#43AFFF]"
                            checked={formData.expertise.includes(option)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                updateForm('expertise', [...formData.expertise, option]);
                              } else {
                                updateForm('expertise', formData.expertise.filter(item => item !== option));
                              }
                            }}
                          />
                          <label htmlFor={`expertise-${option}`} className="ml-2 text-sm text-gray-300">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Select all that apply. Please choose at least one area of expertise.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      className="w-full px-3 sm:px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedinProfile}
                      onChange={(e) => updateForm('linkedinProfile', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                      GitHub Profile URL
                    </label>
                    <input
                      type="url"
                      className="w-full px-3 sm:px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                      placeholder="https://github.com/yourusername"
                      value={formData.githubProfile}
                      onChange={(e) => updateForm('githubProfile', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-between gap-3">
                  <Button 
                    variant="outline"
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={nextStep}
                    className="bg-[#43AFFF] hover:bg-[#3a9ee6]"
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
            
            {/* Step 3: Motivation & Availability */}
            {currentStep === 3 && (
              <>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Motivation & Availability</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  Tell us why you want to be a judge and how much time you can dedicate to evaluations.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                      Why do you want to be a judge?*
                    </label>
                    <textarea
                      className="w-full px-3 sm:px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                      rows={4}
                      placeholder="Share your motivation for participating as a judge..."
                      value={formData.motivation}
                      onChange={(e) => updateForm('motivation', e.target.value)}
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1 sm:mb-2">
                      Weekly Time Availability*
                    </label>
                    <select
                      className="w-full px-3 sm:px-4 py-2 rounded-md bg-gray-800/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#43AFFF]"
                      value={formData.availability}
                      onChange={(e) => updateForm('availability', e.target.value)}
                      required
                    >
                      <option value="">Select your weekly availability</option>
                      <option value="1-3">1-3 hours per week</option>
                      <option value="4-6">4-6 hours per week</option>
                      <option value="7-10">7-10 hours per week</option>
                      <option value="10+">10+ hours per week</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-2">
                      Please select how many hours per week you can dedicate to reviewing submissions.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-between gap-3">
                  <Button 
                    variant="outline"
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={submitApplication}
                    className="bg-[#43AFFF] hover:bg-[#3a9ee6]"
                  >
                    Submit Application
                  </Button>
                </div>
              </>
            )}
            
            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <>
                <div className="text-center">
                  <CheckCircle className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-accent-green mb-4 sm:mb-6" />
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Application Submitted!</h1>
                  <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-md mx-auto">
                    Thank you for applying to be a judge for the world's largest hackathon.
                  </p>
                  
                  <div className="bg-background-secondary p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 text-left">
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">What's Next?</h2>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start">
                        <Star className="text-accent-blue mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm sm:text-base">Our team will review your application within 5-7 business days.</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="text-accent-blue mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm sm:text-base">You'll receive an email notification with our decision.</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="text-accent-blue mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm sm:text-base">If selected, you'll get access to our judge training and calibration sessions.</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="text-accent-blue mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm sm:text-base">Evaluations will begin on August 15, 2025.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button 
                      className="bg-[#43AFFF] hover:bg-[#3a9ee6]"
                      rightIcon={<ChevronRight size={16} />}
                      onClick={() => navigate('/')}
                    >
                      Return to Homepage
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default JudgeApplication;