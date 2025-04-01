// src/ErrorBoundary.tsx
import React from 'react';

// Define Props and State interfaces
interface ErrorBoundaryProps {
  children: React.ReactNode; // Explicitly type `children`
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false }; // Initialize state
  }

  // Update state when an error occurs
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  // Log the error details
  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, info.componentStack);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // Fallback UI
    }
    return this.props.children; // Render children if no error
  }
}

export default ErrorBoundary;