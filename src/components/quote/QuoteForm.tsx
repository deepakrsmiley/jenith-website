import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { products } from "@/data/products"
import {
  enquiryEndpoint,
  submitEnquiry,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryFields,
  type EnquiryResult,
} from "@/lib/enquiry"

const emptyFields: EnquiryFields = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  productCategory: "",
  quantity: "",
  deliveryLocation: "",
  expectedDate: "",
  specifications: "",
  consent: false,
}

const steps = [
  {
    title: "How should we reply?",
    text: "Your name, and a phone number or email we can use.",
    keys: ["fullName", "phone", "email"] as const,
  },
  {
    title: "What should we quote?",
    text: "Choose a product and say where it needs to go.",
    keys: ["productCategory", "deliveryLocation", "expectedDate"] as const,
  },
  {
    title: "Anything else?",
    text: "Notes and a drawing are optional. Then send the request.",
    keys: ["consent", "file"] as const,
  },
]

const categories = [
  ...products.map((product) => ({ value: product.slug, label: product.name })),
  { value: "to-be-discussed", label: "Not sure yet" },
]

function todayIso() {
  const now = new Date()
  const month = `${now.getMonth() + 1}`.padStart(2, "0")
  const day = `${now.getDate()}`.padStart(2, "0")
  return `${now.getFullYear()}-${month}-${day}`
}

function fieldClass(invalid: boolean) {
  return `mt-2 w-full rounded-2xl border bg-[#f5f5f7] px-4 py-3.5 text-[17px] text-ink outline-none transition-colors ${
    invalid ? "border-[#9b2c2c] bg-white" : "border-transparent focus:border-ink focus:bg-white"
  }`
}

function pickStepErrors(all: EnquiryErrors, step: number) {
  const next: EnquiryErrors = {}
  for (const key of steps[step].keys) {
    if (all[key]) next[key] = all[key]
  }
  return next
}

export function QuoteForm() {
  const [searchParams] = useSearchParams()
  const requested = searchParams.get("product") ?? ""
  const initialCategory = products.some((product) => product.slug === requested) ? requested : ""
  const [fields, setFields] = useState<EnquiryFields>({ ...emptyFields, productCategory: initialCategory })
  const [file, setFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<EnquiryResult | null>(null)
  const [honeypot, setHoneypot] = useState("")
  const startedAt = useRef(Date.now())
  const fileRef = useRef<HTMLInputElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const formId = useId()
  const live = Boolean(enquiryEndpoint())
  const current = steps[step]

  useEffect(() => {
    if (initialCategory) {
      setFields((value) => ({ ...value, productCategory: initialCategory }))
    }
  }, [initialCategory])

  useEffect(() => {
    headingRef.current?.focus()
  }, [step, result])

  const update = (key: keyof EnquiryFields, value: string | boolean) => {
    setFields((currentFields) => ({ ...currentFields, [key]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [key]: undefined }))
  }

  const goNext = () => {
    const nextErrors = pickStepErrors(validateEnquiry(fields, file), step)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setStep((value) => Math.min(value + 1, steps.length - 1))
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (step < steps.length - 1) {
      goNext()
      return
    }

    const nextErrors = validateEnquiry(fields, file)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = steps.findIndex((item) => item.keys.some((key) => nextErrors[key]))
      if (firstInvalid >= 0) setStep(firstInvalid)
      return
    }

    setSubmitting(true)
    const response = await submitEnquiry(fields, file, { honeypot, startedAt: startedAt.current })
    setSubmitting(false)
    setResult(response)

    if (response.status === "demo" || response.status === "sent") {
      setFields({ ...emptyFields, productCategory: initialCategory })
      setFile(null)
      if (fileRef.current) fileRef.current.value = ""
      startedAt.current = Date.now()
      setStep(0)
    }
  }

  if (result?.status === "demo" || result?.status === "sent") {
    return (
      <div className="rounded-[32px] bg-white px-7 py-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.08)] sm:px-12">
        <p className="text-[12px] font-medium text-teal">Request noted</p>
        <h2 ref={headingRef} tabIndex={-1} className="mt-3 text-[36px] leading-[1.05] font-semibold tracking-[-0.04em] text-ink outline-none">
          Thank you. We have your details.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-muted">
          Reference {result.reference}.{" "}
          {result.status === "demo"
            ? "This preview saved the request in this browser only. It has not been sent."
            : "The enquiry service accepted the request."}
        </p>
        <button
          type="button"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-ink px-6 text-[14px] font-medium text-white"
          onClick={() => setResult(null)}
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[32px] bg-white px-6 py-7 shadow-[0_30px_80px_rgba(0,0,0,0.08)] sm:px-8 sm:py-9">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[13px] font-medium text-muted">
          Step {step + 1} of {steps.length}
        </p>
        <p className="text-[13px] text-muted">{current.title}</p>
      </div>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#e8e8ed]" aria-hidden="true">
        <div className="h-full rounded-full bg-ink transition-[width] duration-300" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>

      <h2 ref={headingRef} tabIndex={-1} className="mt-8 text-[28px] leading-tight font-semibold tracking-[-0.03em] text-ink outline-none sm:text-[32px]">
        {current.title}
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{current.text}</p>
      {step === 0 && !live ? (
        <p className="mt-3 text-[13px] leading-relaxed text-muted">
          Preview only. The request stays in this browser until a delivery service is connected.
        </p>
      ) : null}

      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {step === 0 ? (
        <div className="mt-8 grid gap-5">
          <Field label="Full name" error={errors.fullName}>
            <input
              className={fieldClass(Boolean(errors.fullName))}
              name="fullName"
              autoComplete="name"
              value={fields.fullName}
              aria-invalid={Boolean(errors.fullName)}
              onChange={(event) => update("fullName", event.target.value)}
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone" error={errors.phone}>
              <input
                className={fieldClass(Boolean(errors.phone))}
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Your mobile number"
                value={fields.phone}
                aria-invalid={Boolean(errors.phone)}
                onChange={(event) => update("phone", event.target.value)}
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                className={fieldClass(Boolean(errors.email))}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                value={fields.email}
                aria-invalid={Boolean(errors.email)}
                onChange={(event) => update("email", event.target.value)}
              />
            </Field>
          </div>
          <Field label="Company" hint="Optional">
            <input
              className={fieldClass(false)}
              name="organization"
              autoComplete="organization"
              value={fields.companyName}
              onChange={(event) => update("companyName", event.target.value)}
            />
          </Field>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="mt-8 grid gap-6">
          <fieldset>
            <legend className="text-[13px] font-medium text-ink">Product</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {categories.map((category) => {
                const selected = fields.productCategory === category.value
                return (
                  <button
                    key={category.value}
                    type="button"
                    aria-pressed={selected}
                    className={`rounded-2xl px-4 py-3 text-left text-[15px] leading-snug transition-colors ${
                      selected ? "bg-ink text-white" : "bg-[#f5f5f7] text-ink hover:bg-[#e8e8ed]"
                    }`}
                    onClick={() => update("productCategory", category.value)}
                  >
                    {category.label}
                  </button>
                )
              })}
            </div>
            {errors.productCategory ? <p className="mt-2 text-[13px] text-[#9b2c2c]">{errors.productCategory}</p> : null}
          </fieldset>
          <Field label="Delivery location" error={errors.deliveryLocation}>
            <input
              className={fieldClass(Boolean(errors.deliveryLocation))}
              name="deliveryLocation"
              autoComplete="address-level2"
              placeholder="City or site area"
              value={fields.deliveryLocation}
              aria-invalid={Boolean(errors.deliveryLocation)}
              onChange={(event) => update("deliveryLocation", event.target.value)}
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Quantity" hint="Optional">
              <input
                className={fieldClass(false)}
                name="quantity"
                placeholder="For example, 200"
                value={fields.quantity}
                onChange={(event) => update("quantity", event.target.value)}
              />
            </Field>
            <Field label="Needed by" hint="Optional" error={errors.expectedDate}>
              <input
                className={fieldClass(Boolean(errors.expectedDate))}
                name="expectedDate"
                type="date"
                min={todayIso()}
                value={fields.expectedDate}
                aria-invalid={Boolean(errors.expectedDate)}
                onChange={(event) => update("expectedDate", event.target.value)}
              />
            </Field>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-8 grid gap-5">
          <Field label="Notes" hint="Optional. Sizes, drawings, or how the product will be used.">
            <textarea
              className={`${fieldClass(false)} min-h-28 resize-y`}
              name="specifications"
              value={fields.specifications}
              onChange={(event) => update("specifications", event.target.value)}
            />
          </Field>
          <div>
            <p className="text-[13px] font-medium text-ink">Drawing</p>
            <p className="mt-0.5 text-[12px] text-muted">Optional. PDF, image, DWG, or DXF up to 10 MB.</p>
            <button
              type="button"
              className="mt-2 flex min-h-14 w-full items-center justify-center rounded-2xl bg-[#f5f5f7] px-4 text-[15px] text-ink"
              onClick={() => fileRef.current?.click()}
            >
              {file ? file.name : "Add a file"}
            </button>
            <input
              ref={fileRef}
              id={`${formId}-drawing`}
              className="sr-only"
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,.webp,.dwg,.dxf"
              aria-invalid={Boolean(errors.file)}
              onChange={(event) => {
                setFile(event.target.files?.[0] ?? null)
                setErrors((currentErrors) => ({ ...currentErrors, file: undefined }))
              }}
            />
            {file ? (
              <button
                type="button"
                className="mt-2 text-[13px] text-muted underline"
                onClick={() => {
                  setFile(null)
                  if (fileRef.current) fileRef.current.value = ""
                }}
              >
                Remove file
              </button>
            ) : null}
            {errors.file ? <p className="mt-2 text-[13px] text-[#9b2c2c]">{errors.file}</p> : null}
            {!live ? <p className="mt-2 text-[12px] text-muted">In this preview the file stays on your device.</p> : null}
          </div>
          <label className="flex items-start gap-3 rounded-2xl bg-[#f5f5f7] px-4 py-4 text-[14px] leading-relaxed text-ink">
            <input
              type="checkbox"
              className="mt-0.5 h-5 w-5 accent-ink"
              checked={fields.consent}
              aria-invalid={Boolean(errors.consent)}
              onChange={(event) => update("consent", event.target.checked)}
            />
            <span>
              I agree these details may be used to reply to this request.{" "}
              <Link to="/privacy" className="underline underline-offset-4">
                Privacy Policy
              </Link>
            </span>
          </label>
          {errors.consent ? <p className="-mt-2 text-[13px] text-[#9b2c2c]">{errors.consent}</p> : null}
        </div>
      ) : null}

      {result?.status === "error" ? <p className="mt-5 text-[14px] text-[#9b2c2c]">{result.message}</p> : null}
      {result?.status === "spam" ? (
        <p className="mt-5 text-[14px] text-[#9b2c2c]">Please wait a few seconds, then try again.</p>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button type="button" className="text-[14px] text-muted hover:text-ink" onClick={() => setStep((value) => value - 1)}>
            Back
          </button>
        ) : (
          <span />
        )}
        {step < steps.length - 1 ? (
          <button type="submit" className="inline-flex h-11 items-center rounded-full bg-ink px-6 text-[14px] font-medium text-white hover:bg-black">
            Continue
          </button>
        ) : (
          <button
            type="submit"
            className="inline-flex h-11 items-center rounded-full bg-ink px-6 text-[14px] font-medium text-white hover:bg-black disabled:opacity-70"
            disabled={submitting}
          >
            {submitting ? "Sending" : "Send request"}
          </button>
        )}
      </div>
    </form>
  )
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string
  hint?: string
  error?: string
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="text-[13px] font-medium text-ink">{label}</span>
      {hint ? <span className="mt-0.5 block text-[12px] text-muted">{hint}</span> : null}
      {children}
      {error ? <span className="mt-1.5 block text-[13px] text-[#9b2c2c]">{error}</span> : null}
    </label>
  )
}
