import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Button } from './ui/button.jsx';

function ErrorFallback({ error, resetErrorBoundary }) {
  React.useEffect(() => {
    // Report error to an error reporting service here
    console.error("Uncaught error:", error);
  }, [error]);

  return (
    <div role="alert" className="p-8 text-center bg-red-100 text-red-900 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
      <pre className="whitespace-pre-wrap text-left mb-4">{error.message}</pre>
      <Button onClick={resetErrorBoundary} className="mt-4">
        Try again
      </Button>
    </div>
  );
}

export default function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset any global state if needed
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
