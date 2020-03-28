require("../config/mongodb")

const Author = require("../models/author")

const newAuthor = new Author({
  first_name : "Albert",
  last_name : "Einstein",
  date_of_birth : new Date(1879, 2, 14),
  date_of_death : new Date(1955, 3, 18),
  field_of_study : "non-fiction"
});

newAuthor.save()
.then(response => {
  console.log(response);
})
.catch(console.error);