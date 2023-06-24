'use client';

import { MainContainer } from './Styles';
import ShoppingCartNav from '../ShoppingCartNav/ShoppingCartNav';

const CartContainer = ({ isOpen }) => {
  return (
    <MainContainer
      className={`fixed bg-white transition-transform duration-300 transform ${
        isOpen ? 'translate-x-[-30px]' : 'translate-x-full right-[-10px]'
      }`}>
      <ShoppingCartNav />
    </MainContainer>
  );
};

export default CartContainer;
