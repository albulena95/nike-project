const changeImg = (id) => {
    switch (id) {
        case 0:
            document.getElementById("imgid").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RHyP0FddJ80IQwV4P0NfeenOQG0ovyjYnQ&usqp=CAU";
            break;
        case 1:
            document.getElementById("imgid").src= "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bfbc7e60-3a6b-4e93-8d0c-d53a2ff48f05/air-max-270-womens-shoes-Pgb94t.png"

            break;
        case 2:
            document.getElementById("imgid").src="https://sneakers123.s3.amazonaws.com/release/30025/nike-air-max-270-ah8050-008.jpg"

            break;

        case 3:
            document.getElementById("imgid").src="https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwb0826719/images/59505601/Rebel_59505601_black_hi-res.jpg?sw=1000&sh=1000&sm=fit"

            break;
        default:
            document.getElementById("imgid").src="https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwb0826719/images/59505601/Rebel_59505601_black_hi-res.jpg?sw=1000&sh=1000&sm=fit"

            break;
    }
}
