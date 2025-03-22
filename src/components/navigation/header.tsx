import React from 'react';
import { Avatar } from '../ui/avatar';
import { Button } from '../ui/button';
import { LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store';

interface HeaderProps {
  userName: string;
  userAvatar?: string;
  role: 'admin' | 'judge' | 'participant';
}

export function Header({ userName, userAvatar, role }: HeaderProps) {
  const navigate = useNavigate();
  const { logout } = useAppStore();
  
  const handleLogout = () => {
    logout();
    navigate('/'); // Navigate to the landing page
  };

  return (
    <header className="bg-background-primary h-16 border-b border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center">
      </div>
      <div className="flex items-center space-x-4">
        <Link to={`/${role}/profile`}>
          <Button variant="ghost" size="sm" leftIcon={<User size={16} />}>
            Profile
          </Button>
        </Link>
        <Button 
          variant="outline" 
          size="sm" 
          leftIcon={<LogOut size={16} />}
          onClick={handleLogout}
        >
          Logout
        </Button>
        <Avatar name={userName} src={userAvatar} />
      </div>
    </header>
  );
}