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
import PersonalData from "../../components/PersonalData/PersonalData";
import MyOrders from "../../components/MyOrders/MyOrders";
import MyCart from "../../components/MyCart/MyCart";
import Settings from "../../components/Settings/Settings";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("personalData");

  const handleNavigationClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "personalData":
        return <MyProfile />;
      // case "personalData":
      //   return <PersonalData />;
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
          <LogoutButton>Logout</LogoutButton>
        </NavigationPanel>
        <ContentPanel>{renderContent()}</ContentPanel>
      </ComponentContent>
    </Container>
  );
};

export default UserPage;
