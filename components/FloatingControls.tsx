"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react";

export function FloatingControls() {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
    };

    if (!theme) return <div></div>;

    return (
        <div className="right-6 bottom-6 z-50 fixed flex flex-col gap-4" >
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="bg-white dark:bg-slate-800 shadow-lg p-3 border border-slate-200 dark:border-slate-700 rounded-full text-slate-900 dark:text-yellow-400"
            >
                {
                    theme == "dark" ? <Sun size={24} /> : <Moon size={24} />
                }
            </motion.button>
        </div>
    )
}