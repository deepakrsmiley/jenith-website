import { Component, type ErrorInfo, type ReactNode } from "react"

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-xl px-5 py-24 text-center">
          <h1 className="text-3xl text-ink">This page could not be displayed.</h1>
          <p className="mt-4 text-muted">Reload the page. If it continues, the last change on this screen needs a correction.</p>
          <button
            type="button"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-ink px-5 text-[14px] font-medium text-white"
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
