const imageModules = import.meta.glob("./images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export function getImageUrl(filename) {
  if (!filename) return "";

  return imageModules[`./images/${filename}`] ?? "";
}
