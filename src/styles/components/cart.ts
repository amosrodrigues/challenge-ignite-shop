import { styled } from '..';

export const CartContainer = styled('div', {
  flex: 1,
  display: 'flex',
});

export const CartButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 'auto',
  textDecoration: 'none',
  padding: '0.75rem',
  cursor: 'pointer',
  position: 'relative',

  background: '$gray800',
  borderRadius: 6,
  border: 0,

  span: {
    width: '1.5rem',
    height: '1.5rem',
    position: 'absolute',
    right: '-7px',
    top: '-7px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '$green500',
    zIndex: 1,

    borderRadius: '1000px',
    border: '3px solid $gray900',
    color: '$white',
    fontWeight: 'bold',
    fontSize: '$sm',
    lineHeight: 1.6,
  },
});
