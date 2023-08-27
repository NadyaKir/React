import { useState, useEffect } from "react";

const withLoadingDelay = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const delay = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(delay);
    }, []);

    return <WrappedComponent {...props} isLoading={isLoading} />;
  };
};

export default withLoadingDelay;
