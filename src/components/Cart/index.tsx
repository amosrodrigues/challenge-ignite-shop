import Link from 'next/link';
import { Handbag } from 'phosphor-react';
import { theme } from '../../styles';
import { CartButton, CartContainer } from '../../styles/components/cart';

export function Cart() {
  return (
    <CartContainer>
      <CartButton>
        <Handbag
          size={24}
          color={true ? String(theme.colors['gray300']) : '#8D8D99'}
        />
        <span>1</span>
      </CartButton>
    </CartContainer>
  );
}
