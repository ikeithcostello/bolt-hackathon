import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  Bell, 
  Globe, 
  Lock, 
  Mail, 
  LayoutGrid, 
  Moon, 
  Save, 
  Server, 
  Shield, 
  Sliders, 
  User, 
  Users
} from 'lucide-react';

function Settings() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Platform Settings</h1>
            <p className="text-gray-400">Configure and customize the evaluation platform</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button leftIcon={<Save size={16} />}>
              Save Changes
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
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
                  <a href="#general" className="flex items-center text-accent-blue">
                    <Sliders className="mr-2" size={18} />
                    <span>General</span>
                  </a>
                </li>
                <li className="p-4 hover:bg-gray-800 transition-colors">
                  <a href="#security" className="flex items-center text-gray-300 hover:text-white">
                    <Shield className="mr-2" size={18} />
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
                    <LayoutGrid className="mr-2" size={18} />
                    <span>Appearance</span>
                  </a>
                </li>
                <li className="p-4 hover:bg-gray-800 transition-colors">
                  <a href="#integrations" className="flex items-center text-gray-300 hover:text-white">
                    <Server className="mr-2" size={18} />
                    <span>Integrations</span>
                  </a>
                </li>
                <li className="p-4 hover:bg-gray-800 transition-colors">
                  <a href="#users" className="flex items-center text-gray-300 hover:text-white">
                    <Users className="mr-2" size={18} />
                    <span>User Management</span>
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
          className="lg:col-span-3"
        >
          <Card id="general">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sliders className="mr-2" size={20} />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Platform Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                  defaultValue="GWR Hackathon Evaluation Platform"
                />
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
                    defaultValue="admin@gwrhackathon.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
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

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Timezone
                </label>
                <select className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue">
                  <option value="UTC">UTC (Coordinated Universal Time)</option>
                  <option value="EST">EST (Eastern Standard Time)</option>
                  <option value="PST">PST (Pacific Standard Time)</option>
                  <option value="GMT">GMT (Greenwich Mean Time)</option>
                </select>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <h3 className="text-lg font-medium mb-4">Evaluation Settings</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Default Scoring Criteria
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md">
                      <span>Innovation</span>
                      <select className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-white text-sm">
                        <option>1-10 Scale</option>
                        <option>1-5 Scale</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md">
                      <span>User Experience</span>
                      <select className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-white text-sm">
                        <option>1-10 Scale</option>
                        <option>1-5 Scale</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between bg-gray-800 p-3 rounded-md">
                      <span>Technical Merit</span>
                      <select className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-white text-sm">
                        <option>1-10 Scale</option>
                        <option>1-5 Scale</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Button variant="ghost" size="sm">
                      Add Criterion
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="flex items-center gap-2 mb-4">
                    <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-accent-blue" defaultChecked />
                    <span className="text-sm font-medium">Enable judge calibration</span>
                  </label>
                  
                  <label className="flex items-center gap-2 mb-4">
                    <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-accent-blue" defaultChecked />
                    <span className="text-sm font-medium">Enable conflict detection (four-eyes principle)</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-accent-blue" defaultChecked />
                    <span className="text-sm font-medium">Require comments for scores below 5</span>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="h-6"></div>

          <Card id="security">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2" size={20} />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Authentication</h3>
                
                <div className="mb-4">
                  <label className="flex items-center gap-2 mb-4">
                    <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-accent-blue" defaultChecked />
                    <span className="text-sm font-medium">Enable Two-Factor Authentication (2FA)</span>
                  </label>
                  
                  <label className="flex items-center gap-2 mb-4">
                    <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-accent-blue" defaultChecked />
                    <span className="text-sm font-medium">Require strong passwords</span>
                  </label>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Session Timeout (minutes)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    defaultValue="30"
                    min="5"
                    max="240"
                  />
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-800 rounded-md mb-4">
                  <div className="flex items-center">
                    <Lock className="text-accent-blue mr-2" size={18} />
                    <span>Reset all judge passwords</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Reset
                  </Button>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-800 rounded-md">
                  <div className="flex items-center">
                    <User className="text-accent-blue mr-2" size={18} />
                    <span>Reset all participant passwords</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="h-6"></div>

          <Card id="appearance">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Moon className="mr-2" size={20} />
                Appearance Settings
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
                  Accent Color
                </label>
                <div className="grid grid-cols-5 gap-4">
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="accent" 
                      id="accent-blue" 
                      className="sr-only peer" 
                      defaultChecked 
                    />
                    <label 
                      htmlFor="accent-blue" 
                      className="flex flex-col items-center p-2 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                    >
                      <div className="w-full h-8 bg-blue-500 rounded-md mb-2"></div>
                      <span className="text-xs font-medium">Blue</span>
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="accent" 
                      id="accent-green" 
                      className="sr-only peer" 
                    />
                    <label 
                      htmlFor="accent-green" 
                      className="flex flex-col items-center p-2 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                    >
                      <div className="w-full h-8 bg-green-500 rounded-md mb-2"></div>
                      <span className="text-xs font-medium">Green</span>
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="accent" 
                      id="accent-purple" 
                      className="sr-only peer" 
                    />
                    <label 
                      htmlFor="accent-purple" 
                      className="flex flex-col items-center p-2 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                    >
                      <div className="w-full h-8 bg-purple-500 rounded-md mb-2"></div>
                      <span className="text-xs font-medium">Purple</span>
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="accent" 
                      id="accent-orange" 
                      className="sr-only peer" 
                    />
                    <label 
                      htmlFor="accent-orange" 
                      className="flex flex-col items-center p-2 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                    >
                      <div className="w-full h-8 bg-orange-500 rounded-md mb-2"></div>
                      <span className="text-xs font-medium">Orange</span>
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="accent" 
                      id="accent-red" 
                      className="sr-only peer" 
                    />
                    <label 
                      htmlFor="accent-red" 
                      className="flex flex-col items-center p-2 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                    >
                      <div className="w-full h-8 bg-red-500 rounded-md mb-2"></div>
                      <span className="text-xs font-medium">Red</span>
                    </label>
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