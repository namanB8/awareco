import { Router } from 'express';
import { User } from './../models/User';
import { Donation, DonationDocument } from './../models/Donation';
import { Transaction, TransactionDocument } from './../models/Transaction';
import { Event } from './../models/Event';
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
    const transactions = await Transaction.find({ user: new mongoose.Types.ObjectId(req.params.userId) }).exec();

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

router.post('/donate/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    
    const transaction = await Transaction.create({
      user,
      type: 'Donation',
      credits: req.body.amount
    })

    const donation = await Donation.create({
      user,
      amount: req.body.amount,
      transaction
    });

    res.json({
      status: true,
      message: '',
      data: {
        donation
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

router.post('/userEvent/:userId/:eventId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const event = await Event.findById(req.params.eventId);

    const userEvent = await UserEvent.create({
      user,
      event
    });

    res.json({
      status: true,
      message: '',
      data: {
        userEvent
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

router.delete('/userEvent/:userId/:eventId', async (req, res) => {
  try {
    const result = await UserEvent.deleteOne({ user: req.params.userId, event: req.params.eventId });

    res.json({
      status: true,
      message: 'User not longer attending the event',
      data: {}
    });
  } catch(err) {
    res.json({
      status: false,
      message: err.message,
      data: {}
    });
  }
});

router.get('/leaderboard');

export default router;