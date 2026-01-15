const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  depositMoney,
  withdrawMoney,
  getTransactions,
} = require("../controllers/walletController");

router.post("/deposit", protect, depositMoney);
router.post("/withdraw", protect, withdrawMoney);
router.post("/transfer", protect, async (req, res) => {
  const { email, amount } = req.body;

  const sender = await User.findById(req.user.id);
  const receiver = await User.findOne({ email });

  if (!receiver) {
    return res.status(400).json({ message: "Receiver not found" });
  }

  if (sender.balance < amount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  sender.balance -= amount;
  receiver.balance += amount;

  await sender.save();
  await receiver.save();

  await Transaction.create({
    userId: sender._id,
    type: "TRANSFER_OUT",
    amount,
  });

  await Transaction.create({
    userId: receiver._id,
    type: "TRANSFER_IN",
    amount,
  });

  res.json({ balance: sender.balance });
});

router.get("/transactions", protect, getTransactions);

module.exports = router;
