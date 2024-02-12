const { faker } = require("@faker-js/faker");

createRandomUser = () => {
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    role: "user",
    phone: 11284444,
    active: true,
  };
};

exports.USERS = async ()=>{ 
const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
})
console.log(users);
}
