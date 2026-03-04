export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                <p className="text-muted">
                    Welcome to SunSar Menu Planner (accessible via wte.sunitmathur.com). This application is a private tool
                    designed for individual meal planning. This Privacy Policy explains how we handle your data.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Data Collection</h2>
                <p className="text-muted mb-4">
                    We collect and use information to provide, maintain, and improve our services. This includes:
                </p>
                <ul className="list-disc ml-6 text-muted space-y-2">
                    <li><strong>Authentication Data:</strong> When you sign in with Google, we collect your name, email address, and profile picture. This is used solely to identify you and manage your account within the app.</li>
                    <li><strong>User Content:</strong> We store the recipes you add, the meal plans you create, and your shopping lists.</li>
                    <li><strong>Gemini API Usage:</strong> If you use the meal generation features, relevant preferences may be sent to the Gemini API to generate recipes. No personally identifiable information is sent with these requests.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Data Storage</h2>
                <p className="text-muted">
                    Your data is stored securely using Supabase (PostgreSQL). We do not sell your personal information to third parties.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Google OAuth</h2>
                <p className="text-muted">
                    SunSar Menu Planner's use and transfer to any other app of information received from Google APIs will adhere to
                    <a href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                        Google API Service User Data Policy
                    </a>, including the Limited Use requirements.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <p className="text-muted">
                    If you have any questions about this Privacy Policy, you can reach out to Sunit Mathur.
                </p>
            </section>

            <footer className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted italic">Last updated: March 4, 2026</p>
            </footer>
        </div>
    );
}
