import { useCartStore } from "@/app/context/store";
import { Button } from "@chakra-ui/react";

export function ButtonRemoveToCart({ id }: { id: string }) {
  const  {removeFromCart}  = useCartStore();
  return (
    <>
      <Button onClick={() => removeFromCart(id)} size={"sm"}  color={'white'} colorScheme='red' >
        Remover
      </Button>
    </>
  )
}