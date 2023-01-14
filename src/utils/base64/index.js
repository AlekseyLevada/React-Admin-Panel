export function imageToBS64(image, callback) {
    const reader = new FileReader()
    reader.onload = function () {
        callback(reader.result)
    }
    reader.readAsDataURL(image)
}