import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 md:px-10 py-12">
        <h1 className="text-3xl font-bold text-primary mb-6">Terms and Conditions</h1>
        
        <p className="mb-4 text-gray-700">
          Welcome to Lawn Shaper! By accessing or using our platform, you agree to be bound by the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mt-6 mb-2">1. Use of the Platform</h2>
        <p className="text-gray-700 mb-4">
          You agree to use Lawn Shaper only for lawful purposes. You must not misuse the platform or interfere with its normal operation.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mt-6 mb-2">2. User Content</h2>
        <p className="text-gray-700 mb-4">
          When you submit tips, feedback, or any content, you grant us permission to display and distribute it within the platform. You are responsible for the accuracy and legality of your submissions.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mt-6 mb-2">3. Account Responsibility</h2>
        <p className="text-gray-700 mb-4">
          You are responsible for maintaining the confidentiality of your account credentials. Any activity that occurs under your account is your responsibility.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mt-6 mb-2">4. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content on this site, including logos, text, graphics, and software, is the property of Lawn Shaper or its contributors and is protected by copyright laws.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mt-6 mb-2">5. Termination</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that violates these terms.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mt-6 mb-2">6. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          Lawn Shaper may update these terms at any time. It is your responsibility to review the terms periodically for changes.
        </p>

        <h2 className="text-xl font-semibold text-green-700 mt-6 mb-2">7. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms and Conditions, feel free to contact us at <a href="mailto:support@lawnshaper.com" className="text-primary underline">support@lawnshaper.com</a>.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
