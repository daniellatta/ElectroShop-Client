import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function useAuthenticate() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  const user = localStorage.getItem('email');
  const admin =
    JSON.parse(localStorage.getItem('admin')) === null
      ? false
      : JSON.parse(localStorage.getItem('admin'));

  const secureRouteUser = () => {
    if (!isAuthenticated || !user) {
      router.push('/login');
    }
  };

  const secureRouteAdmin = () => {
    if (!isAuthenticated || !admin) {
      router.push('/');
      setTimeout(() => {
        alert('Necesitas permisos de administrador');
      }, '1000');
    }
  };
  return {
    secureRouteUser,
    secureRouteAdmin,
    admin,
  };
}
