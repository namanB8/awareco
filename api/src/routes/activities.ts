import { Router } from 'express';
import { Activity } from './../models/Activity';
import mongoose from 'mongoose';

const router = Router();

router.get('/:userId', async (req, res) => {
  try {
    const activities = Activity.find({user: new mongoose.Types.ObjectId(req.params.userId)});

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

router.get('/:activityId', async (req, res) => {
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