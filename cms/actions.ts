"use server";

import { headers } from "next/headers";
import { CMSReceipt, InterestData, createInterest } from ".";
import email from "./email";

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

export const handleContactForm = async (data: InterestData): Promise<{ messageId: string } | null> => {

   let interestData: InterestData = { ...data };

   interestData.ip = getIPAddress();
   interestData.device = getHeaders();

   const mail = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: data.email,
      subject: "[Website] Nova mensagem de contato: " + data.name + " <" + data.email + ">",
      text: parseInterestData(interestData),
      html: parseInterestDataHtml(interestData),
   };

   // Send data to CMS
   try {
      const { messageId } = await email(mail);
      return { messageId}
   } catch (error) {
      console.error("Error sending email", error);
      return null;
   }
}

export const parseInterestData = (data: InterestData): string => {
   return `
      Nome: ${data.name}\n
      Email: ${data.email}\n
      
      Mensagem: 
      ${data.message}\n
      
      IP: ${data.ip}\n
   `.trim();
}

const parseInterestDataHtml = (data: InterestData): string => {
   return `
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      
      <p><strong>Mensagem:</strong> <br>${data.message}</p>
      
      <p><strong>IP:</strong> ${data.ip}</p>
   `;
}
