import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function useAuthenticate() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  const user = localStorage.getItem("email");
  const admin =
    localStorage.getItem("admin") === null
      ? false
      : localStorage.getItem("admin");

  const secureRouteUser = () => {
    if (!isAuthenticated || !user) {
      router.push("/login");
    }
  };

  const secureRouteAdmin = () => {
    console.log(admin);
    if (!isAuthenticated || !admin) {
      router.push("/login");
    }
  };
  return {
    secureRouteUser,
    secureRouteAdmin,
    admin,
  };
}
