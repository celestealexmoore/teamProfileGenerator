const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Intern School", () => {
    it("Must return school.", () => {
      const school = "HCC";
      const newIntern = new Intern(
        "Celeste",
        "1234",
        "celeste@gmail.com",
        "HCC"
      );
      expect(newIntern.getSchool()).toEqual(school);
    });
  });

  describe("Intern Role", () => {
    it("Must return id.", () => {
      const role = "Intern";
      const newIntern = new Intern(
        "Celeste",
        "1234",
        "celeste@gmail.com",
        "HCC"
      );
      expect(newIntern.getRole()).toEqual(role);
    });
  });
});
