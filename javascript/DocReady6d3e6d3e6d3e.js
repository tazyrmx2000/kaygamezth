const [width, height] = [window.innerWidth, window.innerHeight];
styleWhenResize(width);
// document on ready
$( document ).ready(function() {
    // use tootip
    $.protip();

    document.documentElement.style.setProperty('--client-width', window.innerWidth+'px');
    document.documentElement.style.setProperty('--app-min-vh', window.innerHeight+'px');

    $("#content-slider-promotion1").resize(function(){
        console.log(window.innerHeight);
    })

    $( window ).resize(function() {
        const [w, h] = [window.innerWidth, window.innerHeight];
        styleWhenResize(w);

    });

    // get val scroll for hide navmenu smaoll
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        
        // use fn show-open btn back to top
        hideOpenBtnBackToTop(scroll);
        // END

        // console.log($(window).scrollTop());
        if(scroll > 0){
            $(".NavsbarMenuMain").addClass('active-scroll');
        }else if(scroll < 150){
            $(".NavsbarMenuMain").removeClass('active-scroll');
        }
    });
    // END

    // BTN Click for back to top
    $(".BTN_BACKTOTOP").on("click", function(){
        window.scrollTo(0, 0);
    });
    // END

    // open menu down
    $("#clickToggleShowMenu").on("click", function(){
        // console.log($("#clickToggleShowMenu.hamburger-header.activeOpen").length);

        if($("#clickToggleShowMenu.hamburger-header.activeOpen").length > 0){
            $("#show_menu_down").removeClass("open-action");
            $(".back-drop-main").removeClass("show");
            $(this).removeClass("activeOpen");
        }else{
            $("#show_menu_down").addClass("open-action");
            $(".back-drop-main").addClass("show");
            $(this).addClass("activeOpen");
        }
    });
    // set backdrop
    $(".back-drop-main").on("click", function () {
        $(this).removeClass("show");
        $("#show_menu_down").removeClass("open-action");
        $("#clickToggleShowMenu").removeClass("activeOpen");
    });
    // END

    // fn Event submit category
    $(".BTN_SUBMIT_SEARCH").on("click", function(){
        const val_inputDD_id = $("#INPUT_VAL_DROPDOWN_id").val();
        const val_inputDD_name = $("#INPUT_VAL_DROPDOWN_name").val();
        let val_inputText = $("#input_text_search").val();
        let val_inputText_mobile = $(".input_search_mobile").val();

        if(val_inputText_mobile != ""){
            val_inputText = val_inputText_mobile;
        }


        if(val_inputDD_id == 43){
            window.location = JS_BASE_URL+`/pages/DIY.php`;
        }

        if(val_inputDD_name == "" && val_inputText == ""){
            window.location = JS_BASE_URL+`/pages/Category.php?mode=manu&search=all`;
            //return false;
        }else if(val_inputDD_name == "" && val_inputText != ""){
            window.location = JS_BASE_URL+`/pages/Category.php?mode=search&search=${val_inputText}`;
        }else if(val_inputDD_name != "" && val_inputText != ""){
            window.location = JS_BASE_URL+`/pages/Category.php?mode=search&search=${val_inputText}`;
        }else{
            //window.location = `./Category.php?mode=manu_tab&search=${val_inputDD_name}&id=${val_inputDD_id}&textsearch=${val_inputText}`;
            window.location = JS_BASE_URL+`/pages/Category.php?mode=manu_tab&search=${val_inputDD_name}&id=${val_inputDD_id}`;
        }
        console.log(val_inputDD, val_inputText);
    });
    // END
        

    // set color btn-focus input LOGIN
    $(".input-login").on("focus",function(){
        $(".box-input-form").removeClass("input-focus");
        $(this).parents(".floating-login").parents(".box-input-form").addClass("input-focus");
    });
    $(".input-login").on("blur",function(){
        $(".box-input-form").removeClass("input-focus");
    });
    // END

    // change color login
    $("#login_password").on("change", function(event){
        changeColor(event);
    });
    $("#login_email").on("change", function(event){
        changeColor(event);
    });
    $("#login_password").on("keyup", function(event){
        changeColor(event);
    });
    $("#login_email").on("keyup", function(event){
        changeColor(event);
    });
    // END change color login

    // change Password profile page
    $("#change_password").on("keyup", function(event){
        changeColor(event);
    });
    $("#change_password").on("change", function(event){
        changeColor(event);
    });
    $("#change_confirmPassword").on("change", function(event){
        changeColor(event);
    });
    $("#change_confirmPassword").on("keyup", function(event){
        changeColor(event);
    });
    // END

    // hide modal then stop youtube
    $('#modal_playyoutube').on('hidden.bs.modal', function (e) {
        const iframe = $("#show_youtube_play");
        iframe.html("loading...");
    })
    
    var modal_login = document.getElementById('modal_login');
    modal_login.addEventListener('shown.bs.modal', function (event) {
        // coding when modal open
    });
    modal_login.addEventListener('hidden.bs.modal', function (event) {
        // code when modal hide
    });
    
    // range price
    $('.noUi-handle').on('click', function () {
        $(this).width(50);
    });

    // event set pagination color focus
    $("a.page-link").on("click", function(){
        $("a.page-link").parent().removeClass("focus-paginate");
        $(this).parent().addClass("focus-paginate");
    });
    // END


    // view all image from detail product
    $(".BTN_VIEWIMAGE").on("click", function(){
        // console.log($(this));
        $("#content-detail-hide").toggleClass("action-open");
        if($(".action-open").length == 1){
            $("#btn_view_desc").text("ปิด");
        }else{
            console.log("เปิด");
            $("#btn_view_desc").text("ดูเพิ่มเติม + ");
        }
    });
    // END
    

    // set height body modal list detail products
    $(".modal-fix").css("height", (height-120)+"px");

    // dropdown filter category and DIY
    $(".btn-dropdown-use").on("click", function(event){
        $(".dropdown-action").toggleClass("show-list");
    });
    $(".list-dropdown .item-dropdown a").on("click", function(event){
        $(".dropdown-action").removeClass("show-list");
        $(".btn-dropdown-use span").html($(this).html());
    });
    // END dropdown filter category and DIY

    // Dropdown custom
    $("[data-toggle='dropdown-custom']").on("click", function(event){
        
        const id = $(this).attr("data-dropdown");
        if(!$("#"+id).hasClass("show-list")){
            $(".dropdown-action-custom").removeClass("show-list");
            $("[data-toggle='dropdown-custom']").children(".icon-chev").removeClass("active-rotate");
            $(this).children(".icon-chev").addClass("active-rotate");
            $("#"+id).addClass("show-list");
        }else{
            $(".dropdown-action-custom").removeClass("show-list");
            $("[data-toggle='dropdown-custom']").children(".icon-chev").removeClass("active-rotate");
        }
        event.stopPropagation();
    });
    $(".dropdown-action-custom .custom-list-items .custom-item div a").on("click", function(event){
        $(this).parents(".dropdown-custom").children(".dropdown-action-custom").removeClass("show-list");
        const id = $(this).parents(".dropdown-custom").children(".dropdown-action-custom").attr("id");
        $("[data-dropdown='"+id+"'] span").html($(this).data("text")!=""?$(this).data("text"):"--เลือก--");
        $("[data-dropdown='"+id+"'] span").attr('data-id', $(this).attr("data-id"));
        $(".icon-chev").removeClass("active-rotate");
    });
    // END Dropdown custom

    // fn close submenu then open mainmenu at navbar main
    $("#show-list-title-mobile-back").on("click", function(){
        $(".mobile-menuMain").addClass("active");
        $(".mobile-styleNavs").removeClass("active");
        $("#show-list-menu").html("");
    });
    // END

    // HANDLE SET VALUE INPUT DROPDOWN
    $(".BTN_HANDLE_VAL").on("click", function(){
        $("input#INPUT_VAL_DROPDOWN_name").val($(this).data("text") == "ทั้งหมด" ? "" : $(this).data("text"));
        $("input#INPUT_VAL_DROPDOWN_id").val($(this).data("id") != "" ? $(this).data("id") : "");
    });
    // END

    // Set value star review get val to input name="VAL_SCORE_STAR"
    $(".BTN_SELECT_STAR").on("click", function(){
        if($(this).data("starindex") == 1){
            if(!$(this).hasClass("select")){
                $(this).addClass("select");
                $("input[name='rating_rate']").val($(this).data("starindex"));
                return false;
            }
            if($(".BTN_SELECT_STAR.select").length < 2){
                $(".BTN_SELECT_STAR").removeClass("select");
                $("input[name='rating_rate']").val(0);
                return false;
            }
        }
        $(".BTN_SELECT_STAR").removeClass("select");
        for (let index = 0; index < $(this).data("starindex"); index++) {
            document.querySelectorAll(".BTN_SELECT_STAR")[index].classList.add("select");
        }
        $("input[name='rating_rate']").val($(this).data("starindex"));
    });
    // END

    // Change color when input have value
    $(".CHANGE_BG_INPUT").on("change", function(){
        if($(this).val() != ""){
            $(this).css("background-color", "#fff");
        }else{
            $(this).css("background-color", "#fff");
        }
    });
    // END

    // click body get dropdown close
    $(document).click(function(e) {
        if (!$(e.target).is('.dropdown-custom *')) {
            $(".dropdown-action-custom").removeClass("show-list");
            $("[data-toggle='dropdown-custom']").children(".icon-chev").removeClass("active-rotate");
        }
        if (!$(e.target).is('.user-dropdown-setting *')) {
            $(".btn-user-open").attr("data-toggleOpen", "false")
        }
        if(!$(e.target).is("#popup_content_cartlist *")){
            // cancle request MiniCart.php
            XHR_MINI_CART.abort();
            $(".BTN_SHOW_CART_LIST").attr("data-togglePopup", "false");
            $("#popup_content_cartlist").html(`
                <div class="py-4 w-100 d-flex justify-content-center align-items-center">
                    <span class="spinner-border spinner-border text-ihave" role="status" aria-hidden="true"></span>
                </div>
            `);
            $(".BTN_SHOW_CART_LIST").attr("onClick", "xhttp_req_miniCart(event, this)");
        }
    });
    // END

    // function Link to detail products because tag 'button' Cart not working in tag 'a'
    $(".Link-to-detail").on("click", function(e){
        if($(e.target).is(".btn-productnew") || $(e.target).is(".btn-hover")){
            return false;
        }

        var name = $(this).data("product-name");
        if(name!=''){
            name = name.replaceAll("/", "-");
            name = name.replaceAll(" ", "-");
            name = name.replaceAll("---", "-");
            name = name.replaceAll("--", "-");
            name = name.replaceAll("%", "-");
        }
        window.location = JS_BASE_URL+"/detailproduct/"+$(this).data("product")+"/"+name;
        //window.location = "../pages/Detailproduct.php?item_id="+$(this).data("product")+"&item_name="+$(this).data("product-name");
    })
    // END

    // btn handle open popup menu user
    $(".btn-user-open").on("click", function(){
        // cancle request MiniCart.php
        XHR_MINI_CART.abort();
        $(".BTN_SHOW_CART_LIST").attr("data-togglePopup", "false");
        $("#popup_content_cartlist").html(`
                <div class="py-4 w-100 d-flex justify-content-center align-items-center">
                    <span class="spinner-border spinner-border text-ihave" role="status" aria-hidden="true"></span>
                </div>
            `);
        $(".BTN_SHOW_CART_LIST").attr("onClick", "xhttp_req_miniCart(event, this)");

        $("#show_menu_down").removeClass("open-action");
        $("#clickToggleShowMenu").removeClass("activeOpen");
        $(".back-drop-main").removeClass("show");

        if($(this).attr("data-toggleopen") == "false"){
            $(this).attr("data-toggleopen", "true");
            return false;
        }
        $(this).attr("data-toggleopen", "false");
    });
    // END

    // function logout
    $(".BTN_LOGOUT").on("click", function(){
        // alert(window.location.hostname+'/pages/Home.php');

        $.ajax({
            type: "GET",
            url: JS_BASE_URL+"/controller/logout.php?logout=1",
            dataType: "json",
            success: function (response) {
                if(response.status == "OK"){
                    window.location.replace(JS_BASE_URL+'/pages/Home.php');
                }else{
                    alert(response.msg);
                }
            }
        });
    });
    //

    // function delete favorite at wishlist page
    $(".btn-delete-list-wishlist").on("click", function(){
        $(this).parents(".wishlist-item").remove()
    });
    // END;

    // add display flex to carousel
    addDisplayToCarosel();
    // END
    $(".formlogin").find("#login_email").on("focus",function(){
        $(".loginfail").css("display","none");
      })
    $(".formlogin").find("#login_password").on("focus",function(){
       $(".loginfail").css("display","none");
      })
});
