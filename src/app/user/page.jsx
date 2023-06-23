"use client";
import React, { useState } from "react";
import {
  Container,
  ComponentContent,
  NavigationPanel,
  ContentPanel,
  NavigationItem,
  LogoutButton,
} from "./styles";
import UserHeader from "../../components/UserHeader/UserHeader";
import MyProfile from "../../components/MyProfile/MyProfile";
import MyOrders from "../../components/MyOrders/MyOrders";
import MyCart from "../../components/MyCart/MyCart";
import Settings from "../../components/Settings/Settings";
import { logout } from "@/redux/features/login";
import { useDispatch } from "react-redux";

const UserPage = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("personalData");

  const handleNavigationClick = (tab) => {
    setActiveTab(tab);
  };

  const onClickLogout = () => {
    dispatch(logout());
  };

  const renderContent = () => {
    switch (activeTab) {
      case "personalData":
        return <MyProfile />;
      case "orders":
        return <MyOrders />;
      case "cart":
        return <MyCart />;
      case "settings":
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
              activeTab === "personalData" ? { backgroundColor: "#0003" } : null
            }
            onClick={() => handleNavigationClick("personalData")}
          >
            Personal Data
          </NavigationItem>
          <NavigationItem
            style={activeTab === "orders" ? { backgroundColor: "#0003" } : null}
            onClick={() => handleNavigationClick("orders")}
          >
            My Orders
          </NavigationItem>
          <NavigationItem
            style={activeTab === "cart" ? { backgroundColor: "#0003" } : null}
            onClick={() => handleNavigationClick("cart")}
          >
            My Cart
          </NavigationItem>
          <NavigationItem
            style={
              activeTab === "settings" ? { backgroundColor: "#0003" } : null
            }
            onClick={() => handleNavigationClick("settings")}
          >
            Settings
          </NavigationItem>
          <LogoutButton
            onClick={onClickLogout}
            className="text-red-100 bg-red-500"
          >
            Logout
          </LogoutButton>
        </NavigationPanel>
        <ContentPanel>{renderContent()}</ContentPanel>
      </ComponentContent>
    </Container>
  );
};

export default UserPage;
