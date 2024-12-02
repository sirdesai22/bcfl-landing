import FederatedLearningWorkflow from '@/components/FederatedLearningWorkflow'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, Database, Lock, Network, Shield, Sparkles } from 'lucide-react'
// import { useState } from 'react'


const LandingPage = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="text-xl font-bold">SecureFL</div>
            <Button
              variant="secondary"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 to-black"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Secure Federated Learning with Blockchain
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8">
                Revolutionizing distributed independent machine learning with
                blockchain-powered data validation and security
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 rounded-full">
                Explore Demo
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 animate-bounce text-purple-400" />
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Use Cases
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-purple-500/20">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Privacy Protection
                  </h3>
                  <p className="text-gray-400">
                    Ensure data privacy while contributing to the global model
                    through secure blockchain validation.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-purple-500/20">
                <CardContent className="p-6">
                  <Network className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Independent Learning
                  </h3>
                  <p className="text-gray-400">
                    Enable multiple nodes to contribute to model training while
                    maintaining data sovereignty.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-purple-500/20">
                <CardContent className="p-6">
                  <Database className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Data Integrity
                  </h3>
                  <p className="text-gray-400">
                    Validate and verify data contributions through immutable
                    blockchain records.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/50"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Lock className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Blockchain Security
                    </h3>
                    <p className="text-gray-400">
                      Every data contribution is secured and validated through
                      blockchain technology.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Sparkles className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart Validation</h3>
                    <p className="text-gray-400">
                      Automated validation of data quality and integrity before
                      model updates.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Network className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Decentralized Architecture
                    </h3>
                    <p className="text-gray-400">
                      Distributed nodes working together to improve the main
                      model.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-full animate-pulse delay-300"></div>
                <div className="absolute inset-16 bg-gradient-to-bl from-purple-700/20 to-transparent rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Video */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              See It In Action
            </h2>
            {/* <div className="max-w-4xl mx-auto relative aspect-video bg-gray-900/50 rounded-xl overflow-hidden">
            {isVideoPlaying ? (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <PlayCircle className="w-20 h-20 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
            )}
          </div> */}
            <FederatedLearningWorkflow />
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-400 mb-8">
                Interested in implementing secure federated learning for your
                organization? Let's talk about how we can help.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2024 SecureFL. All rights reserved.</p>
          </div>
        </footer>
      </div>
  )
}

export default LandingPage