const Navbar = () => {
  return (
    <>
      <div>
        <ul className="flex items-center justify-start gap-4 p-4 h-fit bg-lime-500">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
