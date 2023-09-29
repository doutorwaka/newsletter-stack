"use client";

import { nextApi } from "@/utils/api";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";

type UserFormType = {
  name: string;
  email: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<UserFormType>();

  async function useFormSubmitHandler({ name, email }: UserFormType) {
    const jsonData = JSON.stringify({ name, email });

    try {
      const response = await nextApi.post("/api/users", jsonData);
      alert("Usuário cadastro com sucesso!");
    } catch (e) {
      const axiosError = e as AxiosError;
      alert("Erro no cadastro: " + axiosError.message);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-auto my-8 rounded-lg bg-zinc-300 max-w-3xl">
      <div className="flex flex-col bg-zinc-100 items-center m-16 p-8 rounded-md">
        <h1 className="uppercase font-bold text-xl p-8">Newsletter</h1>
        <form onSubmit={handleSubmit(useFormSubmitHandler)}>
          <div className="flex flex-col p-4 items-start space-y-2">
            <p className="font-bold">Name:</p>
            <input
              {...register("name")}
              type="text"
              name="name"
              placeholder="Digite seu nome"
              className="p-2 px-4 rounded-md border-[0.1rem] border-zinc-400 font-extralight"
            ></input>
          </div>

          <div className="flex flex-col p-4 items-start space-y-2">
            <p className="font-bold">Email:</p>
            <input
              {...register("email")}
              type="text"
              name="email"
              placeholder="Digite seu email"
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
    </div>
  );
}
