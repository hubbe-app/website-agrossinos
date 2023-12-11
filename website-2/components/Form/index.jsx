
'use client';

import { Label, TextInput, Textarea } from 'flowbite-react';

export default function Form() {
  return (
    <div className="flex md:w-2/4 w-3/4 flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="small" value="Nome" />
        </div>
        <TextInput id="small" type="text" sizing="sm" className="border-gray-100" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="base" value="E-mail" />
        </div>
        <TextInput id="base" type="text" sizing="md" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Mensagem" />
        </div>
        <Textarea id="comment" required rows={4} />
      </div>
      <p>
        <button className="bg-[#4C5938] py-3 px-5 rounded-md text-white" type="submit">Enviar</button>
      </p>
    </div>
  );
}
