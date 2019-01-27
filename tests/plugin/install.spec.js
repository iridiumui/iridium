import Vue from "vue";
import Iridium from "../../src/index.js";

describe("Install Plugin", () => {

    test("it can be installed", () => {
        expect(typeof Iridium.install).toBe("function");

        Iridium.install = jest.fn();

        Vue.use(Iridium);

        expect(Iridium.install.mock.calls).toHaveLength(1);
        expect(Iridium.install.mock.calls[0][0]).toBe(Vue);
    });

});
