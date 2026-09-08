import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
    return (
        <section className="min-h-screen bg-[#0d0d0d] px-5 py-10 text-white">
            <div className="mx-auto max-w-7xl">

                {/* Back Home */}
                <NavLink to="/">
                    <button className="group inline-flex items-center gap-2 rounded-full border border-gray-800 bg-[#161616] px-5 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black">
                        <i className="fa-solid fa-arrow-left transition-transform duration-300 group-hover:-translate-x-1"></i>
                        Back Home
                    </button>
                </NavLink>


                {/* ================= HEADER ================= */}
                <div className="mb-16 mt-10 text-center">

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#c08b5c]">
                        Contact Us
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Let's Talk Over Coffee
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                        Have a question, suggestion, or just want to say hello?
                        We'd love to hear from you. Drop us a message and
                        let's make your coffee experience even better.
                    </p>

                </div>


                <div className="grid gap-8 lg:grid-cols-2">



                    <div className="rounded-3xl border border-white/10 bg-[#151515] p-7 md:p-10">

                        {/* Card Heading */}
                        <div className="mb-10">

                            <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c08b5c]/10 text-2xl text-[#c08b5c]transition-all duration-300 hover:bg-[#d19a6b] hover:shadow-lg hover:shadow-[#c08b5c]/20 cursor-pointer">
                                <i className="fa-solid fa-mug-hot"></i>
                            </span>

                            <h2 className="text-2xl font-semibold">
                                Get In Touch
                            </h2>

                            <p className="mt-3 max-w-lg text-sm leading-6 text-gray-400">
                                Whether you're looking for your daily coffee,
                                planning a meetup, or simply have a question,
                                feel free to contact us.
                            </p>

                        </div>


                        {/* Contact Details */}
                        <div className="space-y-7">


                            {/* Location */}
                            <div className="group flex items-start gap-5">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1f1f1f] text-[#c08b5c] transition duration-300 group-hover:bg-[#c08b5c] group-hover:text-black">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>

                                <div>
                                    <h3 className="font-medium text-white">
                                        Visit Us
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        123 Coffee Street,
                                        <br />
                                        Karachi, Pakistan
                                    </p>
                                </div>

                            </div>


                            {/* Phone */}
                            <div className="group flex items-start gap-5">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1f1f1f] text-[#c08b5c] transition duration-300 group-hover:bg-[#c08b5c] group-hover:text-black">
                                    <i className="fa-solid fa-phone"></i>
                                </div>

                                <div>
                                    <h3 className="font-medium text-white">
                                        Call Us
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-400">
                                        +92 300 1234567
                                    </p>
                                </div>

                            </div>


                            {/* Email */}
                            <div className="group flex items-start gap-5">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1f1f1f] text-[#c08b5c] transition duration-300 group-hover:bg-[#c08b5c] group-hover:text-black">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>

                                <div>
                                    <h3 className="font-medium text-white">
                                        Email Us
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-400">
                                        hello@brewandbean.com
                                    </p>
                                </div>

                            </div>


                            {/* Opening Hours */}
                            <div className="group flex items-start gap-5">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1f1f1f] text-[#c08b5c] transition duration-300 group-hover:bg-[#c08b5c] group-hover:text-black">
                                    <i className="fa-regular fa-clock"></i>
                                </div>

                                <div>
                                    <h3 className="font-medium text-white">
                                        Opening Hours
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        Monday - Friday: 8:00 AM - 10:00 PM
                                        <br />
                                        Saturday - Sunday: 9:00 AM - 11:00 PM
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* Social Media */}
                        <div className="mt-10 border-t border-white/10 pt-8">

                            <p className="mb-4 text-sm text-gray-400">
                                Follow us
                            </p>

                            <div className="flex gap-3">

                                <a
                                    href="#"
                                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1f1f1f] text-gray-400 transition duration-300 hover:-translate-y-1 hover:bg-[#c08b5c] hover:text-black"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                                <a
                                    href="#"
                                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1f1f1f] text-gray-400 transition duration-300 hover:-translate-y-1 hover:bg-[#c08b5c] hover:text-black"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>

                                <a
                                    href="#"
                                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1f1f1f] text-gray-400 transition duration-300 hover:-translate-y-1 hover:bg-[#c08b5c] hover:text-black"
                                >
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>

                                <a
                                    href="#"
                                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1f1f1f] text-gray-400 transition duration-300 hover:-translate-y-1 hover:bg-[#c08b5c] hover:text-black"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>

                            </div>

                        </div>

                    </div>


                    <div className="rounded-3xl border border-white/10 bg-[#151515] p-7 md:p-10">

                        <div className="mb-8">

                            <p className="text-sm font-medium uppercase tracking-[3px] text-[#c08b5c]">
                                Send a Message
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold">
                                We're Here To Help
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                Fill out the form below and tell us how we can
                                help you.
                            </p>

                        </div>


                        <form className="space-y-6">


                            {/* Name + Email */}
                            <div className="grid gap-6 md:grid-cols-2">

                                <div>

                                    <label className="mb-2 block text-sm font-medium text-gray-300">
                                        Your Name
                                    </label>

                                    <div className="relative">

                                        <i className="fa-regular fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>

                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full rounded-xl border border-white/10 bg-[#101010] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#c08b5c] focus:ring-1 focus:ring-[#c08b5c]/30"
                                        />

                                    </div>

                                </div>


                                <div>

                                    <label className="mb-2 block text-sm font-medium text-gray-300">
                                        Email Address
                                    </label>

                                    <div className="relative">

                                        <i className="fa-regular fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>

                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full rounded-xl border border-white/10 bg-[#101010] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#c08b5c] focus:ring-1 focus:ring-[#c08b5c]/30"
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* Subject */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Subject
                                </label>

                                <div className="relative">

                                    <i className="fa-regular fa-pen-to-square absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>

                                    <input
                                        type="text"
                                        placeholder="What is this about?"
                                        className="w-full rounded-xl border border-white/10 bg-[#101010] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#c08b5c] focus:ring-1 focus:ring-[#c08b5c]/30"
                                    />

                                </div>

                            </div>


                            {/* Message */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Your Message
                                </label>

                                <div className="relative">

                                    <i className="fa-regular fa-message absolute left-4 top-4 text-gray-500"></i>

                                    <textarea
                                        rows="7"
                                        placeholder="Write your message here..."
                                        className="w-full resize-none rounded-xl border border-white/10 bg-[#101010] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#c08b5c] focus:ring-1 focus:ring-[#c08b5c]/30"
                                    ></textarea>

                                </div>

                            </div>


                            {/* Button */}
                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#c08b5c] px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#d19a6b] hover:shadow-lg hover:shadow-[#c08b5c]/20"
                            >

                                Send Message

                                <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>

                            </button>

                        </form>

                    </div>

                </div>


                <div className="mt-16 pb-5 text-center">

                    <div className="mx-auto mb-5 h-px max-w-xs bg-white/10"></div>

                    <div className="flex items-center justify-center gap-3 text-[#c08b5c]">

                        <i className="fa-solid fa-mug-hot"></i>

                        <span className="text-sm font-medium tracking-[3px]">
                            BREW. RELAX. REPEAT.
                        </span>

                        <i className="fa-solid fa-mug-hot"></i>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;

