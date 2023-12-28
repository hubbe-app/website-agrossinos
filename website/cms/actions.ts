"use server";

import { CMSReceipt, createInterest } from ".";

export const handleContactForm = async (data: any): Promise<CMSReceipt> => {

   // Validate data

   // Send data
   return await createInterest({ name: data.name, email: data.email, message: data.comment })
}
