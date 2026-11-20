import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface PresetOption {
  label: string;
  dailyRate: number;
  days: number;
}

const PRESETS: PresetOption[] = [
  { label: 'Compact City Sedan (5 Days)', dailyRate: 3500, days: 5 },
  { label: 'Executive Crossover SUV (7 Days)', dailyRate: 6500, days: 7 },
  { label: 'Diplomatic / NGO Monthly Lease (30 Days)', dailyRate: 8000, days: 30 },
];

export const FeeCalculator: React.FC = () => {
  const [dailyRate, setDailyRate] = useState<number>(6500);
  const [days, setDays] = useState<number>(7);

  const safeDailyRate = Math.max(
    500,
    Math.min(100000, Number.isFinite(dailyRate) ? dailyRate : 500)
  );
  const safeDays = Math.max(1, Math.min(365, Number.isFinite(days) ? days : 1));

  const baseRentalValue = safeDailyRate * safeDays;
  const ownerFee = Math.round(baseRentalValue * 0.08);
  const renterFee = Math.round(baseRentalValue * 0.03);
  const combinedFee = ownerFee + renterFee;
  const ownerNetPayout = baseRentalValue - ownerFee;
  const renterTotalPayment = baseRentalValue + renterFee;

  const formatETB = (val: number) => `${val.toLocaleString('en-US')} ETB`;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1528] overflow-hidden">
      <div className="px-6 py-5 bg-[#09142A] dark:bg-[#060E1F] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-700/40 border border-blue-500/40 flex items-center justify-center text-cyan-300">
            <Calculator className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-white">
              Interactive ETB Rental-Fee Calculator
            </h3>
            <p className="text-xs text-slate-300">
              Only 8% is cut from the owner (92% net payout); the 3% renter fee is paid separately
              by the renter
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
              Quick Benchmark Scenarios
            </span>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((preset) => {
                const isActive = dailyRate === preset.dailyRate && days === preset.days;
                return (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setDailyRate(preset.dailyRate);
                      setDays(preset.days);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-blue-700 text-white border-blue-700'
                        : 'bg-slate-50 dark:bg-[#101E38] text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="daily-rate-input"
                className="text-sm font-semibold text-[#09142A] dark:text-white"
              >
                Agreed Daily Rate (ETB)
              </label>
              <span className="font-mono-tabular text-sm font-bold text-blue-700 dark:text-cyan-300">
                {formatETB(safeDailyRate)}
              </span>
            </div>
            <input
              id="daily-rate-range"
              type="range"
              min={1500}
              max={25000}
              step={500}
              value={Math.min(25000, Math.max(1500, safeDailyRate))}
              onChange={(e) => setDailyRate(Number(e.target.value))}
              aria-label="Daily rental rate slider in ETB"
              className="w-full accent-blue-700 dark:accent-cyan-400 cursor-pointer"
            />
            <div className="mt-2">
              <input
                id="daily-rate-input"
                type="number"
                min={500}
                max={100000}
                step={100}
                value={dailyRate}
                onChange={(e) => setDailyRate(Number(e.target.value) || 0)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-[#101E38] border border-slate-300 dark:border-slate-700 text-sm font-mono-tabular text-slate-900 dark:text-white focus:border-blue-700 dark:focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="duration-days-input"
                className="text-sm font-semibold text-[#09142A] dark:text-white"
              >
                Rental Duration (Days)
              </label>
              <span className="font-mono-tabular text-sm font-bold text-blue-700 dark:text-cyan-300">
                {safeDays} {safeDays === 1 ? 'Day' : 'Days'}
              </span>
            </div>
            <input
              id="duration-days-range"
              type="range"
              min={1}
              max={60}
              step={1}
              value={Math.min(60, Math.max(1, safeDays))}
              onChange={(e) => setDays(Number(e.target.value))}
              aria-label="Rental duration slider in days"
              className="w-full accent-blue-700 dark:accent-cyan-400 cursor-pointer"
            />
            <div className="mt-2">
              <input
                id="duration-days-input"
                type="number"
                min={1}
                max={365}
                value={days}
                onChange={(e) => setDays(Number(e.target.value) || 1)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-[#101E38] border border-slate-300 dark:border-slate-700 text-sm font-mono-tabular text-slate-900 dark:text-white focus:border-blue-700 dark:focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Output Breakdown Column */}
        <div className="lg:col-span-7 bg-slate-50 dark:bg-[#101E38] rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between">
          <div>
            <h4 className="font-display text-base font-bold text-[#09142A] dark:text-white mb-4">
              Itemized Contract Value Breakdown
            </h4>

            <dl className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-slate-600 dark:text-slate-300">
                  Agreed Base Rental Rate ({formatETB(safeDailyRate)} × {safeDays} days)
                </dt>
                <dd className="font-mono-tabular font-semibold text-[#09142A] dark:text-white">
                  {formatETB(baseRentalValue)}
                </dd>
              </div>

              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-slate-600 dark:text-slate-300">
                  Owner Service Fee{' '}
                  <span className="text-blue-700 dark:text-blue-400 font-medium">
                    (8% cut from owner)
                  </span>
                </dt>
                <dd className="font-mono-tabular font-semibold text-blue-700 dark:text-blue-400">
                  −{formatETB(ownerFee)}
                </dd>
              </div>

              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="text-slate-600 dark:text-slate-300">
                  Renter Service Fee{' '}
                  <span className="text-cyan-700 dark:text-cyan-300 font-medium">
                    (+3% paid by renter)
                  </span>
                </dt>
                <dd className="font-mono-tabular font-semibold text-cyan-700 dark:text-cyan-300">
                  +{formatETB(renterFee)}
                </dd>
              </div>

              <div className="py-3 flex items-center justify-between gap-4">
                <dt className="font-medium text-slate-800 dark:text-slate-200">
                  Total CRES Revenue Across Both Sides{' '}
                  <span className="text-slate-500 dark:text-slate-400">(8% + 3% = 11%)</span>
                </dt>
                <dd className="font-mono-tabular font-bold text-[#09142A] dark:text-white">
                  {formatETB(combinedFee)}
                </dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-slate-200 dark:border-slate-700">
            <div className="p-4 rounded-lg bg-white dark:bg-[#0B1528] border border-slate-200 dark:border-slate-700">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Net Owner Payout (92% · Base − 8%)
              </div>
              <div className="font-mono-tabular text-xl font-bold text-[#09142A] dark:text-white mt-1">
                {formatETB(ownerNetPayout)}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                3% renter fee is never deducted from owner
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#09142A] dark:bg-blue-700 text-white">
              <div className="text-xs text-cyan-300 dark:text-blue-100 font-medium">
                Total Renter Cost (103% · Base + 3%)
              </div>
              <div className="font-mono-tabular text-xl font-bold text-white mt-1">
                {formatETB(renterTotalPayment)}
              </div>
              <div className="text-[11px] text-slate-300 dark:text-blue-100 mt-1">
                Base rate + 3% paid directly by renter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
