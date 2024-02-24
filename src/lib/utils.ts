export function slugify(str: string): string {
    const slug: string = str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return slug;
}

export function deslugify(slug: string): string {
    const text: string = slug
        .replace(/-/g, ' ')
        .replace(/\s\s+/g, ' ')
        .trim();

    return text;
}