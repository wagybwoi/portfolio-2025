import React, { useState, useEffect } from "react";
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
  { name: "Boidlings", video: boidlingz },
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
  const [loadedVideos, setLoadedVideos] = useState({});

  // Preload all videos when component mounts
  useEffect(() => {
    experiments.forEach((experiment, index) => {
      if (experiment.video) {
        const videoElement = document.createElement("video");
        videoElement.src = experiment.video;
        videoElement.preload = "auto";
        videoElement.muted = true;
        videoElement.onloadeddata = () => {
          setLoadedVideos((prev) => ({
            ...prev,
            [index]: true,
          }));
        };
        videoElement.load();
      }
    });
  }, []);

  return (
    <div className="p-3 flex flex-col text-xl xs:text-3xl xs:w-[450px] max-w-[450px] mx-auto">
      <div className="flex justify-center items-center mb-3">
        <div className="w-full flex items-center justify-center mx-auto">
          <div className="flex items-center justify-between border-[4px] rounded-[5px] pl-2 select-none bg-blue w-full mr-3 text-overflow-ellipsis">
            {experiments[experimentIndex].name}
          </div>
          <div className="flex items-center justify-between gap-2">
            <button
              className="border-[4px] rounded-[5px] pl-2 pr-3 font-bold cursor-pointer bg-blue xs:hover:bg-white xs:hover:text-blue xs:hover:border-white "
              onClick={() => {
                setExperimentIndex(
                  experimentIndex - 1 < 0
                    ? experiments.length - 1
                    : experimentIndex - 1
                );
              }}
            >
              &lt;
            </button>
            <button
              className="border-[4px] rounded-[5px] pl-3 pr-2 font-bold cursor-pointer bg-blue xs:hover:bg-white xs:hover:text-blue xs:hover:border-white "
              onClick={() => {
                setExperimentIndex(
                  experimentIndex + 1 < experiments.length
                    ? experimentIndex + 1
                    : 0
                );
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-0 pb-[100%] border-[4px] border-white relative">
        {experiments[experimentIndex]?.video ? (
          <>
            {!loadedVideos[experimentIndex] && (
              <div className="absolute inset-0 flex items-center justify-center bg-blue bg-opacity-50">
                <span className="text-white">Loading...</span>
              </div>
            )}
            <video
              src={experiments[experimentIndex]?.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover absolute inset-0"
            />
          </>
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
