export function slugifier () {
    input.toLowerCase().replace("&", "and") .replace(/\s+/g, "-").replace(/[^a-z0-9-_ ]/gi, "") 
    return input
}