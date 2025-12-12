'use client';

import React, { useState, useEffect } from 'react';
import plantumlEncoder from 'plantuml-encoder';

const DEFAULT_CODE = `@startuml
allowmixing

skinparam classAttributeIconSize 0
skinparam shadowing false
skinparam packageStyle rectangle
skinparam defaultFontName Arial

title Simple World Economy System Overview

package "Economic Core" {
  
  class Country {
    +name
    +population
    +GDP
    +exportGoods()
    +importGoods()
  }

  class Market {
    +tradeVolume
    +setPrices()
    +matchBuyersSellers()
  }

  class GlobalEconomy {
    +totalGDP
    +regulateTrade()
    +monitorMarkets()
  }
}

package "Financial Infrastructure" {
  class CentralBank {
    +currency
    +interestRate
    +controlInflation()
    +issueCurrency()
  }

  class InternationalBank {
    +lendMoney()
    +supportDevelopingCountries()
  }
}

package "Data Layer" {
  database "World Economic DB" as WorldDB
}

' ------- Relationships --------

Country --> Market : participates in
Market --> GlobalEconomy : reports activity
GlobalEconomy --> Market : sets policies

Country --> CentralBank : depends on
CentralBank --> InternationalBank : coordinates

Country --> WorldDB : stores economic data
Market --> WorldDB : records trade metrics
CentralBank --> WorldDB : updates financial indicators

@enduml`;

export function UmlEditor() {
    const [code, setCode] = useState(DEFAULT_CODE);
    const [imgUrl, setImgUrl] = useState('');
    const [copied, setCopied] = useState(false);

    // Update diagram when code changes
    useEffect(() => {
        try {
            const encoded = plantumlEncoder.encode(code);
            // Using the official PlantUML server for demonstration. 
            // In a production app, you might want your own instance or a different renderer.
            setImgUrl(`https://www.plantuml.com/plantuml/svg/${encoded}`);
        } catch (e) {
            console.error("Failed to encode PlantUML", e);
        }
    }, [code]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleClear = () => {
        if (confirm('Clear all code? This cannot be undone.')) {
            setCode('@startuml\n\n@enduml');
        }
    };

    const handleReset = () => {
        setCode(DEFAULT_CODE);
    };

    return (
        <section className="min-h-screen bg-[#0a0a0a] py-24 px-6 relative" id="editor">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Live Editor</h2>
                    <p className="text-zinc-400">Type your PlantUML code on the left, see the diagram on the right.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 h-[600px] border border-white/10 rounded-2xl overflow-hidden bg-[#0f0f0f] shadow-2xl">
                    {/* Editor Pane */}
                    <div className="flex flex-col border-r border-white/10">
                        <div className="bg-[#1a1a1a] px-4 py-2 border-b border-white/10 flex items-center justify-between">
                            <span className="text-xs font-mono text-zinc-400">source.puml</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleCopy}
                                    className="text-xs bg-white/5 hover:bg-white/10 text-zinc-300 px-2 py-1 rounded transition-colors flex items-center gap-1"
                                    title="Copy code"
                                >
                                    {copied ? (
                                        <>
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Copied
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            Copy
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={handleReset}
                                    className="text-xs bg-white/5 hover:bg-white/10 text-zinc-300 px-2 py-1 rounded transition-colors"
                                    title="Reset to default"
                                >
                                    Reset
                                </button>
                                <button
                                    onClick={handleClear}
                                    className="text-xs bg-white/5 hover:bg-white/10 text-zinc-300 px-2 py-1 rounded transition-colors"
                                    title="Clear all"
                                >
                                    Clear
                                </button>
                                <div className="flex gap-1 ml-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                </div>
                            </div>
                        </div>
                        <textarea
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="flex-1 w-full bg-[#0a0a0a] text-zinc-300 font-mono text-sm p-6 resize-none focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                            spellCheck={false}
                            placeholder="Type your PlantUML code here..."
                        />
                        <div className="bg-[#1a1a1a] px-4 py-2 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                            <span>{code.split('\n').length} lines</span>
                            <span>{code.length} characters</span>
                        </div>
                    </div>

                    {/* Preview Pane */}
                    <div className="flex flex-col bg-[#111]">
                        <div className="bg-[#1a1a1a] px-4 py-2 border-b border-white/10 flex items-center justify-between">
                            <span className="text-xs font-mono text-zinc-400">preview.svg</span>
                            <button
                                onClick={() => window.open(imgUrl, '_blank')}
                                className="text-xs bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 rounded transition-colors flex items-center gap-1"
                            >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Open SVG
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto p-6 flex items-center justify-center bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px]">
                            {imgUrl ? (
                                <img src={imgUrl} alt="UML Diagram" className="max-w-full max-h-full shadow-lg" />
                            ) : (
                                <div className="text-zinc-500 flex items-center gap-2">
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Rendering...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
