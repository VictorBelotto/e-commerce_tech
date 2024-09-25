import prisma from "@/app/lib/prisma";
import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from 'svix';

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

type EventType = 'user.created' | 'user.updated' | '*';

type Event = {
  data: EventDataType,
  object: 'event',
  type: EventType
};

type EventDataType = {
  id: string,
  first_name: string,
  last_name: string,
  email_addresses: EmailAddressType[],
  primary_email_address_id: string,
  attributes: Record<string, string | number>,
};

type EmailAddressType = {
  id: string,
  email_address: string,
};

async function handler(request: Request) {
  const payload = await request.json();
  const headerList = headers();

  // Garantir que os cabeçalhos necessários não sejam nulos
  const heads: WebhookRequiredHeaders = {
    'svix-id': headerList.get('svix-id') || '', // Use uma string vazia se o cabeçalho for nulo
    'svix-timestamp': headerList.get('svix-timestamp') || '',
    'svix-signature': headerList.get('svix-signature') || '',
  };

  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event;
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  const eventType: EventType = evt.type;

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const {
      id,
      first_name,
      last_name,
      email_addresses,
      primary_email_address_id,
      ...attributes
    } = evt.data;

    await prisma.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id as string,
        firstName: first_name,
        lastName: last_name,
        email: email_addresses.find(email => email.id === primary_email_address_id)?.email_address || '',
        attributes,
      },
      update: {
        firstName: first_name,
        lastName: last_name,
        email: email_addresses.find(email => email.id === primary_email_address_id)?.email_address || '',
        attributes,
      }
    });

    return NextResponse.json({}, { status: 200 });
  }

  return NextResponse.json({}, { status: 400 });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
