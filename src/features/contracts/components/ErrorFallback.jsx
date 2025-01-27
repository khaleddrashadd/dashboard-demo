import { Card, CardContent } from '@/components/card';
import { AlertTriangle } from 'lucide-react';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ children, error }) => {
  const fallback = (
    <Card>
      <CardContent>
        <div className="w-full bg-white shadow-2xl rounded-xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle
              className="text-red-500"
              size={80}
              strokeWidth={1.5}
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Oops! Something Went Wrong
          </h2>

          <p className="text-gray-600 mb-6">
            We encountered an unexpected error. Don&apos;t worry, this
            isn&apos;t your fault.
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <code className="text-red-700 text-sm break-words">
                {error.toString()}
              </code>
            </div>
          )}

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => (window.location.href = '/')}
              className="
              flex items-center gap-2 
              bg-gray-200 text-gray-700 
              px-4 py-2 rounded-md 
              hover:bg-gray-300 
              transition-colors 
              focus:outline-none 
              focus:ring-2 
              focus:ring-gray-400
            ">
              Go Home
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>;
};

export default ErrorFallback;
