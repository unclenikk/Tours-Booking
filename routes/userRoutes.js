const express = require('express');
const userControler = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userControler.getMe, userControler.getUser);
router.patch(
  '/updateMe',
  userControler.uploadUserPhoto,
  userControler.resizeUserPhoto,
  userControler.updateMe
);
router.delete('/deleteMe', userControler.deleteMe);

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userControler.getAllUsers)
  .post(userControler.createUser);

router
  .route('/:id')
  .get(userControler.getUser)
  .patch(userControler.updateUser)
  .delete(userControler.deleteUser);

module.exports = router;
