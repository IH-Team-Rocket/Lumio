import { createContext, useContext, useState, useEffect } from 'react';

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
      {console.log('isSidebarOpen:', isSidebarOpen)}
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext