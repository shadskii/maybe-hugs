import { MaybeHug, Cutie } from "../MaybeHug";

describe("Maybe Hug?", () => {
  it("needs a cutie", () => {
    const nonExistent: Cutie = undefined;
    expect(() => new MaybeHug(nonExistent)).toThrow(TypeError);
  });

  it("Should hug when huggable", () => {
    const huggable: Cutie = {
      name: "Hugs are pretty cool",
      acceptsHugs: true
    };
    const hugger: MaybeHug = new MaybeHug(huggable);
    expect(hugger.hug()).toBe("HUG!");
  });

  it("Should provide empathy too", () => {
    const giveMeEmpathy: Cutie = {
      name: "Empathy is better for me!",
      acceptsHugs: false
    };
    const empathizer: MaybeHug = new MaybeHug(giveMeEmpathy);
    expect(empathizer.hug()).toBe("Empathy!");
  });

  it("Should be loving", () => {
    const giveMeLove: Cutie = {
      name: "everyone",
      acceptsHugs: true
    };
    const loveBird: MaybeHug = new MaybeHug(giveMeLove);
    expect(loveBird.love()).toBe("I love everyone");
  });
});
