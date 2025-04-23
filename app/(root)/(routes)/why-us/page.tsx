import React from 'react';
import Link from 'next/link';
import { ChevronRight, Award, Clock, Zap, Lock, Heart } from 'lucide-react';

const WhyUsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why Choose Clow?
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
            At Clow, we empower startups, SaaS teams, and innovators to bring their ideas to life quickly, affordably, and with full control. With over four years of experience in no-code, low-code, and open-source solutions, we deliver scalable, tailored products that meet your unique needs.
          </p>
        </div>

        {/* Feature Sections */}
        <div className="space-y-24">
          {/* Expertise and Experience */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Expertise and Experience</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Our team specializes in no-code, low-code, and full-code platforms, with mastery in tools like Bubble, FlutterFlow, Next.js, and more. We&apos;ve spent over four years honing our skills across 10+ platforms, ensuring we select the best technology for your project. Whether you need a rapid prototype or a robust custom solution, we&apos;ve got the expertise to make it happen.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-blue-700">
                  <strong>Why it matters</strong>: You get a partner who understands the tools inside and out, delivering a product built for success from day one.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full p-1">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <p className="ml-3 text-gray-700">Expertise in 10+ development platforms</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full p-1">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <p className="ml-3 text-gray-700">Mastery of Bubble, FlutterFlow, Next.js and more</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 text-white rounded-full p-1">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                  <p className="ml-3 text-gray-700">Four years of specialized experience</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Speed and Efficiency */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-green-600 text-white rounded-full mb-2">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">3-4 Weeks</h3>
                <p className="text-gray-600">From concept to market-ready MVP</p>
              </div>
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-green-600 text-white rounded-full mb-2">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">$25/hour</h3>
                <p className="text-gray-600">Up to 70% less than traditional agencies</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">Save up to $50k</div>
                <p className="text-gray-600">per project without compromising quality</p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Speed and Efficiency</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Time is critical for growing businesses. We deliver market-ready Minimum Viable Products (MVPs) in just 3–4 weeks—up to 3x faster than traditional development. At $25/hour, our low-code approach saves you time and money while maintaining enterprise-grade quality. Imagine saving up to $50k per project compared to traditional agencies, without compromising on results.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-medium text-green-700">
                  <strong>Why it matters</strong>: Launch faster and stay ahead of the competition, all while keeping your budget in check.
                </p>
              </div>
            </div>
          </section>

          {/* Flexibility and Scalability */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Flexibility and Scalability</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Our hybrid solutions combine the speed of no-code with the power of custom code. Start with a quick prototype to test your idea, then scale seamlessly with tailored features as your business grows. With Clow, you&apos;re never locked into a single platform—your app evolves with you.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-medium text-purple-700">
                  <strong>Why it matters</strong>: You get a solution that adapts to your needs, whether you&apos;re just starting out or scaling to millions of users.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-purple-600 rounded-full">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Rapid Prototyping</h4>
                    <p className="mt-1 text-gray-600">Test your concept quickly with minimal investment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-purple-600 rounded-full">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Hybrid Solutions</h4>
                    <p className="mt-1 text-gray-600">The perfect blend of no-code speed and custom code power</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-purple-600 rounded-full">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Seamless Scaling</h4>
                    <p className="mt-1 text-gray-600">Grow from MVP to enterprise-grade as your business expands</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ownership and Control */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col items-center mb-8 text-center">
                <Lock className="h-16 w-16 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">Your Product, Your Control</h3>
                <p className="text-gray-600 mt-2">No vendor lock-in, complete ownership</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg shadow">
                  <div className="mr-4 bg-amber-500 p-2 rounded-full">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Self-Hosted Solutions</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg shadow">
                  <div className="mr-4 bg-amber-500 p-2 rounded-full">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Your Cloud Account</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg shadow">
                  <div className="mr-4 bg-amber-500 p-2 rounded-full">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Open-Source Options</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Lock className="h-8 w-8 text-amber-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Ownership and Control</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                We believe you should have full control over your product. Our open-source and self-hosted options let you deploy on your AWS or Google Cloud account, ensuring you own your code and data. Say goodbye to vendor lock-in and hello to cost savings, data privacy, and long-term flexibility.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <p className="font-medium text-amber-700">
                  <strong>Why it matters</strong>: You maintain independence and avoid unexpected costs or limitations down the road.
                </p>
              </div>
            </div>
          </section>

          {/* Client-Centric Approach */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Client-Centric Approach</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Your success is our mission. We provide tailored solutions, transparent pricing, and end-to-end support—from ideation to deployment. We listen to your needs, align our workflows with your goals, and deliver on time and on budget. With Clow, you&apos;re not just a client; you&apos;re a partner.
              </p>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-medium text-red-700">
                  <strong>Why it matters</strong>: You get personalized service and a team dedicated to bringing your vision to life, exactly the way you want it.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col items-center space-y-6 text-center">
                <blockquote className="italic text-gray-700">
                &quot;We don&apos;t just build products; we build relationships. Your success is the true measure of our work.&quot;
                </blockquote>
                <div className="space-y-2">
                  <div className="flex justify-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="font-medium">Personalized service from start to finish</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us today to learn how Clow can help you achieve your goals efficiently and affordably. Let&apos;s turn your ideas into reality—faster, smarter, and on your terms.
          </p>
          <div className="mt-8">
            <Link href="/contact" passHref>
              <div className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 cursor-pointer">
                Contact Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;