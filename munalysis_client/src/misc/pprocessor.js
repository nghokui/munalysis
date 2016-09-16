const LOUDNESS_FACTOR = 60.0;

export function processTrackData(inData){
  const loudnessValue = inData['loudness'] + LOUDNESS_FACTOR;
  return { ...inData, loudness: (loudnessValue / LOUDNESS_FACTOR) };
};
