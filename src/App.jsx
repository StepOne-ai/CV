import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { resumeData } from './data/resumeData';
import { Menu, X } from 'lucide-react';

function App() {
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header data={resumeData} />
      
      {/* Mobile Navigation Buttons */}
      <div className="lg:hidden fixed bottom-20 left-4 right-4 flex gap-3 z-40">
        <motion.button
          onClick={() => setShowLeftSidebar(!showLeftSidebar)}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 font-semibold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {showLeftSidebar ? <X size={20} /> : <Menu size={20} />}
          Навыки
        </motion.button>
        <motion.button
          onClick={() => setShowRightSidebar(!showRightSidebar)}
          className="flex-1 bg-purple-600 text-white py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 font-semibold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {showRightSidebar ? <X size={20} /> : <Menu size={20} />}
          Достижения
        </motion.button>
      </div>

      {/* Mobile Sidebars Overlay */}
      {(showLeftSidebar || showRightSidebar) && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => {
            setShowLeftSidebar(false);
            setShowRightSidebar(false);
          }}
        />
      )}

      {/* Three Column Layout */}
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[320px_1fr_320px] gap-6">
          {/* Left Sidebar */}
          <aside className={`
            lg:sticky lg:top-6 lg:self-start lg:h-[calc(100vh-100px)] lg:overflow-y-auto 
            scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200
            ${showLeftSidebar ? 'fixed inset-y-0 left-0 w-80 z-50 overflow-y-auto p-6 bg-gray-100' : 'hidden lg:block'}
          `}>
            <Sidebar data={resumeData} />
          </aside>

          {/* Main Content */}
          <main>
            <MainContent data={resumeData} />
          </main>

          {/* Right Sidebar */}
          <aside className={`
            lg:sticky lg:top-6 lg:self-start lg:h-[calc(100vh-100px)] lg:overflow-y-auto 
            scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-200
            ${showRightSidebar ? 'fixed inset-y-0 right-0 w-80 z-50 overflow-y-auto p-6 bg-gray-100' : 'hidden lg:block'}
          `}>
            <RightSidebar data={resumeData} />
          </aside>
        </div>
      </div>

      <Footer data={resumeData} />
      <ScrollToTop />
    </div>
  );
}

export default App;
