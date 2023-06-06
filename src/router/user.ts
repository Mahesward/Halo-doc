import express from 'express';
import * as controller from '../controller/userController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

//* Signup Login

router.route('/signup').post(controller.signup);
router.route('/login').post(controller.login);

//* get doctors

router.route('/get-user-info/:id').get(auth, controller.getUserInfo);
router.route('/doctors-by-department').get(auth, controller.getDoctorsbyDept);

//* Payment

router.route('/payment').post(auth, controller.payment);
router.route('/webhook').post(auth, controller.webHooks);

//* Appoinment

router.route('/appointment/cancel-appointment/:id').patch(auth, controller.cancelAppointment);
router.route('/create-notifications').post(auth, controller.createNotification);
router.route('/check-available-timing').post(auth, controller.checkAvailableTiming);

//* report / feedback

router.route('/report-doctor').post(auth, controller.reportDoctor);
router.route('/feedback').post(auth, controller.createFeedback);

export default router;
