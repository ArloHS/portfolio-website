export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-900">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-600 dark:text-slate-400">© 2025 Arlo Steyn • Data Science & MLOps Engineering Portfolio</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ArloHS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arlo-steyn-0a42b92a6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:arlo.steyn@gmail.com"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
