const tunings = {
  "Standard": ["E1", "A1", "D2", "G2", "B2", "E3"],
  "Eb Standard": ["Eb1", "Ab1", "Db2", "Gb2", "Bb2", "Eb3"],
  "D Standard": ["D1", "G1", "C2", "F2", "A2", "D3"],
  "Db Standard": ["Db1", "Gb1", "B1", "E2", "Ab2", "Db3"],
  "C Standard": ["C1", "F1", "Bb1", "Eb2", "G2", "C3"],
  "Drop D": ["D1", "A1", "D2", "G2", "B2", "E3"],
  "Drop Db": ["Db1", "Ab1", "Db2", "Gb2", "Bb2", "Eb3"],
  "Drop C": ["C1", "G1", "C2", "F2", "A2", "D3"],
};

export function getNotesForTuning(tuning) {
  return tunings[tuning];
}
