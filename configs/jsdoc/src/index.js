import { readFile } from "fs/promises";

export default JSON.parse(
  await readFile(new URL("./jsdoc-config.json", import.meta.url))
);
