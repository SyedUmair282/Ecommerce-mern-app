const bcrypt = require('bcryptjs')
const users = [{
    name: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin', 10),
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oxfordwebstudio.com%2Fuser%2Fpages%2F06.da-li-znate%2Fsta-je-link%2Fsta-je-link.jpg&imgrefurl=https%3A%2F%2Fwww.oxfordwebstudio.com%2Fen%2Fdid-you-know%2Fwhat-is-link&tbnid=p9StZ9N9mvpCNM&vet=12ahUKEwikk7fslKf0AhWNIRoKHRyQAYYQMygKegUIARDdAQ..i&docid=uGwOgEpFW5GmOM&w=1000&h=600&itg=1&q=image%20link&ved=2ahUKEwikk7fslKf0AhWNIRoKHRyQAYYQMygKegUIARDdAQ",
    isAdmin: true
}, {
    name: 'umair',
    email: 'umair@gmail.com',
    password: bcrypt.hashSync('umair', 10),
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.oxfordwebstudio.com%2Fuser%2Fpages%2F06.da-li-znate%2Fsta-je-link%2Fsta-je-link.jpg&imgrefurl=https%3A%2F%2Fwww.oxfordwebstudio.com%2Fen%2Fdid-you-know%2Fwhat-is-link&tbnid=p9StZ9N9mvpCNM&vet=12ahUKEwikk7fslKf0AhWNIRoKHRyQAYYQMygKegUIARDdAQ..i&docid=uGwOgEpFW5GmOM&w=1000&h=600&itg=1&q=image%20link&ved=2ahUKEwikk7fslKf0AhWNIRoKHRyQAYYQMygKegUIARDdAQ",
    isAdmin: false
}]
module.exports = users;