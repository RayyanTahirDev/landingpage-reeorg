import Link from "next/link";
import { ArrowRight, BarChart2, Users, BookOpen, Brain, Target, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            ReeOrg
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link href="#features" className="text-blue-600 hover:text-blue-800 transition-colors">Features</Link>
            <Link href="#benefits" className="text-blue-600 hover:text-blue-800 transition-colors">Benefits</Link>
            <Link href="#about" className="text-blue-600 hover:text-blue-800 transition-colors">About</Link>
            <Link href="#contact" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all">
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-50 to-white -z-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl -z-10"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Reimagine Your Organization
              </h1>
              <p className="text-xl text-blue-800 mb-8">
                ReeOrg empowers you to analyze skills, optimize team structures, and make data-driven talent decisions that transform your organization. Our AI-powered platform helps you build stronger, more efficient teams.
              </p>
              <div className="flex gap-4 justify-center">
                <Link 
                  href="#contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full hover:opacity-90 transition-all flex items-center group"
                >
                  Get Started 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#features"
                  className="bg-white text-blue-700 px-8 py-4 rounded-full hover:bg-blue-50 transition-all border border-blue-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">Powerful Features</h2>
            <p className="text-blue-600 text-center mb-12 max-w-2xl mx-auto">
              Our comprehensive suite of tools helps you understand and optimize your organization's talent landscape.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-700">Skills Analytics</h3>
                <p className="text-blue-600 mb-4">
                  Gain deep insights into your workforce capabilities with AI-powered analytics and real-time skill tracking.
                </p>
                <ul className="space-y-2 text-blue-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Skill gap analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Performance tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Trend identification
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-700">Team Optimization</h3>
                <p className="text-blue-600 mb-4">
                  Build and optimize team structures based on skills distribution and business objectives.
                </p>
                <ul className="space-y-2 text-blue-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Team composition
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Role mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Capacity planning
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-700">Development Tracking</h3>
                <p className="text-blue-600 mb-4">
                  Monitor and guide skill development with personalized learning paths and progress tracking.
                </p>
                <ul className="space-y-2 text-blue-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Learning paths
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Progress monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Certification tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">Why Choose ReeOrg</h2>
            <p className="text-blue-600 text-center mb-12 max-w-2xl mx-auto">
              Transform your organization with our innovative approach to talent management and team optimization.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">AI-Powered Insights</h3>
                <p className="text-blue-600">Advanced analytics and machine learning for better decision-making.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Strategic Planning</h3>
                <p className="text-blue-600">Data-driven approach to organizational development and growth.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Innovation Focus</h3>
                <p className="text-blue-600">Stay ahead with cutting-edge talent management solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">Get Started with ReeOrg</h2>
              <p className="text-blue-600 text-center mb-8">
                Ready to transform your organization? Contact us to learn how ReeOrg can help.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-700 mb-1">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-700 mb-1">Message</label>
                    <textarea
                      placeholder="How can we help?"
                      className="w-full p-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-32"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg hover:opacity-90 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                ReeOrg
              </h3>
              <p className="text-blue-200">
                Transforming organizations through skills intelligence and strategic workforce planning.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-blue-200 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#benefits" className="text-blue-200 hover:text-white transition-colors">Benefits</Link></li>
                <li><Link href="#about" className="text-blue-200 hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-blue-200">contact@reeorg.com</p>
              <div className="mt-4 space-y-2">
                <p className="text-blue-200">123 Business Street</p>
                <p className="text-blue-200">New York, NY 10001</p>
                <p className="text-blue-200">United States</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} ReeOrg. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}