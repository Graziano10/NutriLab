'use client';

import { ChangeEvent, useMemo, useState } from 'react';

const activityMap = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
};

type ActivityLevel = keyof typeof activityMap;
type Goal = 'fat-loss' | 'maintain' | 'muscle-gain';

const goalContent: Record<Goal, { label: string; accent: string; summary: string }> = {
  'fat-loss': {
    label: 'Dimagrimento',
    accent: 'from-[#FF9A62] to-[#FF6B57]',
    summary: 'Una stima orientativa in lieve deficit calorico, utile come primo riferimento prima della visita.',
  },
  maintain: {
    label: 'Mantenimento',
    accent: 'from-[#7DD3FC] to-[#38BDF8]',
    summary: 'Un intervallo calorico indicativo per mantenere stabilità, energia e continuità nelle abitudini.',
  },
  'muscle-gain': {
    label: 'Massa muscolare',
    accent: 'from-brand-300 to-brand-500',
    summary: 'Una stima iniziale con surplus moderato per supportare allenamento, recupero e crescita muscolare.',
  },
};

export function CalorieCalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(30);
  const [goal, setGoal] = useState<Goal>('fat-loss');
  const [activity, setActivity] = useState<ActivityLevel>('moderate');

  const calories = useMemo(() => {
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const maintenance = Math.round(bmr * activityMap[activity]);

    if (goal === 'fat-loss') return maintenance - 350;
    if (goal === 'muscle-gain') return maintenance + 250;
    return maintenance;
  }, [activity, age, goal, height, weight]);

  const macroPreview = useMemo(() => {
    if (goal === 'fat-loss') return { proteine: '35%', carboidrati: '35%', grassi: '30%' };
    if (goal === 'muscle-gain') return { proteine: '30%', carboidrati: '45%', grassi: '25%' };
    return { proteine: '30%', carboidrati: '40%', grassi: '30%' };
  }, [goal]);

  const handleNumberChange = (setter: (value: number) => void) => (event: ChangeEvent<HTMLInputElement>) => {
    setter(Number(event.target.value));
  };

  const handleActivityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setActivity(event.target.value as ActivityLevel);
  };

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_30px_80px_rgba(6,15,12,0.22)] backdrop-blur-xl sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-200">Calcolatore nutrizionale</p>
        <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Simula il tuo fabbisogno calorico giornaliero</h3>
        <p className="mt-3 text-sm leading-6 text-white/70">
          Il risultato è puramente indicativo e non sostituisce una valutazione nutrizionale professionale personalizzata.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-white/90">
          Peso (kg)
          <input
            type="range"
            min="35"
            max="140"
            value={weight}
            onChange={handleNumberChange(setWeight)}
            className="mt-3 w-full accent-brand-400"
          />
          <span className="mt-2 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">{weight} kg</span>
        </label>
        <label className="text-sm font-medium text-white/90">
          Altezza (cm)
          <input
            type="range"
            min="130"
            max="210"
            value={height}
            onChange={handleNumberChange(setHeight)}
            className="mt-3 w-full accent-brand-400"
          />
          <span className="mt-2 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">{height} cm</span>
        </label>
        <label className="text-sm font-medium text-white/90">
          Età
          <input
            type="range"
            min="16"
            max="75"
            value={age}
            onChange={handleNumberChange(setAge)}
            className="mt-3 w-full accent-brand-400"
          />
          <span className="mt-2 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">{age} anni</span>
        </label>
        <label className="text-sm font-medium text-white/90">
          Attività settimanale
          <select
            value={activity}
            onChange={handleActivityChange}
            className="mt-3 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-brand-300"
          >
            <option value="sedentary" className="text-ink">Sedentario</option>
            <option value="light" className="text-ink">Leggera attività</option>
            <option value="moderate" className="text-ink">Allenamento moderato</option>
            <option value="active" className="text-ink">Molto attivo</option>
          </select>
        </label>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-medium text-white/90">Obiettivo principale</p>
        <div className="flex flex-wrap gap-3">
          {[
            { value: 'fat-loss', label: 'Dimagrimento' },
            { value: 'maintain', label: 'Mantenimento' },
            { value: 'muscle-gain', label: 'Massa muscolare' },
          ].map((option) => {
            const activeOption = goal === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setGoal(option.value as Goal)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  activeOption
                    ? 'bg-white text-ink shadow-[0_10px_25px_rgba(255,255,255,0.16)]'
                    : 'bg-white/8 text-white/80 hover:bg-white/12'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className={`rounded-[1.75rem] bg-gradient-to-br ${goalContent[goal].accent} p-6 text-white`}>
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">Target stimato</p>
          <p className="mt-2 text-4xl font-bold sm:text-5xl">{calories} kcal</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/85">{goalContent[goal].summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">{goalContent[goal].label}</span>
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">Routine {activity}</span>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-black/10 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Ripartizione indicativa</p>
          <div className="mt-5 space-y-4">
            {Object.entries(macroPreview).map(([macro, value]) => (
              <div key={macro}>
                <div className="mb-2 flex items-center justify-between text-sm text-white/80">
                  <span className="capitalize">{macro}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-white" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
