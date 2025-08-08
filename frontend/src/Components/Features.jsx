import { Card, CardContent, CardHeader } from "../Components/ui/card";
import { ReactNode } from "react";
import { useEffect, useState } from 'react';
import { usePackage } from '../assets/context/PackageContext';

export default function Features() {
  const [country, setCountry] = useState(null);
  const { setSelectedPackage } = usePackage();

  useEffect(() => {
      fetch('https://ipinfo.io/json?token=9c2ee573f6555f')
        .then((res) => res.json())
        .then((data) => {
          setCountry(data.country); // Example: "PH" or "US"
        })
        .catch((err) => {
          console.error('Location fetch failed:', err);
        });
    }, []);

    const handleSelect = (packageName) => {
      localStorage.setItem('selectedPackage', packageName); // Save package to localStorage
      setSelectedPackage(packageName); // Update context state
      window.location.href = '#contactme';
    };

  return (
    <section id="pricing" className="py-16 md:py-32 bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Launch your business online with our affordable web packages
          </h2>
          <p className="mt-4 text-zinc-400">
            Affordable, transparent pricing to help your business grow.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
          {/* Basic Package */}
          <Card className="group shadow-xl border border-zinc-800 rounded-2xl bg-zinc-900 transition-transform hover:scale-105 p-6">
            <CardHeader className="pb-4 text-center">
              <PriceDecorator>
                <span className="text-3xl font-extrabold text-slate-100">
                  {country === 'US' ? '$79' : '₱4,500'}
                  </span>
              </PriceDecorator>
              <h3 className="mt-2 text-xl font-semibold text-slate-100">Basic</h3>
            </CardHeader>
            <CardContent>
            <div className="mb-6 flex justify-center">
                <button
                  onClick={() => handleSelect('basic')}
                  class="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eaedf1] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Select Basic</span>
                </button>
              </div>
              <ul className="text-sm space-y-2 text-zinc-300">
                {[
                  '3 Static Pages (e.g., Home, About, Contact)',
                  'Mobile-responsive layout',
                  'Custom branding (logo, colors, fonts)',
                  'Contact form (email or WhatsApp)',
                  'Social media integration (FB/IG links)',
                  'Up to 5 product/service listings',
                  '1 round of revision',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-1 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
                <br/>
                <li><strong>Delivery:</strong> 3–5 days</li>
                <li><strong>Hosting/Domain:</strong> Not included (guidance provided)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Standard Package */}
          <Card className="group shadow-2xl border-2 border-blue-400 rounded-2xl bg-zinc-900 transition-transform scale-105 hover:scale-110 p-6 relative">
            <span className="absolute top-3 right-3 bg-blue-100 dark:bg-blue-900 text-blue-300 text-xs font-medium px-2 py-1 rounded-full">Most Popular</span>
            <CardHeader className="pb-4 text-center">
              <PriceDecorator>
                <span className="text-4xl font-extrabold text-slate-100">
                {country === 'US' ? '$129' : '₱8,500'}
                </span>
              </PriceDecorator>
              <h3 className="mt-2 text-xl font-semibold text-zinc-100">Standard</h3>
            </CardHeader>
            <CardContent>
            <div className="mb-6 flex justify-center">
                <button
                  onClick={() => handleSelect('standard')}
                  class="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eaedf1] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Select Standard</span>
                </button>
              </div>
              <ul className="text-sm space-y-2 text-zinc-300">
                {[
                  '6 Static Pages (Home, About, Services, Gallery, Contact, FAQs)',
                  '15 listings with images & pricing',
                  'Booking form with date/time selector',
                  'Google Maps integration',
                  'Testimonials section',
                  'Basic SEO setup',
                  '2 revision rounds',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-1 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
                <br/>
                <li><strong>Delivery:</strong> 5–7 days</li>
                <li><strong>Hosting/Domain:</strong> Not included (setup help included)</li>
              </ul>
            </CardContent>
          </Card>
          {/* Premium Package */}
          <Card className="group shadow-xl border border-zinc-800 rounded-2xl bg-zinc-900 transition-transform hover:scale-105 p-6">
            <CardHeader className="pb-4 text-center">
              <PriceDecorator>
                <span className="text-3xl font-extrabold text-slate-100">
                {country === 'US' ? '$229' : '₱13,500'}
                </span>
              </PriceDecorator>
              <h3 className="mt-2 text-xl font-semibold text-zinc-100">Premium</h3>
            </CardHeader>
            <CardContent>
              <div className="mb-6 flex justify-center">
                <button
                  onClick={() => handleSelect('premium')}
                  class="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#eaedf1] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span class="truncate">Select Premium</span>
                </button>
              </div>
              <ul className="text-sm space-y-2 text-zinc-300">
                {[
                    '8+ Static Pages (includes individual service pages)',
                    'Promo banner or discount voucher feature',
                    'Email opt-in (Mailchimp or Google Sheets)',
                    'Image optimization for faster loading',
                    'Chat widget (Messenger or WhatsApp)',
                    'Analytics (Google or Facebook Pixel)',
                    '3 revision rounds',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-1 text-green-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                  <br/>
                <li><strong>Delivery:</strong> 7–10 days</li>
                <li><strong>Hosting/Domain:</strong> Included + 1-hour tutorial</li>
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
