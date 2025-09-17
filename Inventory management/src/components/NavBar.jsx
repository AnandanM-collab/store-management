const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#e63973] to-[#f7c246] py-4">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center w-1/3">
            <a href="/" className="ml-6 bg-gradient-to-r from-[#e63973] to-[#f7c246] rounded p-1 text-black-800 hover:text-white">
              Home
            </a>
            <a href="/cart" className="ml-6 bg-gradient-to-r from-[#e63973] to-[#f7c246] rounded p-1 text-black-800 hover:text-white">
              Cart
            </a>
            <a href="/inventory" className="ml-6 bg-gradient-to-r from-[#e63973] to-[#f7c246] rounded p-1 text-black-800 hover:text-white">
              Inventory
            </a>
            <a href="/sales" className="ml-6 bg-gradient-to-r from-[#e63973] to-[#f7c246] rounded p-1 text-black-800 hover:text-white">
              Sales
            </a>
            <a href="/add-product" className="ml-6 bg-gradient-to-r from-[#e63973] to-[#f7c246] rounded p-1 text-black-800hover:text-white">
              Add Product
            </a>
          </div>
          <div className="flex items-center w-1/3 justify-center">
            <h2 className="text-white text-lg font-bold">StockControl Pro</h2>
            <img className="w-[30px] h-[30px] mx-2" src="/inventoryLogo.png" alt="LOGO" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;