export function imageToBS64(file, callback) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
        callback(reader.result)
    }
}