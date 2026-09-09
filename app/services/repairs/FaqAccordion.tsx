'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQ = {
  question: string
  answer: string
}

export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="overflow-hidden rounded-xl border border-gray-100">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex w-full items-center justify-between p-5 text-right transition-colors duration-300 ${
                  isOpen ? 'bg-[#F1F5F9] text-[#1E40AF]' : 'bg-[#F1F5F9] text-gray-800 hover:bg-gray-100'
                }`}
              >
                <span className="font-bold">{faq.question}</span>
                <ChevronDown
                  className={`size-5 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#1F3D3A]' : 'text-gray-500'
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 text-sm leading-8 text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
