'use client';

import { UmlEditor } from "@/components/UmlEditor";
import { useState } from "react";

export default function EditorPage() {
    const [showTemplates, setShowTemplates] = useState(false);
    const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

    const templates = [
        {
            name: "Class Diagram",
            code: `@startuml
class User {
  +id: int
  +name: string
  +email: string
  +login()
  +logout()
}

class Order {
  +id: int
  +total: decimal
  +process()
}

User "1" --> "*" Order : places
@enduml`
        },
        {
            name: "Sequence Diagram",
            code: `@startuml
actor User
participant "Web App" as App
participant "API Server" as API
database "Database" as DB

User -> App: Login Request
App -> API: Authenticate
API -> DB: Query User
DB --> API: User Data
API --> App: Auth Token
App --> User: Success
@enduml`
        },
        {
            name: "Microservices",
            code: `@startuml
package "API Gateway" {
  component Gateway
}

package "Services" {
  component UserService
  component OrderService
  component PaymentService
}

database "User DB" as UDB
database "Order DB" as ODB
database "Payment DB" as PDB

Gateway --> UserService
Gateway --> OrderService
Gateway --> PaymentService

UserService --> UDB
OrderService --> ODB
PaymentService --> PDB
@enduml`
        }
    ];

    const handleCopyTemplate = (templateName: string, code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedTemplate(templateName);
        setTimeout(() => setCopiedTemplate(null), 3000);
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-16">
            {/* Toast Notification */}
            {copiedTemplate && (
                <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-top-5 fade-in duration-300">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 border border-white/20">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">{copiedTemplate} copied to clipboard!</span>
                    </div>
                </div>
            )}

            {/* Top Toolbar */}
            <div className="border-b border-white/10 bg-[#0f0f0f]/80 backdrop-blur-md sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-bold text-white flex items-center gap-2">
                            <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            Live Editor
                        </h1>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                            Ready
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowTemplates(!showTemplates)}
                            className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-all flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                            Templates
                        </button>
                    </div>
                </div>
            </div>

            {/* Templates Panel */}
            {showTemplates && (
                <div className="border-b border-white/10 bg-[#0f0f0f] p-6">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                            Quick Start Templates
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {templates.map((template, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleCopyTemplate(template.name, template.code)}
                                    className="p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 text-left transition-all group"
                                >
                                    <h4 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">{template.name}</h4>
                                    <p className="text-xs text-zinc-500">Click to copy template</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Editor */}
            <UmlEditor />

            {/* Bottom Tips Bar */}
            <div className="border-t border-white/10 bg-[#0f0f0f] py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-6 text-sm text-zinc-500">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>Auto-save enabled</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Need help? Check out the <a href="/docs" className="text-purple-400 hover:underline">documentation</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
