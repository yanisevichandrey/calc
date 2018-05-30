  function writeInput(el){
    document.form.textview.value = document.form.textview.value + el;
  }

  function equal(){
    var result = document.form.textview.value;
    if(result){
      document.form.textview.value = eval(result);
    }
  }

  function back(){
    var result = document.form.textview.value;
    document.form.textview.value = result.substring(0,result.length-1);
  }

  function clean(){
    document.form.textview.value = '';
  }
