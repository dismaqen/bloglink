<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Klik Vast Ad</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: sans-serif;
      background: #111;
      color: #fff;
      font-size: 24px;
    }
  </style>
</head>
<body>
  <!-- Teks countdown -->
  <div id="countdown">Tunggu 3 detik...</div>

  <!-- Inject script iklan -->
  <script>
    (function(mvek){
      var d = document,
          s = d.createElement('script'),
          l = d.scripts[d.scripts.length - 1];
      s.settings = mvek || {};
      s.src = "\/\/probableregret.com\/b.XuVFsxdSGulf0KYVWpcB\/jebml9puCZKUxlwkcPaT-YX1LNIzKAR3\/NyTpcRtMNCjlU\/3\/MMDdcC1ZO-AD";
      s.async = true;
      s.referrerPolicy = 'no-referrer-when-downgrade';
      l.parentNode.insertBefore(s, l);
    })({})
  </script>

  <!-- Observer untuk tunggu elemen muncul lalu auto klik -->
  <script>
    const countdownEl = document.getElementById('countdown');
    let timeLeft = 3;

    const timer = setInterval(() => {
      countdownEl.textContent = `Tunggu ${timeLeft} detik...`;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        countdownEl.textContent = "Link muncul...";
      }
    }, 1000);

    const observer = new MutationObserver(() => {
      const adLink = document.querySelector('a.vast-blocker[href]');
      if (adLink) {
        observer.disconnect(); // stop ngamatin
        setTimeout(() => {
          window.location.href = adLink.href; // buka langsung di tab yang sama
        }, 0); // langsung setelah countdown selesai
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  </script>
</body>
</html>
