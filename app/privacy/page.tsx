import React from 'react';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-12 text-zinc-300">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. No Data Collection</h2>
                        <p>
                            At NeuralUML Studio, we prioritize your privacy and security. <strong>We do not collect, store, or process any personal information from our users.</strong>
                        </p>
                        <p className="mt-2">
                            Our service is designed to be stateless. All diagram generation processing is performed locally in your browser or via reputable third-party stateless rendering services (such as the official PlantUML server). We do not maintain a database of user profiles, emails, or diagram content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Security</h2>
                        <p>
                            Because we do not collect or store user data, there is no personal data risk associated with using our platform. Your diagrams and intellectual property remain under your control. We utilize industry-standard encryption (HTTPS) for all web traffic to ensure the integrity of the application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Future Changes</h2>
                        <p>
                            Please note that this privacy policy is subject to change. As we add new features or if our operational practices change in the future (e.g., if we introduce user accounts), we will update this policy accordingly to reflect how we handle your data. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy, please contact us at: <a href="mailto:devlewiso@gmail.com?subject=neuralUMLstudio" className="text-purple-400 hover:underline">devlewiso@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
