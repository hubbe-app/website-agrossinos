'use client';

import React, { useEffect, useState } from 'react';
import { handleContactForm as handleContactFormAction } from '@/cms/actions'; // Rename the import
import { Label, TextInput, Textarea } from 'flowbite-react';

export default function Form() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({ message: '', className: 'text-green-500' });
  const [inputData, setInputData] = useState({ name: '', email: '', message: '' })

  const handleInputData = (e) => setInputData({ ...inputData, [e.target.name]: e.target.value });

  const submit = () => {
    setLoading(true);
    (async (data) => {
      const result = await handleContactFormAction(data);
      setLoading(false);
      if (result.success) {
        setSuccess({ message: 'Mensagem enviada com sucesso!', className: 'text-green-500' });
        setInputData({ name: '', email: '', message: '' });
      } else {
        setSuccess({ message: 'Falha ao enviar!', className: 'text-red-500' });
      }

    })(inputData);
  }

  return (
    <form>
      <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nome" />
          </div>
          <TextInput disabled={loading} id="name" name='name' type="text" sizing="sm" className="border-gray-100" value={inputData.name} onChange={handleInputData} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" name="email" value="E-mail" />
          </div>
          <TextInput disabled={loading} id="email" name="email" type="text" sizing="md" value={inputData.email} onChange={handleInputData} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="message" name="message" value="Mensagem" />
          </div>
          <Textarea disabled={loading} id="message" name="message" required rows={4} value={inputData.message} onChange={handleInputData} />
        </div>

        <div className='flex items-center'>
          <button className="bg-[#4C5938] py-3 px-5 mr-4 rounded-md text-white" type="button" onClick={() => submit(inputData)} disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
          <p className={success.className}>{success.message}</p>
        </div>

      </div>
    </form>
  );
}
