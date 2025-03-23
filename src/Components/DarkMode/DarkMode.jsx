import React, { useEffect } from "react";
import SunIcon from "./Sun.svg";
import MoonIcon from "./Moon.svg";
import useThemeStore from "../store/useThemeStore";
import "./DarkMode.css";

const DarkMode = () => {
    const { theme, toggleTheme, initializeTheme } = useThemeStore();

    useEffect(() => {
        initializeTheme();
    }, [initializeTheme]);

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
                checked={theme === "dark"}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <img src={SunIcon} alt="Light mode" className="w-4 h-4" />
                <img src={MoonIcon} alt="Dark mode" className="w-4 h-4" />
            </label>
        </div>
    );
};

export default DarkMode;
