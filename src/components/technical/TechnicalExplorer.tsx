import { useState } from "react"
import { Link } from "react-router-dom"
import {
  comparisonColumns,
  comparisonRows,
  technicalDocuments,
  technicalGroups,
} from "@/data/content"
import { Button } from "@/components/ui/Button"

export function TechnicalExplorer() {
  const [activeId, setActiveId] = useState(technicalGroups[0].id)
  const activeIndex = Math.max(
    0,
    technicalGroups.findIndex((group) => group.id === activeId),
  )
  const active = technicalGroups[activeIndex]

  const move = (direction: 1 | -1) => {
    const next = (activeIndex + direction + technicalGroups.length) % technicalGroups.length
    setActiveId(technicalGroups[next].id)
  }

  return (
    <div id="specifications">
      <div
        className="flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label="Enquiry parameters by product"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault()
            move(1)
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault()
            move(-1)
          }
        }}
      >
        {technicalGroups.map((group) => {
          const selected = group.id === active.id
          return (
            <button
              key={group.id}
              type="button"
              role="tab"
              id={`tab-${group.id}`}
              aria-selected={selected}
              aria-controls={`panel-${group.id}`}
              tabIndex={selected ? 0 : -1}
              className={`h-9 shrink-0 rounded-full px-4 text-[13px] font-medium ${selected ? "bg-ink text-white" : "bg-[#e8e8ed] text-muted"}`}
              onClick={() => setActiveId(group.id)}
            >
              {group.title}
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="grid gap-10 py-8 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div>
          <h3 className="text-2xl text-ink">{active.title}</h3>
          <p className="mt-3 text-muted">{active.summary}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            These fields describe what to send. They are not published dimensions, grades, or certifications.
          </p>
          <div className="mt-6">
            <Button to={`/quote?product=${active.productSlug}`} arrow>
              Enquire about this category
            </Button>
          </div>
        </div>
        <dl>
          {active.parameters.map((parameter) => (
            <div key={parameter.name} className="border-t border-line py-4">
              <dt className="font-medium text-ink">{parameter.name}</dt>
              <dd className="mt-1 text-muted">{parameter.note}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl text-ink">Comparison of enquiry parameters</h3>
        <p className="mt-3 max-w-3xl text-muted">
          The table lists the information each product group needs. It does not state tested values or compliance with a standard.
        </p>
        <div className="mt-6 overflow-x-auto rounded-[22px] bg-white">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <caption className="sr-only">Enquiry parameters compared across product groups</caption>
            <thead className="bg-mist text-navy">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">
                  Parameter
                </th>
                {comparisonColumns.map((column) => (
                  <th key={column.key} scope="col" className="px-4 py-3 font-medium">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.parameter} className="border-t border-line align-top">
                  <th scope="row" className="px-4 py-4 font-medium text-ink">
                    {row.parameter}
                  </th>
                  {comparisonColumns.map((column) => (
                    <td key={column.key} className="px-4 py-4 text-muted">
                      {row.values[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div id="documents" className="mt-12 rounded-[28px] bg-[#f5f5f7] p-6 sm:p-8">
        <h3 className="text-2xl text-ink">Technical documents</h3>
        {technicalDocuments.length === 0 ? (
          <p className="mt-3 max-w-3xl text-muted">
            No technical documents are available for download. Data sheets, drawings, and test records are added here only when the file exists, and are otherwise shared against a specific enquiry.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {technicalDocuments.map((document) => (
              <li key={document.href} className="flex items-center justify-between gap-4 py-3">
                <span>
                  {document.title}
                  <span className="ml-2 text-sm text-muted">{document.format}</span>
                </span>
                <a href={document.href} download className="text-sm font-medium text-corp">
                  Download
                </a>
              </li>
            ))}
          </ul>
        )}
        <Link to="/quote" className="mt-5 inline-flex text-sm font-medium text-navy underline decoration-teal underline-offset-4">
          Request documents with your quotation
        </Link>
      </div>
    </div>
  )
}
