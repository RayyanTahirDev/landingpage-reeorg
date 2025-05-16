import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            ReeOrg
          </Link>
        </nav>
      </header>

      <div className="container mx-auto px-4 max-w-4xl pt-24 pb-16">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <p className="text-gray-600 mb-6">Last Updated: May 1, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600">
            At ReeOrg ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data We Collect</h2>
          <p className="text-gray-600">We may collect and process the following data about you:</p>
          <ul className="list-disc ml-6 my-4 text-gray-600">
            <li>Identity Data (name, username, title)</li>
            <li>Contact Data (email address, phone number)</li>
            <li>Technical Data (IP address, browser type, device information)</li>
            <li>Usage Data (how you use our website and services)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="text-gray-600">We use your data to:</p>
          <ul className="list-disc ml-6 my-4 text-gray-600">
            <li>Provide and improve our services</li>
            <li>Communicate with you</li>
            <li>Send you marketing information (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this privacy policy, please contact us at:
            privacy@reeorg.com
          </p>
        </div>
      </div>
    </div>
  );
}