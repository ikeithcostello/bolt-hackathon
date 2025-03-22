import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { useAppStore } from '@/store';
import { 
  Bell, 
  LayoutGrid, 
  Save, 
  Server, 
  Shield, 
  Sliders, 
  Users,
  Plus,
  Edit,
  Trash2,
  Star,
  Check,
  X,
  AlertCircle,
  Trash,
  Tag
} from 'lucide-react';

// Define the possible settings sections
type SettingsSection = 'general' | 'security' | 'notifications' | 'appearance' | 'integrations' | 'users' | 'criteria' | 'categories';

// Define the criteria type options
type CriteriaType = 'numeric' | 'checkbox' | 'text';

// Define the criteria interface
interface Criterion {
  id: string;
  name: string;
  description: string;
  type: CriteriaType;
  category: string;
  weight: number;
  required: boolean;
  config: {
    min?: number;
    max?: number;
    step?: number;
    options?: string[];
  };
}

// CategoryManagementModal Component
interface CategoryManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  categories: string[];
  onSave: (categories: string[]) => void;
}

function CategoryManagementModal({
  isOpen,
  onClose,
  title,
  categories,
  onSave
}: CategoryManagementModalProps) {
  const [editedCategories, setEditedCategories] = useState<string[]>([...categories]);
  const [newCategory, setNewCategory] = useState('');
  
  if (!isOpen) return null;
  
  const handleAddCategory = () => {
    if (newCategory.trim() === '') return;
    setEditedCategories([...editedCategories, newCategory.trim()]);
    setNewCategory('');
  };
  
  const handleRemoveCategory = (index: number) => {
    const updatedCategories = [...editedCategories];
    updatedCategories.splice(index, 1);
    setEditedCategories(updatedCategories);
  };
  
  const handleSave = () => {
    onSave(editedCategories);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Add New Category
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="New category..."
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAddCategory();
                }}
              />
              <Button 
                onClick={handleAddCategory}
                className="px-3 py-2"
              >
                <span className="flex items-center">
                  <Plus size={16} className="mr-1" />
                  Add
                </span>
              </Button>
            </div>
          </div>
          
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Current Categories
          </label>
          
          <div className="space-y-2 max-h-60 overflow-y-auto mb-4">
            {editedCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-800 rounded">
                <span>{category}</span>
                <button 
                  onClick={() => handleRemoveCategory(index)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash size={16} />
                </button>
              </div>
            ))}
            {editedCategories.length === 0 && (
              <p className="text-gray-500 text-sm p-2">No categories added yet.</p>
            )}
          </div>
          
          <div className="flex justify-end gap-2 mt-4">
            <Button 
              variant="outline" 
              onClick={onClose}
            >
              <span className="flex items-center">
                <X size={16} className="mr-1" />
                Cancel
              </span>
            </Button>
            <Button 
              onClick={handleSave}
            >
              <span className="flex items-center">
                <Save size={16} className="mr-1" />
                Save Changes
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Settings() {
  // State to track the active settings section
  const [activeSection, setActiveSection] = useState<SettingsSection>('general');
  
  // Get categories from app store
  const { 
    projectCategories, 
    evaluationCategories, 
    updateProjectCategories, 
    updateEvaluationCategories 
  } = useAppStore();
  
  // State for criteria management
  const [criteria, setCriteria] = useState<Criterion[]>([
    {
      id: '1',
      name: 'Innovation',
      description: 'How innovative is the solution?',
      type: 'numeric',
      category: 'Technical',
      weight: 25,
      required: true,
      config: {
        min: 1,
        max: 10,
        step: 1
      }
    },
    {
      id: '2',
      name: 'User Experience',
      description: 'Quality of the user interface and experience',
      type: 'numeric',
      category: 'Design',
      weight: 20,
      required: true,
      config: {
        min: 1,
        max: 10,
        step: 1
      }
    },
    {
      id: '3',
      name: 'Technical Merit',
      description: 'Technical complexity and implementation quality',
      type: 'numeric',
      category: 'Technical',
      weight: 25,
      required: true,
      config: {
        min: 1,
        max: 10,
        step: 1
      }
    },
    {
      id: '4',
      name: 'Completion',
      description: 'Is the project fully implemented and functional?',
      type: 'checkbox',
      category: 'Completion',
      weight: 10,
      required: true,
      config: {}
    },
    {
      id: '5',
      name: 'Documentation',
      description: 'Quality of documentation provided',
      type: 'numeric',
      category: 'Documentation',
      weight: 10,
      required: false,
      config: {
        min: 1,
        max: 5,
        step: 1
      }
    }
  ]);
  
  // State for editing a criterion
  const [editingCriterion, setEditingCriterion] = useState<Criterion | null>(null);
  
  // State for showing the criterion form
  const [showCriterionForm, setShowCriterionForm] = useState(false);
  
  // State for categories
  const [categories, setCategories] = useState<string[]>([
    'Technical', 'Design', 'Completion', 'Documentation', 'Impact', 'Presentation'
  ]);
  
  // State for new project category
  const [newProjectCategory, setNewProjectCategory] = useState('');
  
  // State for new evaluation category
  const [newEvaluationCategory, setNewEvaluationCategory] = useState('');
  
  // State for modal management
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalCategories, setModalCategories] = useState<string[]>([]);
  const [categoryType, setCategoryType] = useState<'project' | 'evaluation'>('project');
  
  // Function to handle navigation item clicks
  const handleNavClick = (section: SettingsSection) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(section);
  };
  
  // Function to add a new criterion
  const handleAddCriterion = () => {
    setEditingCriterion({
      id: Date.now().toString(),
      name: '',
      description: '',
      type: 'numeric',
      category: categories[0],
      weight: 10,
      required: false,
      config: {
        min: 1,
        max: 10,
        step: 1
      }
    });
    setShowCriterionForm(true);
  };
  
  // Function to edit a criterion
  const handleEditCriterion = (criterion: Criterion) => {
    setEditingCriterion({ ...criterion });
    setShowCriterionForm(true);
  };
  
  // Function to delete a criterion
  const handleDeleteCriterion = (id: string) => {
    setCriteria(criteria.filter(c => c.id !== id));
  };
  
  // Function to save a criterion
  const handleSaveCriterion = () => {
    if (editingCriterion) {
      const isNew = !criteria.some(c => c.id === editingCriterion.id);
      
      if (isNew) {
        // Add new criterion
        setCriteria([...criteria, editingCriterion]);
      } else {
        // Update existing criterion
        setCriteria(criteria.map(c => c.id === editingCriterion.id ? editingCriterion : c));
      }
      
      setEditingCriterion(null);
      setShowCriterionForm(false);
    }
  };
  
  // Function to cancel editing
  const handleCancelEdit = () => {
    setEditingCriterion(null);
    setShowCriterionForm(false);
  };
  
  // Function to add a new category
  const handleAddCategory = (category: string) => {
    if (category && !categories.includes(category)) {
      setCategories([...categories, category]);
    }
  };
  
  // Function to add a new project category
  const handleAddProjectCategory = () => {
    if (newProjectCategory && !projectCategories.includes(newProjectCategory)) {
      const updatedCategories = [...projectCategories, newProjectCategory];
      updateProjectCategories(updatedCategories);
      setNewProjectCategory('');
    }
  };
  
  // Function to remove a project category
  const handleRemoveProjectCategory = (index: number) => {
    const newCategories = projectCategories.filter((_, i) => i !== index);
    updateProjectCategories(newCategories);
  };
  
  // Function to add a new evaluation category
  const handleAddEvaluationCategory = () => {
    if (newEvaluationCategory && !evaluationCategories.includes(newEvaluationCategory)) {
      const updatedCategories = [...evaluationCategories, newEvaluationCategory];
      updateEvaluationCategories(updatedCategories);
      setNewEvaluationCategory('');
    }
  };
  
  // Function to remove an evaluation category
  const handleRemoveEvaluationCategory = (index: number) => {
    const newCategories = evaluationCategories.filter((_, i) => i !== index);
    updateEvaluationCategories(newCategories);
  };

  // Function to open modal for project categories
  const openProjectCategoriesModal = () => {
    setModalTitle('Manage Project Categories');
    setModalCategories(projectCategories);
    setCategoryType('project');
    setShowCategoryModal(true);
  };
  
  // Function to open modal for evaluation categories
  const openEvaluationCategoriesModal = () => {
    setModalTitle('Manage Evaluation Categories');
    setModalCategories(evaluationCategories);
    setCategoryType('evaluation');
    setShowCategoryModal(true);
  };
  
  // Function to save categories from modal
  const handleSaveModalCategories = (categories: string[]) => {
    if (categoryType === 'project') {
      updateProjectCategories(categories);
    } else {
      updateEvaluationCategories(categories);
    }
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
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'general' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('general')}
                    className={`flex items-center ${activeSection === 'general' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Sliders className="mr-2" size={18} />
                    <span>General</span>
                  </a>
                </li>
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'criteria' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('criteria')}
                    className={`flex items-center ${activeSection === 'criteria' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Star className="mr-2" size={18} />
                    <span>Evaluation Criteria</span>
                  </a>
                </li>
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'categories' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('categories')}
                    className={`flex items-center ${activeSection === 'categories' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Tag className="mr-2" size={18} />
                    <span>Project Categories</span>
                  </a>
                </li>
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'security' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('security')}
                    className={`flex items-center ${activeSection === 'security' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Shield className="mr-2" size={18} />
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
                    <LayoutGrid className="mr-2" size={18} />
                    <span>Appearance</span>
                  </a>
                </li>
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'integrations' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('integrations')}
                    className={`flex items-center ${activeSection === 'integrations' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
                    <Server className="mr-2" size={18} />
                    <span>Integrations</span>
                  </a>
                </li>
                <li className={`p-4 hover:bg-gray-800 transition-colors ${activeSection === 'users' ? 'bg-accent-blue bg-opacity-20 border-l-4 border-accent-blue' : ''}`}>
                  <a 
                    href="#" 
                    onClick={handleNavClick('users')}
                    className={`flex items-center ${activeSection === 'users' ? 'text-accent-blue' : 'text-gray-300 hover:text-white'}`}
                  >
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
          {activeSection === 'criteria' && (
            <>
              {showCriterionForm ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="mr-2" size={20} />
                      {editingCriterion?.id && criteria.some(c => c.id === editingCriterion.id) 
                        ? 'Edit Criterion' 
                        : 'Add New Criterion'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {editingCriterion && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Criterion Name*
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                              value={editingCriterion.name}
                              onChange={(e) => setEditingCriterion({...editingCriterion, name: e.target.value})}
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Category
                            </label>
                            <div className="flex space-x-2">
                              <select
                                className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                                value={editingCriterion.category}
                                onChange={(e) => setEditingCriterion({...editingCriterion, category: e.target.value})}
                              >
                                {categories.map((category) => (
                                  <option key={category} value={category}>{category}</option>
                                ))}
                                <option value="new">+ Add New Category</option>
                              </select>
                              
                              {editingCriterion.category === 'new' && (
                                <input
                                  type="text"
                                  className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                                  placeholder="New category name"
                                  onBlur={(e) => {
                                    handleAddCategory(e.target.value);
                                    setEditingCriterion({...editingCriterion, category: e.target.value});
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">
                            Description
                          </label>
                          <textarea
                            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                            rows={3}
                            value={editingCriterion.description}
                            onChange={(e) => setEditingCriterion({...editingCriterion, description: e.target.value})}
                          ></textarea>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Criterion Type
                            </label>
                            <select
                              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                              value={editingCriterion.type}
                              onChange={(e) => {
                                const type = e.target.value as CriteriaType;
                                let config = editingCriterion.config;
                                
                                // Reset config based on type
                                if (type === 'numeric') {
                                  config = { min: 1, max: 10, step: 1 };
                                } else if (type === 'checkbox') {
                                  config = {};
                                } else if (type === 'text') {
                                  config = {};
                                }
                                
                                setEditingCriterion({...editingCriterion, type, config});
                              }}
                            >
                              <option value="numeric">Numeric Scale</option>
                              <option value="checkbox">Checkbox (Yes/No)</option>
                              <option value="text">Text Response</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Weight (%)
                            </label>
                            <input
                              type="number"
                              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                              value={editingCriterion.weight}
                              onChange={(e) => setEditingCriterion({...editingCriterion, weight: parseInt(e.target.value) || 0})}
                              min="0"
                              max="100"
                            />
                          </div>
                          
                          <div className="flex items-end">
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="rounded bg-gray-700 border-gray-600 text-accent-blue mr-2"
                                checked={editingCriterion.required}
                                onChange={(e) => setEditingCriterion({...editingCriterion, required: e.target.checked})}
                              />
                              <span className="text-sm font-medium">Required</span>
                            </label>
                          </div>
                        </div>
                        
                        {editingCriterion.type === 'numeric' && (
                          <div className="p-4 bg-gray-800 rounded-md">
                            <h4 className="text-sm font-medium mb-3">Numeric Scale Configuration</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <label className="block text-xs text-gray-400 mb-2">
                                  Minimum Value
                                </label>
                                <input
                                  type="number"
                                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                                  value={editingCriterion.config.min || 1}
                                  onChange={(e) => setEditingCriterion({
                                    ...editingCriterion, 
                                    config: {...editingCriterion.config, min: parseInt(e.target.value) || 1}
                                  })}
                                />
                              </div>
                              
                              <div>
                                <label className="block text-xs text-gray-400 mb-2">
                                  Maximum Value
                                </label>
                                <input
                                  type="number"
                                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                                  value={editingCriterion.config.max || 10}
                                  onChange={(e) => setEditingCriterion({
                                    ...editingCriterion, 
                                    config: {...editingCriterion.config, max: parseInt(e.target.value) || 10}
                                  })}
                                />
                              </div>
                              
                              <div>
                                <label className="block text-xs text-gray-400 mb-2">
                                  Step
                                </label>
                                <input
                                  type="number"
                                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                                  value={editingCriterion.config.step || 1}
                                  onChange={(e) => setEditingCriterion({
                                    ...editingCriterion, 
                                    config: {...editingCriterion.config, step: parseFloat(e.target.value) || 1}
                                  })}
                                  min="0.1"
                                  step="0.1"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex justify-end space-x-3 pt-4">
                          <Button variant="ghost" onClick={handleCancelEdit} leftIcon={<X size={16} />}>
                            Cancel
                          </Button>
                          <Button onClick={handleSaveCriterion} leftIcon={<Check size={16} />}>
                            Save Criterion
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Star className="mr-2" size={20} />
                        Evaluation Criteria
                      </CardTitle>
                      <Button onClick={handleAddCriterion} leftIcon={<Plus size={16} />} size="sm">
                        Add Criterion
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-xs text-gray-400 border-b border-gray-800">
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Category</th>
                            <th className="px-4 py-3 text-left">Type</th>
                            <th className="px-4 py-3 text-center">Weight</th>
                            <th className="px-4 py-3 text-center">Required</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                          {criteria.map((criterion) => (
                            <tr key={criterion.id} className="text-sm hover:bg-gray-800">
                              <td className="px-4 py-3">
                                <div>
                                  <div className="font-medium">{criterion.name}</div>
                                  <div className="text-xs text-gray-400">{criterion.description}</div>
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                <span className="text-xs px-2 py-1 rounded-full bg-blue-900 bg-opacity-20 text-accent-blue">
                                  {criterion.category}
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                {criterion.type === 'numeric' && (
                                  <span>
                                    Numeric ({criterion.config.min}-{criterion.config.max})
                                  </span>
                                )}
                                {criterion.type === 'checkbox' && <span>Yes/No</span>}
                                {criterion.type === 'text' && <span>Text</span>}
                              </td>
                              <td className="px-4 py-3 text-center">
                                {criterion.weight}%
                              </td>
                              <td className="px-4 py-3 text-center">
                                {criterion.required ? (
                                  <Check size={16} className="text-accent-green mx-auto" />
                                ) : (
                                  <X size={16} className="text-gray-500 mx-auto" />
                                )}
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex justify-end space-x-2">
                                  <button 
                                    className="p-1 hover:bg-gray-700 rounded-md"
                                    onClick={() => handleEditCriterion(criterion)}
                                  >
                                    <Edit size={16} className="text-gray-400" />
                                  </button>
                                  <button 
                                    className="p-1 hover:bg-gray-700 rounded-md"
                                    onClick={() => handleDeleteCriterion(criterion.id)}
                                  >
                                    <Trash2 size={16} className="text-accent-red" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-800 rounded-md border border-gray-700">
                      <div className="flex items-start">
                        <AlertCircle size={20} className="text-accent-yellow mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">Important Notes</h4>
                          <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                            <li>The weights of all criteria should add up to 100% for a balanced evaluation.</li>
                            <li>Changes to criteria will only affect new evaluations; existing ones will use the criteria defined at their creation time.</li>
                            <li>You can create custom categories to group related criteria together.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          {activeSection === 'general' && (
            <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sliders className="mr-2" size={20} />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                  <h3 className="text-lg font-medium mb-4">Platform Settings</h3>
                  
                  <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Platform Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      defaultValue="The World's Largest Hackathon Evaluation Platform"
                />
              </div>

                  <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                      Platform URL
                </label>
                <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-700 text-gray-400 text-sm">
                        http://
                  </span>
                  <input
                        type="text"
                        className="flex-1 min-w-0 block w-full px-4 py-2 rounded-r-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        defaultValue="hackathon.dev"
                  />
                </div>
              </div>

                  <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                      Admin Contact Email
                </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      defaultValue="admin@example.com"
                    />
              </div>

                  <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Timezone
                </label>
                <select className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue">
                      <option>(GMT-08:00) Pacific Time</option>
                      <option>(GMT-07:00) Mountain Time</option>
                      <option>(GMT-06:00) Central Time</option>
                      <option>(GMT-05:00) Eastern Time</option>
                      <option>(GMT-04:00) Atlantic Time</option>
                      <option>(GMT+00:00) UTC</option>
                      <option>(GMT+01:00) Central European Time</option>
                      <option>(GMT+02:00) Eastern European Time</option>
                      <option>(GMT+05:30) India Standard Time</option>
                      <option>(GMT+08:00) China Standard Time</option>
                      <option>(GMT+09:00) Japan Standard Time</option>
                      <option>(GMT+10:00) Australian Eastern Time</option>
                </select>
                  </div>
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
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Minimum Judges per Submission
                  </label>
                    <input
                      type="number"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      defaultValue="3"
                      min="1"
                      max="10"
                    />
                </div>
              </div>
            </CardContent>
          </Card>
          )}

          {activeSection === 'security' && (
            <Card>
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

                  <div className="pt-4 border-t border-gray-800">
                    <h3 className="text-lg font-medium mb-4">Data Protection</h3>
                    
                    <div className="mb-4">
                      <label className="flex items-center gap-2 mb-4">
                        <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-accent-blue" defaultChecked />
                        <span className="text-sm font-medium">Enable data encryption</span>
                      </label>
                      
                      <label className="flex items-center gap-2 mb-4">
                        <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-accent-blue" defaultChecked />
                        <span className="text-sm font-medium">Automated security audits</span>
                      </label>
                      
                      <label className="flex items-center gap-2 mb-4">
                        <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-accent-blue" defaultChecked />
                        <span className="text-sm font-medium">IP filtering and rate limiting</span>
                      </label>
                    </div>
                  </div>
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
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                  
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                      <div className="flex items-center">
                        <span>New Submission Alerts</span>
                      </div>
                      <input type="checkbox" className="toggle toggle-accent" defaultChecked />
                    </label>
                    
                    <label className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                      <div className="flex items-center">
                        <span>Evaluation Completion</span>
                      </div>
                      <input type="checkbox" className="toggle toggle-accent" defaultChecked />
                    </label>
                    
                    <label className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                      <div className="flex items-center">
                        <span>Judge Assignment</span>
                      </div>
                      <input type="checkbox" className="toggle toggle-accent" defaultChecked />
                    </label>
                    
                    <label className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
                  <div className="flex items-center">
                        <span>System Updates</span>
                  </div>
                      <input type="checkbox" className="toggle toggle-accent" defaultChecked />
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
                  <LayoutGrid className="mr-2" size={20} />
                Appearance Settings
              </CardTitle>
            </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Theme</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
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
                        className="flex flex-col items-center p-4 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                    >
                        <div className="w-full h-24 bg-gray-900 rounded-md mb-2 border border-gray-700"></div>
                        <span className="font-medium">Dark Theme</span>
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
                        className="flex flex-col items-center p-4 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                    >
                        <div className="w-full h-24 bg-gray-200 rounded-md mb-2 border border-gray-300"></div>
                        <span className="font-medium">Light Theme</span>
                    </label>
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
                          id="accent-pink" 
                      className="sr-only peer" 
                    />
                    <label 
                          htmlFor="accent-pink" 
                      className="flex flex-col items-center p-2 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 peer-checked:border-accent-blue"
                    >
                          <div className="w-full h-8 bg-pink-500 rounded-md mb-2"></div>
                          <span className="text-xs font-medium">Pink</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'integrations' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2" size={20} />
                  Integrations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Available Integrations</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-md border border-gray-700">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">G</span>
                        </div>
                        <div>
                          <h4 className="font-medium">GitHub</h4>
                          <p className="text-sm text-gray-400">Connect with your GitHub repositories</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-md border border-gray-700">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">S</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Slack</h4>
                          <p className="text-sm text-gray-400">Get notifications in your Slack channels</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-md border border-gray-700">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold">D</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Discord</h4>
                          <p className="text-sm text-gray-400">Send notifications to Discord servers</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-800">
                  <h3 className="text-lg font-medium mb-4">API Access</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-400">
                        API Key
                    </label>
                      <Button variant="ghost" size="sm">Regenerate</Button>
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-white focus:outline-none"
                        value="••••••••••••••••••••••••••••••"
                        readOnly
                      />
                      <button
                        className="px-4 py-2 rounded-r-md bg-gray-700 border border-l-0 border-gray-700 text-white"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'users' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" size={20} />
                  User Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium">Platform Users</h3>
                    <p className="text-sm text-gray-400">Manage administrators, judges, and participants</p>
                  </div>
                  <Button size="sm">Add User</Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Name</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Email</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Role</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Status</th>
                        <th className="py-3 px-4 text-left text-sm font-medium text-gray-400">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 font-medium">Admin User</td>
                        <td className="py-3 px-4 text-gray-300">admin@example.com</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-900 bg-opacity-20 text-blue-400">Admin</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-900 bg-opacity-20 text-green-400">Active</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 font-medium">Judge User</td>
                        <td className="py-3 px-4 text-gray-300">judge@example.com</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-purple-900 bg-opacity-20 text-purple-400">Judge</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-900 bg-opacity-20 text-green-400">Active</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-3 px-4 font-medium">Participant User</td>
                        <td className="py-3 px-4 text-gray-300">participant@example.com</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-orange-900 bg-opacity-20 text-orange-400">Participant</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-900 bg-opacity-20 text-green-400">Active</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            </CardContent>
          </Card>
          )}

          {/* Categories Section */}
          {activeSection === 'categories' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="mr-2" size={20} />
                  Project Categories Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Project Categories</h3>
                    <Button 
                      onClick={openProjectCategoriesModal}
                      size="sm"
                      variant="outline"
                      className="text-sm px-2 py-1 h-8 inline-flex items-center gap-1.5"
                    >
                      <span className="flex items-center">
                        <Edit size={14} aria-hidden="true" />
                        <span className="ml-1.5">Manage in Modal</span>
                      </span>
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Project categories are used to classify submissions and appear in heatmaps, reports, and evaluation forms throughout the system.
                  </p>

                  
                  <div className="mb-6">
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        placeholder="New category..."
                        value={newProjectCategory}
                        onChange={(e) => setNewProjectCategory(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddProjectCategory();
                        }}
                      />
                      <Button 
                        onClick={handleAddProjectCategory}
                        size="sm"
                      >
                        <span className="flex items-center">
                          <Plus size={16} className="mr-1" />
                          Add
                        </span>
                      </Button>
                    </div>
                    
                    <div className="space-y-2 max-h-96 overflow-y-auto border border-gray-800 rounded-md p-2">
                      {projectCategories.length === 0 ? (
                        <p className="text-gray-400 text-sm p-2">No project categories defined yet.</p>
                      ) : (
                        projectCategories.map((category, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-800 rounded">
                            <span className="flex-1">{category}</span>
                            <button 
                              onClick={() => handleRemoveProjectCategory(index)}
                              className="text-red-400 hover:text-red-300 transition-colors ml-2"
                            >
                              <Trash size={16} />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Evaluation Criteria Categories</h3>
                    <Button 
                      onClick={openEvaluationCategoriesModal}
                      size="sm"
                      variant="outline"
                      className="text-sm px-2 py-1 h-8 inline-flex items-center gap-1.5"
                    >
                      <span className="flex items-center">
                        <Edit size={14} aria-hidden="true" />
                        <span className="ml-1.5">Manage in Modal</span>
                      </span>
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    These categories are used to organize evaluation criteria and are referenced when judges submit scores and feedback.
                  </p>
                  
                  <div>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        placeholder="New evaluation category..."
                        value={newEvaluationCategory}
                        onChange={(e) => setNewEvaluationCategory(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddEvaluationCategory();
                        }}
                      />
                      <Button 
                        onClick={handleAddEvaluationCategory}
                        size="sm"
                      >
                        <span className="flex items-center">
                          <Plus size={16} className="mr-1" />
                          Add
                        </span>
                      </Button>
                    </div>
                    
                    <div className="space-y-2 max-h-96 overflow-y-auto border border-gray-800 rounded-md p-2">
                      {evaluationCategories.length === 0 ? (
                        <p className="text-gray-400 text-sm p-2">No evaluation categories defined yet.</p>
                      ) : (
                        evaluationCategories.map((category, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-800 rounded">
                            <span className="flex-1">{category}</span>
                            <button 
                              onClick={() => handleRemoveEvaluationCategory(index)}
                              className="text-red-400 hover:text-red-300 transition-colors ml-2"
                            >
                              <Trash size={16} />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>
                    <span className="flex items-center">
                      <Save size={16} className="mr-2" />
                      Save Changes
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>

      {/* Category Management Modal */}
      <CategoryManagementModal
        isOpen={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        title={modalTitle}
        categories={modalCategories}
        onSave={handleSaveModalCategories}
      />
    </div>
  );
}

export default Settings;