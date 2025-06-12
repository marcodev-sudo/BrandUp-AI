'use client';

const TopPanel = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-6 bg-white z-10">
      <div className="text-2xl font-bold text-blue-600">BrandUp AI</div>
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Link 1</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Link 2</a>
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center ml-4 cursor-pointer">
          <span className="text-gray-600 text-lg">M</span>
        </div>
      </nav>
    </header>
  );
};

export default TopPanel; 