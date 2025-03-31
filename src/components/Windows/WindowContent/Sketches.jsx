import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import CloseButtonIcon from "../CloseButtonIcon";

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
              Choose a sketch...
              <div className="text-7xl rotate-180 -translate-y-4 leading-0">
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
        <div className="w-full flex justify-center items-center">
          <CloseButtonIcon className="fill-white w-full h-full [&>path]:w-full" />
        </div>
      )}
    </div>
  );
};

export default Sketches;
