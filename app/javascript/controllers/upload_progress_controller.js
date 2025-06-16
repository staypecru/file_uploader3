import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["progress"]

  connect() {
    this.element.addEventListener("submit", this.startUpload.bind(this))
  }

  startUpload(event) {
    const form = this.element
    const fileInput = form.querySelector("input[type=file]")
    const file = fileInput.files[0]
    if (!file) return

    const progress = this.progressTarget
    const xhr = new XMLHttpRequest()
    const formData = new FormData(form)

    xhr.upload.addEventListener("progress", (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded / e.total) * 100)
        progress.value = percent
      }
    })

    xhr.onload = () => {
      progress.value = 100
      Turbo.visit("/")
    }

    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "text/vnd.turbo-stream.html")
    xhr.send(formData)

    event.preventDefault()
  }
}
