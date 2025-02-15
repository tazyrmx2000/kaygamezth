var XHR_MINI_CART=new XMLHttpRequest();var MODAL_DETAILLIST=new bootstrap.Modal(document.getElementById('modal_detailList'));var MODAL_REVIEW=new bootstrap.Modal(document.getElementById('modal_review_order'));$(document).ready(function(){});function handleLoading(st_bool){if(st_bool==true){$("#body").css("overflow","hidden");$(".container-load").removeClass("load-success");}else{$("#body").css("overflow","auto");$(".container-load").addClass("load-success");}}
function changeColor(event){const val=event.target.value;if(val!=""){$(event.target).parent().parent().children("i").css('color','#d30000');}else{$(event.target).parent().parent().children("i").css('color','#808080');}}
function handleClickShowYB(url){console.log(`www.youtube.com/embed/${url+"?autoplay=1"}`);const iframe=$("#show_youtube_play");iframe.html("");let html=`<iframe width="100%" height="500" src="https://www.youtube.com/embed/${url+"?autoplay=1;"}" title="YouTube video player" frameborder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`
iframe.html(html);}
function addDisplayToCarosel(){$("#content-slider-menuNavs").addClass("d-flex");}
document.querySelector(".btn-arrow-drop").addEventListener('click',function(){const elm_Show=document.getElementById('collapse_menu');elm_Show.classList.add('open-callapse');$(".input_search_mobile").focus();});$("#collapse_menu").on("click",function(e){if(!$(e.target).is($(this).find("*"))){$(this).removeClass("open-callapse");}});$("#set_cookie").on("click",function(e){$.ajax({type:"POST",data:{type:'set_cookie'},url:JS_BASE_URL+"/controller/Home.php",success:function(resp){if(resp==1){$('#cookie-banner').slideToggle();}}});});async function handleClickShowsubMenu(event,elm){const data=JSON.parse(event.target.getAttribute('data-Obj'));const all_btn=$('li.btn-navs');const parent=$(elm).parent("li.btn-navs");$(".mobile-menuMain").removeClass("active");$(".mobile-styleNavs").addClass("active");all_btn.removeClass('btn-navs-focus');parent.addClass('btn-navs-focus');var list='';await data.sub_menu.map((row,i)=>{list+=`
            <div class="sub-show py-0 my-0">
                <a class="btn-navs-sub m-0 p-0" href="`+JS_BASE_URL+`/pages/Category.php?mode=manu&search=${row}&id=${data.id}&id_s=${data.sub_menu_id[i]}" >${row}</a>
            </div>
        `;});$('#show-list-menu').html(list);$("#show-list-title-mobile-back").html("< "+data.name);$("#show-list-title").attr("href",$(elm).data("url"));$("#show-list-title").html(data.name+" ทั้งหมด");}
$(".BTN_CHANGEBOXPROFILE").on("click",function(){const nameMenu=$(this).attr('data-menuProfile');$(".menu-profile").removeClass("active");$(this).addClass("active");$(".box-profile").css("display","none");$("."+nameMenu).css("display","block");});function handleOpenDropdown(e){if(e.target.classList.contains('drop-custom-group')){return false;}
if(e.target.classList.contains('drop-custom-list')){return false;}
document.getElementById('select_price').classList.toggle('active');}
function getdataDropdown(str){document.getElementById("select_show_text").innerHTML=str;document.getElementById('select_price').classList.remove('active');}
function handleOpenbox(){const elmBox=document.getElementById("show_waning");const elmBackground=document.getElementById("blurText");const icon=document.getElementById('icon_warning');icon.classList.toggle("active-rotate");elmBox.classList.toggle("open-box");elmBackground.classList.toggle("box-open-text");}
function actionCountMarket(check){const input=document.getElementById("count_market");const stock_remain=document.getElementById("stock_remain");const value=parseInt(input.value);if(check===1){if(value<stock_remain.value){input.value=value+1;}else{alert("ของชิ้นสุดท้าย");return;}}else{if(value===0){return false;}
input.value=value-1;}}
$('#count_market').on('change',function(){const input=document.getElementById("count_market");const stock_remain=document.getElementById("stock_remain");const value=parseInt(input.value);$('#detailBtnAddToCart').prop('disabled',false);$('#detailBtnBuyNow').prop('disabled',false);if(value>stock_remain.value){input.value=stock_remain.value;alert("ของชิ้นสุดท้าย");return;}
if(value<=0){$('#detailBtnAddToCart').prop('disabled',true);$('#detailBtnBuyNow').prop('disabled',true);return;}});async function changeReview(elm){const all=$(".btn-detail-review");const elmshow=document.getElementById("show_detail_review");const str=$(elm).attr('data-detail');all.css("color","#303030");elm.style.color='#d4001a';all.attr('onClick',"changeReview(this)")
elm.setAttribute('onClick','');let pm=new Promise((resolve)=>{var xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){resolve(this.responseText)}};if(str=="detail"){xhttp.open("get",JS_BASE_URL+"/components/Products/DetailProduct.php",true);}else if(str=="review"){xhttp.open("get",JS_BASE_URL+"/components/Products/ReviewProduct.php",true);}
xhttp.send();})
await pm.then((res)=>{elmshow.innerHTML=res;})}
function zoomImage(url,alt,Idmodal,Idshow){var modal=document.getElementById(Idmodal);var modalImg=document.getElementById(Idshow);document.body.style.overflow='hidden';modal.style.display="block";modalImg.src=url;modalImg.alt=alt;}
function closeModalShowImage(elmIdModal,elmImg){var modalImg=document.getElementById(elmImg);const modal=document.getElementById(elmIdModal);document.body.style.overflow='auto';modalImg.className+=" out";setTimeout(function(){modal.style.display="none";modalImg.className="modal-content-zoom-image";},400);}
function openCollapseTitleCate(evt){if($(evt).attr("aria-expanded")=="true"){evt.classList.add("action-cate");}else{evt.classList.remove("action-cate");}}
function openCollapseSubCate(evt){if($(evt).attr("aria-expanded")=="true"){evt.classList.add("action-cate-sub");}else{evt.classList.remove("action-cate-sub");}}
$(".btn-change-cate").on("click",function(){$(".btn-change-cate").removeClass("focus-sub-cate");$(this).addClass("focus-sub-cate");});function openCollapseFAQ(evt){if($(evt).attr("aria-expanded")=="true"){evt.classList.add("action");}else{evt.classList.remove("action");}}
async function viewDetailList(elm){const xhttp=new XMLHttpRequest();const content_modal=$("#show_content_detailList");content_modal.html("");var productDataCookie=$.cookie('diy')===undefined?null:JSON.parse($.cookie('diy'));var view_diy=$(elm).data("view_diy");const params={'type':view_diy,'data':productDataCookie}
var FD=new FormData();FD.append('data',productDataCookie);FD.append('type',view_diy);new Promise((resolve)=>{xhttp.open('POST',JS_BASE_URL+'/components/Modal-content/DetailList.php',true);xhttp.setRequestHeader('Content-type','application/json');xhttp.send(JSON.stringify(params));xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){resolve(this.responseText)}}}).then((res)=>{content_modal.html(res);MODAL_DETAILLIST.show();})}
function resetDetailList(){$.removeCookie('diy');location.reload();}
function setValInput(inputId,type,oldvalue,item_id,stock_input_id,option_id=0){const input=document.getElementById(inputId);const stock_remain=document.getElementById(stock_input_id);const val=parseInt(input.value);if(type==0){if(val<=1){calculate()
return false;}else{input.value=val-1;reduceCart(item_id,'total',"",option_id)}}else if(type==1){if(val<stock_remain.value){input.value=val+1;addCart(item_id,'total',"",option_id)}else{input.value=parseInt(stock_remain.value);alert("ของชิ้นสุดท้าย")}}else if(type==2){input.value=oldvalue;}
calculate()}
function deleteCart(parentElm,id){const elm=document.getElementById(parentElm);var data=$.cookie('order')===undefined?null:JSON.parse($.cookie('order'));data=data.filter((value)=>{return value.id!=id});$.cookie('order',JSON.stringify(data),{path:'/'});calculate()
checkCart()
elm.remove();}
function OpenModal_reviewProducts(){MODAL_REVIEW.show();MODAL_DETAILLIST.hide();}
async function xhttp_req_miniCart(e,elm){e.stopPropagation();$("#show_menu_down").removeClass("open-action");$("#clickToggleShowMenu").removeClass("activeOpen");$(".back-drop-main").removeClass("show");$(".btn-user-open").attr("data-toggleopen","false");$(".BTN_SHOW_CART_LIST").attr("onClick","");if($(elm).attr("data-togglePopup")=="false"){$(elm).attr("data-togglePopup","true");new Promise((resolve)=>{XHR_MINI_CART.open("get",JS_BASE_URL+"/components/MiniCart.php",true);XHR_MINI_CART.send();XHR_MINI_CART.onreadystatechange=function(){if(this.readyState==4&&this.status==200){resolve(this.responseText);}}}).then((resTextHTML)=>{$("#popup_content_cartlist").html(resTextHTML);orderList()
setTimeout(function(){checkCampaignAvailable()},1000);$(".BTN_SHOW_CART_LIST").attr("onClick","xhttp_req_miniCart(event, this)");}).catch((err)=>{console.log(err);$(elm).attr("data-togglePopup","false");$("#popup_content_cartlist").html(`
                <div class="py-4 w-100 d-flex justify-content-center align-items-center">
                    <span class="spinner-border spinner-border text-ihave" role="status" aria-hidden="true"></span>
                </div>
            `);$(".BTN_SHOW_CART_LIST").attr("onClick","xhttp_req_miniCart(event, this)");})}else{$(elm).attr("data-togglePopup","false");$("#popup_content_cartlist").html(`
            <div class="py-4 w-100 d-flex justify-content-center align-items-center">
                <span class="spinner-border spinner-border text-ihave" role="status" aria-hidden="true"></span>
            </div>
        `);$(".BTN_SHOW_CART_LIST").attr("onClick","xhttp_req_miniCart(event, this)");}}
function styleWhenResize(w){if(w<576){$("#show_menu_mobile").addClass("mobile-show");$("#collapse_menu").css("display","");}else if(w>576&&w<825){$("#show_menu_mobile").addClass("mobile-show");$("#collapse_menu").css("display","");}else if(w>825&&w<1200){$("#show_menu_mobile").removeClass("mobile-show");$("#collapse_menu").css("display","");}else if(w>1200&&w<1400){$("#show_menu_mobile").removeClass("mobile-show");$("#collapse_menu").css("display","none");}else if(w>1400&&w<1600){$("#show_menu_mobile").removeClass("mobile-show");$("#collapse_menu").css("display","none");}else{$("#show_menu_mobile").removeClass("mobile-show");$("#collapse_menu").css("display","none");}}
function checkEmptyVal(){if($("input[id='=ogin_email']").val()!=""){$("input[id='=ogin_email']").parent().parent().children("i").css('color','#d30000');}
if($("input[id='=ogin_password']").val()!=""){$("input[id='=ogin_password']").parent().parent().children("i").css('color','#d30000');}}
var SETTIME_SHOWBTN_BTT;function hideOpenBtnBackToTop(valScroll){if(valScroll>5){clearInterval(SETTIME_SHOWBTN_BTT);$(".box-btn-backtotop").css("display","block");var time=0;SETTIME_SHOWBTN_BTT=setInterval(()=>{time+=1;if(time==1){$(".box-btn-backtotop").css("display","none");clearInterval(SETTIME_SHOWBTN_BTT);}},1800);}else{$(".box-btn-backtotop").css("display","none");}}
(()=>{checkCart();checkEmptyVal();})()
function buyOrAddCart(id,price,mode,stock_remain){var count=$('#count_market').val();let option_id=$("#option-id").val();let m_option_id=$("#m-option-id").val();let m_option_size_id=$("#m-option-size-id").val();let m_option_third_id=$("#m-option-third-id").val();var product_on_cookie=$.cookie('order')===undefined?null:JSON.parse($.cookie('order'));if(product_on_cookie){var checks=JSON.parse($.cookie('order'))
var item_on_check=checks.find(check=>check.id==id);if(item_on_check){if(count){var sum_stock_remain=parseInt(count)+item_on_check.quantity;}else{var sum_stock_remain=item_on_check.quantity;}
if(sum_stock_remain>=stock_remain){alert("ของชิ้นสุดท้าย");return;}}}
addCart(id,price,count,option_id,m_option_id,m_option_size_id,m_option_third_id)
if(mode=='buy'){window.location.href=JS_BASE_URL+'/pages/Cart.php';}}
function addCart(id,price,count,option_id=0,m_option_id=0,m_option_size_id=0,m_option_third_id=0){const mt_option_1=$("#mt_option_1").val()?$("#mt_option_1").val():'';const mt_option_2=$("#mt_option_2").val()?$("#mt_option_2").val():'';const mt_option_3=$("#mt_option_3").val()?$("#mt_option_3").val():'';const option_name_1=$("#m-option-name").val()?$("#m-option-name").val():'';const option_name_2=$("#m-option-size-name").val()?$("#m-option-size-name").val():'';const option_name_3=$("#m-option-third-name").val()?$("#m-option-third-name").val():'';var id_product=$.cookie('order')===undefined?null:JSON.parse($.cookie('order'));var count=count?parseInt(count):1
var arr_order={'id':id,'option_id':option_id,'m_option_id':m_option_id,'m_option_size_id':m_option_size_id,'m_option_third_id':m_option_third_id,'mt_option_1':mt_option_1,'mt_option_2':mt_option_2,'mt_option_3':mt_option_3,'option_name_1':option_name_1,'option_name_2':option_name_2,'option_name_3':option_name_3,'quantity':count,'price':price,};if(!id_product){$.cookie('order',JSON.stringify([arr_order]),{path:'/'})}else{var check=JSON.parse($.cookie('order'))
for(var i in check){if(option_id>0){if(check[i].option_id==option_id){check[i].quantity+=count;}}else{if(check[i].id==id){check[i].quantity+=count;}}}
var newOrder=check.find(check=>check.id==id);if(option_id>0){newOrder=check.find(check=>check.option_id==option_id);}
if(newOrder===undefined){check.push(arr_order)}
$.cookie('order',JSON.stringify(check),{path:'/'})}
if(price=='total'){calculate();}
checkCart()}
async function addDIYorderToCart(){var orderNow=$.cookie('order')===undefined?null:JSON.parse($.cookie('order'));var orderOnDIY=$.cookie('diy')===undefined?null:JSON.parse($.cookie('diy'));if(orderNow!=null&&orderOnDIY!=null){for(var i in orderOnDIY){let orderOnDIY_check_id=orderOnDIY[i].id;let orderNowHave=orderNow.findIndex((orderNowList)=>orderNowList.id==orderOnDIY_check_id);let product_stock_raw=await checkStockToCart(orderOnDIY_check_id);let product_stock=JSON.parse(product_stock_raw);if(parseInt(product_stock.stock)>0){if(orderNowHave>=0){orderNow[orderNowHave].quantity=orderOnDIY[i].quantity;}else{orderNow.push(orderOnDIY[i])}}else{alert("สินค้าบางรายการหมด");}}
$.cookie('order',JSON.stringify(orderNow),{path:'/'})
window.location.href=JS_BASE_URL+'/pages/Cart.php';$.removeCookie('diy');}else{$.cookie('order',JSON.stringify(orderOnDIY),{path:'/'})
window.location.href=JS_BASE_URL+'/pages/Cart.php';$.removeCookie('diy');}}
function checkStockToCart(idp){result=$.ajax({type:"POST",url:"../controller/check_stock.php",data:{id:idp,mode:"check"},success:function(res){var resData=JSON.parse(res);const product_stock=resData?.stock;if(product_stock>0){$.notify("สำเร็จ",{position:"bottom right",className:"success"});return resData;}else{$.notify("ไม่ถูกต้อง",{position:"bottom right",className:"error"});}},error:function(e){$.notify("Fail",{position:"bottom right",className:"error"});console.log(e);}});return result;}
function reduceCart(id,price,count,option_id=0){var id_product=$.cookie('order')===undefined?null:JSON.parse($.cookie('order'));if(!id_product){return false}else{var check=JSON.parse($.cookie('order'))
for(var i in check){if(option_id>0){if(check[i].option_id==option_id&&check[i].quantity>1){check[i].quantity-=1;}}else{if(check[i].id==id&&check[i].quantity>1){check[i].quantity-=1;}}}
console.log(check)
$.cookie('order',JSON.stringify(check),{path:'/'})}
if(price=='total'){calculate();}
checkCart()}
function calculate(discount){var order=$.cookie('order')===undefined?null:JSON.parse($.cookie('order'));var discount=discount?discount:0;var sum=0;if(!order){return false;}else{for(var i in order){sum=sum+(parseInt(order[i].quantity)*parseInt(order[i].price));}
$("#total").text(sum)
$("#sum").text((sum-discount))}}
function checkCart(){var quantity=$.cookie('order')===undefined?null:JSON.parse($.cookie('order'));var total=0;if(quantity){for(var ii in quantity){total+=quantity[ii].quantity;}
$('.CART_quantity').text(total);$('#countCart').text(total);$('.CART_quantity').css('display',(total==0?'none':''));}else{$('.CART_quantity').css('display','none');}}
function changeCart(check){var data=$.cookie('order')===undefined?null:JSON.parse($.cookie('order'));if(data){for(var ii in data){total+=data[ii].quantity;}
$('.CART_quantity').html(total);$('.CART_quantity').css('display','');}else{$('.CART_quantity').css('display','none');}}
function payment(){}
function addWishlist(elm){const product_id=$(elm).attr('data-product_id');const customer_id=$(elm).attr('data-customer_id');const mode=$(elm).attr('data-mode');$.ajax({type:"POST",url:JS_BASE_URL+"/controller/wishlist.php",data:{id:product_id,customer_id:customer_id,mode:mode},success:function(res){$.notify("เลือกสำเร็จ",{position:"bottom right",className:"success"});var data=JSON.parse(res);console.log(data);if(data.status==='done'){if(data.mode==='del'){$(elm).attr('data-mode','add');$('#btn-fav').removeClass("bi-heart-fill");$('#btn-fav').addClass("bi-heart");}else{$(elm).attr('data-mode','del');$('#btn-fav').removeClass("bi-heart");$('#btn-fav').addClass("bi-heart-fill");}
$('.Wishlist_quantity').text(data.count);}},error:function(e){$.notify("Fail",{position:"bottom right",className:"error"});console.log(e);}});}
function generate_uuidv4(){return Math.random().toString(36).substring(2,15)+
Math.random().toString(36).substring(2,15);}
function addDIY_spec(){var diy_raw_data=$.cookie('diy')===undefined?null:JSON.parse($.cookie('diy'));var uuid_raw_data=generate_uuidv4();if(diy_raw_data&&diy_raw_data.length>0){$.ajax({type:"POST",url:JS_BASE_URL+"/controller/add_diy_spec.php",data:{uuid:uuid_raw_data,raw_data:$.cookie('diy'),mode:'add'},success:function(res){$.notify("เลือกสำเร็จ",{position:"bottom right",className:"success"});console.log(res);let newLinkURL_shareSpec=JS_BASE_URL+'/pages/ShareSpecDIY.php?specID='+uuid_raw_data;window.open(newLinkURL_shareSpec,"_blank");},error:function(e){$.notify("Fail",{position:"bottom right",className:"error"});console.log(e);}});}else{console.log('no_data_diy');}}
function formatNumber(num){return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");}
function escapeHtml(text){return text.replace(/\s+/g,'-').replace(/--+/g,'-').replace(/\/+/g,'-').replace(/[()]+/g,'').replace(/---+/g,'-').replace(/-+/g,'-').replace(/%/g,'-').replace(/-$/,'');}
function orderList(){var quantity=$.cookie('order')===undefined?null:$.cookie('order');var params=quantity;$.ajax({type:"POST",url:JS_BASE_URL+"/controller/cart.php",data:{id:'1',data:params},success:function(res){console.log(res);var data=JSON.parse(res)
var html=''
var minitotal=0
var minicount=0
var pathImage='';let htmlOption1='';let htmlOption2='';let htmlOption3='';let pathImageUrl='';for(data1 of data){minitotal+=parseFloat(parseFloat(data1.price)*parseInt(data1.count))
minicount+=parseFloat(data1.count)
pathImage=data1.option_id?'product_option':'product';if(data1.mt_option_1){htmlOption1='<div class="text-muted f-075"><span>'+data1.mt_option_1+' : '+data1.option_name_1+'</span></div>';}
if(data1.mt_option_2){htmlOption2='<div class="text-muted f-075"><span>'+data1.mt_option_2+' : '+data1.option_name_2+'</span></div>';}
if(data1.mt_option_3){htmlOption3='<div class="text-muted f-075"><span>'+data1.mt_option_3+' : '+data1.option_name_3+'</span></div>';}
if(data1.image){pathImageUrl='<img src="'+JS_BASE_ADMINSHOP+'/data/img/shop1/'+pathImage+'/'+data1.image+'" style="width: 100%;" alt="cateflash1">';}else{pathImageUrl='<img src="'+JS_BASE_URL+'/public/asset/image/products/no-photo-available.png" style="width: 125%;" alt="cateflash1">';}
html+='<div class="cart-list-item d-flex">'+
'<div class="box-img-cart-list">'+
'<a href="'+JS_BASE_URL+'/detailproduct/'+data1.id+'/'+escapeHtml(data1.name)+'">'+
pathImageUrl+
'</a>'+
'</div>'+
'<div class="cart-item-content">'+
'<div class="cart-item-info">'+
'<a href="'+JS_BASE_URL+'/detailproduct/'+data1.id+'/'+escapeHtml(data1.name)+'">'+data1.name+'</a>'+
'<div class="cart-item-quantity text-muted f-075">จำนวน : <span class="value">'+formatNumber(data1.count)+'</span></div>'+
htmlOption1+
htmlOption2+
htmlOption3+
'</div>'+
'<div class="cart-price">'+
'<div class="text-ihave"><strong>฿ <span class="value">'+formatNumber(data1.price)+'</span></strong></div>'+
'<div class="text-muted f-075">ประหยัด ฿ <span>'+formatNumber(data1.pricesave)+'</span></div>'+
'</div>'+
'</div>'+
'</div>';}
$('#minicart').append(html);$('#minicount').text(minicount);$('#minicount').attr('data-val',minicount);$('#minitotal').text(formatNumber(minitotal.toFixed(2)));$('#minitotal').attr('data-val',minitotal.toFixed(2));},error:function(e){console.log(e);}});}
function checkCampaignAvailable(){let sum_price_data=$('#minitotal').attr('data-val');let qty_data=$('#minicount').attr('data-val');const item_on_cart=$.cookie('order')===undefined?[]:$.cookie('order');var sumPriceAllItem_int=parseInt(sum_price_data);let DiscountCostAll=0;$.ajax({type:"POST",url:JS_BASE_URL+"/controller/check_campaign.php",data:{id:'00',sum_price:sum_price_data,qty:qty_data,mode:'check'},success:function(res){var resData=JSON.parse(res);let html='';let DiscountCost=0;let campaign_product_type='';let campaign_discount_type='';var campaign_discount_type_array=[];var campaign_discount_value_array=[];var campaign_message_array=[];for(recheckCampaignJsonVal of resData){if(recheckCampaignJsonVal.campaign_type=='D'){var item_except=true;if(item_on_cart.length==recheckCampaignJsonVal.item_except){item_except=false;}
var item_condition=false;if(recheckCampaignJsonVal.item_condition){item_condition=true;}
if(recheckCampaignJsonVal.status=='done'){if(recheckCampaignJsonVal.data.campaign_product_type!=undefined){campaign_product_type=recheckCampaignJsonVal.data.campaign_product_type;}
if(campaign_product_type=='C'&&recheckCampaignJsonVal.category_condition>0&&item_except&&recheckCampaignJsonVal.user_condition&&recheckCampaignJsonVal.campaign_amount_used_condition&&recheckCampaignJsonVal.campaign_amount_per_used_condition){if(recheckCampaignJsonVal.data.campaign_discount_type!=undefined){campaign_discount_type=recheckCampaignJsonVal.data.campaign_discount_type;campaign_discount_type_array.push(campaign_discount_type);}
if(recheckCampaignJsonVal.data.campaign_discount_value!=undefined){campaign_discount_value=parseInt(recheckCampaignJsonVal.data.campaign_discount_value);campaign_discount_value_array.push(campaign_discount_value);}
if(recheckCampaignJsonVal.data.campaign_message!=undefined){campaign_message_array.push(recheckCampaignJsonVal.data.campaign_message);}}else if(campaign_product_type=='B'&&recheckCampaignJsonVal.brand_condition>0&&item_except&&recheckCampaignJsonVal.user_condition&&recheckCampaignJsonVal.campaign_amount_used_condition&&recheckCampaignJsonVal.campaign_amount_per_used_condition){if(recheckCampaignJsonVal.data.campaign_discount_type!=undefined){campaign_discount_type=recheckCampaignJsonVal.data.campaign_discount_type;campaign_discount_type_array.push(campaign_discount_type);}
if(recheckCampaignJsonVal.data.campaign_discount_value!=undefined){campaign_discount_value=parseInt(recheckCampaignJsonVal.data.campaign_discount_value);campaign_discount_value_array.push(campaign_discount_value);}
if(recheckCampaignJsonVal.data.campaign_message!=undefined){campaign_message_array.push(recheckCampaignJsonVal.data.campaign_message);}}else if(campaign_product_type=='A'&&item_except&&recheckCampaignJsonVal.user_condition&&recheckCampaignJsonVal.campaign_amount_used_condition&&recheckCampaignJsonVal.campaign_amount_per_used_condition){if(recheckCampaignJsonVal.data.campaign_discount_type!=undefined){campaign_discount_type=recheckCampaignJsonVal.data.campaign_discount_type;campaign_discount_type_array.push(campaign_discount_type);}
if(recheckCampaignJsonVal.data.campaign_discount_value!=undefined){campaign_discount_value=parseInt(recheckCampaignJsonVal.data.campaign_discount_value);campaign_discount_value_array.push(campaign_discount_value);}
if(recheckCampaignJsonVal.data.campaign_message!=undefined){campaign_message_array.push(recheckCampaignJsonVal.data.campaign_message);}}else if(campaign_product_type=='P'&&item_condition&&recheckCampaignJsonVal.user_condition&&recheckCampaignJsonVal.campaign_amount_used_condition&&recheckCampaignJsonVal.campaign_amount_per_used_condition){if(recheckCampaignJsonVal.data.campaign_discount_type!=undefined){campaign_discount_type=recheckCampaignJsonVal.data.campaign_discount_type;campaign_discount_type_array.push(campaign_discount_type);}
if(recheckCampaignJsonVal.data.campaign_discount_value!=undefined){campaign_discount_value=parseInt(recheckCampaignJsonVal.data.campaign_discount_value);campaign_discount_value_array.push(campaign_discount_value);}
if(recheckCampaignJsonVal.data.campaign_message!=undefined){campaign_message_array.push(recheckCampaignJsonVal.data.campaign_message);}}}}}
if(campaign_discount_type_array.length>0){for(let i=0;i<campaign_discount_type_array.length;i++){if(campaign_discount_type_array[i]!=''){if(campaign_discount_type_array[i]=='B'){DiscountCost=campaign_discount_value_array[i];html+='<div class="text-muted f-075 campaign-message-minicart"><span style="color: red">'+campaign_message_array[i]+'</span><span style="color: red">฿ -'+formatNumber(DiscountCost.toFixed(2))+'</span></div>';}else{DiscountCost=campaign_discount_value_array[i];DiscountCost=(sumPriceAllItem_int*DiscountCost)/100;html+='<div class="text-muted f-075 campaign-message-minicart"><span style="color: red">'+campaign_message_array[i]+'</span><span style="color: red">฿ -'+formatNumber(DiscountCost.toFixed(2))+'</span></div>';}
DiscountCostAll+=DiscountCost;var sumPriceAllItemAddShippingCost_int=parseFloat((sumPriceAllItem_int)-DiscountCostAll);}else{var sumPriceAllItemAddShippingCost_int=parseFloat(sumPriceAllItem_int);}}}else{var sumPriceAllItemAddShippingCost_int=parseFloat(sumPriceAllItem_int);}
$('#minicart_campaign').append(html);$('#minitotal').text(formatNumber(sumPriceAllItemAddShippingCost_int.toFixed(2)));},error:function(e){console.log(e);}});}
(function(){'use strict'
var XHR_LOGIN=null
var forms=document.querySelectorAll('.formlogin')
Array.prototype.slice.call(forms).forEach(function(form){form.addEventListener('submit',function(event){console.log(XHR_LOGIN);if(XHR_LOGIN!=null){XHR_LOGIN.abort()}
if(!form.checkValidity()){event.preventDefault()
event.stopPropagation()}else{const form=$(".formlogin")
XHR_LOGIN=$.ajax({type:"POST",url:JS_BASE_URL+"/controller/login.php",data:form.serialize(),success:function(response){if(response=='0'){$(".loginfail").css("display","block");}else{$(".loginfail").css("display","none");window.location.replace(JS_BASE_URL+'/pages/Home.php');}}})
event.preventDefault()}
form.classList.add('was-validated')},false)})})()
$('#input_password, #input_confirmPassword').on('keyup',function(){if(!$('#input_password').val()||!$('#input_confirmPassword').val()){$('#passwordConfirm').html('');}
else if($('#input_password').val()==$('#input_confirmPassword').val()){$('#passwordConfirm').html('รหัสผ่านตรงกัน').css('color','#198754');}else
$('#passwordConfirm').html('รหัสผ่านไม่ตรงกัน').css('color','#d4001a');});$('#input_email').on('change',function(){let email_val=$('#input_email').val();if($('#input_email').val().includes('@')){$.ajax({type:"POST",url:JS_BASE_URL+"/controller/check_validation.php",data:{data:email_val,mode:'check_email'},success:function(res){var data=JSON.parse(res);console.log(data.length);if(data.length>0){$('#register_email_check').html('อีเมลนี้สมัครสมาชิกแล้ว กรุณาเข้าสู่ระบบ').css('color','#d4001a');$('.btn-submit').prop('disabled',true);$('#btn_checkout_submit').prop('disabled',true);}else{$('#register_email_check').html('');$('#register_email').html('');$('.btn-submit').prop('disabled',false);$('#btn_checkout_submit').prop('disabled',false);}},error:function(e){console.log(e);}});}else if(!$('#input_email').val()){$('#register_email').html('กรุณากรอกข้อมูล').css('color','#d4001a');}else
$('#register_email').html('ข้อมูลไม่ถูกต้อง').css('color','#d4001a');});$('#input_email').on('change',function(){if($('#input_email').val().includes('@')){$('#payment_email').html('');}else if(!$('#input_email').val()){$('#payment_email').html('กรุณากรอกข้อมูล').css('color','#d4001a');}else
$('#payment_email').html('ข้อมูลไม่ถูกต้อง').css('color','#d4001a');});$('#input_tel').on('change',function(){if($('#input_tel').val().toString().length<10||$('#input_tel').val().toString().length>=1){$('#payment_tel').html('ข้อมูลไม่ถูกต้อง').css('color','#d4001a');}else if(!$('#input_tel').val()){$('#payment_tel').html('กรุณากรอกข้อมูล').css('color','#d4001a');}else
$('#payment_tel').html('');});$('#input_address_zip').on('change',function(){if($('#input_address_zip').val().toString().length<5||$('#input_address_zip').val().toString().length>=1){$('#payment_address_zip').html('ข้อมูลไม่ถูกต้อง').css('color','#d4001a');}else if(!$('#input_address_zip').val()){$('#payment_address_zip').html('กรุณากรอกข้อมูล').css('color','#d4001a');}else
$('#payment_address_zip').html('');});$(".INPUT_ONLY_NUM").on("keypress",function(evt){evt=(evt)?evt:window.event;var charCode=(evt.which)?evt.which:evt.keyCode;if(charCode>31&&(charCode<48||charCode>57||charCode===47)){return false;}
return true;});$(".checkBox-delivery").change(function(){if($('input[name="checkBox_delivery"]:checked').length>0){if($('input[id="checkBox_Notdelivery"]:checked').length==1){$('input[name="checkBox_delivery"]').removeAttr("required")}else{$('input[name="checkBox_delivery"]').removeAttr("required")
$('input[name="branch_select"]').removeAttr("required")}}});$(".checkBox_payment").change(function(){if($('input[name="checkBox_payment"]:checked').length>0){$('input[name="checkBox_payment"]').removeAttr("required")}});$(".link-order").on("click",function(e){const url_admin=JS_BASE_ADMINSHOP;let id=$(this).attr("data-order-id");let resHtml='';$.ajax({type:"POST",url:JS_BASE_URL+"/controller/Home.php",data:{id:id,type:'order_item'},success:function(res){const data=JSON.parse(res);let sum_price=0;let sum_price_all=0;let shipping_rate=0;let discount=0;let coupon_price=0;let royalty_burn_point=0;let vat=0;let before_vat=0;let shipping_name='';let buttomReview="";let interest_cost=0;if(data.order_item.length>0){data.order_item.map((item,index)=>{let url_image="";let picture_name="";let picture_extension="";if(item.img!==null){picture_name=item.img.picture_name;picture_extension=item.img.picture_extension;url_image=url_admin+'/data/img/shop1/product/'+item.img.picture_name+'150'+item.img.picture_extension;if(item.mt_option_name_1.m_option_name!==false||item.mt_option_name_2.m_option_name!==false||item.mt_option_name_3.m_option_name!==false){picture_name=item.img_option.picture_name;picture_extension=item.img_option.picture_extension;url_image=url_admin+'/data/img/shop1/product_option/'+picture_name+'150'+picture_extension;}}else{url_image=url_admin+'/Images/no-image-icon.gif';}
if(data.order.order_status=='Completed'||data.order.order_status=='Shipped'||data.order.order_status=='Paid'){buttomReview=`<div class="td-detailList mx-auto d-flex justify-content-center align-items-center">
                        <button data-bs-toggle='modal' data-bs-target='#modal_review_order' class="btn btn-danger BTNSTAR" onclick="FFF('${item.product_id}','${item.item_name_th}','${url_admin}','${picture_name}','${picture_extension}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                            </svg>
                        </button>
                    </div>`}
resHtml+=`<tr>
                    <td data-label="ลำดับ">
                        <div class="td-detailList mx-auto d-flex justify-content-md-center justify-content-end align-items-center">
                            <span>${index+1}</span>
                        </div>
                    </td>
                    <td data-label="สินค้า">
                        <div class="td-detailList mx-auto d-flex justify-content-md-center justify-content-end align-items-center">
                            <img src="${url_image}" width="60" alt="item">
                        </div>
                    </td>
                    <td data-label="ชื่อสินค้า">
                        <div class="td-detailList mx-auto d-flex justify-content-md-center justify-content-start align-items-center row">
                            <span class="tb-name-list ">${item.item_name_th}</span>
                            <div class="text-muted f-075"><span>${item.mt_option_name_1.m_option_name?item.mt_option_name_1.m_option_name+' : '+item.option_name_1:''}</span></div>
                            <div class="text-muted f-075"><span>${item.mt_option_name_2.m_option_name?item.mt_option_name_2.m_option_name+' : '+item.option_name_2:''}</span></div>
                            <div class="text-muted f-075"><span>${item.mt_option_name_3.m_option_name?item.mt_option_name_3.m_option_name+' : '+item.option_name_3:''}</span></div>
                        </div>
                    </td>
                    <td data-label="รีวิว">
                    <div class="td-detailList mx-auto d-flex justify-content-md-center justify-content-end align-items-center" style="min-height: 20px;">
                        <span>${buttomReview}</span>
                    </div>
                    </td>
                    <td data-label="จำนวน">
                        <div class="td-detailList mx-auto d-flex justify-content-md-center justify-content-end align-items-center">
                            <span>${item.item_qty}</span>
                        </div>
                    </td>
                    <td data-label="ส่วนลด">
                        <div class="td-detailList mx-0 mx-md-auto d-flex justify-content-md-center justify-content-end align-items-center">
                            <span class="text-ihave">฿ 0</span>
                        </div>
                    </td>
                    <td data-label="ราคา">
                        <div class="td-detailList mx-0 mx-md-auto d-flex justify-content-md-center justify-content-end align-items-center" style="min-width: 130px;">
                            <span>฿ ${formatNumber(item.item_price)}</span>
                        </div>
                    </td>
                </tr>`
sum_price+=(item.item_price*item.item_qty);})}else{resHtml='<tr class="text-center"><td colspan="6">ไม่พบข้อมูล</td></tr>';}
sum_price_all=parseFloat(data?.order?.order_price||0.00);shipping_name=data?.order?.order_shipping_name||'';shipping_rate=data?.order?.order_shipping_rate||0.00;vat=data?.order?.tax_price||0.00;interest_cost=data?.order?.interest_price||0.00;if(interest_cost>0){before_vat=(sum_price_all-vat)-interest_cost;}else{before_vat=sum_price_all-vat;}
discount=data?.order?.discount_price||0.00;coupon_price=data?.order?.coupon_price||0.00;royalty_burn_point=data?.order?.royalty_burn_point||0.00;MODAL_DETAILLIST.show();$('#products-order-list').html(resHtml);$('#sum-order').html('฿ '+sum_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));$('#cost-shipping').html('฿ '+shipping_rate);$('#cost-vat').html('฿ '+formatNumber(vat));$('#cost-before-vat').html('฿ '+before_vat.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));$('#sum-order-all').html('฿ '+sum_price_all.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));$('#cost-shipping-name').html('ค่าส่ง '+shipping_name);$('#cost-discount').html('฿ -'+formatNumber(discount));$('#coupon-cost-discount').html('฿ -'+formatNumber(coupon_price));$('#royalty-cost-discount').html('฿ -'+formatNumber(royalty_burn_point));$('#interest-cost').html('฿ '+formatNumber(interest_cost));if(shipping_rate=='0.00'){$('#cost-shipping').html('ส่งฟรี');}
if(discount>0){$('#cost-discount-name').addClass('text-danger');$('#cost-discount').addClass('text-danger');}else{$('#cost-discount-name').removeClass('text-danger');$('#cost-discount').removeClass('text-danger');}
if(coupon_price>0){$('#coupon-cost-discount-name').addClass('text-danger');$('#coupon-cost-discount').addClass('text-danger');}else{$('#coupon-cost-discount-name').removeClass('text-danger');$('#coupon-cost-discount').removeClass('text-danger');}
if(royalty_burn_point>0){$('#royalty-cost-discount-name').addClass('text-danger');$('#royalty-cost-discount').addClass('text-danger');}else{$('#royalty-cost-discount-name').removeClass('text-danger');$('#royalty-cost-discount').removeClass('text-danger');}},error:function(e){$('#products-order-list').html('<tr class="text-center"><td colspan="6">ไม่พบข้อมูล</td></tr>');console.log(e);}});});$('#share_product').on('click',function(){$("#share_icon").animate({opacity:"toggle",height:"toggle"},200,"linear");});function Copylink(){$("#alert-copy").fadeIn()
var copyText=document.getElementById("myInput");copyText.select();copyText.setSelectionRange(0,99999);navigator.clipboard.writeText(copyText.value);document.getElementById("alert-copy").classList.remove("d-none");setTimeout(()=>{$("#alert-copy").fadeOut()},2700)}
function CopylinkDIY(){$("#alert-copy-diy").fadeIn()
var copyText=document.getElementById("myInputDIY");copyText.select();copyText.setSelectionRange(0,99999);navigator.clipboard.writeText(copyText.value);document.getElementById("alert-copy-diy").classList.remove("d-none");setTimeout(()=>{$("#alert-copy-diy").fadeOut()},2000)}
$('#cancel-alert').on('click',function(){$("#alert-copy").toggleClass('d-none');});$('.fbsharelink').click(function()
{var shareurl=$(this).data('shareurl');window.open('https://www.facebook.com/sharer/sharer.php?u='+escape(shareurl)+'&t='+document.title,'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;});(function(){'use strict'
var forms=document.querySelectorAll('.password-validation')
Array.prototype.slice.call(forms).forEach(function(form){form.addEventListener('submit',function(event){if(!form.checkValidity()){event.preventDefault()
event.stopPropagation()}
form.classList.add('was-validated')},false)})})()
$('.NUMBERCOMMA').on('click',function(){$('.NUMBEREND').html(Number($('.NUMBEREND').text()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));$('.NUMBEREND2').html(Number($('.NUMBEREND2').text()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));$('.NUMBERENDMB').html(Number($('.NUMBERENDMB').text()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));$('.NUMBERENDMB2').html(Number($('.NUMBERENDMB2').text()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));});$('.INPUTCART').on('input',function(){$('.NUMBEREND').html(Number($('.NUMBEREND').text()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));$('.NUMBEREND2').html(Number($('.NUMBEREND2').text()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));$('.NUMBERENDMB').html(Number($('.NUMBERENDMB').text()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));$('.NUMBERENDMB2').html(Number($('.NUMBERENDMB2').text()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&,'));});function FFF(product_id,name,url_admin,picture_name,picture_extension){$('#nameStar').html(name)
$("#imgStar").attr("src",url_admin+"/data/img/shop1/product/"+picture_name+"150"+picture_extension);$("#product_id").val(product_id);$("#star_5").click();$("textarea[name=comment]").val('');}
$("#formreview").submit(function(event){event.preventDefault();var XHR_LOGIN=null;var forms=document.querySelectorAll('#formreview');Array.prototype.slice.call(forms).forEach(function(form){if(XHR_LOGIN!=null){XHR_LOGIN.abort()}
if(!form.checkValidity()){event.preventDefault()
event.stopPropagation()}else{$("#modal_formreview_submit").modal('show');$("#modal_formreview_submit").css('z-index',1300);event.preventDefault()}
form.classList.add('was-validated')},false)});$("#submit_confirm_review").on("click",function(event){event.preventDefault();$("form#formreview").submit();$.ajax({type:"POST",url:JS_BASE_URL+"/controller/review.php",data:$('form#formreview').serialize(),success:function(res){var data=JSON.parse(res);if(data.status){$("#modal_formreview_submit").modal('hide');$("#modal_review_order").modal('hide');$.notify("เลือกสำเร็จ",{position:"bottom right",className:"success"});}else{$("#modal_formreview_submit").modal('hide');alert('ไม่สามารถทำรายกาได้ กรุณาลองใหม่ หรือติดต่อผู้ดูแลระบบ00');}},error:function(e){$("#modal_formreview_submit").modal('hide');alert('ไม่สามารถทำรายกาได้ กรุณาลองใหม่ หรือติดต่อผู้ดูแลระบบ');console.log(e);}});});$("#close_formreview").on("click",function(event){event.preventDefault()
$("#modal_review_order").modal('hide');});$("#close_confirm_review").on("click",function(event){$("#modal_formreview_submit").modal('hide');});$("#input_text_search").keypress(function(event){if(event.key=="Enter"){$(".BTN_SUBMIT_SEARCH").click();}});$("#button_search_product").click(function(event){$(".BTN_SUBMIT_SEARCH").click();});var bFbStatus=false;window.fbAsyncInit=function(){FB.init({appId:'814150386485891',cookie:true,xfbml:true,version:'v16.0'});FB.AppEvents.logPageView();};(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}
js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/en_US/sdk.js";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));function statusChangeCallback(response){if(bFbStatus==false){fbID=response.authResponse.userID;if(response.status=='connected'){getCurrentUserInfo(response)}else{FB.login(function(response){if(response.authResponse){getCurrentUserInfo(response)}else{console.log('Auth cancelled.')}},{scope:'email'});}}
bFbStatus=true;}
function getCurrentUserInfo(mode,data){if(mode=='google'||mode=='line'){$.ajax({type:"POST",dataType:'json',url:JS_BASE_URL+'/controller/register.php',data:{firstname:data.first_name,lastname:data.last_name,email:data.email,mode:mode},success:function(msg){window.location.replace(JS_BASE_URL+'/pages/Home.php');},error:function(msg){window.location.replace(JS_BASE_URL+'/pages/Home.php');},});}else{FB.api('/me?fields=id,email,first_name,last_name,picture',function(userInfo){$.ajax({type:"POST",dataType:'json',url:JS_BASE_URL+'/controller/register.php',data:{id:userInfo.id,firstname:userInfo.first_name,lastname:userInfo.last_name,email:userInfo.email,mode:'facebook'},success:function(msg){window.location.replace(JS_BASE_URL+'/pages/Home.php');console.log(msg);},error:function(msg){window.location.replace(JS_BASE_URL+'/pages/Home.php');console.log(msg);},});});}}
function checkLoginState(){FB.getLoginStatus(function(response){statusChangeCallback(response);});}
function fbLogoutUser(){FB.getLoginStatus(function(response){if(response&&response.status==='connected'){FB.logout(function(response){document.location.reload();});}});}
function addCartinput(id,price,input,stock_remain_id,item_id,count,option_id=0,m_option_id=0,m_option_size_id=0,m_option_third_id=0){const mt_option_1=$("#mt_option_1").val()?$("#mt_option_1").val():'';const mt_option_2=$("#mt_option_2").val()?$("#mt_option_2").val():'';const mt_option_3=$("#mt_option_3").val()?$("#mt_option_3").val():'';const option_name_1=$("#m-option-name").val()?$("#m-option-name").val():'';const option_name_2=$("#m-option-size-name").val()?$("#m-option-size-name").val():'';const option_name_3=$("#m-option-third-name").val()?$("#m-option-third-name").val():'';const stock_remain=document.getElementById(stock_remain_id);const item_input=document.getElementById(item_id);if(!parseInt(input)){input=1;}
if(parseInt(input)<=parseInt(stock_remain.value)){var id_product=$.cookie('order')===undefined?null:JSON.parse($.cookie('order'));var count=count?parseInt(count):1
var arr_order={'id':id,'option_id':option_id,'m_option_id':m_option_id,'m_option_size_id':m_option_size_id,'m_option_third_id':m_option_third_id,'mt_option_1':mt_option_1,'mt_option_2':mt_option_2,'mt_option_3':mt_option_3,'option_name_1':option_name_1,'option_name_2':option_name_2,'option_name_3':option_name_3,'quantity':count,'price':price,};if(!id_product){$.cookie('order',JSON.stringify([arr_order]),{path:'/'})}else{let orderTemp=JSON.parse($.cookie('order'))
if(orderTemp.length>0){orderTemp.map((item,index)=>{if(option_id>0){if(item.option_id==option_id){item.quantity=Number(input);}}else{if(item.id==id){item.quantity=Number(input);}}})}
$.cookie('order',JSON.stringify(orderTemp),{path:'/'})}
if(price=='total'){calculate();}
checkCart()}else{document.getElementById(item_id).value=parseInt(stock_remain.value);alert("ของชิ้นสุดท้าย")
let stock_remain_input=parseInt(stock_remain.value);addCartinput(id,price,stock_remain_input,stock_remain_id,item_id,count,option_id=0,m_option_id=0,m_option_size_id=0,m_option_third_id=0);checkCart()}
calculate();}
$(document).ready(function(){$('.TEXTCONFIRMPASSWORD').hide();$('.FBTNPASSWORD').attr("disabled",'disabled');$('.FPASSWORDCONFIRM1').on('input',function(){if($(this).val()===$('.FPASSWORDCONFIRM2').val()){$('.TEXTCONFIRMPASSWORD').hide();$('.FBTNPASSWORD').prop("disabled",false);}else{$('.TEXTCONFIRMPASSWORD').show()}})
$('.FPASSWORDCONFIRM2').on('input',function(){if($(this).val()===$('.FPASSWORDCONFIRM1').val()){$('.TEXTCONFIRMPASSWORD').hide();$('.FBTNPASSWORD').prop("disabled",false);}else{$('.TEXTCONFIRMPASSWORD').show()}})});$('.FBTNPASSWORD').on('click',function(){$('.FBTNPASSWORDTRUE').on('click',function(){let id=$('.Fchange_password').find('input[name="id"]').val();let mode=$('.Fchange_password').find('input[name="mode"]').val();let change_password=$('.Fchange_password').find('input[name="change_password"]').val();$.ajax({type:"POST",url:JS_BASE_URL+'/controller/register.php',data:{id:id,change_password:change_password,mode:mode},success:function(response){window.location.replace(JS_BASE_URL+'/pages/Home.php');},error:function(response){alert('ข้อผิดพลาดทาง Server')},});})})
$(document).ready(function(){$('.EYEPASSWORDCLOSR1').hide()
$('.EYEPASSWORDCLOSR2').hide()});$('.EYEPASSWORDOPEN1').on('click',function(){$('.FPASSWORDCONFIRM1').attr('type','text')
$('.EYEPASSWORDCLOSR1').show()
$('.EYEPASSWORDOPEN1').hide()})
$('.EYEPASSWORDCLOSR1').on('click',function(){$('.FPASSWORDCONFIRM1').attr('type','password')
$('.EYEPASSWORDOPEN1').show()
$('.EYEPASSWORDCLOSR1').hide()})
$('.EYEPASSWORDOPEN2').on('click',function(){$('.FPASSWORDCONFIRM2').attr('type','text')
$('.EYEPASSWORDCLOSR2').show()
$('.EYEPASSWORDOPEN2').hide()})
$('.EYEPASSWORDCLOSR2').on('click',function(){$('.FPASSWORDCONFIRM2').attr('type','password')
$('.EYEPASSWORDOPEN2').show()
$('.EYEPASSWORDCLOSR2').hide()})
function imgError(image){image.onerror="";image.src=JS_BASE_URL+"/public/asset/image/products/no-photo-available.png";return true;}
addAutocompleteAddress();function addAutocompleteAddress(){let ship_country=$("#ship_country").find(":selected").val();if(ship_country=='210'){$.Thailand({database:'../javascript/Thailand/database/db.json',$district:$('#input_sub'),$amphoe:$('#input_address_sub'),$province:$('#select_province_new'),$zipcode:$('#input_address_zip'),});setTimeout(function(){$('#input_address_sub, #input_address_zip').next().next().next().find('.tt-dataset').css('margin-left','-150px');},500);}
let bill_country=$("#bill_country").find(":selected").val();if(bill_country=='210'){$.Thailand({database:'../javascript/Thailand/database/db.json',$district:$('#set-subdistrict-tax'),$amphoe:$('#set-district-tax'),$province:$('#select_bill_province'),$zipcode:$('#input_billaddress_zip'),});setTimeout(function(){$('#set-district-tax, #input_billaddress_zip').next().next().next().find('.tt-dataset').css('margin-left','-150px');},500);}}
$('#ship_country, #bill_country').on('change',function(){console.log(this.value);if(this.value!='210'){$('.tt-dataset').remove();}else{addAutocompleteAddress();}});addAutocompleteAddressProfile();function addAutocompleteAddressProfile(){let ship_country_profile=$("#ship_country_profile").find(":selected").val();if(ship_country_profile=='Thailand'){$.Thailand({database:'../javascript/Thailand/database/db.json',$district:$('#set-subdistrict-profile'),$amphoe:$('#set-district-profile'),$province:$('#select_province_profile_new'),$zipcode:$('#input_numport'),});setTimeout(function(){$('#input_numport, #set-district-profile').next().next().next().find('.tt-dataset').css('margin-left','-150px');},500);}
let ship_tax_country=$("#ship_tax_country").find(":selected").val();if(ship_tax_country=='Thailand'){$.Thailand({database:'../javascript/Thailand/database/db.json',$district:$('#set-subdistrict-tax-profile'),$amphoe:$('#set-district-tax-profile'),$province:$('#select_province1_new'),$zipcode:$('#input_numport_tax'),});setTimeout(function(){$('#input_numport_tax, #set-district-tax-profile').next().next().next().find('.tt-dataset').css('margin-left','-150px');},500);}}
$('#ship_country_profile, #ship_tax_country').on('change',function(){console.log(this.value);if(this.value!='Thailand'){$('.tt-dataset').remove();}else{addAutocompleteAddressProfile();}});function setDistrict(povince_code,tax){if(povince_code){$(".set-district"+tax).html("");$('.set-district'+tax).append("<option>เลือก</option>");$(".set-subdistrict"+tax).html("");$('.set-subdistrict'+tax).append("<option>เลือก</option>");$.ajax({type:"GET",url:JS_BASE_URL+"/controller/Home.php?type=get_district&povince_code="+povince_code,success:function(res){let data_district=$.parseJSON(res);if(data_district.length>0){data_district.map((item,index)=>{$(".set-district"+tax).append($("<option></option>").attr("value",item.label_th).attr("data-code",item.code).text(item.label_th));});}}});}}
function setSubdistrict(district_code,tax){if(district_code){$(".set-subdistrict"+tax).html("");$('.set-subdistrict'+tax).append("<option>เลือก</option>");$.ajax({type:"GET",url:JS_BASE_URL+"/controller/Home.php?type=get_subdistrict&district_code="+district_code,success:function(res){let data_subdistrict=$.parseJSON(res);if(data_subdistrict.length>0){data_subdistrict.map((item,index)=>{$('.set-subdistrict'+tax).append($("<option></option>").attr("value",item.sub_district_name_th).attr("data-postcode",item.post_code).text(item.sub_district_name_th));});}}});}}
function setPostcode(postcode,tax){$(".set-postcode"+tax).val(postcode);}