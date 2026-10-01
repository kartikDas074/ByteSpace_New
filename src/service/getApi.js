'use server'

import fs from "fs/promises";
import path from "path";

export const getApi = async (url) => {
  const filePath = path.join(process.cwd(), "public", url);

  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
};