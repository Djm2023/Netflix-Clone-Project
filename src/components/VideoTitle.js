import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="ml-12 mt-32">
      <h1 className="text-3xl font-semibold pb-5">{title}</h1>
      <p className="text-lg w-1/2 leading-8 pb-6">{overview}</p>
      <div>
        <button className="px-8 py-2 mr-4 bg-white rounded"><i className="fa-solid fa-play pr-2"></i>Play</button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded"><i className="fa-solid fa-info pr-2"></i>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
