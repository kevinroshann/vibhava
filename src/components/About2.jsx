const AboutSection = () => {
    return (
      <div className="sm:p-6 md:p-10 my-5 md:my-10 lg:my-16 mx-5" id="about">
        <div className="box-border flex flex-col md:flex-row border border-black rounded-[6px] md:rounded-[15px] p-4 sm:p-6 md:p-8 lg:p-12 gap-3 md:gap-5 bg-white">
          <div className="flex flex-col md:items-center justify-center !float-left">
            <p className="text-4xl sm:text-5xl md:text-[100px] lg:text-[130px] ">About</p>
            {/* <p className="text-tedRed text-2xl sm:text-3xl md:text-4xl font-Helvetica font-bold -mt-2 sm:-mt-3">
              VIBHAVA
            </p> */}
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg" style={{fontFamily:"bodys"}}>
          vibhava innovation Summit is a premier technical conclave desined to showcase the ingenuity,technical prowess 454 and innovative spirit of SOE students CUSAT vibhava innovation Summit is a premier technical conclave desined to showcase the ingenuity,technical prowess and innovative spirit of SOE students CUSAT vibhava innovation Summit is a premier technical conclave desined to showcase the ingenuity,technical prowess and innovative spirit of SOE students CUSAT 
          </p>
          <div className="flex flex-col gap-3"></div>
        </div>
      </div>
    );
  };
  
  export default AboutSection;