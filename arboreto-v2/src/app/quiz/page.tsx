"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

const questions = [
  {
    id: "reason",
    question: "What brings you to Costa Rica?",
    options: ["Lifestyle", "Investment", "Retirement", "Remote work"],
  },
  {
    id: "timeline",
    question: "What is your buying timeline?",
    options: ["Ready now", "Within 6 months", "Within 12 months", "Exploring"],
  },
  {
    id: "priority",
    question: "What matters most?",
    options: ["Beach proximity", "Privacy", "Rental income", "Community"],
  },
  {
    id: "usage",
    question: "How often will you use the villa?",
    options: ["Full-time", "3-6 months", "Vacations", "Pure investment"],
  },
];

const recommendationMap: Record<string, string> = {
  Lifestyle: "plumeria",
  Investment: "jacaranda",
  Retirement: "cocobolo",
  "Remote work": "cenizaro",
};

export default function QuizPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const progress = useMemo(() => ((currentStep + 1) / questions.length) * 100, [currentStep]);

  const handleAnswer = (answer: string) => {
    const question = questions[currentStep];
    if (!answers[question.id]) {
      trackEvent(currentStep === 0 ? "quiz_started" : "quiz_progress", {
        step: currentStep + 1,
      });
    }
    const nextAnswers = { ...answers, [question.id]: answer };
    setAnswers(nextAnswers);
    trackEvent("quiz_answered", { question: question.id, answer });

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    const profile = nextAnswers.reason ?? "Lifestyle";
    const recommendedVilla = recommendationMap[profile] ?? "almendro";
    trackEvent("quiz_completed", { profile, villa: recommendedVilla });
    router.push(`/quiz/results?profile=${encodeURIComponent(profile)}&villa=${recommendedVilla}`);
  };

  const question = questions[currentStep];

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Fit quiz</p>
      <h1 className="mt-4 text-display text-3xl md:text-4xl">Is Arboreto right for you?</h1>
      <p className="mt-3 text-warmgray">
        Answer four quick questions. We will recommend the villa that best matches your goals.
      </p>
      <div className="mt-8">
        <div className="h-1.5 w-full rounded-full bg-black/10">
          <div
            className="h-full rounded-full bg-gold transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-xs uppercase tracking-[0.35em] text-warmgray">
          Question {currentStep + 1} of {questions.length}
        </p>
      </div>
      <div className="mt-10 rounded-[32px] border border-black/5 bg-white p-10 shadow-premium">
        <h2 className="text-display text-2xl">{question.question}</h2>
        <div className="mt-6 grid gap-3">
          {question.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleAnswer(option)}
              className="rounded-2xl border border-black/10 px-5 py-4 text-left text-sm transition hover:border-gold hover:bg-gold/10"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
