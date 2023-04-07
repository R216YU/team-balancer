const Footer = () => {
  return (
    <footer className="container mx-auto border-t-2 font-poppins">
      <div className="text-center py-8">
        <ul className="flex gap-4 justify-center mb-4">
          <li>
            <a href="https://github.com/R216YU" className="link">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/r216yu/" className="link">
              Instagram
            </a>
          </li>
        </ul>
        <p>
          <small>&copy;2023 R216YU</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
