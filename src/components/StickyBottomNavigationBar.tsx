import DynamicDock from "./dynamic-dock";
import iconHouse from "../assets/house.png";
import iconGithub from "../assets/github.png";
import iconCode from "../assets/code.png";
import linkedIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import Sun from "../assets/sun.png";
import ToolTip from "./ToolTip";

function StickyBottomNavigationBar() {
  return (
    <DynamicDock gapX={4} baseWidth={32}>
      <div className="dock-item flex items-center justify-center relative group">
        <ToolTip label="Home" />

        <a
          href="#"
          className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <img src={iconHouse} alt="Home" className="w-4 h-4" />
        </a>
      </div>
      <div className="dock-item flex items-center justify-center relative group">
        <ToolTip label="Projects" />
        <a
          href="#"
          className="w-12 h-12 rounded-full  hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <img src={iconCode} alt="Code" className="w-4 h-4" />
        </a>
      </div>
      <div className="w-[2px] h-2 bg-gray-300"></div>
      <div className="dock-item flex items-center justify-center relative group">
        <ToolTip label="Github" />
        <a
          href="https://github.com/wanziee"
          className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <img src={iconGithub} alt="GitHub" className="w-4 h-4" />
        </a>
      </div>
      <div className="dock-item flex items-center justify-center relative group">
        <ToolTip label="Linkedin" />
        <a
          href="#"
          className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <img src={linkedIn} alt="Linkedin" className="w-4.5 h-4.5" />
        </a>
      </div>
      <div className="dock-item flex items-center justify-center relative group">
        <ToolTip label="Instagram" />
        <a
          href="https://www.instagram.com/zzzzie_e/"
          className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <img src={Instagram} alt="Instagram" className="w-4 h-4" />
        </a>
      </div>
      <div className="w-[2px] h-2 bg-gray-300"></div>
      <div className="dock-item flex items-center justify-center relative group">
        <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
          <img src={Sun} alt="Instagram" className="w-5 h-5 scale-x-[-1]" />
        </button>
      </div>
    </DynamicDock>
  );
}

export default StickyBottomNavigationBar;
