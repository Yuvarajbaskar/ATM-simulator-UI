let balance = 1000; // dummy initial balance
const correctPIN = '1234';

function login() {
  const pin = document.getElementById('pinInput').value;
  const error = document.getElementById('loginError');

  if (pin === correctPIN) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('menuScreen').style.display = 'block';
    error.textContent = '';
  } else {
    error.textContent = 'Incorrect PIN!';
  }
}

function showBalance() {
  document.getElementById('message').textContent = `Your balance is ₹${balance}`;
}

function deposit() {
  const amount = prompt("Enter amount to deposit:");
  if (amount && !isNaN(amount) && Number(amount) > 0) {
    balance += Number(amount);
    document.getElementById('message').textContent = `₹${amount} deposited successfully!`;
  } else {
    alert("Invalid amount");
  }
}

function withdraw() {
  const amount = prompt("Enter amount to withdraw:");
  if (amount && !isNaN(amount) && Number(amount) > 0) {
    if (Number(amount) <= balance) {
      balance -= Number(amount);
      document.getElementById('message').textContent = `₹${amount} withdrawn successfully!`;
    } else {
      alert("Insufficient balance");
    }
  } else {
    alert("Invalid amount");
  }
}

function logout() {
  document.getElementById('menuScreen').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'block';
  document.getElementById('pinInput').value = '';
  document.getElementById('message').textContent = '';
}
