export const defaultCondition = {
  condition: {
    attribute: "",
    type: "string",
    operator: "=",
    literal: "",
  },
};

export const types = ["string", "boolean", "number", "date"];

export const stringTypeOperators = [
  { menuLabel: "equals", stringForm: "=", jsonForm: "equals" },
  {
    menuLabel: "does not equal",
    stringForm: "!=",
    jsonForm: "notEquals",
  },
  {
    menuLabel: "equals (same case)",
    stringForm: "^=",
    jsonForm: "stringEqualsExact",
  },
  {
    menuLabel: "matches (regexp)",
    stringForm: "=~",
    jsonForm: "stringMatchesRegEx",
  },
  {
    menuLabel: "does not match",
    stringForm: "!~",
    jsonForm: "stringNotMatchesRegEx",
  },
];

export const booleanTypeOperators = [
  { menuLabel: "is", stringForm: "=", jsonForm: "equals" },
  { menuLabel: "is not", stringForm: "!=", jsonForm: "notEquals" },
];

export const numberTypeOperators = [
  { menuLabel: "equals", stringForm: "=", jsonForm: "equals" },
  {
    menuLabel: "does not equal",
    stringForm: "!=",
    jsonForm: "notEquals",
  },
  {
    menuLabel: "is greater than",
    stringForm: ">",
    jsonForm: "greaterThan",
  },
  { menuLabel: "is less than", stringForm: "<", jsonForm: "lessThan" },
  {
    menuLabel: "is greater than or equal to",
    stringForm: ">=",
    jsonForm: "greaterThanEquals",
  },
  {
    menuLabel: "is less than or equal to",
    stringForm: "<=",
    jsonForm: "lessThanEquals",
  },
];

export const dateTypeOperators = [
  { menuLabel: "before", stringForm: "before", jsonForm: "before" },
  { menuLabel: "after", stringForm: "after", jsonForm: "after" },
  { menuLabel: "equals", stringForm: "=", jsonForm: "equals" },
  { menuLabel: "not equals", stringForm: "!=", jsonForm: "notEquals" },
];

export const selectOperatorList = (type) => {
  return type === "string"
    ? stringTypeOperators
    : type === "boolean"
    ? booleanTypeOperators
    : type === "number"
    ? numberTypeOperators
    : type === "date"
    ? dateTypeOperators
    : null;
};
