document.addEventListener("direct-upload:initialize", (event) => {
  const { detail } = event
  const { file } = detail
  if (!file) return

  const progress = document.getElementById("upload-progress")
  progress.value = 0
})

document.addEventListener("direct-upload:progress", (event) => {
  const progress = document.getElementById("upload-progress")
  if (event.detail && event.detail.progress) {
    const percent = Math.round(event.detail.progress * 100)
    progress.value = percent
  }
})