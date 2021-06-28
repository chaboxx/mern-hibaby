const multer= require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
            cb(null, '../../REACT/backend_/client/storage/imgs')

        
},
        filename: function (req, file, cb) {
    
        cb(null, `hibaby-${Date.now()}.jpg`)

    
}
})

const upload = multer({ storage: storage })

module.exports= upload;


