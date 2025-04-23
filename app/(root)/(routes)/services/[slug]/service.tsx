"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ServiceProps } from '@/types';

export interface ProcessProps {
  id: string;
  number: string;
  title: string;
  description: string;
}

const ServicePage: React.FC<{ service: ServiceProps }> = ({ service }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 text-xl text-gray-500">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div>
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
          </div>
          <div className="mt-6 lg:mt-0 lg:col-span-2">
            <div className="space-y-6">
              {service.overview.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Tools Section */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Technologies We Use
          </h2>
          <div>
            <div className="flex gap-4">
              {service.tools.map((tool, index) => (
                <div key={index} className="flex justify-center">
                  <div className="h-30 w-30 relative">
                    <Image
                      src={`${tool.icon}`}
                      alt={tool.icon}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our Process
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">
                  Cost Effective
                </h3>
              </div>
              <p className="text-gray-600">
                Our $25/hour rate provides enterprise-grade solutions at a
                fraction of the cost.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Open Source</h3>
              </div>
              <p className="text-gray-600">
                We leverage open-source technologies for flexibility and to
                eliminate vendor lock-in.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">
                  Full Ownership
                </h3>
              </div>
              <p className="text-gray-600">
                Deploy on your infrastructure with full ownership and control of
                your data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Ready to get started?
        </h2>
        <p className="max-w-6xl text-xl text-gray-600 mb-8 text-center">
          Let&apos;s transform your business processes with intelligent
          automation solutions that save time and reduce costs.
        </p>
        <div className='text-center'>
        <Link
          href={"https://cal.com/princesharma74/clow?overlayCalendar=true"}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Book Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>

        </div>
      </div>
    </div>
  );
};

export default ServicePage;