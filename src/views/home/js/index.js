
jq(function () {
    jq(".btn-group").on("click", "div", function () {
        alert(jq(this));
        // window.close();
    })
})
