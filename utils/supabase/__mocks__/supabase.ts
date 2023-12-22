export const mockSupabaseData = {
    users: [
        {
            id: '8e29aa10-c0d4-49a0-86c5-0e7de1a7c2e2',
            fullName: null,
            avatarUrl: 'https://example.com/avatar1.png',
            billingAddress: '5678 Market Ave',
            paymentMethod: null,
            executions: 50,
            payed: false,
            termsAccepted: true,
            createdAt: '2023-12-22T10:36:22.891109',
            updatedAt: '2023-12-22T10:36:22.891118',
            apiKey: '7d2d7c21-da6a-4762-98e3-8fa298a37c7f',
            clientContext: 'API',
            version: '2.0',
            fiatBased: true,
            email: null
        },
        {
            id: '845bfdbd-00c6-44e5-8627-d224358923e0',
            fullName: 'John Doe',
            avatarUrl: 'https://example.com/avatar1.png',
            billingAddress: '5678 Market Ave',
            paymentMethod: 'Stripe',
            executions: 6,
            payed: true,
            termsAccepted: false,
            createdAt: '2023-12-22T10:36:22.891284',
            updatedAt: '2023-12-22T10:36:22.891291',
            apiKey: 'ab091227-e467-4dcc-966a-cbc1da4f9268',
            clientContext: null,
            version: '3.0',
            fiatBased: true,
            email: 'test@example.org'
        },
        {
            id: 'c49310fb-0d72-47f3-86bc-005e6b0a4bac',
            fullName: null,
            avatarUrl: 'https://example.com/avatar2.png',
            billingAddress: null,
            paymentMethod: 'PayPal',
            executions: 53,
            payed: false,
            termsAccepted: true,
            createdAt: '2023-12-22T10:36:22.891352',
            updatedAt: '2023-12-22T10:36:22.891355',
            apiKey: '9d84e0a3-682f-44ca-8fb3-f4dcd265ec53',
            clientContext: 'API',
            version: '1.0',
            fiatBased: true,
            email: 'user@example.com'
        }
    ],
  };
  
  export const supabase = {
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockResolvedValue({ data: mockSupabaseData.users, error: null }),
    // Mock other Supabase methods as needed
  };