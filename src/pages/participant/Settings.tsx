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
  Settings as SettingsIcon, 
  User,
  Camera,
  ExternalLink,
  Lock
} from 'lucide-react';

function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [privacySettings, setPrivacySettings] = useState({
    showProfile: true,
    showTeamMembers: true,
    allowProjectDiscovery: true
  });

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
                <li className="p-4 bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue">
                  <a href="#profile" className="flex items-center text-accent-blue">
                    <User className="mr-2" size={18} />
                    <span>Profile</span>
                  </a>
                </li>
                <li className="p-4 hover:bg-gray-800 transition-colors">
                  <a href="#security" className="flex items-center text-gray-300 hover:text-white">
                    <Key className="mr-2" size={18} />
                    <span>Security</span>
                  </a>
                </li>
                <li className="p-4 hover:bg-gray-800 transition-colors">
                  <a href="#notifications" className="flex items-center text-gray-300 hover:text-white">
                    <Bell className="mr-2" size={18} />
                    <span>Notifications</span>
                  </a>
                </li>
                <li className="p-4 hover:bg-gray-800 transition-colors">
                  <a href="#appearance" className="flex items-center text-gray-300 hover:text-white">
                    <Moon className="mr-2" size={18} />
                    <span>Appearance</span>
                  </a>
                </li>
                <li className="p-4 hover:bg-gray-800 transition-colors">
                  <a href="#privacy" className="flex items-center text-gray-300 hover:text-white">
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
          <Card id="profile">
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

          <div className="h-6"></div>

          <Card id="security">
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
                
                <label className="flex items-center gap-2 mb-4">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-accent-blue" defaultChecked />
                  <span className="text-sm font-medium">Notify me of new logins</span>
                </label>
              </div>

              <div>
                <h3 className="font-medium mb-2">Connected Accounts</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-xs text-gray-400">Connected as @pixel-team</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Facebook</p>
                        <p className="text-xs text-gray-400">Not connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="h-6"></div>

          <Card id="notifications">
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
                    <p className="text-sm text-gray-400">Receive updates about hackathon events and your submissions</p>
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
                    <p className="text-xs text-gray-400">Get notified when your submission status changes</p>
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
                    <h4 className="text-sm font-medium">Award Announcements</h4>
                    <p className="text-xs text-gray-400">Receive updates about award nominations and winners</p>
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
                    <h4 className="text-sm font-medium">Upcoming Events</h4>
                    <p className="text-xs text-gray-400">Get notified about upcoming hackathons and events</p>
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
                    <p className="text-xs text-gray-400">Receive updates about new features and improvements</p>
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

          <div className="h-6"></div>

          <Card id="appearance">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Moon className="mr-2" size={20} />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-4">
                  Color Theme
                </label>
                <div className="grid grid-cols-3 gap-4">
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
            </CardContent>
          </Card>

          <div className="h-6"></div>

          <Card id="privacy">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2" size={20} />
                Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                  <div>
                    <h4 className="text-sm font-medium">Public Profile</h4>
                    <p className="text-xs text-gray-400">Make your profile visible to others</p>
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

                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                  <div>
                    <h4 className="text-sm font-medium">Show Team Members</h4>
                    <p className="text-xs text-gray-400">Display team member names on your public profile</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={privacySettings.showTeamMembers}
                      onChange={() => setPrivacySettings({...privacySettings, showTeamMembers: !privacySettings.showTeamMembers})}
                      disabled={!privacySettings.showProfile}
                    />
                    <div className={`w-9 h-5 ${!privacySettings.showProfile ? 'bg-gray-800' : 'bg-gray-700'} peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent-blue rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-blue`}></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                  <div>
                    <h4 className="text-sm font-medium">Project Discovery</h4>
                    <p className="text-xs text-gray-400">Allow your projects to appear in search results</p>
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

                <div className="mt-6">
                  <h3 className="font-medium mb-4">Data & Privacy</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      Download Your Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-accent-red">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default Settings;