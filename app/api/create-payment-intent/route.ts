import { stripe } from "@/app/lib/stripe";
import { auth } from "@clerk/nextjs/server";
import { ProductProps } from "@/app/lib/definitions";
import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

const calculateAmount = (items: ProductProps[]) => {
  const total = items.reduce((acc, value) => {
    const price = value.price ?? 0;
    const quantity = value.quantity ?? 1;
    return acc + (price * quantity)
  }, 0)
  return total
}

export async function POST(req: Request) {
  const { userId } = auth()
  const { items,  payment_intent_id} = await req.json();


  if (!userId) {
    return new Response("unauthorized", { status: 401 });
  }
  const total = calculateAmount(items)

  const orderData = {
    user: { connect: { id: 1 } },
    amount: total,
    currency: 'brl',
    status: 'peding',
    paymentIntentID: payment_intent_id,
    products: {
      create: items.map((item: ProductProps) => ({
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image_url[0],
        quantity: item.quantity ?? 1,
      })),
    }
  }

  if (payment_intent_id) {
    const current_intent = await stripe.paymentIntents.retrieve(payment_intent_id)

    if (current_intent) {
      const updated_intent = await stripe.paymentIntents.update(payment_intent_id, {
        amount: total,
      })
      const [existing_order, updated_order] = await Promise.all([
        prisma.order.findFirst({
          where: { paymentIntentID: payment_intent_id },
          include: { products: true }
        }),
        prisma.order.update({
          where: { paymentIntentID: payment_intent_id },
          data: {
            paymentIntentID : payment_intent_id,
            amount: total,
            products: {
              deleteMany: {},
              create: items.map((item: ProductProps) => ({
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image_url[0],
                quantity: item.quantity ?? 1,
              })),
            }
          }
        })
      ]);
      if (!existing_order) {
        return Response.json('Ordem não encontrada', { status: 404 })
      }
      return NextResponse.json({ paymentIntent: updated_intent }, { status: 200 })
    }
  } else {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateAmount(items),
      currency: 'brl',
      automatic_payment_methods: { enabled: true }
    });
  
    orderData.paymentIntentID = paymentIntent.id;

    const newOrder = await prisma.order.create({
      data: orderData
    })
    return NextResponse.json({ paymentIntent}, { status: 200 })
  }

}