const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Manager Office Number", () => {
    it("Must return Office Number.", () => {
      const num = "281";
      const newManager = new Manager(
        "Celeste",
        "1234",
        "celeste@gmail.com",
        "281"
      );
      expect(newManager.getNum()).toEqual(num);
    });
  });

  describe("Manager Role", () => {
    it("Must return Id.", () => {
      const role = "Manager";
      const newManager = new Manager(
        "Celeste",
        "1234",
        "celeste@gmail.com",
        "281"
      );
      expect(newManager.getRole()).toEqual(role);
    });
  });
});
