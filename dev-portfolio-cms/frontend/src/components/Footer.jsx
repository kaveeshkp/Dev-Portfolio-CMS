function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Kaveesha. All rights reserved.</p>

        <div className="flex gap-4">
          <a
            href="https://github.com/kaveeshkp"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kaveesha"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition"
          >
            LinkedIn
          </a>
          <a href="mailto:kaveeshabandara1812@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
