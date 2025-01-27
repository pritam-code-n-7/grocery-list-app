import { AvatarDemo } from "@/demo/avatar-demo/AvatarDemo";
import { ModeToggle } from "@/theme/ModeToggle";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-yellow-500 w-full">
      <div className="flex flex-row items-center gap-2">
        <AvatarDemo />
        <p className="text-lg font-serif">Grocery List App</p>
      </div>
      <div className="flex items-center gap-4">
        <p role="button" className="font-bold hover:text-gray-700 transition-all delay-75 duration-150">Logout</p>
      <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
