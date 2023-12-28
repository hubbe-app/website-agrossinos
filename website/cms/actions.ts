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

export const handleContactForm = async (data: InterestData): Promise<any> => {

   let interestData: InterestData = { ...data };

   interestData.ip = getIPAddress();
   interestData.device = getHeaders();

   // Send data to CMS
   return await createInterest(interestData);
}
