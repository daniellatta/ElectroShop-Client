'use client';
import React, { useEffect, useState } from 'react';
import {
  Container,
  ComponentContent,
  NavigationPanel,
  ContentPanel,
  NavigationItem,
} from './styles';
import UserHeader from '../../components/UserHeader/UserHeader';
import MyProfile from '../../components/MyProfile/MyProfile';
import MyOrders from '../../components/MyOrders/MyOrders';
import MyCart from '../../components/MyCart/MyCart';
import Settings from '../../components/Settings/Settings';
import { logout } from '@/redux/features/login';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import useAuthenticate from '@/hook/Authenticated';

const UserPage = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('personalData');
  const { secureRouteUser } = useAuthenticate();

  useEffect(() => {
    secureRouteUser();
  }, []);

  const handleNavigationClick = (tab) => {
    setActiveTab(tab);
  };

  const onClickLogout = () => {
    dispatch(logout());
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('admin');
    localStorage.removeItem('active');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'personalData':
        return <MyProfile />;
      case 'orders':
        return <MyOrders />;
      case 'cart':
        return <MyCart />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <UserHeader />
      <ComponentContent>
        <NavigationPanel>
          <NavigationItem
            style={
              activeTab === 'personalData' ? { backgroundColor: '#0003' } : null
            }
            onClick={() => handleNavigationClick('personalData')}>
            Personal Data
          </NavigationItem>
          <NavigationItem
            style={activeTab === 'orders' ? { backgroundColor: '#0003' } : null}
            onClick={() => handleNavigationClick('orders')}>
            My Orders
          </NavigationItem>
          <NavigationItem
            style={activeTab === 'cart' ? { backgroundColor: '#0003' } : null}
            onClick={() => handleNavigationClick('cart')}>
            My Cart
          </NavigationItem>
          <NavigationItem
            style={
              activeTab === 'settings' ? { backgroundColor: '#0003' } : null
            }
            onClick={() => handleNavigationClick('settings')}>
            Settings
          </NavigationItem>
          <Link
            href='/'
            onClick={onClickLogout}
            className='bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded transition-colors duration-300'>
            Logout
          </Link>
        </NavigationPanel>
        <ContentPanel>{renderContent()}</ContentPanel>
      </ComponentContent>
    </Container>
  );
};

export default UserPage;
