import React, { useState } from "react";

const DepositForm = ({ goals, onDeposit }) => {
  const [deposit, setDeposit] = useState({ goalId: "", amount: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeposit({ ...deposit, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deposit.goalId && deposit.amount) {
      onDeposit(deposit.goalId, parseFloat(deposit.amount));
      setDeposit({ goalId: "", amount: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="deposit-form">
      <h3>Make a Deposit</h3>
      <select name="goalId" value={deposit.goalId} onChange={handleChange} required>
        <option value="">Select Goal</option>
        {goals.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>
      <input
        type="number"
        name="amount"
        placeholder="Deposit Amount"
        value={deposit.amount}
        onChange={handleChange}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;

