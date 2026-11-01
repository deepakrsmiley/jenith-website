# NEXCON

Corporate website for NEXCON concrete and precast products. The company name on the live pages is NEXCON.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Enquiry delivery

The quotation form validates submissions in the browser. Delivery is not claimed unless the configured endpoint returns a successful response.

Set this in `.env` when a receiver is ready:

```bash
VITE_ENQUIRY_ENDPOINT=https://example.com/api/enquiries
```

The form sends `multipart/form-data`:

- `payload`: JSON string with the enquiry fields, a local reference, and file metadata
- `file`: the optional drawing, included only when the visitor attached one

Treat any non-2xx response as undelivered. The site shows an error in that case.

Until `VITE_ENQUIRY_ENDPOINT` is set, the form stays in demo mode:

- the enquiry is saved in `localStorage` under `nexcrete-demo-enquiries`
- the attachment is not uploaded
- the success message states that nothing was sent

No CRM, email, or WhatsApp workflow is connected.

## Content still to confirm

Do not publish these until the company supplies them:

- phone, WhatsApp, email, office address, and service area
- social profiles
- technical documents, test reports, and standards claims
- project photographs, client names, capacity, headcount, and founding details

Illustrative photographs are loaded from Unsplash and are labelled as illustrative. Replace them with company photography when it is available.

## Documents

Add real files to `src/data/content.ts` in `technicalDocuments` only after the file exists. Empty lists show no download buttons.
