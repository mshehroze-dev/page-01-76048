import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { NuvraBadge } from './components/NuvraBadge';
function App() {
  const sectionsData = [
    {
      "type": "hero",
      "headline": "Revolutionize Your Workflow",
      "sub": "Streamline tasks, boost productivity, and achieve your goals with our cutting-edge solution.",
      "cta_text": "Get Started",
      "image_url": "https://images.unsplash.com/photo-1605707010419-f004391e92d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1NXx8dGVjaG5vbG9neSUyMGxhbmRpbmclMjBwYWdlfGVufDB8fHx8MTcwODY0MzQ0NXww&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      "type": "features",
      "items": [
        { "title": "Intuitive Interface", "desc": "Easy to use, beautiful design, and a joy to navigate for all users." },
        { "title": "Powerful Analytics", "desc": "Gain deep insights into your data with our advanced reporting tools." },
        { "title": "Seamless Integration", "desc": "Connect effortlessly with your existing tools and services." }
      ]
    },
    {
      "type": "pricing",
      "plans": [
        { "name": "Basic", "price": "$9/month", "features": ["Core Features", "Email Support", "5 Projects"], "cta": "Choose Basic" },
        { "name": "Pro", "price": "$29/month", "features": ["All Basic Features", "Priority Support", "Unlimited Projects", "Advanced Analytics"], "cta": "Choose Pro" },
        { "name": "Enterprise", "price": "Custom", "features": ["All Pro Features", "Dedicated Account Manager", "Custom Integrations", "SLA"], "cta": "Contact Sales" }
      ]
    },
    {
      "type": "faq",
      "items": [
        { "q": "What is your refund policy?", "a": "We offer a 30-day money-back guarantee, no questions asked." },
        { "q": "Can I upgrade or downgrade my plan?", "a": "Yes, you can easily change your plan at any time from your account settings." },
        { "q": "Do you offer customer support?", "a": "Absolutely! We provide email support for all plans, and priority support for Pro and Enterprise." }
      ]
    }
  ];
  const renderSection = (section: any, index: number) => {
    switch (section.type) {
      case "hero":
        return (
  <>
    <NuvraBadge />
          <section key={index} className="relative overflow-hidden from-indigo-50 to-white py-16 lg:py-24">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-sans">
                  {section.headline}
                </h1>
                <p className="text-lg text-gray-700 mb-8 font-sans">
                  {section.sub}
                </p>
                {section.cta_text && (
                  <button className="px-8 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl shadow-lg transition duration-300">
                    {section.cta_text}
                  </button>
                )}
              </div>
              {section.image_url && (
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  <img
                    src={section.image_url}
                    alt={section.headline}
                    className="rounded-xl shadow-lg max-w-full h-auto"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
            </div>
          </section>
        
  </>
);
      case "features":
        return (
          <section key={index} className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 font-sans">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item: any, i: number) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case "pricing":
        return (
          <section key={index} className="bg-gray-50 py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 font-sans">
                Pricing Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.plans.map((plan: any, i: number) => (
                  <div key={i} className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-sans">
                        {plan.name}
                      </h3>
                      <p className="text-4xl font-bold text-indigo-600 mb-6 font-sans">
                        {plan.price}
                      </p>
                      <ul className="mb-8 space-y-3 text-gray-700">
                        {plan.features.map((feature: string, j: number) => (
                          <li key={j} className="flex items-center font-sans">
                            <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {plan.cta && (
                      <button className="block w-full text-center px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl transition duration-300">
                        {plan.cta}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case "faq":
        return (
          <section key={index} className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 font-sans">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {section.items.map((item: any, i: number) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-sans">
                      {item.q}
                    </h3>
                    <p className="text-gray-700 font-sans">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen antialiased font-sans">
      {sectionsData.map(renderSection)}
      <Footer />
    </div>
  );
}
export default App;