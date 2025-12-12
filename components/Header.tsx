import Link from 'next/link';

export function Header() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md text-white">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-white"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="font-bold text-xl tracking-tight">NeuralUML Studio</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <Link href="/features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="/how-it-works" className="hover:text-white transition-colors">How it Works</Link>
                    <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
                    <Link
                        href="/editor"
                        className="bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
