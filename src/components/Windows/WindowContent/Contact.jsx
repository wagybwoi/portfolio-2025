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
    <div className="p-8 text-3xl">
      <h3 className="mb-7 font-bold">
        ahmedsamywageh<span className="text-5xl">@</span>gmail.com
      </h3>
      <div className="flex">
        <button className="button w-[200px] p-0 px-2 py-2" onClick={copy}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <a
          className="button p-0 px-2 py-2"
          href="mailto:ahmedsamywageh@gmail.com"
        >
          Reach out
        </a>
      </div>
    </div>
  );
};

export default Contact;
