import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (route) => {
    return path === route
      ? "text-academic-navy font-subhead-bold text-subhead-bold border-b-2 border-academic-navy pb-1"
      : "text-slate-gray font-body-main hover:text-academic-navy transition-colors duration-200";
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-surface-container-lowest dark:bg-surface-container-lowest text-academic-navy dark:text-inverse-primary border-b border-border-subtle dark:border-outline-variant sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-[1120px] mx-auto">
        <div className="text-headline-section font-headline-section font-bold text-academic-navy dark:text-inverse-primary tracking-tight">
          <Link to="/" onClick={closeMenu}>Dr. Anwesh Pandey</Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={isActive('/')}>Profile</Link>
          <Link to="/publications" className={isActive('/publications')}>Publications</Link>
          <Link to="/activities" className={isActive('/activities')}>Activities</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>
        <div className="hidden md:block">
          <a href="/Anwesh_Pandey_CV.pdf" download="Anwesh_Pandey_CV.pdf" className="inline-block bg-academic-navy text-on-primary font-subhead-bold text-subhead-bold px-6 py-2 rounded transition-opacity hover:opacity-80">
            Download CV
          </a>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-academic-navy p-2 focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined" data-icon={isMobileMenuOpen ? "close" : "menu"}>
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-border-subtle absolute w-full shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link to="/" className={isActive('/')} onClick={closeMenu}>Profile</Link>
            <Link to="/publications" className={isActive('/publications')} onClick={closeMenu}>Publications</Link>
            <Link to="/activities" className={isActive('/activities')} onClick={closeMenu}>Activities</Link>
            <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link>
            <a href="/Anwesh_Pandey_CV.pdf" download="Anwesh_Pandey_CV.pdf" onClick={closeMenu} className="inline-block bg-academic-navy text-center text-on-primary font-subhead-bold text-subhead-bold px-6 py-3 rounded transition-opacity active:opacity-80 mt-2">
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
