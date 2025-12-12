import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12 px-6 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">NeuralUML Studio</span>
                        <span className="text-zinc-500 text-sm">© 2024</span>
                    </div>
                    <p className="text-xs text-zinc-500">
                        Developed by <a href="https://neuralcodelab.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NeuralCodeLab</a>
                    </p>
                </div>
                <div className="flex gap-6 text-sm text-zinc-500">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-white transition-colors">X</Link>
                    <a href="https://github.com/devlewiso" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
