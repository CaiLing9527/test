(function(global){
    // 方法暴露最好通过window.XX形式暴露,通过return 的形式暴露不太行
    let date="我是大帅比";
    function foo(){
        console.log(`module01,foo()${date}`)
    }
    function bar(){
        console.log(`module01,bar()${date}`)
    }
    window.module01={foo,bar}
}(window))