const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect("mongodb+srv://RFD_111:RFD_111@cluster0.dvbwcnh.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});
module.exports = mongoose;
