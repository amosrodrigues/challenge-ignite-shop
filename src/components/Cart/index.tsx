import Image from 'next/image';
import Link from 'next/link';
import { Handbag, X } from 'phosphor-react';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
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

  const cart = useShoppingCart();
  const { removeItem, cartDetails, clearCart, formattedTotalPrice } = cart;

  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => entry);

  console.log(cartEntries);

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
              {cartEntries.map((entry) => (
                <CartCardItem key={entry.id}>
                  <ImageContainer>
                    <Image
                      src={entry.imageUrl}
                      width={200}
                      height={200}
                      alt=""
                    />
                  </ImageContainer>
                  <ItemDetails>
                    <h1>{entry.name}</h1>
                    <span>
                      {' '}
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(entry.price / 100)}
                    </span>
                    <button>Remover</button>
                  </ItemDetails>
                </CartCardItem>
              ))}
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
            <ButtonSubmitCheckout onClick={() => clearCart()}>
              Finalizar compra
            </ButtonSubmitCheckout>
          </CartContent>
          <Overlay />
        </>
      )}
    </CartContainer>
  );
}
