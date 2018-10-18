//http://multiverso.me/AllOrigins/

$.getJSON('http://allorigins.me/get?url=https%3A//thedyrt.com/camping/oregon/oregon-south-beach-state-park&callback=?', scrapeWebData);


function scrapeWebData(resp){
    const data = resp.contents;
    let parkData = data.match(/<script type="application\/ld\+json">([\w\W]+)<\/script>\n(.*)<script type="application\/ld\+json">/)[1]
    // console.log(parkData)
}
https://thedyrt.imgix.net/photo/37886/photo/oregon-south-beach-state-park_caed16cd295e8abd41e5e75fd725015c.jpg?ixlib=rb-1.1.0
var dyrtData = {
    "@type": "LocalBusiness",
    "name": "South Beach State Park",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.18,
      "reviewCount": 22,
      "bestRating": "5",
      "worstRating": "1"
    },
    "image": "https://thedyrt.imgix.net/photo/37886/photo/oregon-south-beach-state-park_caed16cd295e8abd41e5e75fd725015c.jpg?ixlib=rb-1.1.0",
    "telephone": "541-867-4715",
    "email": "",
    "description": "",
    "sameAs": "http://www.oregonstateparks.org/index.cfm?do=parkPage.dsp_parkPage&amp;parkId=149",
    "url": "https://thedyrt.com/camping/oregon/oregon-south-beach-state-park",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.604,
      "longitude": -124.064
    },
    "hasMap": "http://maps.google.com/maps?q=44.604,-124.064",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Oregon"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "ADA Access",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Drinking Water",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Electricity",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Fires Allowed",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Group Sites",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Reservable",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sanitary Dump",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sewer Hookups",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Showers",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Toilets",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Water Hookups",
        "value": "unknown"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Web Reservable",
        "value": "unknown"
      }
    ],
    "@context": "http://schema.org/"
  }
