import fs from "node:fs/promises";
import { GLOBAL } from "./variables";

type MarkdownData<T extends object> = {
  frontmatter: T;
  file: string;
  url: string;
};

/**
 * This function processes the content of a directory and returns an array of processed content.
 * It takes a content type, a function to process the content, and an optional directory.
 * If no directory is provided, it defaults to the current working directory.
 * 
 * @param contentType the type of content to process
 * @param processFn the function to process the content
 * @param dir the directory to process the content from
 * @returns a promise that resolves to an array of processed content
 */
export const processContentInDir = async <T extends object, K>(
  contentType: "projects" | "blog" | "work",
  processFn: (data: MarkdownData<T>) => K,
  dir: string = process.cwd(),
) => {
  const files = await fs.readdir(dir + `/src/pages/${contentType}`);

  const markdownFiles = files
    .filter((file: string) => file.endsWith(".mdx"))
    .map((file) => file.split(".")[0]);

  const readMdFileContent = async (file: string) => {
    if (contentType === "projects") {
      const content = import.meta
        .glob(`/src/pages/projects/*.{md,mdx}`)
      [`/src/pages/projects/${file}.mdx`]();
      const data = (await content) as {
        frontmatter: T;
        file: string;
        url: string;
      };
      return processFn(data);
    }
    else if (contentType === "blog") {
      const content = import.meta
        .glob(`/src/pages/blog/*.{md,mdx}`)
      [`/src/pages/blog/${file}.mdx`]();
      const data = (await content) as {
        frontmatter: T;
        file: string;
        url: string;
      };
      return processFn(data);
    }
    else if (contentType === "work") {
      const content = import.meta
        .glob(`/src/pages/work/*.{md,mdx}`)
      [`/src/pages/work/${file}.mdx`]();
      const data = (await content) as {
        frontmatter: T;
        file: string;
        url: string;
      };
      return processFn(data);
    }
  };
  return await Promise.all(markdownFiles.map(readMdFileContent));
};

/**
 * Shortens a string by removing words at the end until it fits within a certain length.
 * @param content the content to shorten
 * @param maxLength the maximum length of the shortened content (default is 20)
 * @returns a shortened version of the content
 */
export const getShortDescription = (content: string, maxLength = 20) => {
  try {
    const splitByWord = content.split(" ");
    const length = splitByWord.length;
    return length > maxLength ? splitByWord.slice(0, maxLength).join(" ") + "..." : content;
  } catch (error) {
    console.error("Error splitting content:", error);
    return content;
  }

};

/**
 * Processes the date of an article and returns a string representing the processed date.
 * @param timestamp the timestamp to process
 * @returns a string representing the processed timestamp
 */
export const processArticleDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const monthSmall = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${monthSmall} ${day}, ${year}`;
};

/**
 * Generates a source URL for a content item. The URL is used in meta tags and social media cards.
 * @param sourceUrl the source URL of the content
 * @param contentType the type of content (either "projects" or "blog")
 * @returns a string representing the source URL with the appropriate domain
 */
export const generateSourceUrl = (
  sourceUrl: string,
  contentType: "projects" | "blog" | "work",
) => {
  return `${GLOBAL.rootUrl}/${contentType}/${sourceUrl}`;
};

export function displayQuote() {
  const Quotes = [
    "<div>To do a thing today, and the same tomorrow<br>Gathering is the essence of knowledge<br>Thus one may achieve wisdom<br>For streams are but the gatherings of drops</div>"
  ];
  const index = Math.floor(Math.random() * Quotes.length);
  return Quotes[index];
}
