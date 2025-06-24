import React from "react";
import "./TermsAndService.css";

export default function TermsAndService() {
  return (
    <div className="terms-bg min-h-screen flex items-center justify-center px-4 py-12">
      <div className="terms-container max-w-3xl w-full p-10 rounded-2xl shadow-xl bg-white">
        <h1 className="terms-title mb-6">Terms of Service</h1>
        <p className="terms-date mb-8 text-gray-500">Last updated: June 24, 2025</p>
        <section className="mb-8">
          <h2 className="terms-section-title">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="terms-section-title">2. Use of Service</h2>
          <p>
            You agree to use the platform only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account and password.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="terms-section-title">3. User Content</h2>
          <p>
            You retain ownership of any content you submit, but grant us a license to use, display, and distribute such content as necessary to provide our services.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="terms-section-title">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and data on this platform are the property of the company or its licensors. You may not use, copy, or distribute any content without permission.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="terms-section-title">5. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the platform at our discretion, without notice, for conduct that we believe violates these terms or is harmful to other users.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="terms-section-title">6. Limitation of Liability</h2>
          <p>
            The platform is provided "as is" and we make no warranties regarding its reliability or accuracy. We are not liable for any damages arising from your use of the platform.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="terms-section-title">7. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of the platform after changes constitutes acceptance of the new terms.
          </p>
        </section>
        <section>
          <h2 className="terms-section-title">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:hello@yourapp.com" className="terms-link">hello@yourapp.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}