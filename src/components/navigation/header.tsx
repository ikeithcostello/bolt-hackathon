import React from 'react';
import { Avatar } from '../ui/avatar';
import { Button } from '../ui/button';
import { LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  userName: string;
  userAvatar?: string;
  role: 'admin' | 'judge' | 'participant';
}

export function Header({ userName, userAvatar, role }: HeaderProps) {
  return (
    <header className="bg-background-primary h-16 border-b border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-white">
          GWR Hackathon
          {role === 'admin' && ' | Administrator Portal'}
          {role === 'judge' && ' | Judge Portal'}
          {role === 'participant' && ' | Participant Portal'}
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link to={`/${role}/profile`}>
          <Button variant="ghost" size="sm" leftIcon={<User size={16} />}>
            Profile
          </Button>
        </Link>
        <Button variant="outline" size="sm" leftIcon={<LogOut size={16} />}>
          Logout
        </Button>
        <Avatar name={userName} src={userAvatar} />
      </div>
    </header>
  );
}