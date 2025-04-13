import { formatDuration } from "./duration";

describe("formatDuration", () => {
    test("should return '0s' for input 0", () => {
        expect(formatDuration(0)).toBe("0s");
    });

    test("should return '33s' for input 33", () => {
        expect(formatDuration(33)).toBe("33s");
    });

    test("should return '2m3s' for input 123", () => {
        expect(formatDuration(123)).toBe("2m3s");
    });

    test("should return '8m20s' for input 500", () => {
        expect(formatDuration(500)).toBe("8m20s");
    });

    test("should return '1h' for input 3600", () => {
        expect(formatDuration(3600)).toBe("1h");
    });

    test("should return '1h6m39s' for input 3999", () => {
        expect(formatDuration(3999)).toBe("1h6m39s");
    });

    test("should round and eliminate decimals", () => {
        expect(formatDuration(3999.421)).toBe("1h6m39s");
    });

    test("should throw an error for negative input", () => {
        expect(() => formatDuration(-1)).toThrow("Number cannot be negative");
    });
});
