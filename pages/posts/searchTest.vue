<template>
  <div class="customer_wrap">
    <div class="qna_main">
      <!--qna 검색 -->
      <PubMoCustomerTop
        :class="{menuHide:isResult}"
        :qna-class="'qna'"
        :search-lists="searchLists"
        :qnasorting-lists="qnasortingLists"
        @qnaBtns="sortingQna"
        @resultKeyword="inputKeyword"
      />
      <!-- 검색결과전 -->
      <!--qna list -->
      <PubMoCustomerQna
        v-if="!isResult"
        :qna-lists="qnaLists"
        @accrToggle="qnaListSet"
      />
      <!-- 검색결과 -->
      <div v-if="isResult" :class="['sorting_tap_list', {nolist:isResult && qnaSearchList.length === 0}]">
        <div v-if="isResult && qnaSearchList.length === 0" class="nolist_count">
          전체 <em>{{ qnaSearchList.length }}</em>개
        </div>

        <div v-else class="sorting_tap_list_in">
          <button v-for="(item, index) in searchResult" :key="index" :class="['btn_linebar',{active:item.active}]">
            {{ item.text }}({{ item.count }}개)
          </button>
        </div>
      </div>
      <!--qna list -->
      <PubMoCustomerQnaSearch
        v-if="isResult"
        :qna-lists="qnaSearchList"
        @accrToggle="qnaListSet"
      />
      <div v-if="(isResult && qnaSearchList.length > 0) || (!isResult &&qnaLists.length > 0)" class="btnsWrap type2">
        <button class="btn-lineDefault big more">
          <span>더보기(1/13)</span>
        </button>
      </div>
      <div v-if="isResult && qnaSearchList.length === 0" class="faq_none">
        <p>
          <strong>‘<em>{{ searchKeyword }}</em>’관련된 FAQ를 찾을 수 없습니다.</strong>
          정확한 검색어 인지 확인하시고 <br>다시 검색해 보세요.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchKeyword: null,
      isResult: false,
      searchLists: [
        { text: '배송 현황' },
        { text: '주문 취소' },
        { text: '회원정보' },
        { text: '반품' },
        { text: '이벤트 당첨' }
      ],
      searchResult: [
        { text: '전체', count: 32, active: true },
        { text: '회원/로그인', count: 23, active: false },
        { text: '세금계산서/증빙서류', count: 1, active: false },
        { text: '주문/결제', count: 30, active: false },
        { text: '이벤트', count: 1, active: false }
      ],
      qnasortingLists: [
        { text: '주문/결제', class: 'order', active: true },
        { text: '배송 관련', class: 'delivery', active: false },
        { text: '취소/교환/\n반품', class: 'cancel', active: false },
        { text: '적립금/쿠폰', class: 'point', active: false },
        { text: '회원/로그인', class: 'login', active: false },
        { text: '이벤트/기타', class: 'event', active: false },
        { text: '세금계산서/\n증빙서류', class: 'document', active: false },
        { text: '상품 문의', class: 'qna', active: false },
        { text: '사이트 이용', class: 'site', active: false },
        { text: '모바일', class: 'mobile', active: false },
        { text: '멤버십(회원등급제)', class: 'member', active: false }
      ],
      qnaLists: [
        { question: '회원 아이디와 비밀번호를 잊어버렸어요.', answer: '[마이페이지 → 회원정보] 페이지에서 수정 및 탈퇴가 가능합니다.', category: '회원/로그인' },
        { question: '반품 신청 했는데 카드취소는 언제되는 건가요?', answer: '[마이페이지 → 회원정보] 페이지에서 수정 및 탈퇴가 가능합니다.', category: '주문/결제' },
        { question: '회원가입은 어떻게 하나요?', answer: '[마이페이지 → 회원정보] 페이지에서 수정 및 탈퇴가 가능합니다.', category: '주문/결제' },
        { question: '회원 정보 수정 및 회원 탈퇴는 어떻게 하나요?', answer: '[마이페이지 → 회원정보] 페이지에서 수정 및 탈퇴가 가능합니다.', category: '주문/결제' },
        { question: '결제 PLUG-IN 설치가 자동으로 안돼요. 어떻게', answer: '[마이페이지 → 회원정보] 페이지에서 수정 및 탈퇴가 가능합니다.', category: '회원/로그인' }
      ],
      qnaSearchList: []

    };
  },
  methods: {
    sortingQna (type, text, index) {
      console.log(type, text, index);
      if (type === 'btnsSoarting') {
        this.qnasortingLists.forEach((item, i) => {
          index === i ? item.active = true : item.active = false;
        });
      }
    },
    qnaListSet (index) {
      console.log(this.qnaLists[index]);
    },
    pageOption (pageName) {
      console.log(pageName);
    },
    inputKeyword (text) {
      this.qnaSearchList = [];
      this.searchKeyword = text;
      this.isResult = true;
      const _qnaLists = JSON.parse(JSON.stringify(this.qnaLists));
      if (text && text !== '') {
        this.qnaSearchList = _qnaLists.filter((item, i) => {
          if (item.question.includes(text) || item.answer.includes(text)) {
            item.question = item.question.replaceAll(text, `<em>${text}</em>`);
            item.answer = item.answer.replaceAll(text, `<em>${text}</em>`);
          } else {
            return null;
          }
          return item;
        });
      } else {
        alert('검색어를 입력해주세요');
        this.isResult = false;
        this.qnaSearchList = [];
      }
    }
  }
};
</script>

<style>
  /* 마이 페이지 레이아웃 */
/* .mywrap{
    display:flex; flex-direction: column; height:100%; font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif; line-height:140%; font-weight:300; font-size:13px;
    button, input, select{font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif; font-weight:500; font-size:100%;}
    em{font-style:normal;}
    .myfooter{margin-top:auto}
    *{box-sizing: border-box;}
  }
.commonwrap{
  *{box-sizing: border-box;}
  display:flex; flex-direction: column; height:100%;font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif;
  button, input, select{font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif; font-weight:500;}
  em{font-style:normal;}
} */

/* 버튼 공통 */
.btn_common{display:inline-block;min-width:52px; padding:0 14px;; height:36px; line-height:36px; background:#141415; color:#fff; font-weight:500; text-align:center;border-radius:4px;}
.btn_infopop{padding:0; font-size: 13px; color:#5A5A5A; padding-left:20px; background: url('/welstory/images/mypage/icon_infopop.png') no-repeat left center/16px;}
.btn-bullet{position: relative; color:#727272; padding:0 11px 0 0; font-weight: 300;}
.btn-bullet:after{content:""; width:5px; height:5px; border:solid 1px #727272; border-left:none; border-bottom:none;transform: rotate(135deg);position: absolute; right:0; top:5px}
.btn-bullet.up:after{transform: rotate(-45deg); top:8px}
.btn-bullet.right:after{transform: rotate(45deg); top:7px;}
.btn-bullet.right.black:after{border-color:#141415; }
.btn-bullet.right.black{color:#141415; font-weight:500;}
.btn-lineDefault{width:100%;height:36px; border:solid 1px #D3D3D3; text-align: center;  border-radius:4px;margin:0px 0 10px 0;}
.btn-lineDefault:nth-last-of-type(1){margin:0px 0 0px 0;}
.btn-lineDefault.big{height:46px; line-height:46px;}
.btn-lineDefault.big.more span{font-size: 14px; font-weight:500;}
.btn-lineDefault.big.more span:after{content:"";display:inline-block;width:5px; height:5px;margin-left:10px; position: relative; top:-3px; border:solid 1px #141415; border-left:none; border-bottom:none;transform: rotate(135deg);}
.btn-fixed{height:56px; width:100%; font-size: 16px; line-height:54px; text-align: center;}
.btn-fixed.type1{color:#fff; background: #141415;}
.btn-fixed.type2{background-color:#6C60FF; color:#fff}
.btn-fixed.small{width:120px; flex-shrink: 0;}
.btn-orderchange{display:inline-block; width:44px; height:30px; border:solid 1px #727272; color:#141415; font-size: 13px; text-align: center; line-height:28px;  border-radius:4px;font-weight:500;}
.btn-orderchange.del{background:#727272; color:#fff;}
.btn_zip{width:110px; height:36px; line-height:34px; border-radius:4px; border:solid 1px #141415; position: absolute; right:0; top:0}
.btn_icontip{width:18px; height:18px;background:url('/welstory/images/mypage/icontip.png') no-repeat left top; vertical-align: middle;}
.btn_linebar{display:inline-block; padding:0 10px; position: relative; color:#727272; font-weight:300 !important;}
.btn_linebar.active{color: #141415;font-weight:500 !important;}
.btn_linebar:after{display:block; content:''; width:1px; height:16px; background: #D3D3D3;position: absolute; left:0; top:3px}
.btn_linebar:nth-of-type(1){padding-left:0}
.btn_linebar:nth-of-type(1):after{display:none}
.btnsWrap{width:100%; margin:30px 0;}
.btnsWrap.type2{width:calc(100% - 40px);margin:30px 20px 50px 20px}
.grayBox{padding:14px; background:#F7F7F7}
.grayBox .typetit{display:block; margin-bottom:15px; font-weight: 500;}
.bulletList li{position: relative;padding-left: 9px; color:#5A5A5A; font-size:12px}
.bulletList li:before {content: "";position: absolute;top:8px;left: 0;display: inline-block;width: 3px; height: 3px;border-radius: 3px;background: #5A5A5A;}
.bulletList.type2 li{margin-top:14px; font-size: 14px;}
.bulletList.type2 li:nth-of-type(1){margin-top:0px;}
.myorderNone{padding: 30px 0 0 0;font-size: 14px; text-align: center; line-height:22px; font-weight: 500;}
.myorderNone > p{background: url('/welstory/images/mypage/icon_myorder_nolist.png') center top/60px no-repeat;padding-top: 66px;}
.font-normal.myorderNone{font-weight:300;}

/* // 레이어 팝업 버튼 없을때 스크롤 */
.btngroupnone .layerPopupWrap__content{height:calc(100% - 58px)}
.fullpage .layerPopupWrap{top:0px;right:0px;bottom:0px; left:0px; width:100%;}
.fullpage.btnfix .layerPopupWrap__content{height:calc(100% - 114px)}
.fullpage.btnfix .layerPopupWrap__footer__buttonWrap{padding:0}
/* // form 공통 */
.pageTitle{margin-bottom:20px; font-size:18px; font-weight:700;}
.formItem > .labelText{display:block; margin-bottom:10px; font-size:14px; font-weight:500;}
.formItem > .labelText.essential:after{display:inline-block; content:"*"; color:#F22214}
.formItem + .formItem{margin-top:20px;}
.formBox + .formBox{margin-top:10px;}
.formBox input[type="text"]{width:100%; height:46px; line-height:44px;}
.formBox .selectStyle01{background-color:#fff;height:46px; line-height:44px;}
.formBtns{margin-top:30px;display:flex; justify-content: space-between;}
.formBtns > button{width:calc(50% - 4px)}
.formBtns.full{margin-top:20px;}
.formBtns.full > button{width:100%; }
.formBtns.small{justify-content:center;}
.formBtns.small > button{width:156px;}
.emailbox{display:flex; justify-content: space-between; align-items: center;}
.emailbox .formtext{width:27px; flex-shrink:0; text-align: center;}
.emailbox  + .emailbox {margin-top:10px;}
.radioGroup .radiolist+.radiolist{margin-top:14px;}
.radioGroup.lineBot{border-bottom:solid 1px #141415; padding-bottom:20px; margin-bottom:20px;}
.radioGroup{margin-top:14px}
.radioGroup label{margin-right:20px}
.formGroup.lineTop{padding-top:20px; border-top:solid 1px #141415}
.loginGuideText.sub{letter-spacing: -.5px;}
.checkGroup{display: flex; justify-content:space-between; align-items: center;}
.checkGroup .inputCheckbox + label.text{font-weight:500}
.checkGroup  .btn-bullet{font-weight: 500; color:#141415;}
.checkGroup  .btn-bullet:after{border-color:#141415;}
.checkGroup + .checkGroup{margin-top:14px;}
.formTitle{margin:30px 0 10px 0;justify-content: space-between;display:flex;}
.formTitle > span{font-weight: 500;font-size: 12px;}
.formTitle > span em{ color:#F22214;}
.formTitle > span:nth-of-type(1){font-weight:700; font-size:16px}
.formBox{position: relative;}
.formBox.textsite{position: relative;}
.formBox.textsite .inputText{padding-left:54px;}
.formBox.textsite:before{content:"http://"; display:block; width:42px; position: absolute; left:20px; top:12px;}
.formBox.idform{padding-right:86px; position: relative;}
.formBox.idform .btn_id{width:80px; height:46px; border:solid 1px #141415; border-radius:4px; text-align: center; position: absolute; right:0; top:0}
.formBox.mulitform{display:flex; justify-content: space-between;}
.formBox.mulitform .inputText{width:calc(50% - 5px)}
.formBox.subguide{position: relative;}
.formBox.subguide .subguidetext{position: absolute; right:0; top:0; font-size: 12px; color:#727272;top:-30px;}
.formBox .textAgreeBox{border:1px solid #D3D3D3; height:90px;overflow: hidden;}
.formBox .buttonArea{text-align: right; margin-top:10px}
.formBox .buttonArea .btn-bullet{color:#141415; font-weight:500}
.formBox .buttonArea .btn-bullet:after{border-color:#141415}
.formBox .daybox .box_search{padding:0;background:transparent; margin:0}
.formBox .daybox .box_search .text{display:none}
.formBox .daybox .box_search > .right{padding:0; margin:0}
.formBox .box_search > .right .calendar .cal-inner{width:100%;}
.formBox .limitNum{ color:#727272; font-size: 12px; position:absolute;right:0; top:-30px}
.tooltip_form{position: relative;}
.formBox .btn_icontip{margin-left:6px}
.form_tipcon{border:solid 1px #141415; padding:14px 36px 14px 14px; font-size: 12px; color:#5A5A5A; position: absolute; left:107px; top:-5px; background:#fff;box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.5);}
.form_tipcon .layerPopupWrap__header__closeButton{right:10px; top:10px; position: absolute; width:16px; height:16px; background-size:100%;}

/* // input file texttype */
.filebox{position: relative; padding-right:86px;}
.filebox input, .filebox label{box-sizing:border-box;}
.filebox .upload-name {display: inline-block;height: 46px; padding: 0 10px; vertical-align: middle; border: 1px solid #D3D3D3;width: 100%;color: #141415;}
.filebox label{display:block;color: #fff; width:80px; height: 46px; line-height:44px; color:#141415;background-color: #fff;cursor: pointer;
border-radius: 4px; border:solid 1px #141415; text-align: center; position: absolute; right:0; top:0; font-size:14px; font-weight:500; }
.filebox input[type="file"] {position: absolute;width: 0; height: 0;padding: 0;overflow: hidden;border: 0;}
.fileguidetext{color:#727272; font-size:12px; margin-top:10px}
.textareaBox{position: relative;height:120px}
.textareaBox .textareaStyle01{height:120px}

.agreeconBox{margin-top:30px;}
.agreeconBox .agreeTitle{display:flex;justify-content: space-between;align-items:center;padding-bottom:14px;margin-bottom:20px; border-bottom:solid 1px #D3D3D3}
.agreeconBox .agreeTitle strong em{color:#F22214}
.agreeconBox .agreeTitle .btn-bullet{color:#141415}
.agreeconBox .agreeTitle .btn-bullet:after{border-color:#141415}
.agreePar+.agreePar{margin-top:14px}
.agreeCheck{margin-bottom:14px;}
.agreePar.type2{font-size: 12px; color:#5A5A5A; line-height:20px}

 /* 날짜 조회 */
.box_search{padding:20px; margin-bottom:30px; background:#F7F7F7}
.box_search .type_button {display: flex; justify-content: flex-start; padding-top: 5px;}
.box_search .type_button .inputbtns{margin-right:6px}
.box_search .type_button .inputbtns:nth-last-of-type(1){margin-right:0px}
.box_search .type_button label {display:inline-block;height: 30px; line-height:28px; padding: 0 11px; border: 1px solid #DFDFDF; border-radius: 36px; background: #fff;}
.box_search .type_button label::before {display: none !important;}
.box_search .type_button label:last-child {margin-right: 0;}
.box_search .type_button label span {padding-left: 0 !important;}
.box_search .type_button.radio_box input[type='radio']:checked + label {background:#141415; border-color:#141415; color:#fff}
.box_search .text {margin-top: 10px; font-size: 12px;}
.box_search .radio_box input[type='radio'] {position: absolute;width: 1px; height: 1px;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;overflow: hidden; display: none;}
.box_search > .right{padding-right:58px; margin-top:14px; position:relative}
.box_search > .right .btn_common{position:absolute; right:0; top:0}
.box_search > .right .calendar {display:flex;min-width:auto}
.box_search > .right .calendar .bar{width:18px; flex-shrink:0; text-align: center; line-height:36px;}
.box_search > .right .calendar .cal-inner{width:calc(50% - 10px); position:relative;}
.box_search > .right .calendar .cal-inner:after{content:""; display:block; width:20px; height:20px; background:#fff url('/welstory/images/mypage/icon_cal.png') left center no-repeat; position: absolute; right:10px;top:8px;}
.box_search > .right .calendar input, .box_search .right .calendar input.active{width:100%;}
.box_search > .right .calendar input{background:#fff}

.btn-group{display:flex; flex-wrap: wrap;position: relative;}
.btn-group > .btn-mydetail{flex:1; height:100%; line-height:34px;color:#141415;}
.btn-group.type2 .btn-mydetail{border-radius:4px 0 0px 4px;}
.btn-group.type2 .btn-mydetail+.btn-mydetail{border-radius:0px 4px 4px 0px; border-left:none}
.btn-group.type4 .btn-mydetail:nth-of-type(1){border-radius:4px 0 0px 4px;}
.btn-group.type4 .btn-mydetail:nth-of-type(2){border-radius:0; border-left:none; border-right:none}
.btn-group.type4 .btn-mydetail:nth-of-type(3){border-radius:0px 4px 4px 0px; }
.btn-group.type4 .btn-mydetail:nth-of-type(4){width:100%; flex:auto}
.btn-group > .btn-mydetail.disable{border-color: #BDBDBD; color:#BDBDBD;pointer-events:none}

.container{
    flex:1;

}
.customerTitle{display:flex;justify-content: space-between; align-items: center; padding:0 20px; margin:30px 0 17px 0;}
.customerTitle.type2{margin:30px 0 10px 0;}
.customerTitle > strong{font-size: 18px;}
.customerTitle > .btn-bullet{color:#141415}
.customerTitle > .btn-bullet:after{border-color:#141415}
.customer_search{margin:0 20px 30px 20px; padding:20px 20px 14px 20px; background-color:#F7F7F7; border-radius:8px;}
.serarchinput{height:46px;padding-right:46px; line-height:44px;border:none; border-bottom:solid 2px #141415;position: relative;}
.serarchinput > input[type="text"]{border:none; width:100%; height:100%; background:transparent; font-weight:300}
.serarchinput .btn_search, .serarchinput .btn-searchDel{width:18px; height:18px; position: absolute;top:10px }
.serarchinput .btn_search{background:url("/welstory/images/mypage/icon_mysearch.png") 0 0/18px; right:0;}
.serarchinput .btn-searchDel{right:28px;}
.customer_search .btn_reset{width:15px; height:18px;background:url("/welstory/images/mypage/icon_reset.png") 0 0; width:15px; flex-shrink:0; margin-left:20px; position:relative; top:10px;display:none}
.search_area.inText{display:flex; justify-content: space-between;}
.search_area.inText  .btn_reset{display:block}
.search_area.inText .serarchinput{flex:1}
.qna_soarting{margin:14px 0 0px 0; display:flex; flex-wrap:wrap; margin-right:-8px}
.qna_soarting .btn_qna{min-width:47px; height:30px;padding:0 12px; border-radius: 24px; border:solid 1px #D3D3D3; background-color:#fff; font-size:12px; font-weight:300; text-align:center; line-height:28px;margin:0 6px 6px 0;}
.qna_lists_wrap{margin-bottom:30px; padding:0 0 0 20px; width:100%; overflow: hidden; overflow-x:scroll}
.qna_lists{display:flex; width:max-content;;}
.qna_lists .btn_qna_list{width:70px; flex-shrink:0;padding-top:76px;text-align: center;margin-right:10px; text-align: center;position: relative;}
.qna_lists .btn_qna_list:before{content:""; display:block; width:70px; height:70px; background-size:70px; background-position:center top; background-repeat:no-repeat;background-size:70px; position: absolute; left:0; top:0;}
.btn_qna_list{cursor: pointer;}
.btn_qna_list em{font-style: normal;font-size:12px; font-weight:300; white-space: pre-wrap;}
.btn_qna_list.active em{color:#6C60FF}
.btn_qna_list.order:before{background-image:url('/welstory/images/customer/qnaicon1.png')}
.btn_qna_list.delivery:before{background-image:url('/welstory/images/customer/qnaicon2.png')}
.btn_qna_list.cancel:before{background-image:url('/welstory/images/customer/qnaicon3.png')}
.btn_qna_list.point:before{background-image:url('/welstory/images/customer/qnaicon4.png')}
.btn_qna_list.login:before{background-image:url('/welstory/images/customer/qnaicon5.png')}
.btn_qna_list.event:before{background-image:url('/welstory/images/customer/qnaicon6.png')}
.btn_qna_list.document:before{background-image:url('/welstory/images/customer/qnaicon7.png')}
.btn_qna_list.qna:before{background-image:url('/welstory/images/customer/qnaicon8.png')}
.btn_qna_list.site:before{background-image:url('/welstory/images/customer/qnaicon9.png')}
.btn_qna_list.mobile:before{background-image:url('/welstory/images/customer/qnaicon10.png')}
.btn_qna_list.member:before{background-image:url('/welstory/images/customer/qnaicon11.png')}
.btn_qna_list.order.active:before{background-image:url('/welstory/images/customer/qnaicon1_active.png')}
.btn_qna_list.delivery.active:before{background-image:url('/welstory/images/customer/qnaicon2_active.png')}
.btn_qna_list.cancel.active:before{background-image:url('/welstory/images/customer/qnaicon3_active.png')}
.btn_qna_list.point.active:before{background-image:url('/welstory/images/customer/qnaicon4_active.png')}
.btn_qna_list.login.active:before{background-image:url('/welstory/images/customer/qnaicon5_active.png')}
.btn_qna_list.event.active:before{background-image:url('/welstory/images/customer/qnaicon6_active.png')}
.btn_qna_list.document.active:before{background-image:url('/welstory/images/customer/qnaicon7_active.png')}
.btn_qna_list.qna.active:before{background-image:url('/welstory/images/customer/qnaicon8_active.png')}
.btn_qna_list.site.active:before{background-image:url('/welstory/images/customer/qnaicon9_active.png')}
.btn_qna_list.mobile.active:before{background-image:url('/welstory/images/customer/qnaicon10_active.png')}
.btn_qna_list.member.active:before{background-image:url('/welstory/images/customer/qnaicon11_active.png')}
/* qna */
.qna_lists_wrap.qna{ overflow-x: hidden;width:100%;padding-right:20px;; }
.qna_lists_wrap.qna .qna_lists{flex-wrap:wrap;width:100%;border:solid 1px #EAEAEA}
.qna_lists_wrap.qna .btn_qna_list em{font-size: 13px;}
.qna_lists_wrap.qna .btn_qna_list::before{display: none;}
.qna_lists_wrap.qna .btn_qna_list{padding:0; width:calc(33.3% + 1px);height:52px;margin:-1px 0 -1px -1px; border:solid 1px #EAEAEA;border-top:none }
.qna_lists_wrap.qna .btn_qna_list:nth-of-type(3n){border-right:none}
.qna_lists_wrap.qna .btn_qna_list.active{background:#141415}
.qna_lists_wrap.qna .btn_qna_list.active em{color:#fff}

.customer_notice{padding:0 20px;}
.customer_list{border-top:solid 1px #141415}
.cusdtomer_accordion{border-bottom:solid 1px #EAEAEA}
.accordion_q{height:56px; padding:0 10px 0 23px; display:flex; align-items: center;position: relative;}
.accordion_q span{width:100%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
.accordion_q:before,.accordion_q:after{position: absolute; }
.accordion_q:before{content:""; display: block; width:13px; height:26px; background:url('/welstory/images/customer/icon_q.png') no-repeat; left:0; top:21px;}
.accordion_q:after{content:""; display: block;  width:5px; height:5px; border:solid 1px #727272; border-left:none; border-bottom:none;transform: rotate(135deg); right:0; top:24px;}
.accordion_a{padding:14px; background-color: #F7F7F7; margin-bottom:14px; display:none}
.cusdtomer_accordion.open .accordion_a{display:block}
.cusdtomer_accordion.open .accordion_q:after{transform: rotate(-45deg); top:26px}
.cusdtomer_accordion.open .accordion_q{font-weight:500}
.customer_info{padding:30px  20px;background-color: #F7F7F7;margin:30px 0 40px 0;}
.customer_info_con{display:flex; justify-content: space-between; align-items: center;}
.customer_info_con .customer_phone strong{display:block;margin-top:10px; font-size: 18px;}
.customer_info .bulletList li:before{top:9px}
.customer_info_btns{margin-top:20px; display:flex; justify-content: space-between;}
.customer_info_btns .btn_info{width:calc(50% - 4px); height:36px; line-height:34px; text-align: center; border:solid 1px #7A7A7A; border-radius:4px;background:#fff}

.cs_list_item{padding:12px 0; border-bottom:solid 1px#EAEAEA}
.lsit_con, .lsit_date{display:block;}
.lsit_date{font-size: 12px; color:#727272; margin-top:5px;}
.customer_event_list{margin-top:40px;}
.ing_event_list{margin-top:40px; border-top:solid 10px #EAEAEA;}
.ing_event_list .customerTitle{margin-top:40px; }
.event_swiper{padding:0 20px; height: 184px; margin-bottom:50px; position: relative;}
.event_swiper_box{width:100%; height:100%; overflow: hidden;border-radius:8px;}
.event_swiper_box .swiper-slide{ border-radius:8px;}
.event_swiper_box .swiper-slide img{width:100%; height:100%;}
.event_swiper .swiper-pagination-fraction {width: 68px;height: 22px; border-radius: 8px 0 8px 0;right:20px;left:auto;bottom:0px;background: rgba(20, 20, 21, .45);color: #fff;font-weight: 300; font-size: 12px;line-height:22px; text-align: right; padding-right:14px}
.event_swiper .swiper-pagination-current {font-weight: 700;}
.event_swiper .btn_swiper_control{width:7px; height:12px; background:url('/welstory/images/customer/btn_swiperStop.png') no-repeat; position: absolute; right:74px; bottom:3px; z-index:99;}
.qna_main{margin-top:30px;}
.sorting_tap_list{padding:0px 0 14px 20px; width: 100%;overflow: hidden;overflow-x:scroll;}
.sorting_tap_list_in{width:max-content}
.keyword_label{display:inline-block;height:20px;padding:0 4px;border:solid 1px #141415; font-size: 12px;  line-height:18px;position: relative; top:10px}
.faq_none{color:#5A5A5A; text-align: center; margin:30px 0 50px 0;}
.faq_none p{padding-top:86px;background:url('/welstory/images/mypage/icon_none.png') no-repeat center top}
.faq_none p strong{display: block; margin-bottom:14px; color:#141415; font-size:16px; font-weight: 500;}
.faq_none p strong em{color:#6C60FF}
.faq_none.color_b{color:#141415}
.soarting_tap_list.nolist{overflow-x: hidden;}
.nolist_count em{font-weight: 500;}
.menuHide .qna_lists_wrap.qna{display:none}
.accordion_q span em{color:#6C60FF}

.notice_title{margin:30px 0 14px 0; padding:0 20px; font-weight: 500; font-size:16px;}
.notice_title > span{display:block; font-weight:300; font-size:12px;}
.notice_content{border-top:solid 1px #EAEAEA;border-bottom:solid 1px #EAEAEA; padding:20px}

/* // 1:1문의 */
.regist_main{padding:0 20px 50px 20px;}
.formBox .selectStyle01 + .selectStyle01{margin-top:10px}
.formBox .addCheckBox{margin-top:10px;}
.regist_main .textareaBox{height:200px}
.regist_main  .textareaBox .textareaStyle01{height:200px}
.formBox .formItem{margin-top:10px;}
.selectPdtlist{margin-top:10px; border:solid 1px #EAEAEA; display:flex;padding:14px; position: relative;}
.selectPdtlist .pdtimg{width:90px; height:90px; margin-right:14px;flex-shrink: 0; border:solid 1px #EAEAEA; border-radius:6px; overflow: hidden; align-items: flex-start;}
.selectPdtlist .pdtimg img{width:90px; height:90px; }
.selectPdtlist .pdtcon > span{display:block; font-weight:500;}
.selectPdtlist .pdtcon > span:nth-last-of-type(1){font-weight:300; margin-top:5px; font-size: 12px;}
.selectPdtlist .pdtcon > span strong{font-size:14px;}

.selectPdtlist .pdtcon{flex:1}
.selectPdtlist .pdtcon em{font-style: normal;}
.selectPdtlist .pdtcon .pdt_name{font-size: 13px;}
.selectPdtlist .pdtcon >strong{display:block; margin-bottom:4px}
.selectPdtlist .pdtcon .option_text, .selectPdtlist .pdtcon .count_text{display:block; font-size: 12px; color:#5A5A5A;}
.selectPdtlist .pdtcon .layer_cost{text-align: right; font-size: 12px;}
.selectPdtlist .pdtcon .layer_cost strong{font-size: 14px; }
.pdtlayer_close{width:12px; height:12px; background:url('/welstory/images/customer/icon_x.png') no-repeat; position: absolute; right:14px; top:14px;}

.customer_pdt_layer .box_search{margin:0 -20px}
.pdt_result_list{margin-top:30px}
.pdt_result_count{margin-bottom:14px}
.pdt_result_count em{font-style: normal; font-weight:500;display:inline-block; margin-left:3px}
.pdt_list_item{border:solid 1px #EAEAEA}
.pdt_list_item + .pdt_list_item{margin-top:20px}
.pdt_list_item.active{border-color:#6C60FF}
.pdt_order_info{padding:14px 14px 14px 46px; background:#F7F7F7; position: relative;}
.pdt_order_info > span{display:block;}
.pdt_order_info .inputRadio+label{position: absolute; left:14px; top:16px}
.pdt_list_item .selectPdtlist{border:none;}
.pdt_no_count{margin-top:30px; border-bottom:solid 1px #141415; padding-bottom:14px;}
.pdt_no_count em{font-weight:500;font-style: normal; display:inline-block; margin-left:3px}
</style>
