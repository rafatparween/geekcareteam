import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Print Hub Solution</title>
        <meta
          name="description"
          content="Privacy policy page for Print Hub Solution - Your trusted IT support partner"
        />
      </Head>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-700 min-h-screen py-12 px-6 md:px-12 pt-16">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-10">
            Privacy Policy
          </h1>
          <div className="space-y-8 text-gray-700">
            <p>
              At Print Hub Solution, we prioritize your privacy and data security. This Privacy Policy explains how we collect, use, and protect your information when you use our IT support services and website. By accessing our services, you agree to the terms outlined below.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Information We Collect
            </h2>
            <p>As an IT support provider, we may collect:</p>
            <ul className="list-disc pl-6">
              <li>Contact information (name, email, phone number, company details)</li>
              <li>Technical data about your devices, systems, and network configurations</li>
              <li>Service request details and support ticket information</li>
              <li>Billing and payment information for our services</li>
              <li>Website usage data through cookies and analytics</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              How We Use Your Information
            </h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6">
              <li>Provide and improve our IT support services</li>
              <li>Troubleshoot and resolve technical issues</li>
              <li>Communicate about service requests and updates</li>
              <li>Process payments and maintain service records</li>
              <li>Enhance our website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Data Security
            </h2>
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6">
              <li>Encryption for sensitive data transmission</li>
              <li>Secure access controls to client systems</li>
              <li>Regular security audits and monitoring</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="mt-2">
              While we take rigorous precautions, no system can be 100% secure against all threats.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Remote Access & Monitoring
            </h2>
            <p>For IT support services, we may:</p>
            <ul className="list-disc pl-6">
              <li>Request temporary remote access to your systems with your consent</li>
              <li>Install monitoring tools to proactively identify issues</li>
              <li>Maintain access logs for security and auditing purposes</li>
            </ul>
            <p className="mt-2">
              All remote sessions are logged and can be terminated by you at any time.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Information Sharing
            </h2>
            <p>We do not sell your data. We may share information with:</p>
            <ul className="list-disc pl-6">
              <li>Third-party vendors necessary for service delivery (with confidentiality agreements)</li>
              <li>Legal authorities when required by law</li>
              <li>Other IT professionals in your organization (with your permission)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Delete or restrict processing of your data (where applicable)</li>
              <li>Receive your data in a portable format</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Data Retention
            </h2>
            <p>We retain service records for:</p>
            <ul className="list-disc pl-6">
              <li>Active clients: Throughout service period + 5 years</li>
              <li>Inactive clients: 3 years after last service</li>
              <li>Financial records: 7 years as required by law</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Policy Updates
            </h2>
            <p>
              We may update this policy periodically. Significant changes will be communicated to active clients via email.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              Contact Us
            </h2>
            <p>
              For privacy-related inquiries, please contact our Data Protection Officer at:
              <br />
              <span className="font-medium">privacy@printhubsolution.com</span>
            </p>

            <p className="mt-8 text-center text-gray-600">
              Last updated: May 1, 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
