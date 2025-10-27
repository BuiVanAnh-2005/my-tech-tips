import NavLinks from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";


export default function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Overlay tối mờ */}
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 15,
          }}
        />

        {/* Sidebar trượt từ trái ra */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "260px",
            height: "100%",
            background: "#fff",
            padding: "1rem",
            zIndex: 20,
            boxShadow: "2px 0 8px rgba(0,0,0,0.2)",
            overflowY: "auto",
            scrollBehavior: "smooth",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        >
          <NavLinks onClose={onClose} />
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
}