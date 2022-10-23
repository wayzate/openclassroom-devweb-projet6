const multer = require('multer')

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images')
  },
  filename: (req, file, callback) => {
    let name = file.originalname.split(' ').join('_')
    const extension = MIME_TYPES[file.mimetype]
    name = name.replace(`.${extension}`, "_")

    callback(null, `${name + Date.now()}.${extension}`)
  },
})

exports.default = multer({
  storage,
}).single('image')
