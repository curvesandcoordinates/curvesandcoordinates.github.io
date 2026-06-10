import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

type Options = {
  title?: string
  limit?: number
  minimumCount?: number
  exclude?: string[]
}

const defaultOptions: Required<Options> = {
  title: "Explore tags",
  limit: 24,
  minimumCount: 1,
  exclude: [],
}

function normalizeTag(tag: unknown): string | undefined {
  if (typeof tag !== "string") return undefined
  const normalized = tag.trim().replace(/^#/, "")
  return normalized.length > 0 ? normalized : undefined
}

function getFrontmatterTags(tags: unknown): unknown[] {
  if (Array.isArray(tags)) return tags
  if (typeof tags === "string") return [tags]
  return []
}

const TagNavigation: QuartzComponentConstructor<Options | undefined> = (userOptions) => {
  const options: Required<Options> = {
    title: userOptions?.title ?? defaultOptions.title,
    limit: userOptions?.limit ?? defaultOptions.limit,
    minimumCount: userOptions?.minimumCount ?? defaultOptions.minimumCount,
    exclude: userOptions?.exclude ?? defaultOptions.exclude,
  }
  const excludedTags = new Set(options.exclude.map((tag) => tag.toLowerCase()))

  const Component: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const tagCounts = new Map<string, number>()

    for (const file of allFiles) {
      const tags = new Set<string>()

      for (const rawTag of getFrontmatterTags(file.frontmatter?.tags)) {
        const tag = normalizeTag(rawTag)
        if (!tag || excludedTags.has(tag.toLowerCase())) continue
        tags.add(tag)
      }

      for (const tag of tags) {
        tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1)
      }
    }

    const tags = [...tagCounts.entries()]
      .filter(([, count]) => count >= options.minimumCount)
      .sort(([tagA, countA], [tagB, countB]) => countB - countA || tagA.localeCompare(tagB))
      .slice(0, options.limit)

    if (tags.length === 0) return null

    return (
      <nav class="tag-navigation" aria-labelledby="tag-navigation-title">
        <h2 id="tag-navigation-title">{options.title}</h2>
        <ul>
          {tags.map(([tag, count]) => (
            <li>
              <a
                class="internal tag-navigation-link"
                href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
              >
                <span class="tag-navigation-name">#{tag}</span>
                <span class="tag-navigation-count">{count}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  Component.displayName = "TagNavigation"
  Component.css = `
.tag-navigation {
  margin: 1.25rem 0;
}

.tag-navigation h2 {
  margin: 0 0 0.6rem;
  color: var(--dark);
  font-size: 0.95rem;
}

.tag-navigation ul {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tag-navigation li {
  margin: 0;
}

.tag-navigation-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-height: 1.9rem;
  padding: 0.25rem 0.45rem;
  border-radius: 6px;
  color: var(--darkgray);
  text-decoration: none;
}

.tag-navigation-link:hover {
  background: var(--highlight);
  color: var(--secondary);
}

.tag-navigation-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tag-navigation-count {
  min-width: 1.35rem;
  padding: 0.05rem 0.35rem;
  border: 1px solid var(--lightgray);
  border-radius: 999px;
  color: var(--gray);
  font-size: 0.75rem;
  line-height: 1.25;
  text-align: center;
}
`

  return Component
}

export default TagNavigation
