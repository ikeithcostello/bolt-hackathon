import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '../ui/modal';
import { Button } from '../ui/button';
import { 
  ChevronRight, 
  ChevronLeft, 
  X,
  Scale,
  BarChart4,
  AlertTriangle,
  CheckCircle,
  Users,
  BarChart,
  Percent
} from 'lucide-react';

type UserRole = 'judge' | 'admin' | 'participant';

interface JudgeCalibrationTutorialProps {
  isOpen: boolean;
  onClose: () => void;
  role: UserRole;
}

export function JudgeCalibrationTutorial({
  isOpen,
  onClose,
  role = 'judge',
}: JudgeCalibrationTutorialProps) {
  const [step, setStep] = useState(0);
  
  const judgeSteps = [
    {
      title: 'Understanding Judge Calibration',
      content: (
        <div>
          <p className="text-lg mb-6">
            Judge calibration is a systematic process that ensures fair and consistent evaluation 
            across all judges in the hackathon.
          </p>
          <p className="text-lg mb-6">
            Since judges naturally have different scoring tendencies—some are more lenient while 
            others are more strict—the calibration process creates a normalization factor for each 
            judge that automatically adjusts their scores to a common standard.
          </p>
          <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4 mb-4">
            <p className="text-accent-blue font-medium">Why Calibration Matters:</p>
            <p>With millions of submissions and hundreds of judges, calibration ensures that projects 
            receive fair evaluations regardless of which judge reviews them.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Initial Calibration Phase',
      icon: <Scale size={24} className="text-accent-blue" />,
      color: 'bg-accent-blue',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-accent-blue">
              <Scale size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Initial Calibration</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-accent-blue mb-6">
            <ul className="space-y-2">
              <li>• You'll evaluate 5-10 benchmark submissions</li>
              <li>• These benchmarks have pre-established "correct" scores from expert panels</li>
              <li>• You'll score them normally using standard evaluation criteria</li>
              <li>• The system compares your scores against the benchmark scores</li>
              <li>• This helps establish your personal scoring pattern</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Pro Tip:</strong> Approach benchmark submissions just like regular evaluations. 
              Don't try to guess "correct" scores - your natural evaluation style is what the system 
              needs to calibrate properly.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Normalization Factor Calculation',
      icon: <Percent size={24} className="text-green-500" />,
      color: 'bg-green-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-green-500">
              <Percent size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Your Calibration Factor</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-green-500 mb-6">
            <ul className="space-y-2">
              <li>• The system analyzes your scoring pattern compared to benchmarks</li>
              <li>• It calculates a personalized calibration factor unique to you</li>
              <li>• This factor normalizes your scores to match standard levels</li>
              <li>• For example, if you score 1.6 points lower than benchmarks, your factor is +1.6</li>
              <li>• Your factor may be positive (if you score strictly) or negative (if lenient)</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <div className="mb-3">
              <p className="text-sm text-gray-300 mb-2">
                <strong>Example:</strong> 
              </p>
              <p className="text-sm text-gray-300">
                Expert panel rated Project Alpha: 7.5/10<br />
                Expert panel rated Project Beta: 8.2/10<br />
                You rated Project Alpha: 6.0/10 (-1.5 difference)<br />
                You rated Project Beta: 6.5/10 (-1.7 difference)
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">
                <strong>Calculation:</strong><br />
                Average difference: (-1.5 + -1.7) ÷ 2 = -1.6<br />
                Your calibration factor: +1.6 (indicates you're a strict scorer)
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Score Adjustment Process',
      icon: <BarChart size={24} className="text-violet-500" />,
      color: 'bg-violet-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-violet-500">
              <BarChart size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Automatic Score Adjustment</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-violet-500 mb-6">
            <ul className="space-y-2">
              <li>• You'll continue to score submissions normally throughout the hackathon</li>
              <li>• Your calibration factor is automatically applied behind the scenes</li>
              <li>• You won't see your factor or the adjustments made to your scores</li>
              <li>• This ensures you can focus solely on evaluating submissions fairly</li>
              <li>• The system handles consistency across all judges</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <div className="mb-3">
              <p className="text-sm text-gray-300 mb-2">
                <strong>Example Application:</strong> 
              </p>
              <p className="text-sm text-gray-300">
                You score Submission #12345: 7.0/10<br />
                System adjusts to: 7.0 + 1.6 = 8.6/10<br />
                You score Submission #67890: 5.5/10<br />
                System adjusts to: 5.5 + 1.6 = 7.1/10
              </p>
            </div>
            <p className="text-sm text-gray-300 mt-3">
              <strong>Note:</strong> The adjustment doesn't change your ranking of submissions relative to each other - 
              it simply normalizes your scores against other judges.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Periodic Recalibration',
      icon: <CheckCircle size={24} className="text-orange-500" />,
      color: 'bg-orange-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-orange-500">
              <CheckCircle size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Maintaining Accuracy</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-orange-500 mb-6">
            <ul className="space-y-2">
              <li>• After approximately every 100 evaluations, you'll receive recalibration tasks</li>
              <li>• These look like normal evaluations but are actually benchmark submissions</li>
              <li>• This helps detect if your scoring pattern has shifted over time</li>
              <li>• Your calibration factor may be updated based on these recalibrations</li>
              <li>• This ensures long-term consistency throughout the event</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Pro Tip:</strong> Scoring patterns naturally evolve as you evaluate more submissions. 
              Recalibration isn't a test - it's simply a way to ensure consistent treatment across all submissions.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Your Role in Calibration',
      content: (
        <div>
          <h3 className="text-xl font-bold mb-4">Focus on Quality Evaluations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-accent-blue mb-2">What To Do</h4>
              <ul className="space-y-1">
                <li>• Evaluate submissions consistently using criteria</li>
                <li>• Use the full scoring range appropriately</li>
                <li>• Provide thoughtful, constructive feedback</li>
                <li>• Complete all assigned calibration tasks</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-red-400 mb-2">What Not To Do</h4>
              <ul className="space-y-1">
                <li>• Don't try to guess your calibration factor</li>
                <li>• Don't adjust your scoring to "game" the system</li>
                <li>• Don't rush through calibration tasks</li>
                <li>• Don't worry about how others are scoring</li>
              </ul>
            </div>
          </div>
          
          <p className="text-lg mb-4">
            Your calibration factor is not a reflection of your judging quality - it simply accounts 
            for natural variations in how different people use rating scales.
          </p>
          
          <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4">
            <p className="text-sm">
              <strong>Remember:</strong> The most important thing is your thoughtful evaluation of each project's
              merits. The calibration system handles the rest, ensuring fair comparison across all submissions.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const adminSteps = [
    {
      title: 'Judge Calibration System Overview',
      content: (
        <div>
          <p className="text-lg mb-6">
            The judge calibration system ensures fair and consistent evaluation across all judges in 
            the hackathon by normalizing score variations between strict and lenient evaluators.
          </p>
          <p className="text-lg mb-6">
            As an administrator, you'll oversee this system to ensure fairness and identify judges 
            who may require intervention or additional guidance.
          </p>
          <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4 mb-4">
            <p className="text-accent-blue font-medium">Key Administrative Responsibilities:</p>
            <ul className="mt-2 space-y-1">
              <li>• Monitor judge calibration factors and trends</li>
              <li>• Identify outliers requiring intervention</li>
              <li>• Review calibration benchmark performance</li>
              <li>• Ensure all judges undergo regular recalibration</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Calibration Process Management',
      icon: <Scale size={24} className="text-accent-blue" />,
      color: 'bg-accent-blue',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-accent-blue">
              <Scale size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">How Calibration Works</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-accent-blue mb-6">
            <ul className="space-y-2">
              <li>• Each judge evaluates 5-10 benchmark submissions with known scores</li>
              <li>• System calculates a personalized calibration factor</li>
              <li>• Factors adjust scores automatically during live evaluation</li>
              <li>• Judges are recalibrated after approximately every 100 evaluations</li>
              <li>• The system monitors for scoring pattern drift over time</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Admin Note:</strong> Judges never see their calibration factors. This prevents 
              them from attempting to "game" the system and ensures natural evaluation styles.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Judge Comparison Dashboard',
      icon: <BarChart4 size={24} className="text-green-500" />,
      color: 'bg-green-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-green-500">
              <BarChart4 size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Judge Comparison Dashboard</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-green-500 mb-6">
            <ul className="space-y-2">
              <li>• View scoring patterns across all judges</li>
              <li>• Compare average scores by evaluation stage and criteria</li>
              <li>• Identify trends in scoring behaviors over time</li>
              <li>• Track judge throughput and consistency metrics</li>
              <li>• Analyze benchmark performance across judge cohorts</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Key Feature:</strong> The timeline view shows how judge scoring patterns evolve 
              throughout the hackathon, helping identify unusual shifts that may warrant investigation.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Calibration Factor Monitor',
      icon: <Percent size={24} className="text-violet-500" />,
      color: 'bg-violet-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-violet-500">
              <Percent size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Calibration Factor Monitor</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-violet-500 mb-6">
            <ul className="space-y-2">
              <li>• View calibration factors for all judges</li>
              <li>• Track factor trends over time (increasing/decreasing strictness)</li>
              <li>• Filter and sort judges by factor magnitude</li>
              <li>• Identify outliers beyond standard thresholds</li>
              <li>• Schedule manual recalibrations as needed</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <div className="mb-3">
              <p className="text-sm text-gray-300 mb-2">
                <strong>Factor Interpretation:</strong> 
              </p>
              <p className="text-sm text-gray-300">
                <strong>Positive factors</strong> (e.g., +1.6): Judge scores more strictly than average<br />
                <strong>Negative factors</strong> (e.g., -1.2): Judge scores more leniently than average<br />
                <strong>Near-zero factors</strong> (e.g., +0.3): Judge scores closely match benchmarks
              </p>
            </div>
            <p className="text-sm text-gray-300 mt-3">
              <strong>Note:</strong> Most judges fall within ±2.0 range. Factors beyond this may warrant review.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Intervention Dashboard',
      icon: <AlertTriangle size={24} className="text-orange-500" />,
      color: 'bg-orange-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-orange-500">
              <AlertTriangle size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Intervention Dashboard</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-orange-500 mb-6">
            <ul className="space-y-2">
              <li>• Automatically identifies judges requiring attention</li>
              <li>• Alerts for significant factor shifts after recalibration</li>
              <li>• Flags inconsistent benchmark performance</li>
              <li>• Recommends specific interventions based on patterns</li>
              <li>• Tracks intervention history and outcomes</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300 mb-3">
              <strong>Common Intervention Types:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• <strong>Forced Recalibration:</strong> Schedule additional benchmark evaluations</li>
              <li>• <strong>Scoring Guidance:</strong> Provide specific feedback on scoring approach</li>
              <li>• <strong>Criteria Review:</strong> Clarify evaluation criteria interpretation</li>
              <li>• <strong>Pattern Monitoring:</strong> Place judge on watchlist for ongoing review</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Judge Communication Best Practices',
      icon: <Users size={24} className="text-red-500" />,
      color: 'bg-red-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-red-500">
              <Users size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">Judge Communication</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-red-500 mb-6">
            <ul className="space-y-2">
              <li>• Never share specific calibration factors with judges</li>
              <li>• Focus communications on evaluation quality, not score values</li>
              <li>• Emphasize evaluation criteria application when providing guidance</li>
              <li>• Use supportive, constructive language when intervention is needed</li>
              <li>• Provide general feedback rather than pointing out specific biases</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300 mb-3">
              <strong>Communication Templates:</strong>
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="italic">"We've noticed some variations in how criteria are being applied. Please review the evaluation guidelines, particularly for the innovation and technical execution categories."</p>
              </div>
              <div>
                <p className="italic">"To ensure consistency across all evaluations, we're asking selected judges to complete an additional calibration exercise. This helps maintain fairness for all participants."</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const participantSteps = [
    {
      title: 'Judge Calibration: What Participants Should Know',
      content: (
        <div>
          <p className="text-lg mb-6">
            With thousands of submissions and hundreds of judges, the World's Largest Hackathon uses 
            an advanced calibration system to ensure your project receives fair evaluation, regardless 
            of which judges review it.
          </p>
          <p className="text-lg mb-6">
            This system helps level the playing field by accounting for natural variations in how different 
            judges use scoring scales.
          </p>
          <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4 mb-4">
            <p className="text-accent-blue font-medium">Why This Matters to You:</p>
            <p>The calibration system ensures your project is evaluated fairly, regardless of whether 
            your judge tends to score strictly or leniently.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'How Judge Calibration Works',
      icon: <Scale size={24} className="text-accent-blue" />,
      color: 'bg-accent-blue',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-accent-blue">
              <Scale size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">The Calibration Process</h3>
          </div>
          
          <div className="pl-4 border-l-2 border-accent-blue mb-6">
            <ul className="space-y-2">
              <li>• Judges evaluate pre-scored benchmark submissions</li>
              <li>• The system analyzes each judge's scoring patterns</li>
              <li>• A personalized calibration factor is calculated for each judge</li>
              <li>• This factor automatically adjusts scores during evaluation</li>
              <li>• Judges are periodically recalibrated to maintain accuracy</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-300">
              <strong>Simple Example:</strong> If a judge consistently scores 1.5 points lower than 
              the benchmark standard, the system automatically adds 1.5 points to all their scores to 
              normalize them.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Benefits for Participants',
      icon: <CheckCircle size={24} className="text-green-500" />,
      color: 'bg-green-500',
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 rounded-full bg-green-500">
              <CheckCircle size={24} className="text-white" />
            </span>
            <h3 className="text-xl font-bold">How You Benefit</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-accent-blue mb-2">Fair Comparison</h4>
              <p className="text-sm text-gray-300">Your project is evaluated on a level playing field, 
              regardless of which judge reviews it or how strictly they typically score.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-accent-blue mb-2">Reduced Bias</h4>
              <p className="text-sm text-gray-300">The system minimizes the impact of individual judging 
              styles and preferences on your final scores.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-accent-blue mb-2">Consistent Feedback</h4>
              <p className="text-sm text-gray-300">Calibration helps ensure the feedback you receive is 
              consistent with hackathon standards.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-medium text-accent-blue mb-2">Merit-Based Recognition</h4>
              <p className="text-sm text-gray-300">Projects advance based on true merit rather than 
              the luck of judge assignment.</p>
            </div>
          </div>
          
          <div className="bg-blue-900 bg-opacity-20 border border-blue-800 rounded p-4">
            <p className="text-sm">
              <strong>Bottom Line:</strong> The calibration system ensures that the best projects 
              rise to the top based on their true quality, not on which judges happened to evaluate them.
            </p>
          </div>
        </div>
      ),
    },
  ];
  
  const steps = role === 'judge' 
    ? judgeSteps 
    : role === 'admin' 
    ? adminSteps
    : participantSteps;
    
  const maxSteps = steps.length;
  
  const handleNext = () => {
    if (step < maxSteps - 1) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };
  
  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  
  const handleSkip = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      title={
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-semibold flex-1">
            {steps[step].title}
          </h2>
          <div className="text-sm text-gray-400 ml-4 whitespace-nowrap">
            Step {step + 1} of {maxSteps}
          </div>
        </div>
      }
      showCloseButton={false}
    >
      <div className="space-y-6">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[300px]"
        >
          {steps[step].content}
        </motion.div>
        
        <div className="pt-4 border-t border-gray-700 flex justify-between">
          <div>
            {step > 0 ? (
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                leftIcon={<ChevronLeft size={16} />}
              >
                Previous
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                onClick={handleSkip}
                leftIcon={<X size={16} />}
              >
                Skip Tutorial
              </Button>
            )}
          </div>
          <Button 
            onClick={handleNext}
            rightIcon={step < maxSteps - 1 ? <ChevronRight size={16} /> : undefined}
          >
            {step < maxSteps - 1 ? 'Next' : 'Got It'}
          </Button>
        </div>
      </div>
    </Modal>
  );
} 