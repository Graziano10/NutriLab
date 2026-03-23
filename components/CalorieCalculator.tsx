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

  const handleNumberChange = (setter: (value: number) => void) => (event: ChangeEvent<HTMLInputElement>) => {
    setter(Number(event.target.value));
  };

  const handleActivityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setActivity(event.target.value as ActivityLevel);
  };

  return (
    <div className="rounded-[2rem] border border-brand-100 bg-white p-6 shadow-soft sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">Quick tool</p>
        <h3 className="mt-3 text-2xl font-bold text-ink">Estimate your daily calorie target</h3>
        <p className="mt-3 text-sm leading-6 text-ink/70">
          A lightweight estimator to spark action. Your consultation turns this into a fully personalized strategy.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Weight (kg)
          <input
            type="number"
            min="35"
            value={weight}
            onChange={handleNumberChange(setWeight)}
            className="mt-2 w-full rounded-2xl border border-brand-100 bg-sand px-4 py-3 outline-none transition focus:border-brand-400"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Height (cm)
          <input
            type="number"
            min="130"
            value={height}
            onChange={handleNumberChange(setHeight)}
            className="mt-2 w-full rounded-2xl border border-brand-100 bg-sand px-4 py-3 outline-none transition focus:border-brand-400"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Age
          <input
            type="number"
            min="16"
            value={age}
            onChange={handleNumberChange(setAge)}
            className="mt-2 w-full rounded-2xl border border-brand-100 bg-sand px-4 py-3 outline-none transition focus:border-brand-400"
          />
        </label>
        <label className="text-sm font-medium text-ink">
          Activity level
          <select
            value={activity}
            onChange={handleActivityChange}
            className="mt-2 w-full rounded-2xl border border-brand-100 bg-sand px-4 py-3 outline-none transition focus:border-brand-400"
          >
            <option value="sedentary">Mostly sedentary</option>
            <option value="light">Light activity</option>
            <option value="moderate">Moderate training</option>
            <option value="active">Very active</option>
          </select>
        </label>
      </div>

      <div className="mt-4">
        <p className="mb-3 text-sm font-medium text-ink">Primary goal</p>
        <div className="flex flex-wrap gap-3">
          {[
            { value: 'fat-loss', label: 'Fat loss' },
            { value: 'maintain', label: 'Maintain' },
            { value: 'muscle-gain', label: 'Muscle gain' },
          ].map((option) => {
            const activeOption = goal === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setGoal(option.value as Goal)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeOption ? 'bg-brand-500 text-white' : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 rounded-[1.5rem] bg-brand-600 p-6 text-white">
        <p className="text-sm uppercase tracking-[0.2em] text-white/80">Estimated target</p>
        <p className="mt-2 text-4xl font-bold">{calories} kcal/day</p>
        <p className="mt-3 text-sm leading-6 text-white/80">
          Use this as a baseline, then book a consultation for a tailored plan with meal structure, macros, and accountability.
        </p>
      </div>
    </div>
  );
}
