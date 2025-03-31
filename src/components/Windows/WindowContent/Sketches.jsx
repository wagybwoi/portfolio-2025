import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const sketches = [
  { name: "Torus" },
  { name: "Extrudes" },
  { name: "Mando" },
  { name: "Cool" },
];

const Sketches = () => {
  const [sketchIndex, setSketchIndex] = useState(0);

  return (
    <div className="px-3 py-4 flex flex-col gap-4 text-3xl">
      <div className="flex justify-center items-center">
        <label className="mr-2">Sketch:</label>
        <Menu>
          <MenuButton className="flex items-center justify-between border-[5px] rounded-[5px] px-2 w-[320px] cursor-pointer bg-blue data-[open]:border-b-0 data-[open]:rounded-b-none data-[open]:pb-[5px]">
            <>
              {sketches[sketchIndex]?.name || "Choose a sketch..."}
              <div className="text-8xl rotate-180 -translate-y-6 leading-0">
                ^
              </div>
            </>
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="bg-blue relative border-x-[5px] border-b-[5px] rounded-b-[5px] border-white w-[320px]"
          >
            {sketches.map((sketch, index) => (
              <MenuItem
                key={`sketch-${index}`}
                as="button"
                onClick={() => setSketchIndex(index)}
                className="bg-blue text-white data-[focus]:bg-white data-[focus]:text-blue w-full px-2 text-left cursor-pointer text-3xl"
              >
                {sketch.name}
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
      {sketches[sketchIndex]?.src ? (
        <img src={sketches[sketchIndex]?.src} alt="" />
      ) : (
        <div className="relative w-full pb-[100%] flex justify-center items-center text-3xl">
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center select-none">
            &lt;File not found&gt;
          </span>
        </div>
      )}
    </div>
  );
};

export default Sketches;
