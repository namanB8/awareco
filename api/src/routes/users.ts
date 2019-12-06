import { Router } from 'express';
import { User } from './../models/User';

const router = Router();

router.get('/', (req, res) => {
  User.find().then(docs => {
    res.json({
      status: true,
      message: "",
      data: docs,
    });
  }).catch(err => {
    res.json({
      status: false,
      message: err.message,
      data: []
    })
  })
});

//router.post('/login');
//router.get('/leaderboard');
//router.get('/credits');

export default router;