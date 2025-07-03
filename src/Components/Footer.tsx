const Footer = () => {
  return (
    <footer className="footer footer-horizontal rounded-xl shadow-2xl footer-center bg-primary text-primary-content p-10">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="inline-block fill-current"
        >
          <path d="M22.672 15.226l-2.432.811..."></path>
        </svg>
        <p className="font-bold text-lg">
          📚 Minimal Library Management System
          <br />
          Empowering readers with easy book access since 2025
        </p>
        <p>Copyright © {new Date().getFullYear()} – All rights reserved</p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/yourusername/library-management"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12..."></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239..."></path>
            </svg>
          </a>
          <a
            href="mailto:support@librarysystem.com"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M1.5 4.5h21v15h-21v-15z..."></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
