const Intern = require('../lib/Intern');

test('Creates an Intern Object', function() {
    const intern = new Intern('Oscar', '222', 'test@intern.com', 'school');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school', function() {
    const intern = new Intern('Oscar', '222', 'test@intern.com', 'school');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('get role for the inter', function() {
    const intern = new Intern('Oscar', '222', 'test@intern.com', 'school');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});