'use client';

import Admin from '@/components/Admin/Admin';
import useAuthenticate from '@/hook/Authenticated';
import { useEffect } from 'react';

export default function admin() {
  const { secureRouteAdmin, admin } = useAuthenticate();

  useEffect(() => {
    secureRouteAdmin();
  }, []);

  return (
    <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/000/676/628/original/blue-blur-backdrop.jpg')] bg-cover h-screen">
      {admin && <Admin />}
    </div>
  );
}
