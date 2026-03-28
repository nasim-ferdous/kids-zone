"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";
import Swal from "sweetalert2";

const ContactPage = () => {
  const handleContact = (e) => {
    e.preventDefault(); // Fixed the capital 'D'
    Swal.fire("Success", "Your Message has been received", "success");
  };
  return (
    <div className="min-h-screen bg-base-50">
      {/* Header Section */}
      <section className="bg-white py-16 px-4 border-b border-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-neutral uppercase tracking-tighter">
            Let's <span className="text-primary">Connect</span> & Play
          </h1>
          <p className="mt-4 text-neutral/50 font-medium italic max-w-xl mx-auto">
            Have a question about a toy? Or just want to say hi? We'd love to
            hear from you! Our team is ready to help.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Info Cards (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-black text-neutral mb-8 uppercase tracking-tight">
              Contact <span className="text-primary">Details</span>
            </h3>

            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-5 bg-white p-6 rounded-3xl border border-base-200 shadow-sm group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase opacity-40">
                    Call Us Anytime
                  </p>
                  <p className="text-lg font-bold text-neutral">
                    +880 1XXX-XXXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-6 rounded-3xl border border-base-200 shadow-sm group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase opacity-40">
                    Email Support
                  </p>
                  <p className="text-lg font-bold text-neutral">
                    hello@kidszone.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-6 rounded-3xl border border-base-200 shadow-sm group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase opacity-40">
                    Our Store
                  </p>
                  <p className="text-lg font-bold text-neutral">
                    Banani, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-6 rounded-3xl border border-base-200 shadow-sm group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-success/10 text-success flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  <FaClock />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase opacity-40">
                    Business Hours
                  </p>
                  <p className="text-lg font-bold text-neutral">
                    Sat - Thu: 10 AM - 8 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-sm font-black uppercase tracking-widest text-neutral/30 mb-4">
                Follow the Fun
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="btn btn-circle btn-ghost bg-white border border-base-200 text-blue-600 text-xl shadow-sm hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-ghost bg-white border border-base-200 text-pink-600 text-xl shadow-sm hover:bg-pink-600 hover:text-white transition-all"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="btn btn-circle btn-ghost bg-white border border-base-200 text-success text-xl shadow-sm hover:bg-success hover:text-white transition-all"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-base-100">
              <h3 className="text-2xl font-black text-neutral mb-8 uppercase tracking-tight">
                Send a <span className="text-primary">Message</span>
              </h3>

              <form onSubmit={handleContact} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered rounded-2xl bg-base-50 focus:border-primary"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">
                        Email Address
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="input input-bordered rounded-2xl bg-base-50 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32 rounded-2xl bg-base-50 focus:border-primary"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block h-16 rounded-full text-lg font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all border-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
