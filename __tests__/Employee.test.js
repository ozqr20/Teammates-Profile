const Employee = require('../lib/Employee');

test('creates an employee object', function () {
    const employee = new Employee('Oscar', '111222333', 'test@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets name from employee', function () {
    const employee = new Employee('Oscar', '111222333', 'test@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get id from employee', function () {
    const employee = new Employee('Oscar', '111222333', 'test@gmail.com');

    expect(employee.getId()).toEqual(expect.any(String));
});
test('get email from employee', function () {
    const employee = new Employee('Oscar', '111222333', 'test@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});

test('get role from employee', function () {
    const employee = new Employee('Oscar', '111222333', 'test@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});