const { faker } = require('@faker-js/faker');

exports.generateBookFactory = async () => {
    return {
        title: faker.name.fullName(),
        author: faker.name.fullName(),
        numberPages: faker.datatype.number({
            'min': 10,
            'max': 500
        }),
        publisher: faker.company.bs()
    };
}