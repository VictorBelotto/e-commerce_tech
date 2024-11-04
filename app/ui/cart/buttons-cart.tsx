import { useCartStore } from "@/app/context/store";
import { Button } from "@chakra-ui/react";
import RemoveQuantifyIcon from "../icons/removeQuantifyIcon";
import { ProductProps } from "@/app/lib/definitions";
import AddQuantifyIcon from "../icons/addQuantifyIcon";

export function ButtonRemoveToCart({ id }: { id: string }) {
  const { removeFromCart } = useCartStore();
  return (
    <Button onClick={() => removeFromCart(id)} size={"sm"} color={'white'} colorScheme='red' className="mt-auto">
      Remover
    </Button>
  )
}
export function ButtomAddQuantify({ product }: { product: ProductProps }) {
  const { addToCart } = useCartStore();
  return (
    <Button onClick={() => addToCart(product)} size={"sm"} color={'white'} colorScheme="blackAlpha" variant='ghost' className="rounded-full">
      <AddQuantifyIcon />
    </Button>)
}

export function ButtomRemoveQuantify({ id }: { id: string }) {
  const { removeQuantity } = useCartStore();
  return (
    <Button onClick={() => removeQuantity(id)} size={"sm"} color={'black'} colorScheme="blackAlpha" variant='ghost' className="rounded-full">
      <RemoveQuantifyIcon />
    </Button>
  )
}

export function ButtomBuy(){
  return (
    <Button size={"sm"} color={'white'} colorScheme="orange" variant='solid' className="rounded-full">
      Finalizar pedido
    </Button>
  )
}
