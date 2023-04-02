
const util = {}

function fixBinary (bin) { // binary to arrayBuffer
  const length = bin.length
  const buf = new ArrayBuffer(length)
  const arr = new Uint8Array(buf)
  for (let i = 0; i < length; i++) {
    arr[i] = bin.charCodeAt(i)
  }
  return buf
}

window.onload = function () {
  /**
   * Save As function
   *
   * @request String data, String file name, String file type  (default : text/plain;charset=UTF-8)
   *
   * support browser : chrome, firefox, opera , ie edge, ie 10+
   * not support browser : safari
   *
   */
  util.saveAs = (function () {
    let a

    if (!document.getElementById('fileDownload')) {
      a = document.createElement('a')
      a.id = 'fileDownload'
      document.head.appendChild(a) // avoid no body.
      a.style = 'display: none'
    }

    return function (data, fileName, fileType) {
      let binary = data
      try {
        binary = fixBinary(window.atob(data)) // base64 to binary to arrayBuffer
      } catch (e) {
        console.log(e)
      }
      // eslint-disable-next-line no-undef
      const blob = new Blob([binary], {
        type: fileType || 'text/plain;charset=UTF-8'
      })
      const url = window.URL.createObjectURL(blob)

      if (window.navigator.msSaveBlob) { // for ie series
        window.navigator.msSaveBlob(blob, fileName)
      } else {
        a.href = url
        a.download = fileName
        a.click()
      }
      window.URL.revokeObjectURL(url)
    }
  }())
}

