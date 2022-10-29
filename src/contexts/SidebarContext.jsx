import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext()

export const useSidebarContext = () => useContext(SidebarContext)

export const SidebarContextProvider = ({ children }) => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen
  }

  return (
    <SidebarContext.Provider value={values}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext