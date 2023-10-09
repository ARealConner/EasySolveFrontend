export function formatText(text: string): string {
    text = text.replaceAll("Underscore", "_");
    text = text.replace(/_(\w+)/g, function (match, p1) {
        return `<sub>${p1}</sub>`;
    });
    return text;
}
