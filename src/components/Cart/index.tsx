import Link from 'next/link';
import { Handbag, X } from 'phosphor-react';
import { useState } from 'react';
import { theme } from '../../styles';
import {
  ButtonSubmitCheckout,
  CartButtonClose,
  CartButtonOpen,
  CartCardItem,
  CartContainer,
  CartContent,
  CartItemSumary,
  ImageContainer,
  ItemDetails,
  Overlay,
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
        <>
          <CartContent>
            <CartButtonClose onClick={handleToggleShowCart}>
              <X size={24} weight="bold" />
            </CartButtonClose>

            <strong>Sacola de compras</strong>

            <div>
              <CartCardItem>
                <ImageContainer></ImageContainer>
                <ItemDetails>
                  <h1>Camiseta Beyond the Limits</h1>
                  <span>R$ 79,90</span>
                  <button>Remover</button>
                </ItemDetails>
              </CartCardItem>

              <CartCardItem>
                <ImageContainer></ImageContainer>
                <ItemDetails>
                  <h1>Camiseta Beyond the Limits</h1>
                  <span>R$ 79,90</span>
                  <button>Remover</button>
                </ItemDetails>
              </CartCardItem>

              <CartCardItem>
                <ImageContainer></ImageContainer>
                <ItemDetails>
                  <h1>Camiseta Beyond the Limits</h1>
                  <span>R$ 79,90</span>
                  <button>Remover</button>
                </ItemDetails>
              </CartCardItem>
            </div>

            <CartItemSumary>
              <tbody>
                <tr>
                  <td>Quantidade</td>
                  <td>3 items</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Valor Total</td>
                  <td>R$ 79,90</td>
                </tr>
              </tfoot>
            </CartItemSumary>
            <ButtonSubmitCheckout>Finalizar compra</ButtonSubmitCheckout>
          </CartContent>
          <Overlay />
        </>
      )}
    </CartContainer>
  );
}
