import { useEffect } from "react";

const LoadingScreen = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Hide loading screen after a few seconds
    }, 3000); // Adjust timing as needed
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img 
        src="/loading.gif" 
        alt="Loading..." 
        className="max-w-full max-h-full w-auto h-auto"
      />
    </div>
  );
};

export default LoadingScreen;
