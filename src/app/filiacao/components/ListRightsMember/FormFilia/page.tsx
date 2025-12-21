'use client';

import React, { useState } from 'react';

import { sendEmail } from '@/src/services/api/emailService';

export default function FormFilia() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    await sendEmail({
      name: String(formData.get('name')),
      ra: String(formData.get('ra')),
      email: String(formData.get('email')),
      year: String(formData.get('year')),
      position: formData.get('position')?.toString(),
    });

    setLoading(false);
  }
  return (
    <section className="w-full bg-gray-100 rounded-2xl shadow p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-red-600">
        Filie-se por aqui
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Nome completo
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Digite seu nome completo"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Registro Acadêmico (RA)
          </label>
          <input
            type="number"
            name="ra"
            required
            placeholder="Digite o número do seu RA"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            E-mail institucional
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="exemplo@uem.br"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Ano de ingresso
          </label>
          <input
            type="date"
            name="year"
            required
            placeholder="Ex: 2023"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Cargo específico{' '}
            <span className="text-gray-500 text-sm">(opcional)</span>
          </label>
          <input
            type="text"
            name="position"
            placeholder="Ex: Coordenador de eventos"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>
        <p className="text-sm text-gray-600 mt-4 italic">
          ⚠️ Apenas estudantes regularmente matriculados no curso de{' '}
          <span className="font-semibold text-red-600">
            Ciência da Computação
          </span>{' '}
          poderão ter a filiação aprovada.
        </p>

        <button
          disabled={loading}
          className="w-full bg-red text-white font-semibold py-2 rounded-md mt-4 hover:bg-red-700 transition-colors"
        >
          {loading ? 'Enviando..' : 'Enviar'}
        </button>
      </form>
    </section>
  );
}
