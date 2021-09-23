const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default: {
        SECRET: "MYDMINPASSWORD123",
        // DATABASE: "mongodb://localhost:27017/sarashcoll"
        DATABASE: "mongodb+srv://sarashteam:Fritzsmath@cluster0.dyaqp.mongodb.net/SarashDB?retryWrites=true&w=majority"
    }
}


exports.get = function get(env) {
    return config[env] || config.default
}