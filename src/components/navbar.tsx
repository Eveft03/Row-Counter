"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  SquareAsterisk,
  CircleHelp,
  FolderDot,
  Settings,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

  function handleDrawer() {
    setIsOpen(!isOpen);
  }

  function handleEscKeyPress(e: KeyboardEvent) {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  }

  function handleEffect() {
    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }

  useEffect(handleEffect, [isOpen]);

  return <nav></nav>;
}
