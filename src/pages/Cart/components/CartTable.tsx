import CountInput from '@/common/UI/Inputs/CountInput'
import {
  deleteFromCart,
  setProductCountToDown,
  setProductCountToUp,
} from '@/features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import CartTableImg from './CartTableImg'

const CartTable = () => {
  const { cart } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const handleCountToDown = (
    id: string,
    count: number,
    withTogether: boolean
  ) => {
    if (count === 1) {
      return
    } else {
      dispatch(
        setProductCountToDown({
          id: id,
          withTogether: withTogether ? withTogether : false,
        })
      )
    }
  }

  return (
    <TableContainer className="bg-light border-none font-medium text-xl">
      <Table className="bg-light border-t shadow-transparent font-roboto text-dark py-3">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 18 }}>Name</TableCell>
            <TableCell align="center" sx={{ fontSize: 18 }}>
              Price
            </TableCell>
            <TableCell align="center" sx={{ fontSize: 18 }}>
              Quantity
            </TableCell>
            <TableCell align="center" sx={{ fontSize: 18 }}>
              Sum
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(
            ({ product, count, price, priceWithCount, withTogether }, i) => {
              return (
                <TableRow key={`${product.id}${i}`}>
                  <TableCell>
                    <CartTableImg item={product} withTogether={withTogether} />
                  </TableCell>
                  <TableCell
                    className="w-[158px] text-xl font-medium"
                    align="center"
                  >
                    <div className="text-xl font-medium">{price} $</div>
                  </TableCell>
                  <TableCell className="w-[158px]" align="center">
                    <CountInput
                      count={count}
                      countToDown={() =>
                        handleCountToDown(product.id, count, withTogether!)
                      }
                      countToUp={() =>
                        dispatch(
                          setProductCountToUp({
                            id: product.id,
                            withTogether: withTogether ? withTogether : false,
                          })
                        )
                      }
                    />
                  </TableCell>
                  <TableCell className="w-[158px]" align="center">
                    <div className="text-xl font-medium">
                      {priceWithCount} $
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <button
                      onClick={() =>
                        dispatch(
                          deleteFromCart({
                            id: product.id,
                            withTogether: withTogether ? withTogether : false,
                          })
                        )
                      }
                    >
                      <img src="/images/icons/basket.svg" alt="basket.svg" />
                    </button>
                  </TableCell>
                </TableRow>
              )
            }
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartTable
