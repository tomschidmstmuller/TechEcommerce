import React from "react";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10 py-4 border-t border-jp-borderLight">
      <div className="flex items-center gap-4">
        <p className="py-2 text-center text-xs text-jp-light">
          &copy; 2025 QuickCart. All Rights Reserved.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" className="text-[10px] font-jp tracking-jp-wide text-jp-light hover:text-jp-navy transition-colors">
          ヘルプ
        </a>
        <span className="w-px h-3 bg-jp-border" />
        <a href="#" className="text-[10px] font-jp tracking-jp-wide text-jp-light hover:text-jp-navy transition-colors">
          サポート
        </a>
      </div>
    </div>
  );
};

export default Footer;
