'use server';

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from 'zod';

export interface State {
  errors?: {
    title?: string[];
  },
  message?: string | null;
}

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: 'Minimum length of 3 letters is required'
  }),
});

export async function create(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get('title')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or incorrect fields'
    };
  }

  try {
    const { title } = validatedFields.data;
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: 'Database error',
      errors: {}
    };
  }

  revalidatePath('/organization/org_2mJvntuAtgJMXRMNaWjM4T8zO5Y');
  redirect('/organization/org_2mJvntuAtgJMXRMNaWjM4T8zO5Y');
}
