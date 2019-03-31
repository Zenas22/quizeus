$(document).ready(function() {
  $("#quizeus").submit(function(event){
    event.preventDefault();

      var moja = parseInt($("input:radio[name=moja]:checked").val());
      var mbili = parseInt($("input:radio[name=mbili]:checked").val());
      var tatu = parseInt($("input:radio[name=tatu]:checked").val());
      var nne = parseInt($("input:radio[name=nne]:checked").val());
      var tano = parseInt($("input:radio[name=tano]:checked").val());
      var sita = parseInt($("input:radio[name=sita]:checked").val());
      var saba = parseInt($("input:radio[name=saba]:checked").val());
      var nane = parseInt($("input:radio[name=nane]:checked").val());
      var tisa = parseInt($("input:radio[name=tisa]:checked").val());
      var kumi = parseInt($("input:radio[name=kumi]:checked").val());
      var kumi1 = parseInt($("input:radio[name=kumi1]:checked").val());
      var kumi2 = parseInt($("input:radio[name=kumi2]:checked").val());
      var kumi3 = parseInt($("input:radio[name=kumi3]:checked").val());
      var kumi4 = parseInt($("input:radio[name=kumi4]:checked").val());
      var kumi5 = parseInt($("input:radio[name=kumi5]:checked").val());
      var kumi6 = parseInt($("input:radio[name=kumi6]:checked").val());
      var kumi7 = parseInt($("input:radio[name=kumi7]:checked").val());
      var kumi8 = parseInt($("input:radio[name=kumi8]:checked").val());
      var kumi9 = parseInt($("input:radio[name=kumi9]:checked").val());
      var ishirini = parseInt($("input:radio[name=ishirini]:checked").val());

      var total = parseInt(moja + mbili + tatu + nne + tano + sita + saba + nane + tisa + kumi + kumi1 + kumi2 + kumi3 + kumi4 + kumi5 + kumi6 + kumi7 + kumi8 + kumi9 + ishirini);
      
