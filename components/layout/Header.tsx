const Header = () => {
      return (
          <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
              <div className="text-2xl font-bold">Logo</div>
              <nav className="space-x-4">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign In</button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">Sign Up</button>
              </nav>
          </header>
      );
  };
  
  export default Header;
  