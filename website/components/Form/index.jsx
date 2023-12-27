'use client';

import { handleContactForm } from '@/cms/actions';
import { Label, TextInput, Textarea } from 'flowbite-react';

export default function Form() {

  const handleContactFormAsync = async (event) => {
    const result = await handleContactForm(event);
    alert(JSON.stringify(result));
  }

  return (
    <form action={handleContactFormAsync}>
      <div className="flex md:w-2/4 w-3/4 flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nome" />
          </div>
          <TextInput id="name" name='name' type="text" sizing="sm" className="border-gray-100" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" name="email" value="E-mail" />
          </div>
          <TextInput id="email" name="email" type="text" sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="comment" name="comment" value="Mensagem" />
          </div>
          <Textarea id="comment" name="comment" required rows={4} />
        </div>
        <p>
          <button className="bg-[#4C5938] py-3 px-5 rounded-md text-white" type="submit">Enviar</button>
        </p>
      </div>
    </form>
  );
}
