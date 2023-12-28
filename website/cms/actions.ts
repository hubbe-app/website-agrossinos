"use server";

import { headers } from "next/headers";
import { CMSReceipt, InterestData, createInterest } from ".";

const getIPAddress = () => {
   return getRequestHeaders().get("x-forwarded-for");
}

const getRequestHeaders = () => {
   return headers();
}

const getHeaders = () => {
   let result: Record<string, any> = {};
   const headers = getRequestHeaders();
   headers.forEach((value, key) => {
      result[key] = value;
   });
   return result;
}

export const handleContactForm = async (data: FormData): Promise<any> => {

   let dump: { name: string, email: string, message: string } = { name: "", email: "", message: "" };

   data.forEach((value, key) => { dump[key] = value; });

   let interestData: InterestData = { ...dump };

   interestData.ip = getIPAddress();
   interestData.device = getHeaders();

   console.log(interestData);

   // Send data to CMS
   return await createInterest(interestData);
}
