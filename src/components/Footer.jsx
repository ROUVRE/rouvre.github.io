const Footer = () => {
  return (
    <>
      <footer className="font-harmonia text-center pt-8 sm:pt-10 border-t border-red-500">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} reynoalfarez.github.io
        </p>
      </footer>
    </>
  );
};

export default Footer;
