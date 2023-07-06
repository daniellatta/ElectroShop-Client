import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function useAuthenticate() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  const user = localStorage.getItem('email');
  const id = parseInt(localStorage.getItem('id'), 10);
  const active = JSON.parse(localStorage.getItem('active'));
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
      router.push('/');
    }
  };

  const secureRouteReActive = () => {
    if (!id || active) {
      router.push('/login');
    }
  };

  return {
    secureRouteUser,
    secureRouteAdmin,
    secureRouteReActive,
    admin,
  };
}
