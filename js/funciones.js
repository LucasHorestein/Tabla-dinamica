$("#btn-monthly").click(pricingToggle);
$("#btn-anually").click(pricingToggle);

function pricingToggle(event){
    if (event.target.id.replace("btn-","") === "monthly") {
        $("#btn-monthly").addClass("active").removeClass("pasive");
        $("#btn-anually").addClass("pasive").removeClass("active");
        $(".lbl-price").html("/Monthly");
        $("#lbl-basic").html("$39");
        $("#lbl-premium").html("$39");
        $("#lbl-business").html("$39");
    }else{
        $("#btn-anually").addClass("active").removeClass("pasive");
        $("#btn-monthly").addClass("pasive").removeClass("active");
        $(".lbl-price").html("/Anually");
        $("#lbl-basic").html("$99");
        $("#lbl-premium").html("$199");
        $("#lbl-business").html("$299");
    }
}
