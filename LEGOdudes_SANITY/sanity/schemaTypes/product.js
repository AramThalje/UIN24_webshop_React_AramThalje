import { slugifier } from "./helpers";

export const product = {
    name: "product",
    title: "Produkt",
    type: "document", // Rettet fra "typ" til "type"
    fields: [
        {
            name: "producttitle",
            title: "Produktnavn",
            type: "string",
        },

        {
            name: "slug",
            title: "pen URL",
            type: "slug",
            options: {
                source: "producttitle",
                slugifiy: input => slugifier(input)
            }

        },
        {
            name: "productimage",
            title: "Produktbilde",
            type: "image",
        },
        {
            name: "price",
            title: "Pris",
            type: "number",
        },
        {
            name: "category",
            title: "Kategori",
            type: "reference",
            to: [{ type: "category" }], // Referanse til "category"-schemaet
        }
    ]
}