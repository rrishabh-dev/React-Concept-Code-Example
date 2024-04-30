import React, { Component } from "react";

const withErrorBoundary = (WrappedComponent) => {
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
      console.error("Error handled by ErrorBoundary:", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <strong style={{ color: 'red' }}>Something went wrong: {this.state.error.message}</strong>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };

  return ErrorBoundary;
}

export default withErrorBoundary;
