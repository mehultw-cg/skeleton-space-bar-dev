'use server';

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';

export async function submitMessage(data: z.infer<typeof contactFormSchema>) {
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  // In a real application, you would integrate with an email service or save to a database.
  console.log('New message received:', parsedData.data);

  return { success: true, message: 'Your message has been sent successfully!' };
}
