# QR-Code-Reader

# this is the QR code Application for reading and generating QR code from Image and text resp.


# this project will work on desktop and mobile also.
# I have used simply the QR server API to Fetch images of QR code to show it on front end.
# QR server API provide us the image of QR code as per input text. 
# we need to put the text in search bar and click on Generate button.(GET request)
# when we click on Generate button, get request will be send to API server & server will analyze that text and in response, will send image of QR code
  for that text.
  this image is directly shown on front end.
# same thing is happen in case of Reader
# but yet we can able to upload qr code only in image format. 
# the direct camara scan functionality is not yet included in this app.
# In reader we need to upload the JPG image of Qr code in file uploder. (POST request)
# we generaly posting information to API server and API server will just decode that QR code image and in response, server will send us the Text which is contained in    # that QR code image.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Tools & technologies used
 - Javascript (complete Backend)
 - HTML & CSS (styling & web page structure)
 
# API
  - qr-server API (https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example)

# IDE
 - Microsoft Visual studio code
 
# demo link
  - https://project-25.netlify.app/
