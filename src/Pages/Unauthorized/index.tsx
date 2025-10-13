import { ArrowLeft, Home, Lock } from '@mui/icons-material';
import { Link } from 'react-router';
// import { Lock, ArrowLeft, Home } from 'lucide-react';

export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                {/* Icon */}
                <div className="mb-8">
                    <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Lock className="w-8 h-8 text-gray-600" />
                    </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                    <h1 className="text-3xl font-light text-gray-900 mb-4">
                        Access Restricted
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed mb-2">
                        You don't have permission to view this page.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Please contact your administrator if you believe this is an error.
                    </p>
                </div>

                {/* Error Code */}
                <div className="mb-8">
                    <div className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 rounded-full">
                        <span className="text-gray-500 text-sm font-mono">Error 401</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                        <Home className="w-4 h-4 inline mr-2" />
                        Go to Homepage
                    </button>

                    <Link to={'/'} className='block w-full h-full'>
                        <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg border border-gray-300 transition-colors duration-200">
                            <ArrowLeft className="w-4 h-4 inline mr-2" />
                            Go Back
                        </button>
                    </Link>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                    <p className="text-gray-400 text-sm">
                        Need help? <button className="text-blue-600 hover:text-blue-700 underline">Contact Support</button>
                    </p>
                </div>
            </div>
        </div>
    );
}