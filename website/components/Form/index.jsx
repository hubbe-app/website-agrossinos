'use client';

import React, { useState } from 'react';
import { handleContactForm as handleContactFormAction } from '@/cms/actions'; // Rename the import
import { Label, TextInput, Textarea } from 'flowbite-react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleContactFormLocal = async (formData) => {
    return { ...formData };
  };

  const handleContactFormAsync = async (event) => {
    const result = await handleContactFormAction({ name, email, comment });
  }

  return (
    <form action={handleContactFormAsync}>
      <div className="flex flex-col gap-4">
        
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nome" />
          </div>
          <TextInput id="name" name='name' type="text" sizing="sm" className="border-gray-100" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" name="email" value="E-mail" />
          </div>
          <TextInput id="email" name="email" type="text" sizing="md" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="message" name="message" value="Mensagem" />
          </div>
          <Textarea id="message" name="message" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        
        <p>
          <button className="bg-[#4C5938] py-3 px-5 rounded-md text-white" type="submit">Enviar</button>
        </p>

      </div>
    </form>
  );
}
