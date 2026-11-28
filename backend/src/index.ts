import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { Pool } from "pg";

config();
const PORT = process.env.API_PORT;
const app = express();

app.use(cors());

const db = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

app.get("/", (req, res) => {
  res.json({ message: "API location OK" });
});

app.get("/voitures", async (req, res) => {
  const { rows } = await db.query("SELECT * FROM voitures");
  res.json(rows);
});

app.get("/voitures/:id", async (req, res) => {
  const { rows } = await db.query("SELECT * FROM voitures WHERE id=$1", [
    Number(req.params.id),
  ]);
  res.json(rows[0]);
});

app.delete("/voitures/:id", async (req, res) => {
  const { rows } = await db.query("DELETE FROM voitures WHERE id=$1", [
    Number(req.params.id),
  ]);
  res.json(rows[0]);
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
