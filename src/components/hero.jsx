
function HeroSection() {
  return (
    <section className="relative h-[600px] w-screen drop-shadow-xl">

      <video  className="absolute top-0 left-0 w-full h-full object-cover "
        autoPlay
        muted
        loop
        playsInline>
        <source src="/assets/video/herovideo1.mp4" type="video/mp4" />
        Il tuo browser non supporta il video.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-teal-600/40 space-y-6">
      
        <h1 className="text-white text-6xl md:text-8xl font-bold font-display mb-4">
          FreeMind
        </h1>
       
        
         <p className="text-3xl font-body text-white ">
  Riconnetti il tuo <span className="text-teal-400 font-bold  ">Io</span>.
</p>
       </div>
     
    </section>
  );
}

export default HeroSection;