export const mockUserData = [
    {
        id: 'b11294a5-6ef3-4f4d-9189-6eb5a42a6cf0',
        full_name: 'John Doe',
        avatar_url: 'https://example.com/avatar1.jpg',
        billing_address: {
            street: '123 Main Street',
            city: 'Cityville',
            country: 'Countryland',
            zip_code: '12345'
        },
        payment_method: {
            card_number: '**** **** **** 1234',
            expiration_date: '12/25',
            cvv: '123'
        },
        executions: 10,
        payed: false,
        termsAccepted: true,
        created_at: '2023-01-01T12:00:00Z',
        updated_at: '2023-01-01T12:00:00Z',
        api_key: 'a11294a5-6ef3-4f4d-9189-6eb5a42a6cf1',
        clientContext: 'Mobile App',
        version: 'v2',
        flat_based: false,
        email: 'john.doe@example.com'
    },
    {
        id: 'b11294a5-6ef3-4f4d-9189-6eb5a42a6cf2',
        full_name: 'Jane Smith',
        avatar_url: 'https://example.com/avatar2.jpg',
        billing_address: {
            street: '456 Oak Avenue',
            city: 'Townsville',
            country: 'Countryland',
            zip_code: '67890'
        },
        payment_method: {
            card_number: '**** **** **** 5678',
            expiration_date: '06/24',
            cvv: '456'
        },
        executions: 5,
        payed: true,
        termsAccepted: true,
        created_at: '2023-02-15T08:30:00Z',
        updated_at: '2023-02-15T08:30:00Z',
        api_key: 'a11294a5-6ef3-4f4d-9189-6eb5a42a6cf2',
        clientContext: 'Web App',
        version: 'v2',
        flat_based: true,
        email: 'jane.smith@example.com'
    },
];

