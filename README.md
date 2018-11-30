PhillyTrafficCams
=======




camera_stream_timeout_seconds is set to 60

The real video page:
https://www.511pa.com/flowplayeri.aspx?CAMID=CAM-06-012


The source files, not sure if I will need
http://pa511wmedia101.ilchost.com/live/CAM-06-440.stream/media_w1240356806_22359.ts?wmsAuthSign=xxx
http://pa511wmedia101.ilchost.com/live/CAM-06-337.stream/media_w1478814025_7193.ts?wmsAuthSign=xxx


Actual urls being hit

https://pa511wmedia100.ilchost.com/live/CAM-06-012.stream/chunklist_w1210102094.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9MTEvMzAvMjAxOCA3OjExOjA0IFBNJmhhc2hfdmFsdWU9bEFVaHhrTnh6UkJFV0R5dERzdndOdz09JnZhbGlkbWludXRlcz0yMCZpZD03NS4xNTEuMTY1LjIyMQ%3D%3D

then we hit

https://pa511wmedia100.ilchost.com/live/CAM-06-012.stream/media_w1210102094_2573.ts?wmsAuthSign=c2VydmVyX3RpbWU9MTEvMzAvMjAxOCA3OjExOjA0IFBNJmhhc2hfdmFsdWU9bEFVaHhrTnh6UkJFV0R5dERzdndOdz09JnZhbGlkbWludXRlcz0yMCZpZD03NS4xNTEuMTY1LjIyMQ%3D%3D


url + cam# + media/chunklist + wId + (optional frame id if media) + authkey