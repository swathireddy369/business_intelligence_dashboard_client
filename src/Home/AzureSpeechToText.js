import React, { useState } from "react";
import { SpeechConfig, AudioConfig, SpeechRecognizer } from "microsoft-cognitiveservices-speech-sdk";

const AzureSpeechToText = () => {
  const [inputText, setInputText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  // Azure Keys
  const speechKey = "5FpX8Xo9vIF4WojjxmNme0nVFHfpUT2Sn2Ap70ZceVtsat7w8EZPJQQJ99BBACYeBjFXJ3w3AAAYACOGIM7d";
  const speechRegion = "eastus";

  // Speech-to-Text
  const handleSpeechToText = async () => {
    // Log the keys to check if they are loaded
    console.log("Speech Key:", speechKey);
    console.log("Speech Region:", speechRegion);

    if (!speechKey || !speechRegion) {
      console.error("Azure Speech Key or Region is missing!");
      return;
    }

    const speechConfig = SpeechConfig.fromSubscription(speechKey, speechRegion);
    const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new SpeechRecognizer(speechConfig, audioConfig);

    setIsTranslating(true);

    recognizer.recognizeOnceAsync((result) => {
      setInputText(result.text);
      recognizer.close();
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Live Language Translator</h1>
      <button onClick={handleSpeechToText} disabled={isTranslating}>
        {isTranslating ? "Listening..." : "Start Speaking"}
      </button>
      <div style={{ margin: "20px 0" }}>
        <h3>Original Text:</h3>
        <p>{inputText || "No input yet"}</p>
      </div>
    </div>
  );
};

export default AzureSpeechToText;
