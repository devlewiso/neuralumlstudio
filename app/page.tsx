'use client';

import { UmlEditor } from "@/components/UmlEditor";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Full Width Hover Image Section */}
      <div className="relative w-full h-screen overflow-hidden group">
        {/* Background Image with Hover Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)'
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/20 to-[#0a0a0a]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            NeuralUML Studio v1.0
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 drop-shadow-2xl">
            Where Logic Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Visual Intelligence
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed drop-shadow-lg">
            Transform your architectural thoughts into stunning diagrams instantly.
            The next generation of UML visualization is here.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/editor"
              className="flex items-center justify-center h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
            >
              Start Creating
            </a>
            <button className="h-14 px-8 rounded-full bg-black/50 border border-white/20 text-white font-medium text-lg hover:bg-black/70 transition-all backdrop-blur-md">
              View Examples
            </button>
          </div>
        </div>
      </div>

      <UmlEditor />

      {/* Features Section */}
      <section id="features" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
              Intelligent Diagramming
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              More than just a renderer. NeuralUML Studio understands your architecture and helps you visualize it better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Parsing",
                description: "Our neural engine understands context, suggesting relationships and fixing syntax errors in real-time.",
                icon: (
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Live Visualization",
                description: "See your diagrams evolve instantly as you type. Zero latency rendering pipeline.",
                icon: (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              },
              {
                title: "Smart Export",
                description: "Export to high-fidelity SVG, PNG, or PDF. Ready for your technical documentation.",
                icon: (
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                )
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-purple-500 font-medium tracking-wider text-sm uppercase">Workflow</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">From Text to Diagram</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-purple-900/50"></div>

            {[
              {
                step: "01",
                title: "Define.",
                desc: "Write your logic using simple, human-readable syntax. NeuralUML supports standard PlantUML.",
                color: "text-purple-400"
              },
              {
                step: "02",
                title: "Process.",
                desc: "Our engine analyzes relationships, optimizes layout, and applies your visual theme automatically.",
                color: "text-blue-400"
              },
              {
                step: "03",
                title: "Visualize.",
                desc: "Get an instant, professional diagram ready to share with your team or embed in documentation.",
                color: "text-green-400"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative pt-8">
                <div className="w-8 h-8 rounded-full bg-[#050505] border-2 border-white/20 absolute -top-4 left-0 md:left-auto flex items-center justify-center z-10">
                  <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                </div>
                <span className={`text-6xl font-bold opacity-10 ${item.color} absolute top-0 right-0 select-none`}>
                  {item.step}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
