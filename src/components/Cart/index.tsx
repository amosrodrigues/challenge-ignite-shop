import Link from 'next/link';
import { Handbag, X } from 'phosphor-react';
import { useState } from 'react';
import { theme } from '../../styles';
import {
  CartButtonClose,
  CartButtonOpen,
  CartCardItem,
  CartContainer,
  CartContent,
  CartItemSumary,
  ImageContainer,
  ItemDetails,
} from '../../styles/components/cart';

export function Cart() {
  const [showCart, setShowCart] = useState(false);

  function handleToggleShowCart() {
    setShowCart(!showCart);
  }

  return (
    <CartContainer>
      <CartButtonOpen onClick={handleToggleShowCart} disabled={false}>
        <Handbag size={24} />
        <span>1</span>
      </CartButtonOpen>

      {showCart && (
        <CartContent>
          <CartButtonClose onClick={handleToggleShowCart}>
            <X size={24} weight="bold" />
          </CartButtonClose>

          <strong>Sacola de compras</strong>

          <CartCardItem>
            <ImageContainer></ImageContainer>
            <ItemDetails>
              <h1>Camiseta Beyond the Limits</h1>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </ItemDetails>
          </CartCardItem>

          <CartItemSumary>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>R$ 79,90</td>
              </tr>
              {/* <tr>
              <td>Entrega</td>
              <td>{priceFormatter.format(deliveryFee)}</td>
            </tr> */}
            </tbody>
            <tfoot>
              <tr>
                <td>Valor Total</td>
                <td>R$ 79,90</td>
              </tr>
            </tfoot>
          </CartItemSumary>
        </CartContent>
      )}
    </CartContainer>
  );
}
