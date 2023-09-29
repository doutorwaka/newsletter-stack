import { NextRequest, NextResponse } from "next/server";
import { backendApi } from "@/utils/api";
import { AxiosError } from "axios";

export async function POST(request: NextRequest) {
  const data = JSON.stringify(await request.json());

  try {
    const response = await backendApi.post("/users", data);

    return NextResponse.json({ status: 201 });
  } catch (e) {
    const axiosError = e as AxiosError;

    if (axiosError.response) {
      return new Response(JSON.stringify(axiosError), {
        status: axiosError.response.status, // Erro no processamento lá no gateway
      });
    } else if (axiosError.request) {
      return new Response(JSON.stringify(new AxiosError("Request timeout")), {
        status: 408, // Request timeout
      });
    } else {
      return new Response(
        JSON.stringify(new AxiosError("Erro desconhecido", "500")),
        {
          status: 500, // Erro no processamento no servidor do Next
        }
      );
    }
  }
}
