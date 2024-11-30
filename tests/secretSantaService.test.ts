import { secretSantaService } from "@/services/secretSantaService";

describe("SecretSantaService", () => {
  it("assigns secret santa correctly", () => {
    const participants = ["Alice", "Bob", "Charlie", "David"];
    const assignments = secretSantaService.assignSecretSanta(participants);

    expect(assignments.length).toBe(participants.length);
    assignments.forEach((assignment) => {
      expect(participants).toContain(assignment.giver);
      expect(participants).toContain(assignment.receiver);
      expect(assignment.giver).not.toBe(assignment.receiver);
    });
  });
});
