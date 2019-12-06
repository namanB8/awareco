import * as express from "express";
const router = express.Router();

router.get("/", (req, res) => {

  // get username and password from req params and return 200 if the credentials are correct.
  if(req.query.userName && req.query.password) {
    
  }
});

export default router;