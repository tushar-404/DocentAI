"use client";

import { useEffect } from "react";
import { useAtom } from "jotai";
import { aiSettingsAtom } from "../../atom";

export default function ThemeManager() {
  const [settings] = useAtom(aiSettingsAtom);

  useEffect(() => {
    const root = document.documentElement;
    
    const themes: Record<string, string> = {
      blue: "#3b82f6",   
      purple: "#a855f7",  
      emerald: "#10b981", 
      orange: "#f97316",  
    };

    const color = themes[settings.theme] || themes.blue;
    
    root.style.setProperty("--accent-color", color);
    
  }, [settings.theme]);

  return null;
}