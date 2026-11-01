export type EnquiryFields = {
  fullName: string
  companyName: string
  phone: string
  email: string
  productCategory: string
  quantity: string
  deliveryLocation: string
  expectedDate: string
  specifications: string
  consent: boolean
}

export type EnquiryErrors = Partial<Record<keyof EnquiryFields | "file", string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEnquiry(fields: EnquiryFields, file: File | null): EnquiryErrors {
  const errors: EnquiryErrors = {}

  if (fields.fullName.trim().length < 2) {
    errors.fullName = "Enter the full name of the person we should reply to."
  }

  const digits = fields.phone.replace(/\D/g, "")
  if (digits.length < 8 || digits.length > 15 || !/^[0-9+\-().\s]+$/.test(fields.phone.trim())) {
    errors.phone = "Enter a phone number with 8 to 15 digits."
  }

  if (!emailPattern.test(fields.email.trim())) {
    errors.email = "Enter a valid email address."
  }

  if (!fields.productCategory) {
    errors.productCategory = "Select a product category."
  }

  if (fields.deliveryLocation.trim().length < 2) {
    errors.deliveryLocation = "Enter the delivery location or site area."
  }

  if (fields.expectedDate) {
    const selected = new Date(`${fields.expectedDate}T00:00:00`)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (Number.isNaN(selected.getTime()) || selected < today) {
      errors.expectedDate = "Choose today or a future date, or leave this blank."
    }
  }

  if (!fields.consent) {
    errors.consent = "Consent is required before the enquiry can be recorded."
  }

  if (file) {
    const allowed = ["pdf", "png", "jpg", "jpeg", "webp", "dwg", "dxf"]
    const extension = file.name.split(".").pop()?.toLowerCase() ?? ""
    if (!allowed.includes(extension)) {
      errors.file = "Attach a PDF, image, DWG, or DXF file."
    } else if (file.size > 10 * 1024 * 1024) {
      errors.file = "The attachment must be 10 MB or smaller."
    }
  }

  return errors
}

export type EnquiryResult =
  | { status: "demo"; reference: string }
  | { status: "sent"; reference: string }
  | { status: "error"; message: string }
  | { status: "spam" }

export function enquiryEndpoint() {
  const value = import.meta.env.VITE_ENQUIRY_ENDPOINT?.trim()
  return value ? value : null
}

function makeReference() {
  return `NC-${Date.now().toString(36).toUpperCase()}`
}

export async function submitEnquiry(
  fields: EnquiryFields,
  file: File | null,
  options: { honeypot: string; startedAt: number },
): Promise<EnquiryResult> {
  if (options.honeypot.trim()) {
    return { status: "spam" }
  }

  if (Date.now() - options.startedAt < 2500) {
    return { status: "spam" }
  }

  const reference = makeReference()
  const payload = {
    reference,
    ...fields,
    fullName: fields.fullName.trim(),
    companyName: fields.companyName.trim(),
    phone: fields.phone.trim(),
    email: fields.email.trim(),
    deliveryLocation: fields.deliveryLocation.trim(),
    specifications: fields.specifications.trim(),
    fileName: file?.name ?? null,
    fileSize: file?.size ?? null,
    fileType: file?.type ?? null,
    submittedAt: new Date().toISOString(),
  }

  const endpoint = enquiryEndpoint()

  if (!endpoint) {
    const key = "nexcrete-demo-enquiries"
    const existing = window.localStorage.getItem(key)
    const parsed: unknown[] = existing ? (JSON.parse(existing) as unknown[]) : []
    parsed.push({ ...payload, delivered: false })
    window.localStorage.setItem(key, JSON.stringify(parsed.slice(-20)))
    return { status: "demo", reference }
  }

  const body = new FormData()
  body.append("payload", JSON.stringify(payload))
  if (file) body.append("file", file)

  try {
    const response = await fetch(endpoint, { method: "POST", body })
    if (!response.ok) {
      return {
        status: "error",
        message: "The enquiry service did not accept this submission. Nothing was confirmed as delivered.",
      }
    }
    return { status: "sent", reference }
  } catch {
    return {
      status: "error",
      message: "The enquiry could not be delivered. Check the connection and try again.",
    }
  }
}
