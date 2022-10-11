export const StickerSchema = {
  name: "Stickers",
  primaryKey: "_id",
  properties: {
    _id: "string",
    prefix: "string",
    number: "string",
    type: "string",
    pasted_at: "date"
  }
}