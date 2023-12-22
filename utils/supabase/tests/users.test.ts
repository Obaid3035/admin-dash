import { getUsers } from '../user';
jest.mock('../../supabase'); // supabase mock

describe('User utility functions', () => {
  it('fetches users successfully', async () => {
    const { data, error } = await getUsers();

    expect(data).toHaveLength(2); // Assuming your mock data has 2 users
    expect(error).toBeNull();
  });
});