function titleCase(string) {
  return string
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

module.exports = titleCase;
