const User = require("../models/User");
const Transaction = require("../models/Transaction");

// DEPOSIT
exports.depositMoney = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const user = await User.findById(req.user);
    user.balance += amount;
    await user.save();

    await Transaction.create({
      userId: req.user,
      type: "DEPOSIT",
      amount,
    });

    res.json({ balance: user.balance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// WITHDRAW
exports.withdrawMoney = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const user = await User.findById(req.user);

    if (user.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    user.balance -= amount;
    await user.save();

    await Transaction.create({
      userId: req.user,
      type: "WITHDRAW",
      amount,
    });

    res.json({ balance: user.balance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// TRANSACTION HISTORY
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user }).sort({
      createdAt: -1,
    });

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
