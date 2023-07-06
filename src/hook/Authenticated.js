import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function useAuthenticate() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  const user =
    typeof localStorage !== 'undefined' ? localStorage.getItem('email') : null;
  const id =
    typeof localStorage !== 'undefined'
      ? parseInt(localStorage.getItem('id'), 10)
      : null;
  const active =
    typeof localStorage !== 'undefined'
      ? JSON.parse(localStorage.getItem('active'))
      : null;
  const admin =
    typeof localStorage !== 'undefined' && localStorage.getItem('admin')
      ? JSON.parse(localStorage.getItem('admin'))
      : false;

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
      }, '3000');
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
