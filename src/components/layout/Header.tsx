import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Logo } from '../ui/Logo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Features', href: '/#features' },
    { name: 'Integrations', href: '/#integrations' },
    { name: 'API Docs', href: '/documentation' },
    { name: 'Testimonials', href: '/#testimonials' }
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled || !isHomePage ? 'bg-white header-shadow py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Logo size="md" variant={isScrolled || !isHomePage ? 'dark' : 'light'} />
          <span 
            className={cn(
              'text-xl font-bold transition-colors',
              isScrolled || !isHomePage ? 'text-slate-900' : 'text-white'
            )}
          >
            Finapify
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              className={cn(
                'font-medium transition-colors',
                isScrolled || !isHomePage ? 'text-slate-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-4">
          <Link to="/login" className={cn(
            'btn',
            isScrolled || !isHomePage ? 'btn-outline' : 'text-white border-white/20 hover:bg-white/10'
          )}>
            Sign In
          </Link>
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu 
              className={cn(
                'h-6 w-6',
                isScrolled || !isHomePage ? 'text-slate-900' : 'text-white'
              )} 
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg pb-4 px-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-medium text-slate-700 hover:text-primary-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/login" 
              className="btn btn-outline mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              to="/register" 
              className="btn btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
