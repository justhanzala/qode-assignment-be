const upload = require("../middlewares/upload");
const { AddImage, getImages } = require("../controllers/images");
const { Router } = require("express");

const router = Router();

router.post("/addImage", upload.single("image"), AddImage);
router.get("/getImages", getImages);

module.exports = router;
