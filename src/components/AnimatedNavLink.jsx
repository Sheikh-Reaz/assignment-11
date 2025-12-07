import { NavLink } from "react-router";
import { motion } from "framer-motion";

const AnimatedNavLink = ({ to, children }) => {
  return (
    <NavLink to={to} className="relative">
      {({ isActive }) => (
        <motion.div
          className="relative px-5 py-3 text-center square-nav"
          initial="initial"
          whileHover="hover"
        >
          <span className="relative z-10">{children}</span>

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M1 1 H99 V49 H1 Z"
              fill="none"
              stroke="black"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="miter"
              strokeLinecap="butt"
              initial={{ pathLength: 0 }}
              animate={
                isActive
                  ? { pathLength: [0, 1, 0, 1, 0] } // continuous slow loop
                  : { pathLength: 0 }
              }
              whileHover={{ pathLength: 1 }} // full draw on hover
              transition={{
                duration: isActive ? 5 : 0.6, // slow for active
                ease: "linear",
                repeat: isActive ? Infinity : 0, // loop forever if active
              }}
            />
          </svg>
        </motion.div>
      )}
    </NavLink>
  );
};

export default AnimatedNavLink;
