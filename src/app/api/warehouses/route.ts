import { db } from "@/lib/db/db";
import { warehouses } from "@/lib/db/schema";
import { warehouseSchema } from "@/lib/validators/warehouseSchema";
import { desc } from "drizzle-orm";

export async function POST(request: Request) {
  // todo: chech auth
  const requestData = await request.json();

  let validatedData;
  try {
    validatedData = await warehouseSchema.parse(requestData);
  } catch (error) {
    return Response.json({ message: error }, { status: 400 });
  }

  try {
    await db.insert(warehouses).values(validatedData);

    return Response.json({ message: "OK" }, { status: 201 });
  } catch (error) {
    return Response.json(
      { message: "Failed to store the warehouse" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const allWarehouses = await db
      .select()
      .from(warehouses)
      .orderBy(desc(warehouses.id));

    return Response.json(allWarehouses);
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch all warehouses" },
      { status: 500 }
    );
  }
}