import postgres from "postgres";

const sql = postgres({
  host: "localhost",
  port: 5432,
  database: "nextdocs26",
  username: "ronyortiz",
  password: "",
});

const listInvoices = async () => {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666
  `;
  return data;
};

export const GET = async () => {
  try {
    return Response.json(await listInvoices());
  } catch (err) {
    return Response.json({ err }, { status: 500 });
  }
};
