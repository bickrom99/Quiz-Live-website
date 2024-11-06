const HeroSection = () => {
    return (
      <div className="relative flex justify-center items-center h-[90vh] text-white mt-10" >
        {/* Video Background */}
        <video className="absolute top-0 left-0 h-full w-full object-cover z-[-2]" autoPlay loop muted>
          <source src="/public/images/header-section video.mp4" type="video/mp4" />
        </video>
  
        {/* Backgound overly Dark Color Overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 z-[-1]" />

  
        {/* Text Content */}
        <div className="relative z-1">
          <h1 className="text-center font-bold text-4xl m-0">Welcome to My Website</h1>
          <p className="text-center text-2xl pt-2">Your journey to amazing products begins here</p>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  