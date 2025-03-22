import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  Bell, 
  Globe, 
  Key, 
  Mail, 
  Moon, 
  Save, 
  User,
  Camera,
  ExternalLink,
  Lock
} from 'lucide-react';

// Define the possible settings sections
type SettingsSection = 'profile' | 'security' | 'notifications' | 'appearance' | 'privacy';

function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [privacySettings, setPrivacySettings] = useState({
    showProfile: true,
    showTeamMembers: true,
    allowProjectDiscovery: true
  });
  
  // State to track the active settings section
  const [activeSection, setActiveSection] = useState<SettingsSection>('profile');

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
            <p className="text-gray-400">Manage your profile and platform preferences</p>
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
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'profile' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('profile')}
                    className={`flex items-center ${activeSection === 'profile' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <User className="mr-2" size={18} />
                    <span>Profile</span>
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
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'privacy' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('privacy')}
                    className={`flex items-center ${activeSection === 'privacy' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Lock className="mr-2" size={18} />
                    <span>Privacy</span>
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
          {activeSection === 'profile' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2" size={20} />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue to-accent-purple opacity-20"></div>
                      <span className="text-4xl font-bold text-white">TP</span>
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-gray-700 rounded-full border border-gray-600 hover:bg-gray-600 transition-colors">
                      <Camera size={16} className="text-white" />
                    </button>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">Team Pixel</h3>
                    <p className="text-gray-400 mb-4">Registered: January 15, 2025</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-900 bg-opacity-20 text-accent-blue">Sustainability</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-green-900 bg-opacity-20 text-accent-green">AI/ML</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-purple-900 bg-opacity-20 text-accent-purple">Web3</span>
                    </div>
                    
                    <Button variant="outline" size="sm" rightIcon={<ExternalLink size={14} />}>
                      View Public Profile
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Team Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      defaultValue="Team Pixel"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Team Size
                    </label>
                    <select className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue">
                      <option value="1">1 (Solo)</option>
                      <option value="2">2</option>
                      <option value="3" selected>3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Contact Email
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-700 bg-gray-700 text-gray-400">
                      <Mail size={16} />
                    </span>
                    <input
                      type="email"
                      className="flex-1 px-4 py-2 rounded-r-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      defaultValue="team@pixel.io"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Expertise & Interests
                  </label>
                  <select className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue" multiple size={3}>
                    <option value="ai" selected>AI & Machine Learning</option>
                    <option value="sustainability" selected>Sustainability</option>
                    <option value="web3" selected>Web3</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="iot">IoT</option>
                    <option value="fintech">FinTech</option>
                  </select>
                  <p className="text-xs text-gray-400 mt-1">Hold Ctrl/Cmd to select multiple areas</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Team Bio
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    rows={4}
                    defaultValue="We're a team of passionate developers focused on creating innovative solutions for environmental challenges using cutting-edge AI/ML technologies."
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
                      <p className="text-sm text-gray-400">Receive updates about your submissions and platform activities</p>
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
                      <h4 className="text-sm font-medium">Submission Updates</h4>
                      <p className="text-xs text-gray-400">Get notified about your submission status</p>
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
                      <h4 className="text-sm font-medium">Evaluation Results</h4>
                      <p className="text-xs text-gray-400">Receive updates when your projects are evaluated</p>
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
                      <p className="text-xs text-gray-400">Get notified about system changes and announcements</p>
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

                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                    <div>
                      <h4 className="text-sm font-medium">Team Messages</h4>
                      <p className="text-xs text-gray-400">Receive alerts when team members message you</p>
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
                    <label className="block text-sm font-medium text-gray-400 mb-4">
                      Language
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-700 bg-gray-700 text-gray-400">
                        <Globe size={16} />
                      </span>
                      <select className="flex-1 px-4 py-2 rounded-r-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="zh">Chinese</option>
                      </select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'privacy' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="mr-2" size={20} />
                  Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Project Visibility</h3>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md mb-4">
                      <div>
                        <h4 className="text-sm font-medium">Show Profile Publicly</h4>
                        <p className="text-xs text-gray-400">Allow others to view your team profile</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={privacySettings.showProfile}
                          onChange={() => setPrivacySettings({...privacySettings, showProfile: !privacySettings.showProfile})}
                        />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-blue"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md mb-4">
                      <div>
                        <h4 className="text-sm font-medium">Show Team Members</h4>
                        <p className="text-xs text-gray-400">Display team member info on your profile</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={privacySettings.showTeamMembers}
                          onChange={() => setPrivacySettings({...privacySettings, showTeamMembers: !privacySettings.showTeamMembers})}
                        />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-blue"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                      <div>
                        <h4 className="text-sm font-medium">Allow Project Discovery</h4>
                        <p className="text-xs text-gray-400">Let judges discover your projects based on criteria</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={privacySettings.allowProjectDiscovery}
                          onChange={() => setPrivacySettings({...privacySettings, allowProjectDiscovery: !privacySettings.allowProjectDiscovery})}
                        />
                        <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-blue"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Data Management</h3>
                    
                    <Button variant="outline" size="sm" className="flex items-center mr-4">
                      <span>Download My Data</span>
                    </Button>
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