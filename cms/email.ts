'use server';

import nodemailer from 'nodemailer';

/**
 * Represents a mail message.
 */
export type MailMessage = {
   from: string;
   to: string;
   subject: string;
   text: string;
   html?: string;
   replyTo?: string;
};

/**
 * Sends an email using the provided message object.
 * @param message - The message object containing the email details.
 * @returns A promise that resolves to an object with the sent email's message ID.
 * @throws If there is an error sending the email.
 */
const email = async (message: MailMessage): Promise<{ messageId: string }> => {
   try {
      const transporter = createTransporter();
      const result = await transporter.sendMail({ ...message });
      return { 
         messageId: result.messageId
      };
   } catch (error) {
      console.error('Error sending email:', error);
      throw error;
   }
}

/**
 * Creates a nodemailer transporter based on the configured email service.
 * @returns The nodemailer transporter.
 */
const createTransporter = () => {
   if (process.env.MAIL_SERVICE === 'gmail') {
      return nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
         },
      });
   }
   
   if (process.env.MAIL_SERVICE === 'sendgrid') {
      return nodemailer.createTransport({
         service: 'SendGrid',
         auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
         },
      });
   }

   if (process.env.MAIL_SERVICE === 'outlook') {
      return nodemailer.createTransport({
         host: 'smtp-mail.outlook.com',
         port: 587,
         secure: false,
         auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
         },
      });
   }

   if (process.env.MAIL_SERVICE === 'smtp') {
      return nodemailer.createTransport({
         host: process.env.MAIL_HOST,
         port: parseInt(process.env.MAIL_PORT),
         secure: process.env.MAIL_SECURE === 'true',
         auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
         },
      });
   }

   console.warn('No email service configured');
}

export default email;