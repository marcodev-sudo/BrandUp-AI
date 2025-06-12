'use client';
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`transition-all duration-300 bg-gray-100 border-r border-gray-200 h-screen flex flex-col ${collapsed ? 'w-14' : 'w-56'}`}>
      <button
        className="p-2 focus:outline-none hover:bg-gray-200"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? (
          <span>&#x25C0;</span> // Right-pointing triangle
        ) : (
          <span>&#x25B6;</span> // Left-pointing triangle
        )}
      </button>
      {/* Future sidebar content goes here */}
    </div>
  );
};

export default Sidebar; 