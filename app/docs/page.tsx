import Link from 'next/link';
import React from 'react';

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-12 text-zinc-300">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[250px_1fr] gap-12">
                {/* Sidebar Navigation */}
                <aside className="hidden md:block sticky top-24 h-[calc(100vh-100px)] overflow-y-auto border-r border-white/10 pr-6">
                    <h5 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Documentation</h5>
                    <nav className="space-y-1">
                        <a href="#introduction" className="block py-2 hover:text-purple-400 transition-colors">Introduction</a>
                        <a href="#getting-started" className="block py-2 hover:text-purple-400 transition-colors">Getting Started</a>
                        <a href="#basic-syntax" className="block py-2 hover:text-purple-400 transition-colors">Basic Syntax</a>
                        <a href="#relationships" className="block py-2 hover:text-purple-400 transition-colors">Relationships</a>
                        <a href="#styling" className="block py-2 hover:text-purple-400 transition-colors">Styling</a>
                        <a href="#advanced" className="block py-2 hover:text-purple-400 transition-colors">Advanced Features</a>
                        <a href="#patterns" className="block py-2 hover:text-purple-400 transition-colors">Common Patterns</a>
                        <a href="#export" className="block py-2 hover:text-purple-400 transition-colors">Exporting</a>
                        <a href="#troubleshooting" className="block py-2 hover:text-purple-400 transition-colors">Troubleshooting</a>
                        <a href="#best-practices" className="block py-2 hover:text-purple-400 transition-colors">Best Practices</a>
                    </nav>
                </aside>

                {/* Content */}
                <div className="space-y-12">
                    {/* Header */}
                    <div className="border-b border-white/10 pb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Documentation</h1>
                        <p className="text-xl text-zinc-400">Everything you need to know to master NeuralUML Studio.</p>
                    </div>

                    {/* Introduction */}
                    <section id="introduction" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-purple-500">#</span> Introduction
                        </h2>
                        <p className="mb-4 leading-relaxed">
                            NeuralUML Studio is a state-of-the-art diagramming tool that leverages the power of PlantUML to turn text descriptions into professional diagrams. Unlike drag-and-drop tools, our text-first approach allows for rapid iteration, easy version control, and clearer architectural thinking.
                        </p>
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-4">
                            <p className="text-blue-300 text-sm">
                                💡 <strong>Pro Tip:</strong> PlantUML is an open-source project with extensive documentation. NeuralUML Studio supports the full PlantUML syntax.
                            </p>
                        </div>
                    </section>

                    {/* Getting Started */}
                    <section id="getting-started" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-blue-500">#</span> Getting Started
                        </h2>
                        <p className="mb-4 leading-relaxed">
                            To create your first diagram, navigate to the <Link href="/editor" className="text-purple-400 hover:underline">Editor</Link>. You will see a text area on the left and a preview pane on the right.
                        </p>
                        <ol className="list-decimal pl-5 space-y-2 mb-4">
                            <li>Clear the default code.</li>
                            <li>Type <code className="bg-white/10 px-2 py-1 rounded text-purple-400">@startuml</code> to begin your diagram.</li>
                            <li>Add your diagram logic (see syntax below).</li>
                            <li>Type <code className="bg-white/10 px-2 py-1 rounded text-purple-400">@enduml</code> to close the diagram.</li>
                        </ol>
                        <div className="bg-[#111] p-4 rounded-lg border border-white/10 font-mono text-sm">
                            <span className="text-blue-400">@startuml</span><br />
                            <span className="text-yellow-400">Alice</span> -{'>'}  <span className="text-yellow-400">Bob</span> : Hello World<br />
                            <span className="text-blue-400">@enduml</span>
                        </div>
                    </section>

                    {/* Basic Syntax */}
                    <section id="basic-syntax" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-green-500">#</span> Basic Syntax
                        </h2>
                        <p className="mb-4">
                            NeuralUML supports all standard PlantUML syntax. Here are the building blocks:
                        </p>
                        <div className="grid gap-4">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                                <h3 className="font-bold text-white mb-2">Defining Participants</h3>
                                <code className="block bg-black/50 p-3 rounded mb-2 text-sm text-green-400">
                                    class User<br />
                                    actor Admin<br />
                                    database PostgreSQL<br />
                                    component "Backend Service" as BS
                                </code>
                                <p className="text-sm text-zinc-400">Use keywords like <code className="bg-white/10 px-1 rounded">class</code>, <code className="bg-white/10 px-1 rounded">actor</code>, <code className="bg-white/10 px-1 rounded">database</code>, <code className="bg-white/10 px-1 rounded">component</code> to define elements.</p>
                            </div>

                            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                                <h3 className="font-bold text-white mb-2">Packages & Grouping</h3>
                                <code className="block bg-black/50 p-3 rounded mb-2 text-sm text-green-400">
                                    package "Frontend" {'{'}<br />
                                    {'  '}class UI<br />
                                    {'}'}<br /><br />
                                    node "Server" {'{'}<br />
                                    {'  '}class API<br />
                                    {'}'}
                                </code>
                                <p className="text-sm text-zinc-400">Group related elements using <code className="bg-white/10 px-1 rounded">package</code>, <code className="bg-white/10 px-1 rounded">node</code>, or <code className="bg-white/10 px-1 rounded">folder</code>.</p>
                            </div>
                        </div>
                    </section>

                    {/* Relationships */}
                    <section id="relationships" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-orange-500">#</span> Relationships
                        </h2>
                        <p className="mb-4">
                            Connect elements using arrows. The length and style of the arrow can affect the layout.
                        </p>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-2 text-zinc-400 font-medium">Syntax</th>
                                        <th className="text-left py-2 text-zinc-400 font-medium">Meaning</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b border-white/5">
                                        <td className="py-2"><code className="bg-white/10 px-2 py-1 rounded text-pink-400">--{'>'}</code></td>
                                        <td className="py-2">Solid line (Association/Dependency)</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-2"><code className="bg-white/10 px-2 py-1 rounded text-pink-400">..{'>'}</code></td>
                                        <td className="py-2">Dotted line (Weak dependency)</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-2"><code className="bg-white/10 px-2 py-1 rounded text-pink-400">--{'>'}{'>'}</code></td>
                                        <td className="py-2">Inheritance (extends)</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-2"><code className="bg-white/10 px-2 py-1 rounded text-pink-400">--o</code></td>
                                        <td className="py-2">Aggregation</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2"><code className="bg-white/10 px-2 py-1 rounded text-pink-400">--*</code></td>
                                        <td className="py-2">Composition</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-[#111] mt-4 p-4 rounded-lg border border-white/10 font-mono text-sm">
                            <span className="text-green-600">// Example</span><br />
                            User --{'>'} Service : HTTP Request<br />
                            Service --{'>'} Database : SQL Query<br />
                            Admin --|{'>'} User : extends
                        </div>
                    </section>

                    {/* Styling */}
                    <section id="styling" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-pink-500">#</span> Styling
                        </h2>
                        <p className="mb-4">
                            Customize the appearance of your diagrams using skinparam commands.
                        </p>
                        <div className="bg-[#111] p-4 rounded-lg border border-white/10 font-mono text-sm mb-4">
                            <span className="text-purple-400">skinparam</span> <span className="text-yellow-400">backgroundColor</span> <span className="text-green-400">#1a1a1a</span><br />
                            <span className="text-purple-400">skinparam</span> <span className="text-yellow-400">classBackgroundColor</span> <span className="text-green-400">#2d2d2d</span><br />
                            <span className="text-purple-400">skinparam</span> <span className="text-yellow-400">classBorderColor</span> <span className="text-green-400">#8b5cf6</span><br />
                            <span className="text-purple-400">skinparam</span> <span className="text-yellow-400">shadowing</span> <span className="text-green-400">false</span>
                        </div>
                        <p className="text-sm text-zinc-400">
                            You can customize colors, fonts, shadows, and more. See the official PlantUML skinparam documentation for all options.
                        </p>
                    </section>

                    {/* Advanced Features */}
                    <section id="advanced" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-cyan-500">#</span> Advanced Features
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg border border-purple-500/30">
                                <h3 className="font-bold text-white mb-2">🎯 Notes & Comments</h3>
                                <code className="block bg-black/50 p-3 rounded text-sm text-green-400">
                                    note right of User : This is a note<br />
                                    ' This is a comment (won't appear)
                                </code>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg border border-blue-500/30">
                                <h3 className="font-bold text-white mb-2">🔄 Sequence Diagrams</h3>
                                <code className="block bg-black/50 p-3 rounded text-sm text-green-400">
                                    Alice -{'>'} Bob: Authentication Request<br />
                                    Bob --{'>'} Alice: Authentication Response
                                </code>
                            </div>
                        </div>
                    </section>

                    {/* Common Patterns */}
                    <section id="patterns" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-yellow-500">#</span> Common Patterns
                        </h2>
                        <p className="mb-4">Ready-to-use templates for common scenarios:</p>
                        <div className="grid gap-4">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                                <h3 className="font-bold text-white mb-2">Microservices Architecture</h3>
                                <code className="block bg-black/50 p-3 rounded text-sm text-green-400 overflow-x-auto">
                                    @startuml<br />
                                    package "API Gateway" {'{'}<br />
                                    {'  '}component Gateway<br />
                                    {'}'}<br />
                                    package "Services" {'{'}<br />
                                    {'  '}component UserService<br />
                                    {'  '}component OrderService<br />
                                    {'}'}<br />
                                    Gateway --{'>'} UserService<br />
                                    Gateway --{'>'} OrderService<br />
                                    @enduml
                                </code>
                            </div>
                        </div>
                    </section>

                    {/* Exporting */}
                    <section id="export" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-red-500">#</span> Exporting
                        </h2>
                        <p className="mb-4">
                            Once you are happy with your diagram, you can share it or save it locally.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-400">1</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Open SVG</p>
                                    <p className="text-sm text-zinc-400">Click the "Open SVG" button in the editor toolbar to open the raw vector image in a new tab.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-400">2</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Save Locally</p>
                                    <p className="text-sm text-zinc-400">Right-click the image and select "Save As" to download it to your computer.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-400">3</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Share the Code</p>
                                    <p className="text-sm text-zinc-400">Copy your PlantUML code and share it with your team. They can paste it into any PlantUML renderer.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Troubleshooting */}
                    <section id="troubleshooting" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-red-500">#</span> Troubleshooting
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                                <h3 className="font-bold text-white mb-2">❌ Diagram not rendering?</h3>
                                <ul className="text-sm text-zinc-300 space-y-1 list-disc pl-5">
                                    <li>Make sure you have <code className="bg-white/10 px-1 rounded">@startuml</code> and <code className="bg-white/10 px-1 rounded">@enduml</code> tags</li>
                                    <li>Check for syntax errors (missing quotes, incorrect arrow syntax)</li>
                                    <li>Try refreshing the page</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                                <h3 className="font-bold text-white mb-2">⚠️ Layout looks messy?</h3>
                                <ul className="text-sm text-zinc-300 space-y-1 list-disc pl-5">
                                    <li>Use longer arrows (<code className="bg-white/10 px-1 rounded">---{'>'}</code> instead of <code className="bg-white/10 px-1 rounded">--{'>'}</code>) to add spacing</li>
                                    <li>Group related elements in packages</li>
                                    <li>Use <code className="bg-white/10 px-1 rounded">left to right direction</code> for horizontal layouts</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section id="best-practices" className="scroll-mt-28">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="text-green-500">#</span> Best Practices
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { tip: "Keep it Simple", desc: "Don't try to show everything in one diagram. Break complex systems into multiple views." },
                                { tip: "Use Meaningful Names", desc: "Choose clear, descriptive names for classes and relationships." },
                                { tip: "Add Comments", desc: "Use comments (') to document your diagram logic for future reference." },
                                { tip: "Version Control", desc: "Store your .puml files in Git alongside your code for easy tracking." },
                                { tip: "Consistent Styling", desc: "Define a standard skinparam set for your team to maintain consistency." },
                                { tip: "Iterate Quickly", desc: "Start with a rough sketch and refine. Text-based diagrams make iteration fast." }
                            ].map((practice, idx) => (
                                <div key={idx} className="p-4 bg-green-900/10 border border-green-500/20 rounded-lg">
                                    <h3 className="font-bold text-green-400 mb-1">✓ {practice.tip}</h3>
                                    <p className="text-sm text-zinc-400">{practice.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/30 text-center">
                        <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Diagramming?</h3>
                        <p className="text-zinc-400 mb-6">Put your knowledge to practice in the live editor.</p>
                        <a
                            href="/editor"
                            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:brightness-110 transition-all"
                        >
                            Open Editor →
                        </a>
                    </div>

                </div>
            </div>
        </main>
    );
}
