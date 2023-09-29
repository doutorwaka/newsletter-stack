import { backendApi } from "@/utils/api";
import { AxiosError } from "axios";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = JSON.stringify(await request.json());

  try {
    const result = await backendApi.post("/newsletter", data);

    const responseData = JSON.stringify(result.data);

    return new Response(responseData, { status: 200 });
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
