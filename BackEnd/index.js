const App = require("./App");
const PORT=process.env.PORT || 5000;
App.listen(PORT, function(){
    console.log("App Run Success, server address http://localhost:5000")
})