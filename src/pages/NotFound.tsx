import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { AlertTriangle } from 'lucide-react';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-background-primary min-h-screen flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <AlertTriangle className="text-accent-orange w-16 h-16 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">404 - Not Found</h1>
        <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        
        <div className="flex justify-center space-x-4">
          <Button onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button variant="outline" onClick={() => navigate('/')}>
            Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;