/*
 *
 * This provides global context which enables the components to
 * use state values present in the AppProvider component.
 *
 */
import { useState, createContext, useContext } from "react";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //functions to manipulate state values
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <globalContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default AppProvider;
