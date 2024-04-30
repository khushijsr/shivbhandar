import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

interface Options {
  lang?: string;
  continuous?: boolean;
}

const useVoiceToText = (
  { lang, continuous }: Options = { lang: "en-US", continuous: true }
) => {
  const [transcript, setTranscript] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  const isContinuous = useRef<boolean>(continuous ?? true);

  const SpeechRecognition = useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    }
    return window.SpeechRecognition || window.webkitSpeechRecognition;
  }, []);

  const recognition = useMemo(() => {
    if (SpeechRecognition) return new SpeechRecognition();
    else return null;
  }, [SpeechRecognition]);

  useEffect(() => {
    if (lang && recognition) {
      recognition.lang = lang;
    }
  }, [lang, recognition]);

  function startListening() {
    if (!recognition) return;
    setIsListening(true);
    setTranscript("");
    recognition.start();
    if (continuous) {
      isContinuous.current = true;
    }
  }

  function stopListening() {
    if (!recognition) return;
    setIsListening(false);
    recognition.stop();
    isContinuous.current = false;
  }

  if (recognition) {
    recognition.onend = () => {
      if (isContinuous.current) {
        // if the listening is continuous, it starts listening even the speaker is quiet till it will be stopped manually
        startListening();
      }
    };
    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setIsListening(false);
      console.error(`Speech recognition error detected: ${event.error}`);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      setTranscript(
        (prevTranscript) =>
          prevTranscript + " " + event.results[0][0].transcript
      );
      setIsListening(false);
    };
  }

  return { startListening, stopListening, transcript, isListening };
};

export default useVoiceToText;
