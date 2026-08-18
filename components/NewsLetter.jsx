import React from "react";

const NewsLetter = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center pt-10 pb-16 overflow-hidden">
      <div className="absolute inset-0 jp-grid-pattern opacity-50" />

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-8 h-px bg-jp-accent" />
          <span className="font-jp text-[10px] tracking-jp-wide text-jp-light uppercase">
            ニュースレター
          </span>
          <span className="w-8 h-px bg-jp-accent" />
        </div>

        <h2 className="md:text-3xl text-xl font-medium text-jp-navy tracking-tight">
          Subscribe now & get 20% off
        </h2>
        <p className="text-sm text-jp-muted mt-2 pb-8 max-w-md">
          Stay updated with the latest in premium electronics and exclusive deals.
        </p>

        <div className="flex items-center max-w-lg w-full mx-auto">
          <input
            className="flex-1 px-5 py-3.5 bg-white border border-jp-border rounded-l-lg outline-none text-sm text-jp-navy placeholder:text-jp-light focus:border-jp-accent focus:ring-2 focus:ring-jp-accent/10 transition-all duration-200"
            type="email"
            placeholder="Enter your email"
          />
          <button className="jp-btn-primary rounded-l-none border-l-0 h-[46px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
