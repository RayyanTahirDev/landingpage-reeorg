import Link from "next/link";

export default function TermsAndConditions() {
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
          Terms and Conditions
        </h1>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <p className="text-gray-600 mb-6">Last Updated: May 1, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-600">
            By accessing our website and using our services, you agree to be bound by these Terms and Conditions
            and our Privacy Policy. If you disagree with any part of these terms, you may not access our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
          <p className="text-gray-600">
            Permission is granted to temporarily access the materials on ReeOrg's website for personal,
            non-commercial transitory viewing only.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
          <p className="text-gray-600">
            The materials on ReeOrg's website are provided on an 'as is' basis. ReeOrg makes no warranties,
            expressed or implied, and hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
            or non-infringement of intellectual property or other violation of rights.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
          <p className="text-gray-600">
            In no event shall ReeOrg or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or
            inability to use the materials on ReeOrg's website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms, please contact us at:
            legal@reeorg.com
          </p>
        </div>
      </div>
    </div>
  );
}