import React from "react";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-[#f5f0e8]">

      <Navbar />

      <div className="flex justify-center px-4 pt-32 pb-16">

        <div className="w-full max-w-lg">

          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-[#c49a6c] text-sm tracking-[3px] uppercase">
              Brew & Bean
            </p>

            <h1 className="text-3xl font-semibold mt-2">
              My Profile
            </h1>

            <p className="text-[#8f8178] text-sm mt-2">
              Manage your account and orders
            </p>
          </div>


          {/* Profile Card */}
          <div className="bg-[#181310] border border-[#342820] rounded-3xl overflow-hidden shadow-2xl">

            {/* Top Coffee Area */}
            <div className="h-28 bg-gradient-to-r from-[#2b1d16] via-[#3a281d] to-[#1c1511] relative">

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full bg-[#c49a6c] border-[6px] border-[#181310] flex items-center justify-center text-3xl font-bold text-[#1c1714] shadow-xl">
                  A
                </div>
              </div>

            </div>


            {/* User Details */}
            <div className="pt-16 px-7 pb-7">

              <div className="text-center">

                <h2 className="text-2xl font-semibold">
                  Abdullah Azeem
                </h2>

                <p className="text-[#9f9187] text-sm mt-2">
                  abdullah@example.com
                </p>

                <button className="mt-5 px-6 py-2.5 bg-[#c49a6c] hover:bg-[#d2aa7e] text-[#1c1714] rounded-full text-sm font-semibold transition">
                  Edit Profile
                </button>

              </div>


              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mt-8">

                <div className="bg-[#211a16] border border-[#352820] rounded-2xl p-5 text-center">
                  <p className="text-2xl font-semibold text-[#c49a6c]">
                    12
                  </p>

                  <p className="text-[#8f8178] text-xs mt-1 uppercase tracking-wider">
                    Orders
                  </p>
                </div>


                <div className="bg-[#211a16] border border-[#352820] rounded-2xl p-5 text-center">
                  <p className="text-2xl font-semibold text-[#c49a6c]">
                    4.9
                  </p>

                  <p className="text-[#8f8178] text-xs mt-1 uppercase tracking-wider">
                    Rating
                  </p>
                </div>

              </div>


              {/* Account Information */}
              <div className="mt-6">

                <h3 className="text-sm font-medium text-[#c9bdb4] mb-3">
                  Account Information
                </h3>

                <div className="bg-[#211a16] border border-[#352820] rounded-2xl p-4">

                  <p className="text-[#81736b] text-xs">
                    Email Address
                  </p>

                  <p className="text-[#eee5dc] text-sm mt-1">
                    abdullah@example.com
                  </p>

                </div>

              </div>


              {/* Logout */}
              <button className="w-full mt-6 py-3 rounded-xl border border-[#603a34] text-[#d08b80] hover:bg-[#351f1c] transition text-sm font-medium">
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;

