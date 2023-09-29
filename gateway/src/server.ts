import express, { Request, Response } from "express";
import axios, { AxiosError } from "axios";
import cors from "cors";

const NEWSLETTER_APP_URL =
  process.env.NEWSLETTER_APP_URL || "http://localhost:3000";

const ADM_PASSWORD = process.env.ADM_PASSWORD || "admin";

const SERVER_PORT = process.env.SERVER_PORT || 8000;

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3030";

const api = axios.create({
  baseURL: NEWSLETTER_APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const options: cors.CorsOptions = {
  origin: [FRONTEND_URL],
};

const app = express();
app.use(express.json());
app.use(cors(options));

app.post("/users", async (request: Request, response: Response) => {
  console.log("POST /users");

  const { name, email } = request.body;

  console.log(name, email);

  const jsonData = JSON.stringify({ name, email });

  try {
    const result = await api.post("/users", jsonData);

    response.status(201).send();
  } catch (e) {
    const axiosError = e as AxiosError;

    console.log("Error:", axiosError.response);
    console.log("Error:", axiosError.message);

    response.status(500).send();
  }
});

app.post("/newsletter", async (request: Request, response: Response) => {
  console.log("POST /newsletter");

  const { message, password } = request.body;

  console.log(message, password);

  if (!(password === ADM_PASSWORD)) {
    response.status(401).send();
  }

  try {
    const jsonData = JSON.stringify({ message });

    const result = await api.post("/newsletter", jsonData);

    const responseData = result.data;

    return response.status(200).send(responseData);
  } catch (e) {
    const axiosError = e as AxiosError;

    console.log("Error:", axiosError.response);

    response.status(500).send();
  }
});

app.listen(SERVER_PORT, () => {
  console.log("Server running on port " + SERVER_PORT);
});
