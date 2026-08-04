import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef([]);
  
  const navLinks = [
    { name: 'Profile', path: '/' },
    { name: 'Publications', path: '/publications' },
    { name: 'Activities', path: '/activities' },
    { name: 'Contact', path: '/contact' }
  ];

  // Re-calculate the sliding underline position whenever the route changes or layout shifts
  useEffect(() => {
    // A small timeout ensures that the DOM has fully painted the new font weights/widths 
    // before we calculate offsetLeft and offsetWidth for the underline.
    const updateIndicator = () => {
      const activeIndex = navLinks.findIndex(link => link.path === path);
      if (activeIndex !== -1 && navRefs.current[activeIndex]) {
        const el = navRefs.current[activeIndex];
        setIndicatorStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          opacity: 1
        });
      } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
      }
    };
    
    // Run immediately
    updateIndicator();
    // Run slightly after to catch font-weight layout shift
    const timeoutId = setTimeout(updateIndicator, 50);
    
    return () => clearTimeout(timeoutId);
  }, [path]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Style for mobile menu
  const isMobileActive = (route) => {
    return path === route
      ? "text-academic-navy font-subhead-bold text-subhead-bold"
      : "text-slate-gray font-body-main";
  };

  return (
    <nav className="bg-surface-container-lowest text-academic-navy border-b border-border-subtle sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-[1120px] mx-auto">
        <div className="text-headline-section font-headline-section font-bold tracking-tight">
          <Link to="/" onClick={closeMenu} className="text-[#0F172A] hover:opacity-80 transition-opacity">Dr. Anwesh Pandey</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {navLinks.map((link, index) => {
            const isActive = path === link.path;
            return (
              <Link 
                key={link.path}
                to={link.path} 
                ref={el => navRefs.current[index] = el}
                className={`py-1 transition-colors duration-300 ${isActive ? 'text-academic-navy font-subhead-bold text-subhead-bold' : 'text-slate-gray font-body-main hover:text-academic-navy'}`}
              >
                {link.name}
              </Link>
            );
          })}
          {/* Animated Sliding Underline */}
          <div 
            className="absolute bottom-0 h-[2px] bg-academic-navy transition-all duration-300 ease-in-out pointer-events-none"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width, opacity: indicatorStyle.opacity }}
          />
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
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={isMobileActive(link.path)} onClick={closeMenu}>{link.name}</Link>
            ))}
            <a href="/Anwesh_Pandey_CV.pdf" download="Anwesh_Pandey_CV.pdf" onClick={closeMenu} className="inline-block bg-academic-navy text-center text-on-primary font-subhead-bold text-subhead-bold px-6 py-3 rounded transition-opacity active:opacity-80 mt-2">
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
