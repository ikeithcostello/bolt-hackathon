# Hackathon Evaluation Platform Design Document

## 🎨 Design System

### Color Palette

Our color scheme is inspired by Bolt.new and StackBlitz, featuring a bold, modern aesthetic with vibrant accent colors against a deep background.

#### Core Colors

| Color            | Hex Code   | Usage                                  |
|------------------|------------|----------------------------------------|
| Primary Background | `#1E1E1E` | Main background color                  |
| Secondary Background | `#2A2A2A` | Card backgrounds, panels              |
| Text Primary     | `#F8F8F8`  | Main text color                        |
| Text Secondary   | `#A0A0A0`  | Secondary text, labels, timestamps     |

#### Accent Colors

| Color            | Hex Code   | Usage                                  |
|------------------|------------|----------------------------------------|
| Accent Blue      | `#3B82F6`  | Primary interactive elements, buttons  |
| Accent Green     | `#22C55E`  | Success states, completion, positive   |
| Accent Orange    | `#F97316`  | Warnings, in-progress, attention       |
| Accent Purple    | `#8B5CF6`  | Special highlights, user avatars       |
| Accent Red       | `#EF4444`  | Errors, danger, negative indicators    |

### Typography

| Element          | Font                   | Weight     | Size        |
|------------------|------------------------|------------|-------------|
| Headings (h1)    | Inter/System           | 700 (Bold) | 1.875rem    |
| Headings (h2)    | Inter/System           | 600 (Semibold) | 1.5rem |
| Headings (h3)    | Inter/System           | 600 (Semibold) | 1.25rem |
| Body Text        | Inter/System           | 400 (Regular) | 1rem     |
| Small Text       | Inter/System           | 400 (Regular) | 0.875rem  |
| Buttons          | Inter/System           | 500 (Medium) | 0.875rem  |

### Spacing

We use a consistent spacing scale throughout the application:

- 0.25rem (4px): Minimal spacing
- 0.5rem (8px): Compact elements
- 1rem (16px): Standard spacing
- 1.5rem (24px): Generous spacing
- 2rem (32px): Section spacing
- 4rem (64px): Major section divisions

### Shadows

| Type             | CSS                                  | Usage                    |
|------------------|--------------------------------------|--------------------------|
| Subtle           | `0 1px 3px rgba(0,0,0,0.12)`        | Cards, subtle elevation  |
| Medium           | `0 4px 6px rgba(0,0,0,0.1)`         | Popovers, dropdowns      |
| Pronounced       | `0 10px 15px rgba(0,0,0,0.2)`       | Modals, focused elements |

## 📱 Responsive Breakpoints

| Breakpoint       | Size        | Target Devices                      |
|------------------|-------------|-------------------------------------|
| sm               | 640px       | Small phones                        |
| md               | 768px       | Large phones, small tablets         |
| lg               | 1024px      | Tablets, small laptops              |
| xl               | 1280px      | Laptops, desktops                   |
| 2xl              | 1536px      | Large desktops                      |

## 🧩 Component Library

### Core Components

#### Button

Variants:
- Primary: Blue background, white text
- Secondary: Gray background, white text
- Outline: Transparent with border, adaptive text
- Danger: Red background, white text
- Ghost: Transparent, hover effect

States:
- Default
- Hover
- Focus
- Active
- Disabled

Properties:
- Size (sm, md, lg)
- Left/Right Icon
- Loading State

#### Card

Parts:
- Card (container)
- CardHeader
- CardTitle
- CardContent
- CardFooter

Properties:
- Padding variants
- Border options
- Background options

#### Avatar

Properties:
- Size (sm, md, lg)
- Source image
- Fallback (initials)
- Status indicator

#### Input & Form Elements

Types:
- Text Input
- Textarea
- Checkbox
- Radio
- Select
- Toggle Switch

States:
- Default
- Focus
- Error
- Disabled

### Specialized Components

#### Metric Card

Used to display key statistics with optional trend indicators.

#### Activity Feed

Displays a chronological list of activities with icons and timestamps.

#### Timeline

Shows progress through a series of steps with completion status.

#### Data Tables

- SubmissionsTable: For displaying submission lists
- LeaderboardTable: For rankings and scores

#### Visualizations

- LineChart: For time-series data
- RadarChart: For multi-dimensional comparisons
- HeatMap: For density and distribution
- ScatterPlot: For correlation between variables

## 🎭 Animation System

### Principles

- Subtle is better than exaggerated
- Reinforce user actions with feedback
- Enhance navigation and transitions
- Maintain performance even on low-end devices

### Implementation

Using Framer Motion with standardized durations:
- Ultra Fast: 100ms (micro-interactions)
- Fast: 200ms (most UI feedback)
- Standard: 300ms (page transitions)
- Relaxed: 500ms (emphasis animations)

### Common Animations

- Page entrance: Fade up + opacity
- Card hover: Subtle scale (1.02) + shadow
- Button press: Scale down (0.98)
- Notifications: Slide in + fade
- Loading indicators: Pulsing opacity or rotation

## 📱 Mobile Considerations

### Touch Targets

- Minimum 44x44px for all interactive elements
- Increased spacing between clickable items on small screens
- Bottom-anchored important actions for thumb accessibility

### Layout Adjustments

- Single column layout on mobile
- Collapsible sidebar becomes hamburger menu
- Simplified tables with fewer columns
- Stacked controls instead of inline

## ♿ Accessibility

### Standards

- WCAG 2.1 AA compliant
- Semantic HTML throughout
- Keyboard navigation support
- ARIA attributes where appropriate

### Focus Management

- Visible focus styles on all interactive elements
- Focus trap for modals and dialogs
- Logical tab order following visual layout

### Color Considerations

- All text meets 4.5:1 contrast ratio minimum
- Non-color indicators for state (icons, patterns)
- Tested color schemes for color blindness

## 📝 Content Guidelines

### Writing Style

- Clear, concise language
- Action-oriented instructions
- Consistent terminology
- Positive tone

### Error Messages

- Specific about what went wrong
- Suggests how to fix the issue
- Non-technical language
- Maintains user confidence

## 🚀 Implementation Notes

- Tailwind CSS for styling (extended with custom configuration)
- React components with TypeScript
- Responsive design using Tailwind's responsive utilities
- Framer Motion for animations
- Component-driven development with Storybook
- Reusable hooks for common patterns