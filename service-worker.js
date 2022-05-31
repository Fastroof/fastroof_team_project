/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b98ac178ad3a68a2d0f020d3af84b443"
  },
  {
    "url": "assets/css/0.styles.16ce0b6a.css",
    "revision": "2e9cb4053f1672e370d53fd29916abaa"
  },
  {
    "url": "assets/img/RM.8bdee479.svg",
    "revision": "8bdee4798df99609e0dc0abe1537551c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Вхід1.d0601594.png",
    "revision": "d0601594d21c3f8375f2be8da1223d28"
  },
  {
    "url": "assets/img/Вхід2.e9305edd.png",
    "revision": "e9305edd8f97040ff4cfc1f791ca6006"
  },
  {
    "url": "assets/img/Головна.db40ca24.png",
    "revision": "db40ca24f082d29d19cab75c1a43864a"
  },
  {
    "url": "assets/img/Модератор.c3e05172.png",
    "revision": "c3e05172f56ca51d7bd81eeabf566dcb"
  },
  {
    "url": "assets/img/Мої_датасети.43f8f118.png",
    "revision": "43f8f1181dab9a53defa354e822fb6e8"
  },
  {
    "url": "assets/img/Новий_датасет.2aa563f6.png",
    "revision": "2aa563f6ceeec425cda51c57d3a3bac8"
  },
  {
    "url": "assets/img/Перейти_до_модератора.68b40e99.png",
    "revision": "68b40e9921dff6b9261f22ddd683ef38"
  },
  {
    "url": "assets/img/Реєстрація1.c0dbb996.png",
    "revision": "c0dbb99640fb722b9022afb829ab67b2"
  },
  {
    "url": "assets/img/Реєстрація2.a409377e.png",
    "revision": "a409377e15d666a2dc8b3e753c51f191"
  },
  {
    "url": "assets/js/10.c0de19bb.js",
    "revision": "3b1000cea163face197d9b7d7a7bf40a"
  },
  {
    "url": "assets/js/11.919960be.js",
    "revision": "878db9105008ea566adaa30837b1c0bd"
  },
  {
    "url": "assets/js/12.2f43993b.js",
    "revision": "1402b9047dc957f9829e908d68a0cc1e"
  },
  {
    "url": "assets/js/13.58f218bb.js",
    "revision": "5100d7f2fcdcd7b2362966bbed6a7521"
  },
  {
    "url": "assets/js/14.7b36570b.js",
    "revision": "c58b8819c6cd260c093a0a1f48b8041d"
  },
  {
    "url": "assets/js/15.7bf52828.js",
    "revision": "1450219a44efd18789e9b3547f4532e9"
  },
  {
    "url": "assets/js/16.fe894f7a.js",
    "revision": "798ba52c8195ca45c8c9fee095e441bc"
  },
  {
    "url": "assets/js/17.01e09e1c.js",
    "revision": "bd4401d16d005262d1199dceae4f52dd"
  },
  {
    "url": "assets/js/18.98598e99.js",
    "revision": "608fd1d85c677b3986dadf75c71079b0"
  },
  {
    "url": "assets/js/19.9dc6e5da.js",
    "revision": "dba6df2575ea2ef5ea1eb7a9a5d386a9"
  },
  {
    "url": "assets/js/2.ef2e7497.js",
    "revision": "f8fa050c0ae7376828f30acab46b85af"
  },
  {
    "url": "assets/js/20.d0538647.js",
    "revision": "a2e259f29292f34796ff35dad619e138"
  },
  {
    "url": "assets/js/21.9b3d0a18.js",
    "revision": "50d7b3d3a87919f9401dbb5909e3d124"
  },
  {
    "url": "assets/js/22.578d85bd.js",
    "revision": "1607ca1ccf672647a804f1cb9384c0e3"
  },
  {
    "url": "assets/js/23.9d0ae498.js",
    "revision": "4d4543fccf52fb55a6af22ff495e548d"
  },
  {
    "url": "assets/js/24.679a89a5.js",
    "revision": "200a30d7761df2e784a77f2fcd3e6bd2"
  },
  {
    "url": "assets/js/26.6dec4e79.js",
    "revision": "57e940fd028f64683c665bc0f029fdf5"
  },
  {
    "url": "assets/js/3.116e57a2.js",
    "revision": "e9c418a3db002dfdc453beacc2c8b804"
  },
  {
    "url": "assets/js/4.bb138b11.js",
    "revision": "0b2a16689ce1e137be4d70d8145ebb6b"
  },
  {
    "url": "assets/js/5.5209d4b7.js",
    "revision": "536ae218d400b5f964e7f86fe2a73298"
  },
  {
    "url": "assets/js/6.70762707.js",
    "revision": "12420e58b99ab0f5a1237b9b1f800dc3"
  },
  {
    "url": "assets/js/7.015b94f5.js",
    "revision": "73355f265a23c08782c560c1c60b03bc"
  },
  {
    "url": "assets/js/8.45c6b9a5.js",
    "revision": "47e4e4c25ef05f20153c2a7fb94e7622"
  },
  {
    "url": "assets/js/9.47f23d59.js",
    "revision": "35539531d3eedc26aa5f698d539c1916"
  },
  {
    "url": "assets/js/app.2c350d7c.js",
    "revision": "6683564bbc6bca81b3afbaf31726b1cb"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f2a8d0e083d7bf64a59df82cf9792ebe"
  },
  {
    "url": "design/index.html",
    "revision": "4052a2737d55dabe92edf7e09a1f8fcb"
  },
  {
    "url": "index.html",
    "revision": "227320bef948170fa0046c07cf9d7eda"
  },
  {
    "url": "intro/index.html",
    "revision": "859bdab3a18d375ccf0d566dfda194bc"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "7e46fd283afdda685c8f257c45491592"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "7c3d870056b6e77e6a91f85e9ea3f6cf"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "fea9dfa70d4b9caaeb171518b07e6990"
  },
  {
    "url": "software/index.html",
    "revision": "35c6cf8dd54c62f184f59f3f027be78e"
  },
  {
    "url": "test/index.html",
    "revision": "866d819e8f791109a918b0ac6ff83125"
  },
  {
    "url": "use cases/index.html",
    "revision": "41d2173de5676b1350152e696709caba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
