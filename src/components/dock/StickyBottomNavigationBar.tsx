import DynamicDock from "./dynamic-dock";
import ThemeToggle from "./ThemeToggle";
import ToolTip from "./ToolTip";

function StickyBottomNavigationBar() {
  return (
    <DynamicDock gapX={4} baseWidth={30}>
      <div className="dock-item flex items-center justify-center relative group">
        <ToolTip label="Home" />

        <a
          href="#"
          className="w-12 h-12 rounded-full hover:bg-accent-dock   flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-house-icon lucide-house size-4 text-primary"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        </a>
      </div>
      <div className="dock-item flex items-center justify-center relative group">
        <ToolTip label="Projects" />
        <a
          href="#"
          className="w-12 h-12 rounded-full  hover:bg-accent-dock  flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-code-icon lucide-code text-primary size-4"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </a>
      </div>
      <div className="w-[2px] h-2 bg-border-dock rounded-full"></div>
      <div className="dock-item flex items-center justify-center relative group">
        <ToolTip label="Github" />
        <a
          href="https://github.com/wanziee"
          className="w-12 h-12 rounded-full hover:bg-accent-dock  flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="size-4.5 text-primary"
            style={{ color: "var(--primary)" }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            ></path>
          </svg>
        </a>
      </div>
      <div className="dock-item flex items-center justify-center relative group">
        <ToolTip label="Linkedin" />
        <a
          href="#"
          className="w-12 h-12 rounded-full hover:bg-accent-dock  flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-primary size-4.5"
          >
            <path
              d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
      <div className="dock-item flex items-center justify-center relative group">
        <ToolTip label="Instagram" />
        <a
          href="https://www.instagram.com/zzzzie_e/"
          className="w-12 h-12 rounded-full hover:bg-accent-dock  flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram-icon lucide-instagram text-primary size-4"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>
      <div className="w-[2px] h-2 bg-border-dock rounded-full"></div>
      <div className="dock-item flex items-center justify-center relative group">
        <ThemeToggle />
      </div>
    </DynamicDock>
  );
}

export default StickyBottomNavigationBar;
