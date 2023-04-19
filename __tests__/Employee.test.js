const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Employee Name", () => {
    it("Must return name.", () => {
      const name = "Celeste";
      const newEmployee = new Employee("Celeste", "1234", "celeste@gmail.com");
      expect(newEmployee.getName()).toEqual(name);
    });
  });

  describe("Employee Email", () => {
    it("Must return email.", () => {
      const email = "celeste@gmail.com";
      const newEmployee = new Employee("Celeste", "1234", "celeste@gmail.com");
      expect(newEmployee.getEmail()).toEqual(email);
    });
  });

  describe("Employee ID", () => {
    it("Must return id.", () => {
      const id = 1234;
      const newEmployee = new Employee("Celeste", "1234", "celeste@gmail.com");
      expect(newEmployee.getId).toEqual(id);
    });
  });
});
