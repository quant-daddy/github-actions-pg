import { Client } from "pg";

export const sum = (args: { num1: number; num2: number }) =>
  args.num1 + args.num2;

export const pgHello = async () => {
  const client = new Client({
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  const res = await client.query("SELECT $1::text as message", [
    "Hello world!",
  ]);
  await client.end();
  return res.rows[0].message;
};

if (require.main === module) {
  // eslint-disable-next-line no-console
  console.log("hello world");
}
