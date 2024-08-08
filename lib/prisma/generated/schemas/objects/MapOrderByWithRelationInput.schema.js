"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
// @ts-ignore
const Schema = zod_1.z
    .object({
    key: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
    value: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.MapOrderByWithRelationInputObjectSchema = Schema;
//# sourceMappingURL=MapOrderByWithRelationInput.schema.js.map