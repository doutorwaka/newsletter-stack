"use client";

import { nextApi } from "@/utils/api";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useState } from "react";

type NewsletterFormType = {
  message: string;
  password: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<NewsletterFormType>();

  const [message, setMessage] = useState(<></>);

  async function newsletterFormSubmitHandler({
    message,
    password,
  }: NewsletterFormType) {
    const jsonData = JSON.stringify({ message, password });

    try {
      const response = await nextApi.post("/api/newsletter", jsonData);

      const aMessage = JSON.stringify(response.data)

      setMessage(<div className="text-green-800 p-8">{aMessage}</div>);
    } catch (e) {
      const axiosError = e as AxiosError;
      setMessage(<div className="text-red-500 p-8">{axiosError.message}</div>);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-auto my-8 rounded-lg bg-zinc-300 max-w-3xl">
      <div className="flex flex-col bg-zinc-100 items-center m-16 p-8 rounded-md">
        <h1 className="uppercase font-bold text-xl p-8">Newsletter</h1>
        <form onSubmit={handleSubmit(newsletterFormSubmitHandler)}>
          <div className="flex flex-col p-4 items-start space-y-2">
            <p className="font-bold">Mensagem:</p>
            <textarea
              {...register("message")}
              name="message"
              placeholder="Digite a mensagem"
              className="p-2 px-4 rounded-md border-[0.1rem] border-zinc-400 font-extralight"
            />
          </div>

          <div className="flex flex-col p-4 items-start space-y-2">
            <p className="font-bold">Senha:</p>
            <input
              {...register("password")}
              type="text"
              name="password"
              placeholder="Digite sua senha"
              className="p-2 px-4 rounded-md border-[0.1rem] border-zinc-400 font-extralight"
            ></input>
          </div>

          <div className="flex flex-col p-4 items-start space-y-2 w-full">
            <input
              type="submit"
              className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
            />
          </div>
        </form>
      </div>
      {message}
    </div>
  );
}
