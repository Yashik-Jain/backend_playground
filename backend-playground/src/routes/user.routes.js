import { Router } from "express";
import { 
    changeCurrentPassword, 
    getcurruser, 
    getuserchannelprofile, 
    getwatchhistory, 
    loginuser, 
    logoutUser, 
    refreshAccessToken, 
    registeruser, 
    updateaccountdetails, 
    updateuserAvatar, 
    updateUserCoverImage 
} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middelwares.js"
import { verifyJWT } from "../middlewares/auth.middelware.js";
import { verify } from "jsonwebtoken";

const router = Router()


router.route("/register").post(
    upload.fields([
        {
            name : "avatar",
            maxCount : 1
        },
        {
            name : "coverImage",
            maxCount : 1
        }
    ]),
    registeruser)

router.route("/login").post(loginuser)

//secured routes
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT,changeCurrentPassword)
router.route("/current-user").get(verifyJWT,getcurruser)
router.route("/update-account").patch(verifyJWT,updateaccountdetails)
router.route("/avatar").patch(verifyJWT,upload.single("avatar"),updateuserAvatar)
router.route("/cover-image").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage)
router.route("/c/:username").get(verifyJWT,getuserchannelprofile)
router.route("/history").get(verifyJWT,getwatchhistory)

export default router