import { Card, CardContent, CardHeader } from "../Components/ui/card";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Choose Your Plan
          </h2>
          <p className="mt-4">
            Flexible pricing for every stage of your business.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
          {/* Basic Package */}
          <Card className="group shadow-lg border border-zinc-200 dark:border-zinc-800 rounded-xl transition-transform hover:scale-105">
            <CardHeader className="pb-3">
              <PriceDecorator>
                <span className="text-3xl font-bold text-slate-200">$9</span>
                <span className="text-sm text-zinc-500">/mo</span>
              </PriceDecorator>
              <h3 className="mt-4 font-semibold text-lg">Basic</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-zinc-700 dark:text-zinc-200">
                <li>Essential features</li>
                <li>Email support</li>
                <li>Single user</li>
              </ul>
            </CardContent>
          </Card>
          {/* Pro Package */}
          <Card className="group shadow-lg border-2 border-slate-200 rounded-xl scale-105 bg-white dark:bg-zinc-900 transition-transform hover:scale-110">
            <CardHeader className="pb-3">
              <PriceDecorator>
                <span className="text-4xl font-extrabold text-slate-100">$29</span>
                <span className="text-base text-zinc-500">/mo</span>
              </PriceDecorator>
              <h3 className="mt-4 font-semibold text-lg">Pro</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-zinc-700 dark:text-zinc-200">
                <li>All Basic features</li>
                <li>Priority support</li>
                <li>Up to 5 users</li>
                <li>Advanced analytics</li>
              </ul>
            </CardContent>
          </Card>
          {/* Enterprise Package */}
          <Card className="group shadow-lg border border-zinc-200 dark:border-zinc-800 rounded-xl transition-transform hover:scale-105">
            <CardHeader className="pb-3">
              <PriceDecorator>
                <span className="text-3xl font-bold text-slate-200">$99</span>
                <span className="text-sm text-zinc-500">/mo</span>
              </PriceDecorator>
              <h3 className="mt-4 font-semibold text-lg">Enterprise</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-zinc-700 dark:text-zinc-200">
                <li>All Pro features</li>
                <li>Dedicated support</li>
                <li>Unlimited users</li>
                <li>Custom integrations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const PriceDecorator = ({ children }) => (
  <div className="flex items-end justify-center gap-1">
    {children}
  </div>
);
