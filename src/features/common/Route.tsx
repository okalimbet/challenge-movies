import React, { ReactElement, useEffect, useState } from "react";

interface RouteProps {
  path: string;
  children: ReactElement<any, any> | null;
}


const Route:React.FC<RouteProps> = ({ path, children }) => {
  const pathname = window.location.pathname
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname)
      const onLocationChange = () => {
          setCurrentPath(window.location.pathname);
      }
      window.addEventListener('popstate', onLocationChange);
      return () => {
          window.removeEventListener('popstate', onLocationChange)
      };
      
  }, [pathname])

  return currentPath.includes(path)
  ? children
  : null;
}

export default Route;