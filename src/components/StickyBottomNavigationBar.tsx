import DynamicDock from "./dynamic-dock";
import iconHouse from "../assets/house.png";
import iconGithub from "../assets/github.png";
import iconCode from "../assets/code.png";

function StickyBottomNavigationBar() {
  return (
    <DynamicDock gapX={5} baseWidth={35}>
      <div className="dock-item flex items-center justify-center">
        <a
          href="#"
          className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <img src={iconHouse} alt="Home" className="w-4 h-4" />
        </a>
      </div>
      <div className="dock-item flex items-center justify-center">
        <a
          href="#"
          className="w-12 h-12 rounded-full  hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <img src={iconCode} alt="Code" className="w-4 h-4" />
        </a>
      </div>
      <div className="w-[2px] h-2 bg-gray-300"></div>
      <div className="dock-item flex items-center justify-center">
        <a
          href="#"
          className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <img src={iconGithub} alt="GitHub" className="w-4 h-4" />
        </a>
      </div>
    </DynamicDock>
  );
}

export default StickyBottomNavigationBar;
