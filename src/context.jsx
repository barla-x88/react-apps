/*
 *
 * This provides global context which enables the components to
 * use state values present in the AppProvider component.
 *
 */
import { useState, createContext, useContext } from "react";

const globalContext = createContext();

//custom useContext hook to enable components easily access
// state values and functions
export const useGlobalContext = () => useContext(globalContext);

//App provider component
//every component  will be wrapped inside of it
const AppProvider = ({ children }) => {
  //these will be available in all child components (state & state manipulation functions)
  //setting up states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //functions to manipulate state values
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <globalContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {/* This is required to render child components */}
      {children}
    </globalContext.Provider>
  );
};

export default AppProvider;
