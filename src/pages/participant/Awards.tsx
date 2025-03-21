import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Award, Calendar, ExternalLink, Medal, Trophy, Star, User, Users } from 'lucide-react';

function Awards() {
  // Mock data for awards
  const upcomingAwards = [
    {
      id: '1',
      name: 'Best Overall Project',
      description: 'The most impressive project considering all evaluation criteria',
      prize: '$250,000',
      eligibility: 'All participants',
      deadline: 'March 15, 2025',
      requirements: 'Must receive an overall score of 85 or higher'
    },
    {
      id: '2',
      name: 'Most Innovative Solution',
      description: 'A ground-breaking approach that demonstrates exceptional creativity',
      prize: '$150,000',
      eligibility: 'All participants',
      deadline: 'March 15, 2025',
      requirements: 'Must score at least 90 in the "Innovation" category'
    },
    {
      id: '3',
      name: 'Best Technical Implementation',
      description: 'Outstanding technical excellence and engineering quality',
      prize: '$100,000',
      eligibility: 'All participants',
      deadline: 'March 15, 2025',
      requirements: 'Must score at least 90 in the "Technical Merit" category'
    },
  ];

  const pastAwards = [
    {
      id: '1',
      name: 'Best Energy Solution',
      description: 'Most effective solution for energy management and conservation',
      hackathon: 'Climate Tech Challenge 2024',
      date: 'October 2024',
      project: 'EcoSync',
      prize: '$100,000',
      status: 'won',
    },
    {
      id: '2',
      name: 'Urban Innovation Award',
      description: 'Creative solution for urban living and sustainability',
      hackathon: 'Smart City Hackathon 2024',
      date: 'January 2024',
      project: 'SmartCity Hub',
      prize: '$75,000',
      status: 'runner-up',
    }
  ];

  // Award ceremony details
  const ceremony = {
    date: 'March 30, 2025',
    time: '7:00 PM EST',
    venue: 'Virtual Ceremony',
    link: 'https://example.com/ceremony',
    registrationRequired: true
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
            <h1 className="text-3xl font-bold mb-2">Awards & Recognition</h1>
            <p className="text-gray-400">View hackathon awards and your achievements</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button leftIcon={<Calendar size={16} />}>
              Award Ceremony Details
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="text-yellow-400 mr-2" size={22} />
              Upcoming Award Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAwards.map((award) => (
                <div key={award.id} className="border border-gray-800 rounded-lg p-4 transition hover:bg-gray-800">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center">
                        <Award className="mr-2 h-5 w-5 text-yellow-400" />
                        <h3 className="font-semibold text-lg">{award.name}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{award.description}</p>
                      
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-gray-500">Prize</p>
                          <p className="text-sm font-medium text-accent-green">{award.prize}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Eligibility</p>
                          <p className="text-sm">{award.eligibility}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Deadline</p>
                          <p className="text-sm">{award.deadline}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Requirements</p>
                          <p className="text-sm">{award.requirements}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-8 md:text-right">
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-800 flex justify-center pt-4">
            <Button variant="outline">
              View All Award Categories
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Medal className="text-yellow-400 mr-2" size={20} />
              Your Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            {pastAwards.length > 0 ? (
              <div className="space-y-4">
                {pastAwards.map((award) => (
                  <div key={award.id} className="border border-gray-800 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className={`p-2 rounded-full ${award.status === 'won' ? 'bg-yellow-900 bg-opacity-30' : 'bg-gray-800'} mr-3`}>
                        {award.status === 'won' ? (
                          <Trophy className="h-6 w-6 text-yellow-400" />
                        ) : (
                          <Star className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-semibold">{award.name}</h3>
                          <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${award.status === 'won' ? 'bg-green-900 bg-opacity-30 text-green-400' : 'bg-gray-700 text-gray-300'}`}>
                            {award.status === 'won' ? 'Winner' : 'Runner-up'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">Project: {award.project}</p>
                        <p className="text-sm text-gray-400">{award.hackathon} • {award.date}</p>
                        <p className="text-sm text-accent-green mt-2">Prize: {award.prize}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Medal className="h-12 w-12 text-gray-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Awards Yet</h3>
                <p className="text-gray-400 mb-4">You haven't received any awards yet, but keep participating!</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="text-accent-blue mr-2" size={20} />
              Award Ceremony
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded-lg p-4 mb-4">
              <div className="flex">
                <Calendar className="h-10 w-10 text-accent-blue mr-3" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">March Hackathon Awards</h3>
                  <p className="text-sm text-gray-300">Join us to celebrate the winners and outstanding projects!</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-xs text-gray-500">Date & Time</p>
                  <p className="text-sm">{ceremony.date} at {ceremony.time}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Venue</p>
                  <p className="text-sm">{ceremony.venue}</p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xs text-gray-400">
                  {ceremony.registrationRequired ? 'Registration required' : 'No registration required'}
                </p>
                <Button size="sm" rightIcon={<ExternalLink size={14} />}>
                  Join Event
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Previous Ceremonies</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
                  <div>
                    <p className="text-sm font-medium">Climate Tech Challenge 2024</p>
                    <p className="text-xs text-gray-400">October 15, 2024</p>
                  </div>
                  <Button variant="ghost" size="sm">Watch</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
                  <div>
                    <p className="text-sm font-medium">Smart City Hackathon 2024</p>
                    <p className="text-xs text-gray-400">January 30, 2024</p>
                  </div>
                  <Button variant="ghost" size="sm">Watch</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="text-accent-purple mr-2" size={20} />
              Hall of Fame
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Rank</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Team/Participant</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400 hidden md:table-cell">Project</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Award</th>
                    <th className="py-3 px-4 text-right text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Trophy className="text-yellow-400 mr-1" size={16} />
                        1
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <User className="h-6 w-6 bg-accent-blue rounded-full p-1 text-white mr-2" />
                        <div>
                          <p className="font-medium text-white">Green Innovators</p>
                          <p className="text-xs text-gray-400">Maria Chen, Aiden Kim, Toby Hill</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">EcoSync</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-900 bg-opacity-20 text-accent-green">
                        Best Energy Solution
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Trophy className="text-gray-300 mr-1" size={16} />
                        2
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <User className="h-6 w-6 bg-accent-purple rounded-full p-1 text-white mr-2" />
                        <div>
                          <p className="font-medium text-white">Ocean Defenders</p>
                          <p className="text-xs text-gray-400">Samantha Lee, Jake Porter</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">CleanWaves</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-900 bg-opacity-20 text-accent-blue">
                        Environmental Impact
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Trophy className="text-yellow-700 mr-1" size={16} />
                        3
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <User className="h-6 w-6 bg-accent-green rounded-full p-1 text-white mr-2" />
                        <div>
                          <p className="font-medium text-white">Health Heroes</p>
                          <p className="text-xs text-gray-400">Dr. James Wilson, Eliza Zhang</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">MediTrack</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-900 bg-opacity-20 text-accent-green">
                        Healthcare Innovation
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-800 flex justify-center pt-4">
            <Button variant="outline">
              View Complete Hall of Fame
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}

export default Awards;