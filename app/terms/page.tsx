import React from 'react';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-12 text-zinc-300">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using NeuralUML Studio ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                        <p>
                            NeuralUML Studio provides users with tools to generate Unified Modeling Language (UML) diagrams from text descriptions. You understand and agree that the Service is provided "AS-IS" and that NeuralUML Studio assumes no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. User Conduct</h2>
                        <p>
                            You agree to use the Service only for purposes that are legal, proper and in accordance with these Terms and any applicable policies or guidelines. You agree that you will not:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Use the Service for any illegal or unauthorized purpose;</li>
                            <li>Interfere with or disrupt the Service or servers or networks connected to the Service;</li>
                            <li>Violate any laws in your jurisdiction (including but not limited to copyright laws).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                        <p>
                            You retain all rights to the diagrams you create using our Service. However, by using the Service, you grant NeuralUML Studio a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such Content in any and all media or distribution methods (now known or later developed) solely for the purpose of providing the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Termination</h2>
                        <p>
                            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Future Updates and Changes</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. As our Service evolves (e.g., adding user accounts, monetization, or new features), these terms will likely change. We will attempt to provide prior notice of any material changes, but it is your responsibility to review these Terms periodically. Continued use of the Service following any changes constitutes acceptance of those changes.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
