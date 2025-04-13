import { play } from "./rock-paper-scissors";

describe("Rock Paper Scissors", () => {
    test("rock beats scissors -> player 1 wins", () => {
        expect(play("rock", "scissors")).toBe(1);
    });

    test("scissors beats paper -> player 1 wins", () => {
        expect(play("scissors", "paper")).toBe(1);
    });

    test("paper beats rock -> player 1 wins", () => {
        expect(play("paper", "rock")).toBe(1);
    });

    test("player 2 wins", () => {
        expect(play("scissors", "rock")).toBe(2);
    });

    test("tie returns 0", () => {
        expect(play("rock", "rock")).toBe(0);
        expect(play("paper", "paper")).toBe(0);
        expect(play("scissors", "scissors")).toBe(0);
    });

    test("ignores case and spaces", () => {
        expect(play(" Rock ", " SCISSORS ")).toBe(1);
        expect(play(" PaPer", " roCk")).toBe(1);
    });

    test("throws error on invalid input", () => {
        expect(() => play("banana", "rock")).toThrow("Invalid move: 'banana'");
        expect(() => play("rock", "orange")).toThrow("Invalid move: 'orange'");
    });
});
