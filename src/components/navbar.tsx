"use client";

import React, { useEffect } from "react";
import {
  User,
  SquareAsterisk,
  CircleHelp,
  FolderDot,
  Settings,
  X
} from "lucide-react";

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Navbar({ isOpen, onClose }: NavbarProps) {
  const NavItems = [
    {
      title: "Sign In",
      link: "#",
      icon: <User size={24} />,
    },
    {
      title: "Patterns",
      link: "#",
      icon: <SquareAsterisk size={24} />,
    },
    {
      title: "Projects",
      link: "#",
      icon: <FolderDot size={24} />,
    },
    {
      title: "Settings",
      link: "#",
      icon: <Settings size={24} />,
    },
    {
      title: "Help",
      link: "#",
      icon: <CircleHelp size={24} />,
    },
  ];

  useEffect(() => {
    // Handle body overflow to prevent scrolling when sidebar is open
    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    // Event handlers for escape key and clicking outside
    const handleEscKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleClickOut = (e: MouseEvent) => {
      const navbarElement = document.querySelector(".navbar");
      if (navbarElement && !navbarElement.contains(e.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);
    document.addEventListener("click", handleClickOut);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
      document.removeEventListener("click", handleClickOut);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay - visible only when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`navbar fixed top-0 left-0 h-full bg-mycolor-light-button-bg text-white z-20 transition-transform duration-300 ease-in-out transform shadow-xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col w-64 h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <h2 className="text-xl font-bold">Witchy Stitches</h2>
            <button 
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Navigation items */}
          <div className="p-4 flex-1 overflow-y-auto">
            {NavItems.map(({ icon, title, link }, index) => (
              <a
                key={index}
                href={link}
                className="flex items-center p-3 mb-2 font-medium rounded-lg hover:bg-mycolor-light-button-hover transition-colors duration-200"
              >
                <span className="mr-3">{icon}</span>
                <span>{title}</span>
              </a>
            ))}
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <p className="text-sm text-white/70">© 2025 Witchy Stitches</p>
          </div>
        </nav>
      </div>
    </>
  );
}