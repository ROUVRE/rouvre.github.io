const ContactLinks = () => {
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  const href = isMobile
    ? "mailto:reynoalfarez04@gmail.com"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=reynoalfarez04@gmail.com";

  return (
    <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap text-sm items-center">
      <a
        href="https://linkedin.com/in/reynoalfarez"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:underline transition-colors duration-200 font-bold font-harmonia"
      >
        LinkedIn
      </a>
      <span className="text-gray-300 select-none">|</span>
      <a
        href="https://github.com/ROUVRE"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:underline transition-colors duration-200 font-bold font-harmonia"
      >
        GitHub
      </a>
      <span className="text-gray-300 select-none">|</span>
      <a
        href="https://twitter.com/ROUVRE04"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:underline transition-colors duration-200 font-bold font-harmonia"
      >
        Twitter
      </a>
      <span className="text-gray-300 select-none">|</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:underline transition-colors duration-200 font-bold font-harmonia"
      >
        Contact Me!
      </a>
    </div>
  );
};

export default ContactLinks;
