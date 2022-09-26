# officebookingsystem


# 45-server-kantoor
<!-- How to start -->
json-server --watch db.json

						Kantoor App
######################################################################################################################

Link Deploy dari BE : http://server.greskit.com:8080

Endpoint : 
######################################################################################################################
<!-- Register User -->
	1. POST -> http://server.greskit.com:8080/register
		Body : {
   			 "email": "ridwan@gmail.com",
    			 "name": "ridwan",
   			 "fullname": "ridwan RAH",
    			 "alamat" : "jl jalan raya",
    			 "phone": "0851222222",
    			 "password": "12345678"
			}

	2. POST -> http://server.greskit.com:8080/login
		Body : {
   			 "email": "ikhsan@gmail.com",
    			 "password": "12345678"
			}

	3. GET -> http://server.greskit.com:8080/admin/users
	4. GET -> http://server.greskit.com:8080/admin/user/:id (contoh = 1)
	5. DELETE -> http://server.greskit.com:8080/admin/users/:id (contoh = 1)
	6. PUT -> http://server.greskit.com:8080/admin/users/:id (contoh = 2)
		Body : {
   			 "name": "judin",
    			 "fullname": "judin fikri",
    			 "email": "judin@gmail.com",
    			 "alamat": "jl raya",
   			 "phone" : "08452723743"
			}

######################################################################################################################
<!-- Manage Gedung  -->
	Admin : 1. POST -> http://server.greskit.com:8080/admin/gedung
			Body : {
    				"name": "The Honey Lady Building",
   				"location": "Jakarta Barat",
    				"price": "450000",
    				"latitude": "-6.2296254",
    				"longitude": "106.8049591",
    				"description": "Sewa Kantor"
				}
	
		2. GET -> http://server.greskit.com:8080/admin/gedungs
		3. GET -> http://server.greskit.com:8080/admin/gedung/:id (contoh = 1)
		4. PUT -> http://server.greskit.com:8080/admin/gedungs/:id (contoh = 1)
			Body : {
    				"name": "The Honey Lady Building",
   				"location": "Jakarta Barat",
    				"price": "450000",
    				"latitude": "-6.2296254",
    				"longitude": "106.8049591",
    				"description": "Sewa Kantor"
				}

		5. DELETE -> http://server.greskit.com:8080/admin/gedung/:id (contoh = 2)
	
	Customer : 1. GET -> http://server.greskit.com:8080/gedung
		   2. GET -> http://server.greskit.com:8080/gedung/price

######################################################################################################################
<!-- Manage Nearby Facilities -->

	Admin : 1. GET -> http://server.greskit.com:8080/admin/nearby
		2. GET -> http://server.greskit.com:8080/admin/nearby/:id (contoh = 1)
		3. POST -> http://server.greskit.com:8080/nearby
			Body : {
    				"namefacilities": "Masjid Nurul Islam",
    				"jenis": "Fasilitas Ibadah",
    				"jarak": "500 M",
    				"latitude": "-6.2300967",
    				"longtitude": "106.8065819"
				}

		4. PUT -> http://server.greskit.com:8080/admin/nearby/:id (contoh = 1)
			Body : {
    				"namefacilities": "Masjid Nurul Islam",
    				"jenis": "Fasilitas Ibadah",
    				"jarak": "500 M",
    				"latitude": "-6.2300967",
    				"longtitude": "106.8065819"
				}
	
	Customer : 1. GET -> http://server.greskit.com:8080/nearby/:id (contoh = 1)
		   2. GET -> http://server.greskit.com:8080/nearby

######################################################################################################################
<!-- Manage Nearby Facilities -->

	Admin : 1. POST -> http://server.greskit.com:8080/review
			Body : {
    				"rating": 5.0, (Harus pakai .0 dibelakang nya)
    				"description": "Fasilitas sangat bagus dan rekomended untuk meeting rame-rame",
				}
	
	Customer : 1. DELETE -> http://server.greskit.com:8080/admin/review/:id (contoh = 1)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
