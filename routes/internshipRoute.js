const express = require("express");
const {verifyJWT} = require("../middleware/jwtAuthentication");
const {postInternship, applyInternship, findInternships, findInternship, deleteInternship} = require("../controller/internshipController");
const {businessOnly} = require("../middleware/authorizationMiddlewares");
const router = express.Router();

router.route("/postInternship")
    .post(verifyJWT,postInternship);
router.route("/applyInternship")
    .post(verifyJWT,applyInternship);

router.route("/findInternship")
    .get(findInternships);
router.route("/findInternship/:internshipID")
    .get(findInternship);
router.route("/deleteInternship/:internshipID")
    .delete([verifyJWT,businessOnly],deleteInternship);


module.exports = router;
