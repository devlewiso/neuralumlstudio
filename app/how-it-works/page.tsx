import React from 'react';

export default function HowItWorksPage() {
    const steps = [
        {
            step: "01",
            title: "Define",
            desc: "Write your logic using simple, human-readable syntax. NeuralUML supports standard PlantUML.",
            details: "Focus on the 'what', not the 'how'. Describe your classes, actors, and relationships using intuitive text-based commands.",
            color: "text-purple-400",
            bgColor: "bg-purple-500"
        },
        {
            step: "02",
            title: "Process",
            desc: "Our engine analyzes relationships, optimizes layout, and applies your visual theme automatically.",
            details: "The system parses your text, checks for consistency, and calculates the optimal arrangement of elements to minimize crossing lines and maximize readability.",
            color: "text-blue-400",
            bgColor: "bg-blue-500"
        },
        {
            step: "03",
            title: "Visualize",
            desc: "Get an instant, professional diagram ready to share with your team or embed in documentation.",
            details: "Preview in real-time. Export vector-quality SVGs or high-res PNGs. Your diagrams are presentation-ready from the moment they appear.",
            color: "text-green-400",
            bgColor: "bg-green-500"
        }
    ];

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <span className="text-purple-500 font-medium tracking-wider text-sm uppercase">Workflow</span>
                    <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-white">
                        How it <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Works</span>
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-xl">
                        From simple text to complex visualization in three simple steps.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line for mobile */}
                    <div className="md:hidden absolute top-0 left-4 w-0.5 h-full bg-white/10"></div>

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-green-900/50"></div>

                    <div className="grid md:grid-cols-3 gap-16 md:gap-8">
                        {steps.map((item, idx) => (
                            <div key={idx} className="relative pl-12 md:pl-0 md:pt-16 group">
                                {/* Dot */}
                                <div className={`w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-white/20 absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 md:top-[44px] flex items-center justify-center z-10 group-hover:border-white/50 transition-colors`}>
                                    <div className={`w-3 h-3 rounded-full ${item.bgColor}`}></div>
                                </div>

                                {/* Step Number */}
                                <span className={`text-8xl font-bold opacity-5 ${item.color} absolute -top-10 right-0 md:right-1/2 md:translate-x-1/2 md:-top-4 select-none`}>
                                    {item.step}
                                </span>

                                <div className="relative z-10 md:text-center md:px-4">
                                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">{item.title}</h3>
                                    <p className="text-zinc-300 text-lg mb-4 leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {item.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Demo Section */}
                <div className="mt-32 mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See It In Action</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Watch how a simple text description transforms into a professional diagram instantly.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-[#111] p-6 rounded-xl border border-white/10">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-xs text-zinc-500 font-mono">input.puml</span>
                            </div>
                            <pre className="text-sm text-zinc-300 font-mono overflow-x-auto">
                                {`@startuml
class User {
  +name
  +email
  +login()
}

class Service {
  +processRequest()
}

User --> Service : uses
@enduml`}
                            </pre>
                        </div>

                        <div className="flex items-center justify-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl border border-white/10">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <p className="text-white font-semibold">Instant Rendering</p>
                                <p className="text-zinc-400 text-sm mt-2">Professional UML diagram appears in real-time</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Why Text-Based Diagramming?</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "⚡",
                                title: "Speed",
                                desc: "Type faster than you can drag-and-drop. No pixel-perfect positioning needed."
                            },
                            {
                                icon: "🔄",
                                title: "Version Control",
                                desc: "Track changes with Git. See exactly what changed in your architecture over time."
                            },
                            {
                                icon: "🤝",
                                title: "Collaboration",
                                desc: "Share plain text. No proprietary formats. Works with any text editor."
                            },
                            {
                                icon: "♻️",
                                title: "Reusability",
                                desc: "Copy, paste, and modify. Build a library of common patterns and templates."
                            }
                        ].map((benefit, idx) => (
                            <div key={idx} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all">
                                <div className="text-4xl mb-3">{benefit.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-zinc-400 text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Traditional Tools vs NeuralUML</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-6 text-zinc-400 font-medium">Feature</th>
                                    <th className="text-center py-4 px-6 text-zinc-400 font-medium">Traditional Tools</th>
                                    <th className="text-center py-4 px-6 text-purple-400 font-medium">NeuralUML Studio</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                {[
                                    { feature: "Learning Curve", traditional: "Steep UI", neural: "Simple syntax" },
                                    { feature: "Speed", traditional: "Slow (drag & drop)", neural: "Fast (type & render)" },
                                    { feature: "Version Control", traditional: "Binary files", neural: "Plain text (Git-friendly)" },
                                    { feature: "Collaboration", traditional: "Proprietary formats", neural: "Universal text format" },
                                    { feature: "Consistency", traditional: "Manual alignment", neural: "Auto-layout" },
                                    { feature: "Cost", traditional: "Often paid", neural: "Free & Open" }
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 font-medium text-white">{row.feature}</td>
                                        <td className="py-4 px-6 text-center text-zinc-500">{row.traditional}</td>
                                        <td className="py-4 px-6 text-center text-purple-400 font-medium">{row.neural}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </main>
    );
}
