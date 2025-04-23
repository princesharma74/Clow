"use client";

import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { contactDetails } from "@/config/site";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactUsPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const setFailStatus = (status: boolean) => {
    if (status) {
      setFailed(true);
      setTimeout(() => setFailed(false), 5000);
    }
  };

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
      privacyAccepted: true,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await axios.post("/api/contact", data);
      if (response.status === 200) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Submission failed", response.data);
        setFailStatus(true);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error submitting form", error.response?.data);
        setFailStatus(true);
      } else {
        console.error("Error submitting form", error);
        setFailStatus(true);
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
            Ready to bring your ideas to life? Contact us today and let&apos;s
            discuss how Clow can help you build your next great product quickly
            and cost-effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full p-2">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-blue-600">
                    <Link href={`mailto:${contactDetails.email}`}>
                      {contactDetails.email}
                    </Link>
                  </p>
                  <p className="text-sm text-gray-500">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full p-2">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-blue-600">{contactDetails.phone}</p>
                  <p className="text-sm text-gray-500">
                    Monday-Friday, 9am-6pm EST
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full p-2">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Office</h3>
                  <p className="text-gray-600">Bangalore, India, 560038</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href={contactDetails.social.twitter}
                  className="text-gray-500 hover:text-blue-600"
                >
                  <IconBrandTwitter size={30} />
                </a>
                <a
                  href={contactDetails.social.linkedin}
                  className="text-gray-500 hover:text-blue-600"
                >
                  <IconBrandLinkedin size={30} />
                </a>
                <a
                  href={contactDetails.social.instagram}
                  className="text-gray-500 hover:text-blue-600"
                >
                  <IconBrandInstagram size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>

              {submitted ? (
                <div className="bg-green-50 p-6 rounded-lg flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-green-800">
                      Message sent successfully!
                    </h3>
                    <p className="mt-2 text-green-700">
                      Thank you for reaching out. Our team will get back to you
                      shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="flex flex-col md:flex-row w-full gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="John Doe" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="email@example.com"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-4">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Your company (optional)"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Project Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a project type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="mvp">
                                  MVP Development
                                </SelectItem>
                                <SelectItem value="web">
                                  Web Application
                                </SelectItem>
                                <SelectItem value="mobile">
                                  Mobile Application
                                </SelectItem>
                                <SelectItem value="saas">
                                  SaaS Product
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Tell us about your project..."
                              rows={4}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacyAccepted"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1">
                            <FormLabel>I agree to the privacy policy</FormLabel>
                            <p className="text-sm text-gray-500">
                              We only use your data to respond to your inquiry.
                            </p>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Sending..."
                        : "Send Message"}
                    </Button>

                    {failed && (
                      <div className="mt-4 text-red-600">
                        <p>Failed to send message. Please try again later.</p>
                      </div>
                    )}
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
