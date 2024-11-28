const contacts = [
    { id: 1, name: 'John Doe', phone: 11111111, email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', phone: 22222222, email: 'janesmith@example.com' },
    { id: 3, name: 'John Smith', phone: 33333333, email: 'johnsmith@example.com' },
];

const generateId = () => {

    return contacts[contacts.length - 1].id + 1;
}

const getContactIndexWithId = (id) => {
    return contacts.findIndex(contact => contact.id === parseInt(id));
}

const getAll = (request, response) => {
    response.json(contacts);
};

const getOneById = (request, response) => {
    const { id } = request.params;
    const contact = contacts.find(contact => contact.id === parseInt(id));

    if (!contact) {
        response.status(404).json({ message: 'Contact not found' });
    } else {
        response.json(contact);
    }
};

const createOne = (request, response) => {

    const body = request.body;
    contacts.push({
        id: generateId(),
        name: body.name,
        phone: body.phone,
        email: body.email
    });

    response.status(201).json({
        error: false,
        message: 'Contact created successfully'
    })
};

const updateOneById = (request, response) => {
    const { id } = request.params;

    const index = getContactIndexWithId(id);
    if (index == -1) {
        response.status(404).json({
            error: true,
            message: 'Contact not found'
        });
        return ;
    }

    const { name, email, phone } = request.body
    contacts[index].email = email;
    contacts[index].name = name;
    contacts[index].phone = phone;
    response.json({ error: false, message: 'Contact updated successfully' });
};

const deleteOneById = (request, response) => {
    const { id } = request.params;
    const index = getContactIndexWithId(id);
    if (index == -1) {
        response.status(404).json({
            error: true,
            message: 'Contact not found'
        });
        return ;
    }

    contacts.splice(index, 1);
    response.json({ error: false, message: 'Contact deleted successfully' });
};

const sortByQuery = (request, response) => {
    const { key, order } = request.query;
    const sortByKey = contacts.sort((a, b) => {

        if (order == 'desc') {
            return a[key] < b[key] ? 1 : -1;
        }

        return a[key] > b[key]? 1 : -1;
    });

    response.json(sortByKey);
};

module.exports = {
    getAll, getOneById, createOne,
    updateOneById, deleteOneById, sortByQuery
};