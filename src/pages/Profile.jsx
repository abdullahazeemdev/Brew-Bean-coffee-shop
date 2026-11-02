import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import app from "../../Firebase/config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const auth = getAuth(app);
const db = getFirestore(app);

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [ordersCount, setOrdersCount] = useState(0);
  const [loading, setLoading] = useState(true);
  
  // Edit Profile Modal States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", age: "" });
  const [profilePic, setProfilePic] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [updating, setUpdating] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // 1. Fetch User Data from 'users' collection
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const data = userDocSnap.data();
            setUserData(data);
            setEditForm({ name: data.name || "", age: data.age || "" });
            setProfilePic(data.profilePic || "");
          } else {
            const defaultName = currentUser.displayName || "User";
            setUserData({
              name: defaultName,
              email: currentUser.email,
              age: "N/A",
              profilePic: "",
            });
            setEditForm({ name: defaultName, age: "" });
          }

          // 2. Fetch Total Orders Count from 'orders' collection using 'userId'
          const ordersQuery = query(
            collection(db, "orders"),
            where("userId", "==", currentUser.uid)
          );
          const ordersSnapshot = await getDocs(ordersQuery);
          setOrdersCount(ordersSnapshot.size);

        } catch (error) {
          console.error("Error fetching Firestore data:", error);
        }
      } else {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  // Handle Cloudinary Image Upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "YAHAN_APNA_UPLOAD_PRESET_DALEIN"); // Apna unsigned upload preset yahan likhein

    setUploadingImage(true);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ratza6ge/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const result = await res.json();
      if (result.secure_url) {
        setProfilePic(result.secure_url);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Image uploaded successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      Swal.fire("Error", "Image upload failed!", "error");
    } finally {
      setUploadingImage(false);
    }
  };

  // Handle Edit Profile Form Submit & Save to Firestore
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!editForm.name.trim()) {
      Swal.fire("Error", "Name cannot be empty!", "error");
      return;
    }

    setUpdating(true);
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      // 1. Update Firebase Auth Profile (displayName)
      await updateProfile(currentUser, {
        displayName: editForm.name,
      });

      // 2. Update Firestore 'users' document
      const userDocRef = doc(db, "users", currentUser.uid);
      await setDoc(
        userDocRef,
        {
          name: editForm.name,
          age: editForm.age,
          email: currentUser.email,
          profilePic: profilePic,
        },
        { merge: true }
      );

      // 3. Update local state
      setUserData((prev) => ({
        ...prev,
        name: editForm.name,
        age: editForm.age,
        profilePic: profilePic,
      }));

      setIsEditModalOpen(false);
      Swal.fire({
        title: "Success!",
        text: "Profile updated successfully.",
        icon: "success",
        confirmButtonColor: "#d6a15d",
        background: "#281a13",
        color: "#ffffff",
      });
    } catch (error) {
      console.error("Profile Update Error Details:", error.code, error.message);
      Swal.fire("Error", `Failed to update profile: ${error.message}`, "error");
    } finally {
      setUpdating(false);
    }
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "No",
      confirmButtonColor: "#d6a15d",
      cancelButtonColor: "#4a3023",
      background: "#281a13",
      color: "#ffffff",
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        Swal.fire({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success",
          confirmButtonColor: "#d6a15d",
          background: "#281a13",
          color: "#ffffff",
        });
        navigate("/login");
      } catch (error) {
        console.error("Logout Error:", error);
      }
    }
  };

  // Loading Screen Spinner
  if (loading) {
    return (
      <div className="min-h-screen bg-[#1c120d] flex items-center justify-center text-[#d6a15d]">
        <div className="text-center">
          <i className="fa-solid fa-spinner fa-spin text-4xl mb-3"></i>
          <p className="text-stone-400 text-sm">Loading profile data...</p>
        </div>
      </div>
    );
  }

  const displayName = userData?.name || auth.currentUser?.displayName || "User";
  const email = userData?.email || auth.currentUser?.email || "No Email";
  const userAge = userData?.age || "N/A";
  const initialLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-[#1c120d] text-[#f5f0e8] relative">
      <Navbar />

      <div className="flex justify-center px-4 pt-32 pb-16">
        <div className="w-full max-w-lg">

          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-[#d6a15d] text-sm tracking-[3px] uppercase font-medium">
              Brew & Bean
            </p>
            <h1 className="text-3xl font-bold mt-2 text-white">
              My Profile
            </h1>
            <p className="text-stone-400 text-sm mt-2">
              Manage your account and orders
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-[#281a13] border border-[#4a3023] rounded-3xl overflow-hidden shadow-2xl">

            {/* Top Coffee Area */}
            <div className="h-28 bg-gradient-to-r from-[#4a3023] via-[#342219] to-[#1c120d] relative">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                {userData?.profilePic ? (
                  <img
                    src={userData.profilePic}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-[6px] border-[#281a13] shadow-xl"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-[#d6a15d] border-[6px] border-[#281a13] flex items-center justify-center text-3xl font-bold text-[#1c120d] shadow-xl">
                    {initialLetter}
                  </div>
                )}
              </div>
            </div>

            {/* User Details */}
            <div className="pt-16 px-7 pb-7">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white">
                  {displayName}
                </h2>
                <p className="text-stone-400 text-sm mt-1">
                  {email}
                </p>

                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="mt-5 px-6 py-2.5 bg-[#d6a15d] hover:bg-[#e9bd7d] text-[#1c120d] rounded-xl text-sm font-semibold transition active:scale-[0.98]"
                >
                  Edit Profile
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <div className="bg-[#1c120d] border border-[#4a3023] rounded-2xl p-5 text-center">
                  <p className="text-2xl font-bold text-[#d6a15d]">
                    {ordersCount}
                  </p>
                  <p className="text-stone-400 text-xs mt-1 uppercase tracking-wider font-medium">
                    Orders
                  </p>
                </div>

                <div className="bg-[#1c120d] border border-[#4a3023] rounded-2xl p-5 text-center">
                  <p className="text-2xl font-bold text-[#d6a15d]">
                    {userAge}
                  </p>
                  <p className="text-stone-400 text-xs mt-1 uppercase tracking-wider font-medium">
                    Age
                  </p>
                </div>
              </div>

              {/* Account Information */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-stone-300 mb-3">
                  Account Information
                </h3>

                <div className="bg-[#1c120d] border border-[#4a3023] rounded-2xl p-4">
                  <p className="text-stone-400 text-xs">
                    Email Address
                  </p>
                  <p className="text-white text-sm font-medium mt-1">
                    {email}
                  </p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full mt-6 py-3 rounded-xl border border-red-500/40 bg-red-500/10 text-red-400 hover:bg-red-500/25 transition text-sm font-semibold active:scale-[0.98]"
              >
                Logout
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* EDIT PROFILE MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="w-full max-w-md bg-[#281a13] border border-[#4a3023] rounded-3xl p-6 sm:p-8 shadow-2xl animate-fadeIn">
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Edit Profile</h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-stone-400 hover:text-white transition text-lg"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#4a3023] bg-[#1c120d] px-4 py-3 text-sm text-white outline-none focus:border-[#d6a15d] focus:ring-1 focus:ring-[#d6a15d]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  value={editForm.age}
                  onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
                  placeholder="Enter your age"
                  className="w-full rounded-xl border border-[#4a3023] bg-[#1c120d] px-4 py-3 text-sm text-white outline-none focus:border-[#d6a15d] focus:ring-1 focus:ring-[#d6a15d]"
                />
              </div>

              {/* Profile Picture Upload */}
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Profile Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full text-sm text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-[#d6a15d] file:text-[#1c120d] hover:file:bg-[#e9bd7d] cursor-pointer"
                />
                {uploadingImage && (
                  <p className="text-xs text-[#d6a15d] mt-1 animate-pulse">Uploading image to Cloudinary...</p>
                )}
                {profilePic && !uploadingImage && (
                  <p className="text-xs text-green-400 mt-1">Image ready to save!</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Email Address (Non-editable)
                </label>
                <input
                  type="email"
                  value={email}
                  disabled
                  className="w-full rounded-xl border border-[#4a3023] bg-[#1c120d]/50 px-4 py-3 text-sm text-stone-500 cursor-not-allowed outline-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="w-1/2 rounded-xl border border-[#4a3023] py-3 text-sm font-semibold text-stone-300 hover:bg-[#1c120d] transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={updating || uploadingImage}
                  className="w-1/2 rounded-xl bg-[#d6a15d] py-3 text-sm font-semibold text-[#1c120d] hover:bg-[#e9bd7d] transition flex items-center justify-center gap-2"
                >
                  {updating ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i> Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;