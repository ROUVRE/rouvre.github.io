import ProfileImage from "./ProfileImage";

const Header = () => {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="text-sm text-gray-500 mb-8 sm:mb-10 font-normal">
            rouvre.github.io
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-5 leading-tight text-gray-900">
            Hi, I'm Reyno Alfarez
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-5 leading-relaxed max-w-2xl">
            I'm a web developer based in Indonesia, currently on my 4th year as
            a college student majoring in Informatics. I specialize in
            full-stack web development using React, Vue, and Laravel, and I love
            to make bite-sized utility tools that help people do their daily
            tasks. Learning to make video games and aspire to work in the field
            some day.
          </p>

          <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap text-sm items-center">
            <a
              href="https://linkedin.com/in/reynoalfarez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-colors duration-200"
            >
              LinkedIn
            </a>
            <span className="text-gray-300 select-none">|</span>
            <a
              href="https://github.com/ROUVRE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-colors duration-200"
            >
              GitHub
            </a>
            <span className="text-gray-300 select-none">|</span>
            <a
              href="https://twitter.com/ROUVRE04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-colors duration-200"
            >
              Twitter
            </a>
          </div>
        </div>

        <ProfileImage />
      </div>
    </header>
  );
};

export default Header;
