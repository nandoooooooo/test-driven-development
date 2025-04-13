import { isValid } from "./isbn13";

describe("ISBN-13 Validation", () => {
    test("valid ISBN: 9780470059029", () => {
        expect(isValid("9780470059029")).toBe(true);
    });

    test("valid ISBN: 9783161484100", () => {
        expect(isValid("9783161484100")).toBe(true);
    });

    test("invalid ISBN (wrong checksum): 9780470059020", () => {
        expect(isValid("9780470059020")).toBe(false);
    });

    test("invalid ISBN (non-digit characters): 97804700A9029", () => {
        expect(isValid("97804700A9029")).toBe(false);
    });

    test("invalid ISBN (too short): 97831614841", () => {
        expect(isValid("97831614841")).toBe(false);
    });

    test("invalid ISBN (too long): 978316148410099", () => {
        expect(isValid("978316148410099")).toBe(false);
    });
});
