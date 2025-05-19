"use client";

import React, { useRef, useState } from "react";
import {
  ArrowRight,
  Banknote,
  Building2,
  Dices,
  Fingerprint,
  IdCard,
  Mail,
  MapPin,
  Smartphone,
  User,
} from "lucide-react";
import { useMask, MaskOptions } from "@react-input/mask";
import { useRouter } from "next/navigation";
import { GeradorPix } from "@/@types/geradorPix";
import CurrencyInput from "react-currency-input-field";

type Option = {
  label: string;
  type: GeradorPix.KeyType;
  icon: typeof ArrowRight;
  mask: string;
};

const options: Option[] = [
  {
    label: "Telefone",
    type: GeradorPix.KeyType.Telefone,
    icon: Smartphone,
    mask: "(__) 9____-____",
  },
  {
    label: "CPF",
    type: GeradorPix.KeyType.Cpf,
    icon: IdCard,
    mask: "___.___.___-__",
  },
  {
    label: "Email",
    type: GeradorPix.KeyType.Email,
    icon: Mail,
    mask: "_",
  },
  {
    label: "CNPJ",
    type: GeradorPix.KeyType.Cnpj,
    icon: Building2,
    mask: "__.___.___/____-__",
  },
  {
    label: "Aleatoria",
    type: GeradorPix.KeyType.Outro,
    icon: Dices,
    mask: "_",
  },
];

const detectMask = (
  value: string,
  previous: GeradorPix.KeyType | null
): Option["type"] => {
  const hasLetters = /[a-zA-Z@]/.test(value);
  const hasArroba = value.includes("@");

  if (value == "") return GeradorPix.KeyType.Cpf;
  if (previous === GeradorPix.KeyType.Telefone) value = value.slice(0, 2) + value.slice(3);
  if (previous === GeradorPix.KeyType.Cpf || previous === GeradorPix.KeyType.Cnpj || previous === GeradorPix.KeyType.Telefone)
    value = value.replace(/\D/g, "");

  if (value.length <= 10 && !hasLetters) {
    return GeradorPix.KeyType.Telefone;
  }

  if (value.length <= 11 && !hasLetters) {
    return GeradorPix.KeyType.Cpf;
  }

  if (value.length <= 14 && !hasLetters) {
    return GeradorPix.KeyType.Cnpj;
  }

  if (hasArroba) {
    return GeradorPix.KeyType.Email;
  }

  return GeradorPix.KeyType.Outro;
};

const defaultMask = options[0].mask;
let previous: GeradorPix.KeyType | null = null;

const Hero: React.FC = () => {
  const router = useRouter();
  const [keyType, setKeyType] = useState<Option["type"]>();
  const amountRef = useRef<number>(0);
  const maskOptions: MaskOptions = {
    mask: defaultMask,
    replacement: {
      _: /./,
    },
    modify: ({ value, data, selectionStart }) => {
      const _value = value.slice(0, selectionStart) + (data ?? "");

      const maskToUse = detectMask(_value.trim(), previous);
      const option =
        options.find(({ type }) => type == maskToUse) ?? options[0];

      previous = maskToUse;

      setKeyType(maskToUse);

      if (option.type == GeradorPix.KeyType.Email || option.type == GeradorPix.KeyType.Outro)
        return {
          mask: option.mask.padStart(_value.length + 1, "_"),
          showMask: false,
        };

      return { mask: option.mask };
    },
  };

  const ref = useMask(maskOptions);
  const option = options.find(({ type }) => type == keyType) ?? options[0];
  const Icon = option?.icon;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const params = new URLSearchParams();

    for (const [key, v ] of formData.entries()) {
      const value = v.toString();

      if (value != null && !!value.length){
        if (key == "amount") params.append(key, amountRef.current.toString());
        else params.append(key, value);
      }
    }

    params.append("keyType", keyType!);

    router.push("/pagar?"+params);
  }

  return (
    <section id="gerar" className="py-12 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 animate-fade-in">
            Gere e compartilhe seus dados Pix com{" "}
            <span className="text-primary-600">facilidade</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-slide-up">
            Simplifique seus recebimentos com nosso gerador de Pix. Crie um link
            personalizado para compartilhar com clientes, amigos ou familiares.
          </p>

          <div className="mt-10">
            <form className="mx-auto max-w-lg animate-slide-up" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-col gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    ref={ref}
                    className="input pl-10"
                    placeholder="Sua chave pix"
                    name="key"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    className="input pl-10"
                    placeholder="Seu nome"
                    name="name"
                    maxLength={100}
                    required/>
                </div>
                <div className="flex flex-row gap-3">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Banknote className="w-5 h-5 text-gray-400" />
                    </div>
                    <CurrencyInput
                      className="input pl-10"
                      name="amount"
                      placeholder="Valor (opcional)"
                      prefix="R$"
                      decimalsLimit={2}
                      onValueChange={(_, __, values) => amountRef.current = values?.float ?? 0}
                      />
                  </div>
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      className="input pl-10"
                      placeholder="Cidade (opcional)"
                      name="location"
                      maxLength={20}/>
                  </div>
                </div>
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Fingerprint className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    className="input pl-10"
                    placeholder="Identificador (opcional)"
                    name="reference"
                    maxLength={15}/>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary sm:w-auto flex items-center justify-center gap-2"
                >
                  <span>Gerar agora</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
