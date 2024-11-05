import { stripe } from "@/app/lib/stripe";
import { useAuth } from "@clerk/nextjs";
import { ProductProps } from "@/app/lib/definitions";
import prisma from "@/app/lib/prisma";

const calculateAmount = (items: ProductProps[]) => {
  const total = items.reduce((acc, value) => {
    const price = value.price ?? 0;
    const quantity = value.quantity ?? 1;
    return acc + (price * quantity)
  }, 0)

  return total
}

export async function POST(req: Request) {
  const { userId } = useAuth()
  const { items, payment_intent_id } = await req.json();

  if (!userId) {
    return new Response("unauthorized", { status: 401 });
  }

  const customerId = 'cus_R9wBIJnRRFT6LU'
  const total = calculateAmount(items)

  const orderData ={
    user: {connect: {id : 1}},
    amount: total,
    currency: 'brl',
    status: 'peding',
    paymentIntentID: payment_intent_id,
    products: {
      create: items.map((item : ProductProps) => ({
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image_url
      })),
    }
  }

  if(payment_intent_id){

  }else{
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateAmount(items),
      currency: 'brl',
      automatic_payment_methods: {enabled: true}
    });
    orderData.paymentIntentID = paymentIntent.id;
    const newOrder= await prisma.order.create({
      data:orderData
    })
    return Response.json({})
  }

}