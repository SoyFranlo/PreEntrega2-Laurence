export const cartAmount = (cart) => {
    return cart.reduce((acc, act) => acc + act.cantidad, 0)
}