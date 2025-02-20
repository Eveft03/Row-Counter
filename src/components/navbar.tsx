"use client";

import React, { useEffect } from "react";
import {
  User,
  SquareAsterisk,
  CircleHelp,
  FolderDot,
  Settings,
  DiamondMinus,
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

  function handleEscKeyPress(e: KeyboardEvent) {
    if (e.key === "Escape" && isOpen) {
      onClose();
    }
  }

  function handleClickOut(e: MouseEvent) {
    const navbarElement = document.querySelector(".navbar");
    if (navbarElement && !navbarElement.contains(e.target as Node) && isOpen) {
      onClose();
    }
  }
  function handleEffect() {
    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);
    document.addEventListener("click", handleClickOut);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
      document.removeEventListener("click", handleClickOut);
    };
  }

  useEffect(handleEffect, [isOpen]);

  return (
    <div
      className={`navbar fixed top-0 left-0 h-full bg-mycolor-light-button-hover text-white z-10 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <button className="p-3 self-end text-white" onClick={onClose}>
          <DiamondMinus size={24}  />
        </button> */}
      <nav className="flex flex-col w-64 p-6">
        {NavItems.map(({ icon, title }, index) => (
          <button
            key={index}
            title={title}
            className="flex items-center p-3 font-medium text-center bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400 mb-2"
          >
            <span className="mr-2">{icon}</span>
            <span>{title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
