const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
	dotEnv.config({ path: require("find-config")(`.${process.env.NODE_ENV}.env`) });
} else {
	dotEnv.config();
}

module.exports = {
	PORT: process.env.PORT,
	DB_URL: process.env.MONGODB_URI,
	APP_SECRET: process.env.APP_SECRET,
};
