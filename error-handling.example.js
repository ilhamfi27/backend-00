const data = [
    {
        id: '5bd761dcae323e45a93ccfe8',
        saleDate: { $date: { $numberLong: '1427144809506' } },
        items: [
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '40.01' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '35.29' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '56.12' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '77.71' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '18.47' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '19.95' },
                quantity: { $numberInt: '8' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '8.08' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '14.16' },
                quantity: { $numberInt: '3' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'M',
            age: { $numberInt: '42' },
            email: 'cauho@witwuta.sv',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: true,
        purchaseMethod: 'Online',
    },
    {
        id: '5bd761dcae323e45a93ccfe9',
        saleDate: { $date: { $numberLong: '1440496862918' } },
        items: [
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '8.05' },
                quantity: { $numberInt: '10' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '28.31' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '20.95' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '866.5' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '33.09' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '37.55' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '83.28' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '42.9' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '16.68' },
                quantity: { $numberInt: '2' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'M',
            age: { $numberInt: '50' },
            email: 'keecade@hem.uy',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'Phone',
    },
    {
        id: '5bd761dcae323e45a93ccfea',
        saleDate: { $date: { $numberLong: '1498125254185' } },
        items: [
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '30.08' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '24.68' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '32.1' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '31.41' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '43.56' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '68.95' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '8.57' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '106.6' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '596.33' },
                quantity: { $numberInt: '4' },
            },
        ],
        storeLocation: 'Denver',
        customer: {
            gender: 'M',
            age: { $numberInt: '51' },
            email: 'worbiduh@vowbu.cg',
            satisfaction: { $numberInt: '5' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccfeb',
        saleDate: { $date: { $numberLong: '1424685239343' } },
        items: [
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '20.08' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '23.08' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '82.73' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'printer paper',
                tags: ['office', 'stationary'],
                price: { $numberDecimal: '15.98' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '27.24' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '27.7' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '59.86' },
                quantity: { $numberInt: '5' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '27.33' },
                quantity: { $numberInt: '9' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '13.59' },
                quantity: { $numberInt: '1' },
            },
        ],
        storeLocation: 'Seattle',
        customer: {
            gender: 'F',
            age: { $numberInt: '45' },
            email: 'vatires@ta.pe',
            satisfaction: { $numberInt: '3' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
    {
        id: '5bd761dcae323e45a93ccfec',
        saleDate: { $date: { $numberLong: '1512326388253' } },
        items: [
            {
                name: 'backpack',
                tags: ['school', 'travel', 'kids'],
                price: { $numberDecimal: '127.59' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '17.6' },
                quantity: { $numberInt: '4' },
            },
            {
                name: 'binder',
                tags: ['school', 'general', 'organization'],
                price: { $numberDecimal: '18.67' },
                quantity: { $numberInt: '2' },
            },
            {
                name: 'pens',
                tags: ['writing', 'office', 'school', 'stationary'],
                price: { $numberDecimal: '60.56' },
                quantity: { $numberInt: '3' },
            },
            {
                name: 'notepad',
                tags: ['office', 'writing', 'school'],
                price: { $numberDecimal: '28.41' },
                quantity: { $numberInt: '1' },
            },
            {
                name: 'envelopes',
                tags: ['stationary', 'office', 'general'],
                price: { $numberDecimal: '15.28' },
                quantity: { $numberInt: '7' },
            },
            {
                name: 'laptop',
                tags: ['electronics', 'school', 'office'],
                price: { $numberDecimal: '1259.02' },
                quantity: { $numberInt: '3' },
            },
        ],
        storeLocation: 'London',
        customer: {
            gender: 'M',
            age: { $numberInt: '40' },
            email: 'dotzu@ib.sh',
            satisfaction: { $numberInt: '4' },
        },
        couponUsed: false,
        purchaseMethod: 'In store',
    },
];

/**
 *
 * @param {Array} data
 * @param {String} location
 * @returns
 */
function findCustomerById(_data, id) {
    const transactionData = _data.find((d) => {
        return d.id === id;
    });
    const customer = transactionData.customer;
    return {
        idTransaction: id,
        username: customer.email.split('@')[0],
        email: customer.email,
        gender: customer.gender === 'M' ? 'Male' : 'Female',
    };
}
try {
    const customer = findCustomerById(data, '5bd761dcae323e45a93cdxxx');
    console.log('customer', customer);
} catch (error) {
    console.log('ada error:', error.message);
} finally {
    console.log('yang pertama selesai');
}
try {
    const customer = findCustomerById(data, '5bd761dcae323e45a93cd018');
    console.log('customer', customer);
} catch (error) {
    console.log('ada error:', error.message);
} finally {
    console.log('yang kedua selesai');
}
try {
    const customer = findCustomerById(data, '5bd761dcae323e45a93cd019');
    console.log('customer', customer);
} catch (error) {
    console.log('ada error:', error.message);
} finally {
    console.log('yang ketiga selesai');
}
