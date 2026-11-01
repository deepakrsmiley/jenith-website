import { useId, useState } from "react"
import { faqs } from "@/data/content"

export function FaqList() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id)
  const baseId = useId()

  return (
    <div className="border-t border-line">
      {faqs.map((item) => {
        const open = openId === item.id
        const panelId = `${baseId}-${item.id}`
        const buttonId = `${panelId}-button`
        return (
          <div key={item.id} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg text-ink"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span>{item.question}</span>
                <span className="text-teal" aria-hidden="true">
                  {open ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion-panel"
              data-open={open}
              aria-hidden={open ? undefined : true}
              inert={open ? undefined : true}
            >
              <div>
                <p className="max-w-3xl pb-5 text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
