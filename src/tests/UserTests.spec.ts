
import { User } from '../models/User';

test('it howw be ok', () => {
    const user = new User();
    user.name = "Claudio";
    expect(user.name).toEqual('Claudio');
});