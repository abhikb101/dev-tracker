
# Development Progress Tracker

## Overview

This project is a Next.js-based web application designed to help developers track their learning progress over time. It provides an interactive interface for managing daily tasks, organizing a learning roadmap, and visualizing accomplishments.

## Key Components

### App Layout (`app/layout.tsx`)

- Sets up the basic HTML structure
- Implements theme provider for light/dark mode
- Configures custom fonts (Geist Sans and Geist Mono)

### Main Application (`components/app.tsx`)

- Core component of the application
- Manages state for selected day, expanded tasks, and user notes
- Implements the main UI layout with sidebar and content area
- Handles task completion toggling and note-taking functionality

### UI Components

- Button (`components/ui/button.tsx`): Customizable button component
- Calendar (`components/ui/calendar.tsx`): Date picker component
- Card (`components/ui/card.tsx`): Card layout component for displaying information
- Checkbox (`components/ui/checkbox.tsx`): Interactive checkbox component
- Input (`components/ui/input.tsx`): Text input component
- ScrollArea (`components/ui/scroll-area.tsx`): Scrollable container component
- Tabs (`components/ui/tabs.tsx`): Tab navigation component
- Textarea (`components/ui/textarea.tsx`): Multi-line text input component

### Utility Functions (`lib/utils.ts`)

- Provides utility functions for class name management

## Key Features

1. Interactive Daily Task View: Users can select specific days to view and manage tasks.
2. Task Completion Tracking: Allows marking tasks as completed, with progress saved locally.
3. Note-Taking: Users can add notes to individual tasks.
4. Responsive Design: Adapts to different screen sizes for optimal viewing.
5. Theme Support: Implements light and dark mode themes.

## Data Structure

The application uses a predefined roadmap structure, organizing tasks by weeks and days. Each task includes:

- Title
- Explanation
- Exercise
- Goals
- LeetCode problems (where applicable)
- Completion status

## State Management

- Uses React's useState and useEffect hooks for state management
- Implements local storage for persisting user progress and notes

## Styling

- Utilizes Tailwind CSS for styling
- Implements custom animations using Framer Motion

## Future Enhancements

The application is designed to be extensible. Potential future enhancements could include:

- Backend integration for user authentication and cloud storage of progress
- More interactive elements like progress charts or achievement badges
- Integration with coding platforms or IDEs for direct problem-solving
