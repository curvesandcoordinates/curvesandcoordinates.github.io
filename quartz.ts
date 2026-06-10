import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypes } from "./quartz/plugins"
import TagNavigation from "./quartz/components/TagNavigation"
import {FixDisplayMath} from "./quartz/plugins/transformers/FixDisplayMath"

const config = await loadQuartzConfig()

const tagNavigation = TagNavigation({
  title: "Explore tags",
  limit: 18,
  minimumCount: 1,
})


config.plugins.transformers = [
  ...config.plugins.transformers,
  FixDisplayMath(),
]

const baseLayout = await loadQuartzLayout()
baseLayout.defaults.left = [...(baseLayout.defaults.left ?? []), tagNavigation]

for (const [pageType, pageTypeLayout] of Object.entries(baseLayout.byPageType)) {
  if (pageType === "404" || !pageTypeLayout.left) continue
  pageTypeLayout.left = [...pageTypeLayout.left, tagNavigation]
}

config.plugins.emitters = [
  ...config.plugins.emitters.filter((emitter) => emitter.name !== "PageTypeDispatcher"),
  PageTypes.PageTypeDispatcher({
    defaults: baseLayout.defaults,
    byPageType: baseLayout.byPageType,
  }),
]

export default config
export const layout = baseLayout
