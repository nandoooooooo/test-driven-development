export function play(p1: string, p2: string): number {
  const normalize = (move: string) => move.trim().toLowerCase();

  const validMoves = new Set(["rock", "paper", "scissors"]);
  const move1 = normalize(p1);
  const move2 = normalize(p2);

  if (!validMoves.has(move1)) {
    throw new Error(`Invalid move: '${p1}'`);
  }
  if (!validMoves.has(move2)) {
    throw new Error(`Invalid move: '${p2}'`);
  }

  if (move1 === move2) return 0;

  const winsAgainst = new Map<string, string>([
    ["rock", "scissors"],
    ["scissors", "paper"],
    ["paper", "rock"],
  ]);

  return winsAgainst.get(move1) === move2 ? 1 : 2;
}
