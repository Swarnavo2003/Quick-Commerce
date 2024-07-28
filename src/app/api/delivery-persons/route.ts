import { db } from "@/lib/db/db";
import { deliveryPersons } from "@/lib/db/schema";
import { deliveryPersonSchema } from "@/lib/validators/deliveryPersonSchema";

export async function POST(request: Request) {
  const requestData = await request.json();

  let validatedData;
  try {
    validatedData = await deliveryPersonSchema.parse(requestData);
  } catch (error) {
    return Response.json({ message: error }, { status: 400 });
  }

  try {
    await db.insert(deliveryPersons).values(validatedData);
    return Response.json({ message: "OK" }, { status: 201 });
  } catch (error) {
    return Response.json(
      { message: "Failed to dtore the delivery person into the database" },
      { status: 500 }
    );
  }
}