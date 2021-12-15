const port = process.env.PORT || 3001;
const mongodbURI = process.env.MONGO_DB_URI || "mongodb://localhost:27017/";
const allowedOrigin = process.env.ALLOWED_ORIGIN || ["http://localhost:3000"];
export { allowedOrigin, mongodbURI, port };
