const { faker } = require('@faker-js/faker');

exports.generateCustomerFactory = async () => {
    return {
        name: faker.name.fullName(),
        age: faker.datatype.number({
            'min': 10,
            'max': 50
        }),
        address: faker.address.streetAddress()
    };
}