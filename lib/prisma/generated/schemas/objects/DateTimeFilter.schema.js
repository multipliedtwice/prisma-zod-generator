"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeFilterObjectSchema = void 0;
const zod_1 = require("zod");
const NestedDateTimeFilter_schema_1 = require("./NestedDateTimeFilter.schema");
// @ts-ignore
const Schema = zod_1.z
    .object({
    equals: zod_1.z.coerce.date().optional(),
    in: zod_1.z.coerce.date().array().optional(),
    notIn: zod_1.z.coerce.date().array().optional(),
    lt: zod_1.z.coerce.date().optional(),
    lte: zod_1.z.coerce.date().optional(),
    gt: zod_1.z.coerce.date().optional(),
    gte: zod_1.z.coerce.date().optional(),
    not: zod_1.z
        .union([zod_1.z.coerce.date(), zod_1.z.lazy(() => NestedDateTimeFilter_schema_1.NestedDateTimeFilterObjectSchema)])
        .optional(),
})
    .strict();
exports.DateTimeFilterObjectSchema = Schema;
//# sourceMappingURL=DateTimeFilter.schema.js.map