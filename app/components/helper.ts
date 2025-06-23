export function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) return text;
    let truncated = text.slice(0, maxLength);
    truncated = truncated.slice(0, truncated.lastIndexOf(" "));
    return truncated + "...";
  }
  