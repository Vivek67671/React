import React, { useState } from 'react';
import { Loader2, ArrowDown } from 'lucide-react';

const AnimatedButtonLoadMore = ({ onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsLoading(false);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full
                  ${isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 hover:shadow-lg'
                  }
                  text-white focus:outline-none focus:ring-2 focus:ring-offset-2
                  transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
    >
      <style>{`
        @keyframes flow-down {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-flow-down {
          animation: flow-down 2s linear infinite;
        }
      `}</style>
      {isLoading ? (
        <>
          <Loader2 className="animate-spin -ml-1 mr-3 w-5 h-5 text-white" />
          Loading...
        </>
      ) : (
        <>
          Load More
          <ArrowDown className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:rotate-180 animate-flow-down" />
        </>
      )}
    </button>
  );
};

export default AnimatedButtonLoadMore;
