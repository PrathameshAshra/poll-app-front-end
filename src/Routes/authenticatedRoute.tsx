import Navbar from "@/components/shard/Navbar";
import { firebaseApp } from "@/service/firebase.auth.service";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Navigate } from "react-router-dom";

interface AuthenticatedRouteProps {
  children: ReactNode;
}

interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: (user: User | null) => {},
});

const refreshToken = async (user: User) => {
  const token = await user.getIdToken(true);
  localStorage.setItem("Token", token);
  return token;
};

export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = (
  props
) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const token = refreshToken(authUser);
        setUser(authUser);
        return;
      }
      setUser(authUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="flex h-full flex-col">
        <Navbar />
        {props.children}
      </div>
    </AuthContext.Provider>
  );
};
