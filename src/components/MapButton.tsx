import React from "react";

function MapButton() {
  const address = "485B+Keilor+Rd,+Niddrie+VIC+3042";

  const handleClick = () => {
    // This URL will open in Google Maps in a new tab or the default GPS app on mobile
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${address}`,
      "_blank"
    );
  };

  return (
    <button
      className="flex hover:bg-[#FFDD21] pr-3 w-56 justify-center whitespace-nowrap text-[#FFDD21] py-2 px-2 text-xl rounded italic bg-black hover:text-black font-thin"
      onClick={handleClick}
    >
      Open in Google Maps
    </button>
  );
}

export default MapButton;
