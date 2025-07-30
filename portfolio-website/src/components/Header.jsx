import React from "react";
import {Menu} from "lucide-react";

const Header = ({activeSection, setActiveSection, mobileMenuOpen, setMobileMenuOpen}) => {
    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    return(
        <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">SP</span>
                         </div>
                         <span className="text-xl font-bold text-white">Sai Praksh Sikhakolli</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) =>{
                            <button key={item} 
                            onClick={() => setActiveSection(items.toLocaleLowerCase)} 
                            className={`text-sm font-medium transition-colors duration-200 ${
                                        activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                            }`}>{item}</button>
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-700">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <button key={item} onClick={() => {setActiveSection(item.toLocaleLowerCase()); setMobileMenuOpen(false)}} 
                                className={`text-left text-sm font-medium transition-colors duration-200 ${
                                    activeSection === item.toLowerCase()
                                      ? 'text-blue-400'
                                      : 'text-gray-300 hover:text-blue-400'
                                  }`}> 
                                  {item}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;