import React from "react";
import "./TermsAndService.css";

export default function TermsAndService() {
  const termsData = [
    {
      title: "1. Acceptance of Terms",
      description: (
        <>
          By accessing or using our platform, you agree to our Terms of Service and{" "}
          <a href="https://merchant.razorpay.com/policy/Qn3aeatDYPYR4X/privacy" className="terms-link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. If you do not agree, do not use our services.
        </>
      ),
    },
    {
      title: "2. Use of Service",
      description: "Use our platform only for lawful purposes. Keep your account information secure.",
    },
    {
      title: "3. User Content",
      description: "You own your content but grant us the right to use and distribute it as needed.",
    },
    {
      title: "4. Intellectual Property",
      description: "All platform content is owned by us or our licensors. Don’t use it without permission.",
    },
    {
      title: "5. Termination",
      description: "We may suspend or terminate your access without notice if you violate our terms.",
    },
    {
      title: "6. Limitation of Liability",
      description: "The platform is provided 'as is'. We're not liable for any damages from your use.",
    },
    {
      title: "7. Changes to Terms",
      description: "We may update the Terms. Continued use means you accept the changes.",
    },
    {
      title: "8. Contact Us",
      description: (
        <>
          Reach us anytime at{" "}
          <a href="mailto:agchandan73@gmail.com" className="terms-link">agchandan73@gmail.com</a>.
        </>
      ),
    },
  ];

  return (
    <div className="terms-bg">
      <div className="terms-container p-6 md:p-10 max-w-4xl w-full rounded-xl shadow-lg bg-white">
        <h1 className="terms-title mb-4">Terms of Service</h1>
        <p className="terms-date mb-6">Last updated: June 24, 2025</p>
        <table className="terms-table w-full text-left">
          <thead>
            <tr>
              <th className="p-3 text-sm font-semibold text-gray-700">Section</th>
              <th className="p-3 text-sm font-semibold text-gray-700">Details</th>
            </tr>
          </thead>
          <tbody>
            {termsData.map((term, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 font-medium text-[#06b6d4]">{term.title}</td>
                <td className="p-3 text-gray-800">{term.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
