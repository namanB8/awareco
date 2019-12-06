import { Router } from 'express';
import { Activity } from './../models/Activity';
import mongoose from 'mongoose';
import { User } from '../models/User';
import { Transaction } from '../models/Transaction';

const router = Router();

router.get('/:userId', async (req, res) => {
  try {
    const activities = Activity.find({ user: new mongoose.Types.ObjectId(req.params.userId) }).exec();

    res.json({
      status: true,
      message: '',
      data: {
        activities
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

router.post('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    
    const transaction = await Transaction.create({
      user,
      type: 'Activity',
      credits: 2 * req.body.distanceCovered * (req.body.activityType === 'Walking' ? 1 : -1)
    })

    const activity = await Activity.create({
      user,
      activityType: req.body.activityType,
      distanceCovered: req.body.distanceCovered,
      transaction
    });

    res.json({
      status: true,
      message: '',
      data: {
        activity
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

router.get('/:userId/:activityId', async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.activityId).lean();

    res.json({
      status: true,
      message: '',
      data: {
        activity
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

export default router;