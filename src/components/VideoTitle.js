import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <div className="mt-48 ml-12">
      <h1 className="text-3xl font-semibold pb-5">{title}</h1>
      <p className="text-lg w-1/2 leading-8 pb-6">{overview}</p>
      <div>
        <button className="px-8 py-2 mr-4 bg-white text-black rounded hover:opacity-80"><i className="fa-solid fa-play pr-2"></i>Play</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:opacity-75"><i className="fa-solid fa-info pr-2"></i>More Info</button>
      </div>
      </div>
    </div>
  );
};

export default VideoTitle;
