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
      <h3 className="mb-4 md:mb-7 font-bold text-xl md:text-3xl text-center !select-all">
        ahmedsamywageh<span className="text-3xl md:text-4xl">@</span>gmail.com
      </h3>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <button className="button w-[170px] text-center" onClick={copy}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <a
          className="button w-[170px] md:w-[220px] text-center"
          href="mailto:ahmedsamywageh@gmail.com"
        >
          Reach out
        </a>
      </div>
    </div>
  );
};

export default Contact;
