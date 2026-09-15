import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import app from "../../env/env.js";

const auth = getAuth(app);
const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const getUser = () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return unsubscribe;
    }
    useEffect(() => {
        const unsubscribe = getUser();
        return () => unsubscribe();
    }, [])
    if (loading) {
        return (
            <div className="min-h-screen bg-[#0c0a09] flex items-center justify-center">
                <div className="text-center">

                    {/* Coffee Loader */}
                    <div className="relative w-16 h-16 mx-auto mb-5">

                        <div className="absolute inset-0 rounded-full border-4 border-[#c49a6c]/20"></div>

                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#c49a6c] border-r-[#a8784f] animate-spin"></div>

                        <div className="absolute inset-3 rounded-full bg-[#c49a6c]/10"></div>

                    </div>

                    <h2 className="text-[#f5f0e8] text-lg font-semibold">
                        Brewing...
                    </h2>

                    <p className="text-[#a99b91] text-sm mt-1">
                        Preparing your coffee experience
                    </p>

                </div>
            </div>
        );

    }
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
export default ProtectedRoute;