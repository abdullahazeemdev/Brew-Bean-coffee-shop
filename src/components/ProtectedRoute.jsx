import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import app from "../../env/Config.js";

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
            <div className="min-h-screen bg-[#0b1120] flex items-center justify-center">
                <div className="text-center">

                    <div className="relative w-16 h-16 mx-auto mb-5">
                        <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>

                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin"></div>

                        <div className="absolute inset-3 rounded-full bg-blue-500/10"></div>
                    </div>

                    <h2 className="text-white text-lg font-semibold">
                        Loading...
                    </h2>

                    <p className="text-gray-400 text-sm mt-1">
                        Please wait a moment
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