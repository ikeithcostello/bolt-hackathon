import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  Bell, 
  Key, 
  Mail, 
  Moon, 
  Save, 
  Sliders, 
  User 
} from 'lucide-react';

// Define the possible settings sections
type SettingsSection = 'personal' | 'security' | 'notifications' | 'appearance' | 'evaluation';

function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [evaluationPreferences, setEvaluationPreferences] = useState({
    showProgress: true,
    confirmBeforeSubmit: true,
    autoSaveDrafts: true
  });
  
  // State to track the active settings section
  const [activeSection, setActiveSection] = useState<SettingsSection>('personal');

  // Function to handle navigation item clicks
  const handleNavClick = (section: SettingsSection) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(section);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
            <p className="text-gray-400">Manage your account and evaluation preferences</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button leftIcon={<Save size={16} />}>
              Save Changes
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <Card>
            <CardContent className="p-0">
              <ul className="divide-y divide-gray-800">
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'personal' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('personal')}
                    className={`flex items-center ${activeSection === 'personal' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <User className="mr-2" size={18} />
                    <span>Personal Information</span>
                  </a>
                </li>
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'security' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('security')}
                    className={`flex items-center ${activeSection === 'security' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Key className="mr-2" size={18} />
                    <span>Security</span>
                  </a>
                </li>
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'notifications' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('notifications')}
                    className={`flex items-center ${activeSection === 'notifications' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Bell className="mr-2" size={18} />
                    <span>Notifications</span>
                  </a>
                </li>
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'appearance' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('appearance')}
                    className={`flex items-center ${activeSection === 'appearance' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Moon className="mr-2" size={18} />
                    <span>Appearance</span>
                  </a>
                </li>
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'evaluation' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('evaluation')}
                    className={`flex items-center ${activeSection === 'evaluation' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Sliders className="mr-2" size={18} />
                    <span>Evaluation Preferences</span>
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="lg:col-span-2"
        >
          {activeSection === 'personal' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2" size={20} />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      defaultValue="John"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      defaultValue="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-700 bg-gray-700 text-gray-400">
                      <Mail size={16} />
                    </span>
                    <input
                      type="email"
                      className="flex-1 px-4 py-2 rounded-r-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      defaultValue="john.doe@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Areas of Expertise
                  </label>
                  <select className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue" multiple size={3}>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="sustainability" selected>Sustainability</option>
                    <option value="ux" selected>User Experience</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="fintech">FinTech</option>
                  </select>
                  <p className="text-xs text-gray-400 mt-1">Hold Ctrl/Cmd to select multiple areas</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Bio
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    rows={4}
                    defaultValue="Experienced judge with expertise in sustainable technology solutions and user experience design."
                  ></textarea>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'security' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="mr-2" size={20} />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 mb-4">
                    <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-accent-blue" defaultChecked />
                    <span className="text-sm font-medium">Enable two-factor authentication</span>
                  </label>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2" size={20} />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Enable Notifications</h3>
                      <p className="text-sm text-gray-400">Receive updates about evaluations and platform activities</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={notificationsEnabled}
                        onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-blue"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-gray-400">Receive notifications via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={emailNotifications}
                        onChange={() => setEmailNotifications(!emailNotifications)}
                        disabled={!notificationsEnabled}
                      />
                      <div className={`w-11 h-6 ${!notificationsEnabled ? 'bg-gray-800' : 'bg-gray-700'} peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-blue`}></div>
                    </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium mb-3">Notification Preferences</h3>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                    <div>
                      <h4 className="text-sm font-medium">New Submissions Assigned</h4>
                      <p className="text-xs text-gray-400">Get notified when new submissions are assigned to you</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        defaultChecked 
                        disabled={!notificationsEnabled}
                      />
                      <div className={`w-9 h-5 ${!notificationsEnabled ? 'bg-gray-800' : 'bg-gray-700'} peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-blue`}></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                    <div>
                      <h4 className="text-sm font-medium">Evaluation Reminders</h4>
                      <p className="text-xs text-gray-400">Receive reminders for pending evaluations</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        defaultChecked 
                        disabled={!notificationsEnabled}
                      />
                      <div className={`w-9 h-5 ${!notificationsEnabled ? 'bg-gray-800' : 'bg-gray-700'} peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-blue`}></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                    <div>
                      <h4 className="text-sm font-medium">Platform Updates</h4>
                      <p className="text-xs text-gray-400">Receive updates about system changes</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        defaultChecked={false} 
                        disabled={!notificationsEnabled}
                      />
                      <div className={`w-9 h-5 ${!notificationsEnabled ? 'bg-gray-800' : 'bg-gray-700'} peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-blue`}></div>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'appearance' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Moon className="mr-2" size={20} />
                  Appearance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h3 className="font-medium mb-4">Theme Options</h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    <div className="relative">
                      <input 
                        type="radio" 
                        name="theme" 
                        id="theme-dark" 
                        className="sr-only peer" 
                        defaultChecked 
                      />
                      <label 
                        htmlFor="theme-dark" 
                        className="flex flex-col items-center p-4 bg-gray-800 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                      >
                        <div className="w-full h-20 bg-gray-900 rounded-md mb-2"></div>
                        <span className="text-sm font-medium">Dark Theme</span>
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="radio" 
                        name="theme" 
                        id="theme-light" 
                        className="sr-only peer" 
                      />
                      <label 
                        htmlFor="theme-light" 
                        className="flex flex-col items-center p-4 bg-gray-800 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                      >
                        <div className="w-full h-20 bg-gray-100 rounded-md mb-2"></div>
                        <span className="text-sm font-medium">Light Theme</span>
                      </label>
                    </div>
                    
                    <div className="relative">
                      <input 
                        type="radio" 
                        name="theme" 
                        id="theme-system" 
                        className="sr-only peer" 
                      />
                      <label 
                        htmlFor="theme-system" 
                        className="flex flex-col items-center p-4 bg-gray-800 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                      >
                        <div className="w-full h-20 bg-gradient-to-r from-gray-900 to-gray-100 rounded-md mb-2"></div>
                        <span className="text-sm font-medium">System Default</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Text Size</h3>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="relative">
                        <input 
                          type="radio" 
                          name="textSize" 
                          id="text-small" 
                          className="sr-only peer" 
                        />
                        <label 
                          htmlFor="text-small" 
                          className="flex flex-col items-center p-3 bg-gray-800 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                        >
                          <span className="text-xs font-medium">Small</span>
                        </label>
                      </div>
                      
                      <div className="relative">
                        <input 
                          type="radio" 
                          name="textSize" 
                          id="text-medium" 
                          className="sr-only peer" 
                          defaultChecked 
                        />
                        <label 
                          htmlFor="text-medium" 
                          className="flex flex-col items-center p-3 bg-gray-800 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                        >
                          <span className="text-sm font-medium">Medium</span>
                        </label>
                      </div>
                      
                      <div className="relative">
                        <input 
                          type="radio" 
                          name="textSize" 
                          id="text-large" 
                          className="sr-only peer" 
                        />
                        <label 
                          htmlFor="text-large" 
                          className="flex flex-col items-center p-3 bg-gray-800 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                        >
                          <span className="text-base font-medium">Large</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'evaluation' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sliders className="mr-2" size={20} />
                  Evaluation Preferences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                    <div>
                      <h4 className="text-sm font-medium">Show Evaluation Progress</h4>
                      <p className="text-xs text-gray-400">Display progress indicators while evaluating submissions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={evaluationPreferences.showProgress}
                        onChange={() => setEvaluationPreferences({...evaluationPreferences, showProgress: !evaluationPreferences.showProgress})}
                      />
                      <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-blue"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                    <div>
                      <h4 className="text-sm font-medium">Confirm Before Submission</h4>
                      <p className="text-xs text-gray-400">Show confirmation dialog before submitting evaluations</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={evaluationPreferences.confirmBeforeSubmit}
                        onChange={() => setEvaluationPreferences({...evaluationPreferences, confirmBeforeSubmit: !evaluationPreferences.confirmBeforeSubmit})}
                      />
                      <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-blue"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                    <div>
                      <h4 className="text-sm font-medium">Auto-save Drafts</h4>
                      <p className="text-xs text-gray-400">Automatically save evaluation drafts every few minutes</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={evaluationPreferences.autoSaveDrafts}
                        onChange={() => setEvaluationPreferences({...evaluationPreferences, autoSaveDrafts: !evaluationPreferences.autoSaveDrafts})}
                      />
                      <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-blue"></div>
                    </label>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Default View Mode
                    </label>
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <input 
                          id="preliminary" 
                          type="radio" 
                          name="view-mode" 
                          value="preliminary" 
                          className="w-4 h-4 text-accent-blue bg-gray-700 border-gray-600 focus:ring-accent-blue focus:ring-opacity-25"
                          defaultChecked
                        />
                        <label htmlFor="preliminary" className="ml-2 text-sm font-medium text-gray-300">
                          Preliminary
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          id="detailed" 
                          type="radio" 
                          name="view-mode" 
                          value="detailed" 
                          className="w-4 h-4 text-accent-blue bg-gray-700 border-gray-600 focus:ring-accent-blue focus:ring-opacity-25"
                        />
                        <label htmlFor="detailed" className="ml-2 text-sm font-medium text-gray-300">
                          Detailed
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Settings;