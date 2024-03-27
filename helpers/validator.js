const mongoose = require("mongoose");

const badRequestValidator = (error) => {
  if (error instanceof mongoose.Error.ValidationError) {
    const validationErrors = {};
    for (const field in error.errors) {
      validationErrors[field] = error.errors[field].message;
    }

    return { errors: validationErrors };
  }
};

const validateReqBody = (body, SchemaName) => {
  const reqKeys = Object.keys(body);
  const schemaKeys = Object.keys(SchemaName.schema.paths).filter(
    (key) => key !== "_id" && key !== "__v"
  );
  const missingKeys = reqKeys.filter((key) => !schemaKeys.includes(key));
  const extraKeys = schemaKeys.filter((key) => !reqKeys.includes(key));

  if (missingKeys.length > 0) {
    return {
      error: `Fields not present in the schema: ${missingKeys.join(",")}`,
    };
  }

  if (extraKeys.length > 0) {
    return {
      error: `Fields are missing in the request body: ${extraKeys.join(", ")}`,
    };
  }

  return null;
};

module.exports = { badRequestValidator, validateReqBody };
