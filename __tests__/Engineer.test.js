const Engineer = require('../lib/Engineer');

test('Creates an Engineer object', function() {
    const engineer = new Engineer('Name', '111', 'test@engineer.com', 'Gitname');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.gitUser).toEqual(expect.any(String));
});

test('get gitUser from the engineer', function() {
    const engineer = new Engineer('Name', '111', 'test@engineer.com', 'Gitname');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('Get role from the engineer', function() {
    const engineer = new Engineer('Name', '111', 'test@engineer.com', 'Gitname');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

