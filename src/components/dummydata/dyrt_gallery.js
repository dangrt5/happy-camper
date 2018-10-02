$.getJSON('http://allorigins.me/get?url=https%3A//thedyrt.com/camping/alabama/alabama-brushy-lake-campground/gallery&callback=?', scrapeWebData);


function scrapeWebData(resp){
    const data = resp.contents;
    let parkData = data.match(/(https:\/\/thedyrt.imgix[\w\W]+.jpeg)/g)
    console.log(parkData)
}
