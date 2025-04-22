import React, { useEffect, useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("ahmedsamywageh@gmail.com");
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  }, [copied]);

  return (
    <div className="p-4 md:p-8 min-w-[351px] md:max-w-auto">
      <h3 className="mb-4 md:mb-7 font-bold text-xl md:text-3xl text-center">
        ahmedsamywageh<span className="text-3xl translate-y-[100px]">@</span>
        gmail.com
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          className="button w-[170px] text-center p-0 px-2 py-2"
          onClick={copy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <a
          className="button w-[170px] text-center p-0 px-2 py-2"
          href="mailto:ahmedsamywageh@gmail.com"
        >
          Reach out
        </a>
      </div>
    </div>
  );
};

export default Contact;
