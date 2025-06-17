document.addEventListener("direct-upload:initialize", (event) => {
  const { detail } = event
  const { file } = detail
  if (!file) return

  const progress = document.getElementById("upload_progress")
  progress.value = 0
})

document.addEventListener("direct-upload:progress", (event) => {
  if (event.lengthComputable) {
    const percent = Math.round((event.loaded / event.total) * 100)
    progress.value = percent
  }
})