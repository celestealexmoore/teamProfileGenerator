const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Engineer Github", () => {
    it("Must return github.", () => {
      const github = "celestealexmoore";
      const newEngineer = new Engineer(
        "Celeste",
        "1234",
        "celeste@gmail.com",
        "celestealexmoore"
      );
      expect(newEngineer.getGithub()).toEqual(github);
    });
  });

  describe("Engineer Role", () => {
    it("Must return id.", () => {
      const role = "Engineer";
      const newEngineer = new Engineer(
        "Celeste",
        "1234",
        "celeste@gmail.com",
        "celestealexmoore"
      );
      expect(newEngineer.getRole()).toEqual(role);
    });
  });
});
