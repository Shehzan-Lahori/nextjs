import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center p-5 gap-x-4 bg-green-500">
      <div className="hidden lg:flex lg:flex-1 h-10 w-10 bg-yellow-500">
        hello
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
