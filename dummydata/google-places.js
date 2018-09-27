const GOOGLE_PLACES_URL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${SEARCH_INPUT}&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating,geometry,opening_hours&key=${API_KEY}`

axios.get(GOOGLE_PLACES_URL);

const {name, formatted_address} = response.candidates[0];
const {lat,lng} = response.candidates[0].geometry.location;

// Sample Data after searching Lake Michigan
response = {
   "candidates" : [
      {
         "formatted_address" : "Lake Michigan, United States",
         "geometry" : {
            "location" : {
               "lat" : 43.4501005,
               "lng" : -87.22201869999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 46.1023512,
                  "lng" : -84.73845369999999
               },
               "southwest" : {
                  "lat" : 41.608871,
                  "lng" : -88.0433898
               }
            }
         },
         "name" : "Lake Michigan",
         "photos" : [
            {
               "height" : 1535,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/101046882135806425785/photos\"\u003eA Google User\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAwZFoGq6jyCfa7Cc_-TeMlrXVQ-uIQ_0VDGO3P_kXK9JjL8HNLLVkMqaa0hFeB1BmAhMHsvtJxD6FJ767cklQRmrnK8unG-_m3CnfuSFFUqTdNdM1e0Wxjqg7OunX0ZSiEhB3aPkUh3_pzqFn55lL-QeJGhSDDcvhgsNaqUwaaZ7M4w3xSsRjCg",
               "width" : 2048
            }
         ],
         "rating" : 4.6
      }
   ],
   "debug_log" : {
      "line" : []
   },
   "status" : "OK"
}
