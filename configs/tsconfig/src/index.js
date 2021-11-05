import { readFileSync } from "fs";

export const tsconfig = JSON.parse(readFileSync("./tsconfig.json", "utf8"));

export const tsconfigBuildTypes = JSON.parse(
  readFileSync("./tsconfig.build-types.json", "utf8")
);

export default { tsconfig, tsconfigBuildTypes };
