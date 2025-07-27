function sendMoney() {
  const to = document.getElementById("sendTo").value;
  const amount = document.getElementById("sendAmount").value;

  fetch('/send', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ to, amount })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("Money Sent!");
      location.reload();
    } else {
      alert(data.error);
    }
  });
}

function receiveMoney() {
  const from = document.getElementById("receiveFrom").value;
  const amount = document.getElementById("receiveAmount").value;

  fetch('/receive', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ from, amount })
  })
  .then(res => res.json())
  .then(data => {
    alert("Money Received!");
    location.reload();
  });
}
