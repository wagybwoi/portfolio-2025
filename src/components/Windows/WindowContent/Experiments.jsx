import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import boidlingz from "../../videos/boidlingz.webm";
import yokai from "../../videos/yokai.webm";
import extrudes from "../../videos/extrudes.webm";
import torus from "../../videos/torus.webm";
import cool from "../../videos/cool.webm";
import redOutlines from "../../videos/red-outlines.webm";
import blueOutlines from "../../videos/blue-outlines.webm";
import radical from "../../videos/radical.webm";
import cubeType from "../../videos/cube-type.webm";
import everythingOrNothing from "../../videos/everything-or-nothing.webm";
import refractionBlob from "../../videos/refraction-blob.webm";
import mando from "../../videos/mando.webm";

const experiments = [
  { name: "Boidlingz", video: boidlingz },
  { name: "Yokai", video: yokai },
  { name: "Extrudes", video: extrudes },
  { name: "Torus", video: torus },
  { name: "Cool", video: cool },
  { name: "Radical", video: radical },
  { name: "Red Outlines", video: redOutlines },
  { name: "Blue Outlines", video: blueOutlines },
  { name: "Cube Type", video: cubeType },
  { name: "Everything", video: everythingOrNothing },
  { name: "Refraction", video: refractionBlob },
  { name: "Mando", video: mando },
];

const Experiments = () => {
  const [experimentIndex, setExperimentIndex] = useState(0);

  return (
    <div className="px-3 py-4 flex flex-col gap-4 text-3xl">
      <div className="flex justify-center items-center">
        <label className="mr-2">Sketch:</label>
        <Menu>
          <MenuButton className="flex items-center justify-between border-[5px] rounded-[5px] px-2 w-[320px] cursor-pointer bg-blue data-[open]:border-b-0 data-[open]:rounded-b-none data-[open]:pb-[5px]">
            <>
              {experiments[experimentIndex]?.name || "Choose a sketch..."}
              <div className="text-8xl rotate-180 -translate-y-6 leading-0">
                ^
              </div>
            </>
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="bg-blue relative border-x-[5px] border-b-[5px] rounded-b-[5px] border-white w-[320px] z-11"
          >
            {experiments.map((sketch, index) => (
              <MenuItem
                key={`sketch-${index}`}
                as="button"
                onClick={() => setExperimentIndex(index)}
                className="bg-blue text-white data-[focus]:bg-white data-[focus]:text-blue w-full px-2 text-left cursor-pointer text-3xl"
              >
                {sketch.name}
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
      <div className="w-[500px] h-[500px] border-[5px] border-white">
        {experiments[experimentIndex]?.video ? (
          <video
            src={experiments[experimentIndex]?.video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        ) : experiments[experimentIndex]?.image ? (
          <img
            src={experiments[experimentIndex]?.image}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full flex justify-center items-center text-3xl">
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center select-none">
              &lt;File not found&gt;
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experiments;
