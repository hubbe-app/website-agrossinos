'use client';

import React, { useEffect, useState } from 'react';
import { handleContactForm as handleContactFormAction } from '@/cms/actions'; // Rename the import
import { Label, TextInput, Textarea } from 'flowbite-react';

export default function Form() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({ message: '', className: 'text-green-500' });
  const [inputData, setInputData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState(null);

  const handleInputData = (e) => setInputData({ ...inputData, [e.target.name]: e.target.value });

  const submit = () => {
    
    const formErrors = validateForm(inputData);

    if (Object.keys(formErrors).length > 0) {
      console.log('Erros de validação:', formErrors);
      return false;
    }

    try {
      setLoading(true);
      (async (data) => {
        const { messageId } = await handleContactFormAction(data);
        setLoading(false);
        if (messageId) {
          setSuccess({ message: 'Mensagem enviada com sucesso!', className: 'text-green-500' });
        } else {
          setSuccess({ message: 'Falha ao enviar!', className: 'text-red-500' });
        }
      })(inputData);
    } catch (error) {
      console.warn(error);
    } finally {
      setTimeout(() => setSuccess({ message: '', className: 'text-green-500' }), 3000);
      setInputData({ name: '', email: '', message: '' });
      setLoading(false);
    }
  }

  const validateForm = (data) => {
    const errors = {};

    if (data.name.length < 3) {
      errors.name = 'Nome deve ter pelo menos 3 caracteres';
    }

    if (data.email.length < 3 || !data.email.includes('@')) {
      errors.email = 'Email inválido';
    }

    if (data.message.length < 3) {
      errors.message = 'Mensagem deve ter pelo menos 3 caracteres';
    }
    setErrors(errors);
    return errors;
  }

  return (
    <form>
      <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Nome" />
          </div>
          <TextInput disabled={loading} id="name" name='name' type="text" sizing="sm" minLength={3} className="border-gray-100" value={inputData.name} onChange={handleInputData} />
          {errors && errors.name && errors.name ? (
            <p className="text-red-600 text-[13px] pt-[5px]">O nome deve conter mais que 3 caracteres.</p>
          ) : null}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" name="email" value="E-mail" />
          </div>
          <TextInput disabled={loading} id="email" name="email" type="text" sizing="md" minLength={3} value={inputData.email} onChange={handleInputData} />
          {errors && errors.email && errors.email ? (
            <p className="text-red-600 text-[13px] pt-[5px]">O campo email é inválido.</p>
          ) : null}
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="message" name="message" value="Mensagem" />
          </div>
          <Textarea disabled={loading} id="message" name="message" required rows={4} minLength={3} value={inputData.message} onChange={handleInputData} />
          {errors && errors.message && errors.message ? (
            <p className="text-red-600 text-[13px] pt-[5px]">O campo mensagem deve conter mais que 3 caracteres.</p>
          ) : null}
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
