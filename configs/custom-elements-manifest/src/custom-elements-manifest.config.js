import { readmePlugin } from "cem-plugin-readme";

export default {
  exclude: [
    "./coverage/",
    "./docs/",
    "./stories",
    "./test",
		"./_site/test",
    "./storybook-static"
  ],
  globs: ["*-*.js", "src/"],
  litelement: true,
  plugins: [readmePlugin()]
};
