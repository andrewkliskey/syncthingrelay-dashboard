# Syncthing Relay Dashboard



A modern and easily readable dashboard and frontpage for your Syncthing relay.
Using the official Syncthing API (Port 22070)
The API is queried client side, with JavaScript.


### Setup with GitHub Pages:
  - Fork Repo
  - Edit the IP in main.js to your desired syncthing relay
  - Edit the index.html to match your server
  - Hit settings in GitHub and turn on GitHub Pages!

HTTPS Issue:
Please note that unfortunately https does not currently work.
This is due to there being no certificate on the Syncthing API.
To fix this you will need to add a certificate to the Syncthing API, this can be done with a Reverse Proxy and Lets Encrypt.


Screenshot:

![Example image](https://github.com/andrewkliskey/syncthingrelay-dashboard/raw/master/desktop-image1.png)

