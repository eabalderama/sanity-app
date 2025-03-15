"use client";

export default function sanityLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) {
  const prj = "prabpzwy";
  const dataset = "production";
  const url = new URL(`https://cdn.sanity.io/images/${prj}/${dataset}${src}`);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  url.searchParams.set("w", width.toString());
  if (quality) {
    url.searchParams.set("q", quality.toString());
  }
  return url.href;
}
