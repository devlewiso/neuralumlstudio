import React from 'react';

export default function FeaturesPage() {
    const features = [
        {
            title: "AI-Powered Parsing",
            description: "Our neural engine understands context, suggesting relationships and fixing syntax errors in real-time.",
            icon: (
                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Live Visualization",
            description: "See your diagrams evolve instantly as you type. Zero latency rendering pipeline.",
            icon: (
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        },
        {
            title: "Smart Export",
            description: "Export to high-fidelity SVG, PNG, or PDF. Ready for your technical documentation.",
            icon: (
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
            )
        }
    ];

    const diagramTypes = [
        { name: "Sequence Diagram", desc: "Model interactions and time sequences between objects.", color: "from-pink-500 to-rose-500" },
        { name: "Class Diagram", desc: "Visualize static system structure and relationships.", color: "from-purple-500 to-indigo-500" },
        { name: "Use Case Diagram", desc: "Capture functional requirements and user interactions.", color: "from-blue-500 to-cyan-500" },
        { name: "Activity Diagram", desc: "Illustrate workflows, business processes, and logic.", color: "from-teal-500 to-emerald-500" },
        { name: "Component Diagram", desc: "Show how system components are wired together.", color: "from-emerald-500 to-green-500" },
        { name: "State Diagram", desc: "Represent state transitions and event-driven behavior.", color: "from-orange-500 to-amber-500" },
        { name: "Object Diagram", desc: "Snapshots of instances and their relationships at a point in time.", color: "from-red-500 to-orange-500" },
        { name: "Deployment Diagram", desc: "Map software artifacts to hardware nodes.", color: "from-indigo-500 to-blue-500" },
    ];

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Features</span>
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-xl">
                        Everything you need to create professional architectural diagrams at current speed of thought.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-300">
                            <div className="w-16 h-16 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Supported Diagrams Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Supported Diagrams</h2>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {diagramTypes.map((type, idx) => (
                            <div key={idx} className="group relative p-6 rounded-xl bg-[#111] border border-white/5 overflow-hidden hover:border-white/20 transition-all cursor-default">
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${type.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{type.name}</h3>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors relative z-10">
                                    {type.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Advanced Features */}
                <div className="mb-32">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Advanced Capabilities</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Syntax Highlighting",
                                desc: "Color-coded editor makes it easy to spot errors and understand structure at a glance.",
                                icon: "🎨"
                            },
                            {
                                title: "Auto-Layout Engine",
                                desc: "Intelligent positioning algorithms ensure your diagrams are always clean and readable.",
                                icon: "🧩"
                            },
                            {
                                title: "Theme Customization",
                                desc: "Apply custom color schemes and styling to match your brand or documentation style.",
                                icon: "🎭"
                            },
                            {
                                title: "Keyboard Shortcuts",
                                desc: "Power user features for rapid diagram creation without touching the mouse.",
                                icon: "⌨️"
                            },
                            {
                                title: "Multi-Format Export",
                                desc: "Download as SVG for scalability, PNG for presentations, or PDF for documentation.",
                                icon: "📦"
                            },
                            {
                                title: "Browser-Based",
                                desc: "No installation required. Works on any device with a modern web browser.",
                                icon: "🌐"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-4 p-6 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl border border-white/10 hover:border-purple-500/30 transition-all group">
                                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{feature.title}</h3>
                                    <p className="text-zinc-400">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Use Cases */}
                <div className="mb-32">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Perfect For</h2>
                    <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
                        Whether you're a solo developer or part of a large team, NeuralUML Studio adapts to your workflow.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                role: "Software Architects",
                                tasks: ["System design", "API documentation", "Architecture reviews"],
                                gradient: "from-purple-500/20 to-pink-500/20"
                            },
                            {
                                role: "Developers",
                                tasks: ["Code documentation", "Feature planning", "Technical specs"],
                                gradient: "from-blue-500/20 to-cyan-500/20"
                            },
                            {
                                role: "Technical Writers",
                                tasks: ["User guides", "Process flows", "System overviews"],
                                gradient: "from-green-500/20 to-emerald-500/20"
                            }
                        ].map((useCase, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl bg-gradient-to-br ${useCase.gradient} border border-white/10`}>
                                <h3 className="text-2xl font-bold text-white mb-4">{useCase.role}</h3>
                                <ul className="space-y-2">
                                    {useCase.tasks.map((task, taskIdx) => (
                                        <li key={taskIdx} className="flex items-center gap-2 text-zinc-300">
                                            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Specs */}
                <div className="mb-32">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Technical Specifications</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Rendering Speed", value: "< 100ms", icon: "⚡" },
                            { label: "Supported Formats", value: "SVG, PNG", icon: "📄" },
                            { label: "Browser Support", value: "All Modern", icon: "🌍" },
                            { label: "Max Diagram Size", value: "Unlimited", icon: "∞" }
                        ].map((spec, idx) => (
                            <div key={idx} className="text-center p-6 bg-black/30 rounded-xl border border-white/10">
                                <div className="text-4xl mb-3">{spec.icon}</div>
                                <div className="text-3xl font-bold text-purple-400 mb-2">{spec.value}</div>
                                <div className="text-sm text-zinc-500">{spec.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center py-16 px-6 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Workflow?</h2>
                    <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Join thousands of developers and architects who are creating better diagrams, faster.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/editor"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:brightness-110 transition-all shadow-lg shadow-purple-900/20"
                        >
                            Start Creating Now
                        </a>
                        <a
                            href="/docs"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20"
                        >
                            Read Documentation
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
}
