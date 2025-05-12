"use client";

import React from "react";
import {
  User,
  SquareAsterisk,
  CircleHelp,
  FolderDot,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const NavItems = [
    {
      title: "Sign In",
      link: "#",
      icon: <User size={20} />,
    },
    {
      title: "Patterns",
      link: "#",
      icon: <SquareAsterisk size={20} />,
    },
    {
      title: "Projects",
      link: "#",
      icon: <FolderDot size={20} />,
    },
    {
      title: "Grid",
      link: "#",
      icon: <FolderDot size={20} />,
    },
    {
      title: "Settings",
      link: "#",
      icon: <Settings size={20} />,
    },
    {
      title: "Help",
      link: "#",
      icon: <CircleHelp size={20} />,
    },
  ];

  return (
    <div className="h-full w-64 bg-mycolor-light-button-hover text-white shadow-xl">
      
      
      {/* Navigation items */}
      <div className="p-4 flex-1 overflow-y-auto">
        <nav className="space-y-1">
          {NavItems.map(({ icon, title, link }, index) => (
            <Link
              key={index}
              href={link}
              className="flex items-center p-3 mb-2 font-medium rounded-lg hover:bg-mycolor-light-display-bg transition-colors duration-200"
            >
              <span className="mr-3">{icon}</span>
              <span>{title}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t border-white/10 mt-auto ">
        <p className="text-sm text-white/70">© 2025 Eveft03</p>
      </div>
    </div>
  );
}