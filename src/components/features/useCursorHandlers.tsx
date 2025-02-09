// hooks/useCursorHandlers.ts
"use client";

import { useState } from "react";

export function useCursorHandlers() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");

  const handleProjectEnter = () => {
    setCursorText("View");
    setCursorVariant("project");
  };

  const handleProjectLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  const handleContactEnter = () => {
    setCursorText("👋");
    setCursorVariant("contact");
  };

  const handleContactLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  return {
    cursorVariant,
    cursorText,
    handleProjectEnter,
    handleProjectLeave,
    handleContactEnter,
    handleContactLeave,
  };
}
