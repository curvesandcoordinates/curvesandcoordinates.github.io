import { QuartzTransformerPlugin } from "../types"

export const FixDisplayMath: QuartzTransformerPlugin = () => {
  return {
    name: "FixDisplayMath",

    textTransform(_ctx, src) {
      // Handle blockquotes / callouts first
      src = src.replace(
        /^>\s*\$\$([^\n]+?)\$\$$/gm,
        (_match, expr) => {
          return [
            ">",
            "> $$",
            `> ${expr.trim()}`,
            "> $$",
          ].join("\n")
        },
      )

      // Handle all remaining single-line $$...$$
      src = src.replace(
        /\$\$([^\n]+?)\$\$/g,
        (_match, expr) => {
          return `\n$$\n${expr.trim()}\n$$\n`
        },
      )

      return src
    },
  }
}