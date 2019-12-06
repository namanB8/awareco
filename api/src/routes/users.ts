import { Router } from 'express';
import { User } from './../models/User';
import { Donation, DonationDocument } from './../models/Donation';
import { Transaction, TransactionDocument } from './../models/Transaction';
import mongoose from 'mongoose';
import { UserEvent } from '../models/UserEvent';

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

router.post('/', (req, res) => {
  User.create(req.body).then(() => {
    res.json({
      status: true,
      message: "User created",
      data: req.body
    });
  }).catch(err => {
    res.json({
      status: false,
      message: err.message,
      data: req.body
    });
  });
});

router.get('/profile/:userId', async (req, res) => {
  try {
    const donations = await Donation.find({ user: new mongoose.Types.ObjectId(req.params.userId) }).exec();
    let totalDonationAmount = 0;
    donations.forEach((donation:DonationDocument)  => {
      totalDonationAmount += donation.amount;
    });

    const totalUserEvents = await UserEvent.find({ user: new mongoose.Types.ObjectId(req.params.userId) }).count();

    const totalTreesPlanted = Math.floor(totalDonationAmount * (1/10));

    res.json({
      status: true,
      message: '',
      data: {
        totalDonationAmount,
        totalUserEvents,
        totalTreesPlanted
      }
    });
  } catch(err) {
    res.json({
      status: false,
      message: err.message,
      data: {}
    });
  }
});

router.get('/credits/:userId', async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: new mongoose.Types.ObjectId(req.params.userId) }).exec();

    let totalCreditsAvailable = 0;
    transactions.forEach((transaction: TransactionDocument) => {
      totalCreditsAvailable += transaction.credits;
    });

    res.json({
      status: true,
      message: '',
      data: {
        totalCreditsAvailable
      }
    });
  } catch(err) {
    res.json({
      status: false,
      message: err.message,
      data: {}
    });
  }
});

//router.get('/leaderboard');
//router.get('/credits');

export default router;