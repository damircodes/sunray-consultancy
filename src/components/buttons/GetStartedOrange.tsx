export default function GetStartedOrange() {
  const openChatBox = () => {
    if ((window as any).Tawk_API) {
      (window as any).Tawk_API.toggle();
    }
  };

  return (
    <div className="bg-[#F1EEE4]">
      <h1
        className="text-md bg-[#FF6B3D] pt-[12px] text-white text-center w-[180px] h-[48px] rounded-md"
        onClick={openChatBox}
      >
        Get started
      </h1>
    </div>
  );
}
