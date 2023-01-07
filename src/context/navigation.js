import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

const Provider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  // 紀錄用戶點擊瀏覽器上一頁/下一頁 當前的pathname
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { Provider };

export default NavigationContext;
