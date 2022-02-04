var mydata = JSON.parse(tasks);

for (let index in mydata) {
    document.getElementById("result2").innerHTML += `<!-- card beginning -->
        <div class="card col-lg-3 col-md-5 col-sm-12 cardmod shadow-lg mt-0 mb-5">
            <div class="justify-content-between d-flex pt-3 pb-3">
                <div class="leftside">
                    <a href="#" class="btn btn-info pt-1 pb-1 text-white">Task</a>
                </div>
                <div class="rightside">
                    <img src="image/bookmark.png" alt="" width="20" height="16">
                    <img src="image/dot.png" alt="" width="20" height="16">
                </div>
            </div>
            <img src="${mydata[index].img}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title text-center">${mydata[index].taskname}</h5>
                <p class="card-text text-center">${mydata[index].description}</p>
            </div>
            <div class="d-flex border-top pt-3">
                <p class="m-0 align-self-center"> <img src="image/important.png" alt="" width="20" height="20" id="importantbutton${index}">Priority level:
                    <p class="p-1 rounded m-0 test3131" id="test3${index}">${mydata[index].importance}</p>
                </p>
            </div>
            <div class="border-bottom pt-2">
                <p><img src="image/calender.png" alt="" width="20" height="20">Deadline: ${mydata[index].date}</p>
            </div>
            <div class="text-end pt-3">
                <p class="btn btn-danger"><img src="image/trash.png" alt="" width="20" height="20">Delete</p>
                <p class="btn btn-success"><img src="image/check.png" alt="" width="20" height="20">Done</p>
            </div>
        </div>
    <!-- card ending -->
</div>
<!-- row ending -->`
}

for (let index in mydata) {
    document.getElementById(`importantbutton${index}`).addEventListener("click", function() {
        var buttontest = document.getElementById(`test3${index}`);
        if (buttontest.innerHTML < 5)
            buttontest.innerHTML++;
        if (buttontest.innerHTML <= 1) {
            buttontest.style.backgroundColor = "green";
        } else if (buttontest.innerHTML <= 3) {
            buttontest.style.backgroundColor = "yellow";
        } else if (buttontest.innerHTML <= 5) {
            buttontest.style.backgroundColor = "red";
        }
    })
}