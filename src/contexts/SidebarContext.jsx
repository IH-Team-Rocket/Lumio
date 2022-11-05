import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SidebarContext = createContext()

export const useSidebarContext = () => useContext(SidebarContext)

export const SidebarContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false)
  }, [location]);

  useEffect(() => {
    const content = document.querySelector('.sidescreen-content')
    document.addEventListener('click', function(e) {
      if (content.contains(e.target)) {
        setIsSidebarOpen(false)
      }
    })
  }, [])
  

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