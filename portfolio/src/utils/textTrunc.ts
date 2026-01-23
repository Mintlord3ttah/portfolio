export function textTruncate(text: string, length: number): string{
    const trunc = text.substring(0, length)
    return trunc+"..."
}