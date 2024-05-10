export function generateSlug(text: string): string {
    return text
        .toLowerCase() // converter para minúsculas
        .normalize("NFD") // remover acentos
        .replace(/[\u0300-\u036f]/g, "") // remover diacríticos
        .replace(/[^\w\s]/g, "") // remover símbolos
        .trim() // remover espaços em branco no início e no final
        .replace(/\s+/g, "-"); // substituir espaços por hífens
}