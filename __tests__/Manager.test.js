const Manager = require('../lib/Manager');

test('Creates a Manager object', function() {
    const manager = new Manager('Oscar', '222', 'test@manager.com', 'office123');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.office).toEqual(expect.any(String));
});

test('Get office number for the manager', function() {
    const manager = new Manager('Oscar', '222', 'test@manager.com', 'office123');

    expect(manager.getOffice()).toEqual(expect.any(String));
});

test('Get the role for the manager', function() {
    const manager = new Manager('Oscar', '222', 'test@manager.com', 'office123');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})