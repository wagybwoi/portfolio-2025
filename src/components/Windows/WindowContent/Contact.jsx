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
    <div className="p-4 xs:p-8 min-w-[351px] xs:max-w-auto">
      <h3 className="mb-4 xs:mb-7 font-bold text-xl xs:text-[1.75rem] sm:text-3xl text-center !select-all">
        ahmedsamywageh<span className="text-3xl xs:text-4xl">@</span>gmail.com
      </h3>
      <div className="flex flex-col xs:flex-row items-center xs:justify-center gap-4 xs:gap-6 text-[1.25rem] xs:text-[1.75rem]">
        <button
          className="button w-[160px] text-center mx-0! px-0"
          onClick={copy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <a
          className="button w-[160px] xs:w-[200px] text-center mx-0! px-0"
          href="mailto:ahmedsamywageh@gmail.com"
        >
          Reach out
        </a>
      </div>
    </div>
  );
};

export default Contact;
