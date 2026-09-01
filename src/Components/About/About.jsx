const About = () => {
  return (
    <div className="w-full flex items-center">
      <div className="w-full lg:w-[90%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-6 pt-5 pb-20">
        {/* Title */}
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="text-4xl font-serif font-semibold">About Me</h2>
          <span className="w-16 h-[4px] bg-primaryText rounded"></span>
          <span className="w-8 h-[4px] bg-primaryBorder rounded"></span>
        </div>

        {/* Description */}
        <p className="text-lg mb-6">
          I'm a passionate{" "}
          <strong>AI Enthusiast & Full-Stack Software Engineer</strong> who
          enjoys building <strong>modern, scalable applications</strong>. I
          focus on creating <strong>clean architectures</strong> and delivering
          <strong> seamless user experiences</strong> with reliable performance.
        </p>
      </div>
    </div>
  );
};

export default About;
