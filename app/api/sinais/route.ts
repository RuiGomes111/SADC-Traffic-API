import { NextResponse } from "next/server";
import { sinais } from "../../data/sinais";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fields = searchParams.get("fields");

  let data = sinais;

  if (fields) {
    const selectedFields = fields.split(",");

    data = sinais.map((sinal) => {
      const obj: any = {};

      selectedFields.forEach((field) => {
        if (field in sinal) {
          obj[field] = sinal[field as keyof typeof sinal];
        }
      });

      return obj;
    });
  }

  return NextResponse.json(data, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}