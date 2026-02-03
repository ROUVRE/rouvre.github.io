import ContactLinks from "./ContactLinks";
import ProfileImage from "./ProfileImage";

const Header = () => {
  return (
    <header className="mb-12 sm:mb-16">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="text-sm text-gray-400 mb-8 sm:mb-10 font-normal font-harmonia">
            rouvre.github.io
          </div>

          <h1 className="font-point-panther text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5 leading-tight text-red-500">
            Hi, I'm Reyno Alfarez
          </h1>

          <p className="text-base sm:text-lg font-harmonia text-neutral-50 mb-4 sm:mb-5 leading-relaxed max-w-2xl">
            I'm a web developer based in Indonesia, currently on my 4th year as
            a college student majoring in Informatics. I specialize in
            full-stack web development using React, Vue, and Laravel, and I love
            to make bite-sized utility tools that help people do their daily
            tasks. Learning to make video games and aspire to work in the field
            some day.
          </p>

          <ContactLinks />
        </div>

        <ProfileImage />
      </div>
    </header>
  );
};

export default Header;
