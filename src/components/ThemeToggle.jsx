import { motion } from "framer-motion";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-base-300 flex items-center px-1 overflow-hidden"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
        style={{
          marginLeft: theme === "dark" ? "auto" : "0",
        }}
      >
        {theme === "dark" ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 21a9 9 0 009-8.21z"
              stroke="orange"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" stroke="orange" strokeWidth="2" />
          </svg>
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
